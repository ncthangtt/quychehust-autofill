/* MS Forms Auto Fill – content script
 * Tìm từng câu hỏi trên trang, so khớp gần đúng với answerKey,
 * rồi chọn đáp án giống nhất. KHÔNG tự bấm Nộp bài.
 */
(() => {
  'use strict';
  if (window.__msfAutoFillLoaded) return;
  window.__msfAutoFillLoaded = true;

  const KEY = (typeof window.answerKey !== 'undefined' && window.answerKey) ||
              (typeof answerKey !== 'undefined' ? answerKey : []);

  const Q_THRESHOLD = 0.5;   // điểm tối thiểu để coi là khớp câu hỏi
  const OPT_MIN = 0.3;       // điểm tối thiểu để chọn đáp án
  const OPT_SURE = 0.6;      // trên mức này = chắc chắn (xanh)

  // ---------- Chuẩn hoá & so khớp ----------
  function norm(s) {
    return (s || '')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[đĐ]/g, 'd')
      .toLowerCase()
      .replace(/≥/g, ' >= ').replace(/≤/g, ' <= ')
      .replace(/(\d)[.,](\d)/g, '$1_$2')        // 3,2 == 3.2
      .replace(/[^a-z0-9_%>=<]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function cleanQuestion(s) {
    return (s || '')
      .replace(/^\s*(câu|cau|question)?\s*\d+\s*[.):\-]\s*/i, '')
      .replace(/\s*\*\s*$/, '')
      .replace(/\(\s*\d+\s*(điểm|diem|points?)\s*\)/gi, '')
      .trim();
  }
  function grams(s, n = 3) {
    const t = ' ' + s + ' ', out = new Map();
    for (let i = 0; i <= t.length - n; i++) {
      const g = t.slice(i, i + n);
      out.set(g, (out.get(g) || 0) + 1);
    }
    return out;
  }
  function dice(a, b) {
    let inter = 0, sa = 0, sb = 0;
    for (const v of a.values()) sa += v;
    for (const v of b.values()) sb += v;
    for (const [g, v] of a) if (b.has(g)) inter += Math.min(v, b.get(g));
    return sa + sb ? (2 * inter) / (sa + sb) : 0;
  }
  function tokenDice(a, b) {
    const A = new Set(a.split(' ').filter(Boolean));
    const B = new Set(b.split(' ').filter(Boolean));
    if (!A.size || !B.size) return 0;
    let inter = 0;
    for (const t of A) if (B.has(t)) inter++;
    return (2 * inter) / (A.size + B.size);
  }
  function sim(a, b) {
    const na = norm(a), nb = norm(b);
    if (!na || !nb) return 0;
    if (na === nb) return 1;
    let s = 0.5 * dice(grams(na), grams(nb)) + 0.5 * tokenDice(na, nb);
    // Một bên chứa trọn bên kia (đáp án ngắn như "Bậc 4", "80%")
    const short = na.length < nb.length ? na : nb;
    const long = na.length < nb.length ? nb : na;
    if (short.length >= 2 && (' ' + long + ' ').includes(' ' + short + ' ')) {
      s = Math.max(s, 0.55 + 0.45 * (short.length / long.length));
    }
    return s;
  }

  const KEY_NORM = KEY.map(k => ({ ...k, _g: grams(norm(k.question)), _n: norm(k.question) }));

  // Độ giống giữa bộ lựa chọn trên form và bộ lựa chọn trong đáp án
  function optionOverlap(formOpts, keyOpts) {
    if (!formOpts || !formOpts.length || !keyOpts || !keyOpts.length) return null;
    let total = 0;
    for (const f of formOpts) {
      let b = 0;
      for (const k of keyOpts) b = Math.max(b, sim(f, k));
      total += b;
    }
    return total / formOpts.length;
  }

  function findAnswer(questionText, formOpts) {
    const q = norm(cleanQuestion(questionText));
    if (!q) return null;
    const qg = grams(q);
    const scored = KEY_NORM.map(k => ({ k, s: 0.6 * dice(qg, k._g) + 0.4 * tokenDice(q, k._n) }))
      .sort((a, b) => b.s - a.s);
    // Xét lại top 5 bằng bộ lựa chọn để phân biệt các câu gần giống nhau
    let best = scored[0];
    if (formOpts && formOpts.length) {
      best = scored.slice(0, 5).map(x => {
        const ov = optionOverlap(formOpts, x.k.options);
        return { ...x, f: ov === null ? x.s : 0.7 * x.s + 0.3 * ov };
      }).sort((a, b) => b.f - a.f)[0];
    }
    return best && best.s >= Q_THRESHOLD ? { item: best.k, score: best.s } : null;
  }

  // ---------- Tìm câu hỏi trong DOM ----------
  const visible = el => !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));

  function getQuestionBlocks() {
    let blocks = [...document.querySelectorAll('[data-automation-id="questionItem"]')];
    if (blocks.length) return blocks.filter(visible);

    // Fallback: gom theo radiogroup / group / list chứa radio-checkbox
    const set = new Set();
    document.querySelectorAll('[role="radiogroup"], [role="group"], [role="list"]').forEach(g => {
      if (g.querySelector('input[type=radio], input[type=checkbox], [role=radio], [role=checkbox]')) {
        let p = g;
        for (let i = 0; i < 4 && p.parentElement; i++) {
          p = p.parentElement;
          if (p.querySelector('[data-automation-id="questionTitle"], [role=heading], h1, h2, h3, h4')) break;
        }
        set.add(p);
      }
    });
    return [...set].filter(visible);
  }

  function getTitle(block) {
    const t = block.querySelector('[data-automation-id="questionTitle"]') ||
              block.querySelector('[role="heading"]') ||
              block.querySelector('h1,h2,h3,h4');
    if (t) return t.innerText || t.textContent || '';
    // Không tìm được tiêu đề → lấy dòng dài nhất không phải đáp án
    const lines = (block.innerText || '').split('\n').map(s => s.trim()).filter(Boolean);
    return lines.sort((a, b) => b.length - a.length)[0] || '';
  }

  function getOptions(block) {
    const opts = [];
    const inputs = block.querySelectorAll('input[type=radio], input[type=checkbox]');
    inputs.forEach(inp => {
      const item = inp.closest('[data-automation-id="choiceItem"]') || inp.closest('label') ||
                   (inp.id && block.querySelector(`label[for="${CSS.escape(inp.id)}"]`)) || inp.parentElement;
      const text = (item && item.innerText && item.innerText.trim()) ||
                   inp.getAttribute('aria-label') || inp.value || '';
      opts.push({ el: inp, clickEl: inp, text, type: inp.type, checked: () => inp.checked });
    });
    if (!opts.length) {
      block.querySelectorAll('[role=radio], [role=checkbox]').forEach(el => {
        opts.push({
          el, clickEl: el,
          text: el.getAttribute('aria-label') || el.innerText || '',
          type: el.getAttribute('role') === 'radio' ? 'radio' : 'checkbox',
          checked: () => el.getAttribute('aria-checked') === 'true'
        });
      });
    }
    return opts.filter(o => o.text.trim());
  }

  function setNativeValue(el, value) {
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    el.focus();
    setter.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.blur();
  }

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function mark(block, color, note) {
    block.style.outline = `3px solid ${color}`;
    block.style.outlineOffset = '4px';
    block.style.borderRadius = '6px';
    block.title = note || '';
  }

  // ---------- Điền 1 câu ----------
  async function fillBlock(block) {
    const title = getTitle(block);
    const opts = getOptions(block);
    const found = findAnswer(title, opts.map(o => o.text));
    if (!found) { mark(block, '#e53935', 'Không tìm thấy câu hỏi trong bộ đáp án'); return 'miss'; }
    let answer = found.item.answer;
    const alt = found.item.altAnswer;
    // Đáp án chính (docx) không có trong form nhưng đáp án dự phòng có → dùng dự phòng
    if (opts.length && alt) {
      const bestOf = a => Math.max(...opts.map(o => sim(o.text, a)));
      if (bestOf(answer) < OPT_SURE && bestOf(alt) >= OPT_SURE) answer = alt;
    }
    block.dataset.msfAnswer = answer;

    // Text
    const txt = block.querySelector('input[data-automation-id="textInput"], textarea, input[type=text]');
    if (!opts.length && txt) {
      setNativeValue(txt, answer);
      mark(block, '#43a047', 'Đã điền: ' + answer);
      return 'ok';
    }

    // Dropdown
    const combo = block.querySelector('[role="combobox"], [aria-haspopup="listbox"]');
    if (!opts.length && combo) {
      combo.click();
      await sleep(350);
      const list = [...document.querySelectorAll('[role="option"]')].filter(visible);
      let best = null, bs = 0;
      list.forEach(o => { const s = sim(o.innerText, answer); if (s > bs) { bs = s; best = o; } });
      if (best && bs >= OPT_MIN) {
        best.click();
        mark(block, bs >= OPT_SURE ? '#43a047' : '#fbc02d', `Chọn: ${best.innerText} (${bs.toFixed(2)})`);
        return bs >= OPT_SURE ? 'ok' : 'unsure';
      }
      document.body.click();
      mark(block, '#e53935', 'Không khớp lựa chọn nào. Đáp án: ' + answer);
      return 'miss';
    }

    if (!opts.length) { mark(block, '#e53935', 'Không đọc được lựa chọn. Đáp án: ' + answer); return 'miss'; }

    const isCheckbox = opts[0].type === 'checkbox';
    const scored = opts.map(o => ({ o, s: sim(o.text, answer) }));

    if (isCheckbox) {
      const parts = answer.split(/\s*;\s*/).filter(Boolean);
      const chosen = new Set();
      if (parts.length > 1) {
        parts.forEach(p => {
          let best = null, bs = 0;
          opts.forEach(o => { const s = sim(o.text, p); if (s > bs) { bs = s; best = o; } });
          if (best && bs >= OPT_MIN) chosen.add(best);
        });
      } else {
        const top = scored.sort((a, b) => b.s - a.s)[0];
        if (top && top.s >= OPT_MIN) chosen.add(top.o);
      }
      for (const o of opts) {
        const want = chosen.has(o);
        if (want !== o.checked()) { o.clickEl.click(); await sleep(60); }
      }
      if (!chosen.size) { mark(block, '#e53935', 'Không khớp lựa chọn nào. Đáp án: ' + answer); return 'miss'; }
      mark(block, '#43a047', 'Đã tick: ' + [...chosen].map(o => o.text).join(' | '));
      return 'ok';
    }

    // Radio
    scored.sort((a, b) => b.s - a.s);
    let pick = scored[0];
    // Đáp án gộp nhiều ý (có ";") → thử "Tất cả các đáp án trên"
    if ((!pick || pick.s < OPT_SURE) && /;/.test(answer)) {
      const all = opts.find(o => /tat ca|ca \w+ deu|ca a b|all of the above/.test(norm(o.text)));
      if (all) pick = { o: all, s: OPT_SURE };
    }
    if (!pick || pick.s < OPT_MIN) {
      mark(block, '#e53935', 'Không khớp lựa chọn nào. Đáp án: ' + answer);
      return 'miss';
    }
    if (!pick.o.checked()) { pick.o.clickEl.click(); await sleep(60); }
    const sure = pick.s >= OPT_SURE && (scored.length < 2 || pick.s - scored[1].s > 0.05);
    mark(block, sure ? '#43a047' : '#fbc02d',
      `Chọn: ${pick.o.text} (độ khớp ${pick.s.toFixed(2)})\nĐáp án gốc: ${answer}`);
    return sure ? 'ok' : 'unsure';
  }

  // ---------- Điền tất cả ----------
  let running = false;
  async function fillAll(onlyNew = false) {
    if (running) return;
    running = true;
    const stats = { ok: 0, unsure: 0, miss: 0 };
    try {
      for (const b of getQuestionBlocks()) {
        if (onlyNew && b.dataset.msfDone) continue;
        try { stats[await fillBlock(b)]++; } catch (e) { console.warn('[MSF]', e); stats.miss++; }
        b.dataset.msfDone = '1';
        await sleep(40);
      }
    } finally { running = false; }
    setStatus(`✅ ${stats.ok}  ⚠️ ${stats.unsure}  ❌ ${stats.miss}`);
    return stats;
  }

  // ---------- Panel nổi ----------
  let statusEl, autoMode = false;
  function setStatus(t) { if (statusEl) statusEl.textContent = t; }

  function buildPanel() {
    if (document.getElementById('msf-panel')) return;
    const p = document.createElement('div');
    p.id = 'msf-panel';
    p.innerHTML = `
      <div class="msf-head">⚡ Auto Fill <span class="msf-x" title="Ẩn">×</span></div>
      <button class="msf-btn" id="msf-fill">Điền đáp án</button>
      <label class="msf-row"><input type="checkbox" id="msf-auto"> Tự điền khi sang trang</label>
      <div class="msf-status" id="msf-status">${KEY.length} câu trong bộ đáp án</div>
      <div class="msf-legend">🟩 chắc chắn · 🟨 nên kiểm tra · 🟥 tự làm</div>`;
    const css = document.createElement('style');
    css.textContent = `
      #msf-panel{position:fixed;right:16px;bottom:16px;z-index:2147483647;background:#1f2430;color:#fff;
        font:13px/1.4 system-ui,sans-serif;padding:10px 12px;border-radius:10px;width:210px;
        box-shadow:0 6px 20px rgba(0,0,0,.35)}
      #msf-panel .msf-head{font-weight:600;margin-bottom:8px;display:flex;justify-content:space-between}
      #msf-panel .msf-x{cursor:pointer;opacity:.7}
      #msf-panel .msf-btn{width:100%;padding:8px;border:0;border-radius:6px;background:#2f7cf6;color:#fff;
        font-weight:600;cursor:pointer}
      #msf-panel .msf-btn:hover{background:#1e66d8}
      #msf-panel .msf-row{display:flex;gap:6px;align-items:center;margin-top:8px;cursor:pointer}
      #msf-panel .msf-status{margin-top:8px;font-size:12px;opacity:.9}
      #msf-panel .msf-legend{margin-top:4px;font-size:11px;opacity:.7}`;
    document.documentElement.appendChild(css);
    document.body.appendChild(p);
    statusEl = p.querySelector('#msf-status');

    p.querySelector('.msf-x').onclick = () => p.remove();
    p.querySelector('#msf-fill').onclick = async () => {
      setStatus('Đang điền…');
      document.querySelectorAll('[data-msf-done]').forEach(b => delete b.dataset.msfDone);
      await fillAll(false);
    };
    const auto = p.querySelector('#msf-auto');
    try {
      chrome.storage.local.get('msfAuto', r => { auto.checked = autoMode = !!(r && r.msfAuto); if (autoMode) fillAll(true); });
    } catch (_) {}
    auto.onchange = () => {
      autoMode = auto.checked;
      try { chrome.storage.local.set({ msfAuto: autoMode }); } catch (_) {}
      if (autoMode) fillAll(true);
    };
  }

  // Phím tắt: Alt + Shift + F
  document.addEventListener('keydown', e => {
    if (e.altKey && e.shiftKey && (e.key === 'F' || e.key === 'f')) { e.preventDefault(); fillAll(false); }
  });

  // Chỉ hiện panel ở frame có câu hỏi; theo dõi khi form chuyển trang
  let debounce;
  const obs = new MutationObserver(() => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      if (getQuestionBlocks().length) {
        buildPanel();
        if (autoMode) fillAll(true);
      }
    }, 600);
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
  if (getQuestionBlocks().length) buildPanel();

  // Cho phép gọi tay từ Console để debug
  window.msfFillAll = fillAll;
  window.msfFindAnswer = findAnswer;
})();
