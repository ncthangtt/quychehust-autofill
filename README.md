[README.md](https://github.com/user-attachments/files/33912266/README.md)
# MS Forms Auto Fill – Quy chế 2026.1 HUST

Extension Chrome/Edge tự động điền đáp án cho bài trắc nghiệm **Quy chế Đại học Bách khoa Hà Nội** làm trên Microsoft Forms.

Extension tự tìm từng câu hỏi trên trang, so khớp gần đúng với bộ 200 câu đáp án, chọn đáp án giống nhất và tô màu để bạn kiểm tra lại. Extension **không tự bấm Nộp bài**.

## Tính năng

* So khớp gần đúng, không phân biệt dấu, hoa thường hay `3,2` / `3.2`. Câu hỏi bị viết lại vài chữ vẫn nhận ra được.
* Dùng cả bộ lựa chọn A–D để phân biệt các câu gần giống nhau (ví dụ "Bậc mấy", "Cộng bao nhiêu điểm").
* Hỗ trợ câu một đáp án (radio), nhiều đáp án (checkbox), điền chữ và dropdown.
* Tự điền khi sang trang mới đối với form nhiều trang.
* Tô màu kết quả từng câu: 🟩 chắc chắn, 🟨 nên kiểm tra, 🟥 không có trong bộ đáp án.

## Cài đặt

Cần dùng **máy tính** với Chrome hoặc Edge. Chrome trên điện thoại không cài được extension.

1. Tải code về:

   * Bấm nút xanh **Code → Download ZIP** trên trang GitHub này, rồi giải nén. Hoặc:
   * `git clone https://github.com/ncthangtt/msforms-autofill.git`
2. Mở trang quản lý extension:

   * Chrome: `chrome://extensions`
   * Edge: `edge://extensions`
3. Bật **Developer mode / Chế độ nhà phát triển** ở góc phải trên.
4. Bấm **Load unpacked / Tải tiện ích đã giải nén** và chọn thư mục chứa file `manifest.json`.
5. Mở link MS Forms. Nếu trang đã mở sẵn từ trước thì bấm F5.

## Sử dụng

1. Mở bài MS Forms. Góc dưới bên phải sẽ hiện bảng **⚡ Auto Fill**.
2. Bấm **Điền đáp án**, hoặc dùng phím tắt `Alt + Shift + F`.
3. Nếu form có nhiều trang, tick **Tự điền khi sang trang**. Mỗi lần bấm "Tiếp", trang mới sẽ được tự điền.
4. Kiểm tra các câu theo màu viền:

|Màu|Ý nghĩa|Việc cần làm|
|-|-|-|
|🟩 Xanh|Khớp chắc chắn|Không cần làm gì|
|🟨 Vàng|Khớp chưa chắc|Rê chuột vào câu để xem đáp án gốc, rồi tự kiểm tra|
|🟥 Đỏ|Không có trong bộ đáp án|Tự làm câu này|

5. Tự bấm **Nộp / Submit** khi đã kiểm tra xong.

## Bộ đáp án

Đáp án nằm trong file `answers.js`. Mỗi câu có dạng:

```js
{
  "question": "Nội dung câu hỏi",
  "answer": "Đáp án chính",
  "options": \["A", "B", "C", "D"],
  "altAnswer": "Đáp án dự phòng"
}
```

* `answer`: đáp án chính, lấy theo bộ `answers\_full\_200.js`.
* `options`: 4 lựa chọn lấy từ file Word *Dap\_An\_Quy\_Che\_2026\_200\_Cau*. Chỉ dùng để nhận diện câu hỏi.
* `altAnswer`: đáp án theo file Word, có ở 35 câu mà hai nguồn ghi khác nhau. Chỉ dùng khi đáp án chính không có trong các lựa chọn của form.

Chỉ `question` và `answer` là bắt buộc. Muốn đổi hoặc thêm câu, sửa file `answers.js`, rồi vào `chrome://extensions` bấm ↻ (Reload) ở extension và F5 lại trang form.

## Cập nhật bản mới

1. Tải bản mới (hoặc chạy `git pull`), giải nén đè lên thư mục cũ.
2. Vào `chrome://extensions`, bấm ↻ (Reload) ở extension.
3. F5 lại trang form.

## Khắc phục sự cố

* **Không thấy bảng Auto Fill:** kiểm tra extension đã bật, rồi F5 trang. Có thể mở Console (F12) và gõ `msfFillAll()` để chạy tay.
* **Kiểm tra một câu khớp với đáp án nào:** trong Console, gõ `msfFindAnswer("nội dung câu hỏi")`.
* **Form nhúng trong Teams/SharePoint:** mở trực tiếp link `forms.office.com` trên tab riêng.

## Cấu trúc thư mục

```
msforms-autofill/
├── manifest.json   # Khai báo extension (Manifest V3)
├── answers.js      # Bộ 200 câu đáp án
├── content.js      # Logic tìm câu hỏi, so khớp và điền đáp án
└── README.md
```

## Lưu ý

Extension chỉ là công cụ hỗ trợ. Độ chính xác phụ thuộc vào bộ đáp án, nên hãy xem lại các câu vàng/đỏ trước khi nộp.

