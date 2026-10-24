/**
 * Bộ đáp án Quy chế ĐHBK Hà Nội 2026
 * answer    : đáp án CHÍNH theo answers_full_200.js (bộ JS cũ)
 * altAnswer : đáp án theo file Word, chỉ dùng khi đáp án chính không có trong form
 * options   : 4 lựa chọn lấy từ file Word, dùng để nhận diện câu hỏi
 */
const answerKey = [
  {
    "question": "Điểm CPA từ 3,2 đến cận 3,6 khi quy đổi sang dải điểm thang 10 tương đương có kết quả là bao nhiêu?",
    "answer": "8,0 đến cận 9,0",
    "options": [
      "7,0 đến cận 8,0",
      "7,5 đến cận 8,5",
      "8,0 đến cận 9,0",
      "9,0 đến 10,0"
    ],
    "source": "docx"
  },
  {
    "question": "Vị trí của Tiệm giặt là công cộng thuộc Ký túc xá Bách khoa được đặt ở đâu?",
    "answer": "Nhà hòm xanh phía sau hội trường B6 (cạnh B7) - sát đường Trần Đại Nghĩa",
    "options": [
      "Tầng 1 nhà C1",
      "Nhà hồng xanh phía sau hội trường C6 (cạnh B7) - sát đường Trần Đại Nghĩa",
      "Tầng 5 nhà B10",
      "Trong nhà ăn A15"
    ],
    "source": "js",
    "altAnswer": "Nhà hồng xanh phía sau hội trường C6 (cạnh B7) - sát đường Trần Đại Nghĩa"
  },
  {
    "question": "Sinh viên có hành vi vi phạm kỷ luật khi thi hoặc nhờ thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?",
    "answer": "Trừ 20 điểm",
    "options": [
      "Trừ 10 điểm",
      "Trừ 20 điểm",
      "Trừ 30 điểm",
      "Trừ 50 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Tổ tư vấn tâm lý sinh viên (tiền thân của Tổ tư vấn và hỗ trợ sinh viên SSU) được thành lập vào ngày tháng năm nào?",
    "answer": "Ngày 26/03/2019",
    "options": [
      "Ngày 10/10/2015",
      "Ngày 26/03/2019",
      "Ngày 01/01/2020",
      "Ngày 15/08/2022"
    ],
    "source": "docx"
  },
  {
    "question": "Việc nộp chứng chỉ ngoại ngữ quốc tế để quy đổi miễn học và công nhận chuẩn đầu ra được sinh viên thực hiện qua kênh nào?",
    "answer": "Đăng ký trực tuyến trên hệ thống quản lý đào tạo (eHUST/QLĐT) theo các đợt thông báo",
    "options": [
      "Nộp trực tiếp bản giấy tại phòng bảo vệ",
      "Đăng ký trực tuyến trên hệ thống quản lý đào tạo (eHUST/QLĐT) theo các đợt thông báo",
      "Gửi qua bưu điện",
      "Đưa cho lớp trưởng giữ"
    ],
    "source": "docx"
  },
  {
    "question": "Mức giá trị của Học bổng KKHT loại Giỏi (loại B) được tính như thế nào?",
    "answer": "Bằng 1,2 lần mức học bổng loại Khá",
    "options": [
      "Bằng đúng mức học bổng loại Khá",
      "Bằng 1,2 lần mức học bổng loại Khá",
      "Bằng 1,5 lần mức học bổng loại Khá",
      "Bằng 2,0 lần mức học bổng loại Khá"
    ],
    "source": "docx"
  },
  {
    "question": "Quy đổi khối lượng học tập hệ đại học chính quy: 1 TCHT của học phần \"Thí nghiệm / Thực hành thông thường\" bằng bao nhiêu Tín chỉ học phí (TCHP)?",
    "answer": "1.5 TCHP",
    "options": [
      "1.0 TCHP",
      "1.5 TCHP",
      "2.0 TCHP",
      "2.5 TCHP"
    ],
    "source": "docx"
  },
  {
    "question": "Địa điểm tiếp nhận hồ sơ Chế độ chính sách và phát Giấy xác nhận ưu đãi giáo dục cho sinh viên là phòng nào?",
    "answer": "Phòng 101 - Nhà B8",
    "options": [
      "Phòng 102 - Nhà C1",
      "Phòng 101 - Nhà B8",
      "Phòng 202 - Nhà D3",
      "Phòng 105 - Nhà C2"
    ],
    "source": "docx"
  },
  {
    "question": "Khi đăng ký tốt nghiệp đại học, sinh viên được chọn số tín chỉ tích lũy so với yêu cầu của CTĐT như thế nào?",
    "answer": "Chỉ chọn đủ hoặc không nhiều hơn 3 tín chỉ so với yêu cầu của chương trình",
    "options": [
      "Chọn vượt bao nhiêu tín tùy ý",
      "Chỉ chọn đủ hoặc không nhiều hơn 3 tín chỉ so với yêu cầu của chương trình",
      "Bắt buộc chọn đúng bằng số tín chỉ chuẩn",
      "Chọn ít hơn chuẩn 5 tín chỉ"
    ],
    "source": "docx"
  },
  {
    "question": "Hệ số học phí áp dụng đối với các lớp học tổ chức ngoài kế hoạch theo đề nghị của sinh viên có sĩ số dưới 10 sinh viên là bao nhiêu?",
    "answer": "Hệ số 2,0",
    "options": [
      "Hệ số 1,2",
      "Hệ số 1,5",
      "Hệ số 2,0",
      "Hệ số 2,5"
    ],
    "source": "js",
    "altAnswer": "Hệ số 2,5"
  },
  {
    "question": "Điểm chữ \"W\" xuất hiện trong bảng điểm của sinh viên mang ý nghĩa gì?",
    "answer": "Điểm học phần sinh viên đã đăng ký rút thành công trong thời gian quy định",
    "options": [
      "Học phần bị hủy do không đủ sĩ số",
      "Học phần bằng tiếng Anh",
      "Điểm học phần sinh viên đã đăng ký rút thành công trong thời gian quy định",
      "Học phần bị hoàn thi"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Quy chế đào tạo 2025, \"Lớp học phần rút gọn\" dành cho sinh viên học lại được mở khi đáp ứng những điều kiện nào?",
    "answer": "Học lại ít nhất 02 lần chưa đạt, điểm quá trình từ 2,0 trở lên, sinh viên từ năm thứ 3 trở lên",
    "options": [
      "Học lại ít nhất 01 lần, điểm quá trình >= 3.0, sinh viên năm thứ 1",
      "Học lại ít nhất 02 lần chưa đạt, điểm quá trình từ 2,0 trở lên, sinh viên từ năm thứ 3 trở lên",
      "Bị điểm F tất cả các môn trong kỳ liền trước",
      "Sinh viên bị cảnh báo học tập mức 3"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên đạt danh hiệu \"Sinh viên 5 tốt\" từ cấp Đại học trở lên được cộng bao nhiêu điểm rèn luyện?",
    "answer": "Cộng 4 điểm",
    "options": [
      "Cộng 4 điểm",
      "Cộng 6 điểm",
      "Cộng 8 điểm",
      "Cộng 10 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Nếu sinh viên nộp đơn đề nghị rút học phần trong khoảng 7 tuần đầu của học kỳ chính và được giải quyết, mức học phí phải đóng là bao nhiêu?",
    "answer": "Phải đóng 50% học phí của học phần đó",
    "options": [
      "Được hoàn lại 100% học phí",
      "Phải đóng 50% học phí của học phần đó",
      "Phải đóng 100% học phí",
      "Phải đóng 70% học phí"
    ],
    "source": "docx"
  },
  {
    "question": "Theo hướng dẫn Quản lý tài chính cá nhân trong Sổ tay sinh viên, tỷ lệ 20% thu nhập hàng tháng được khuyến danh cho mục đích nào?",
    "answer": "Dành cho tiết kiệm",
    "options": [
      "Chi tiêu thiết yếu",
      "Hưởng thụ cá nhân",
      "Dành cho tiết kiệm",
      "Đầu tư chứng khoán"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên không thể dự thi cuối kỳ do bị ốm hoặc tai nạn có hồ sơ hợp lệ được hoàn thi (điểm I) và dự thi bù trong thời hạn tối đa bao lâu?",
    "answer": "Trong thời hạn 2 học kỳ chính tiếp theo",
    "options": [
      "Ngay trong kỳ hè liền kề",
      "Trong thời hạn 2 học kỳ chính tiếp theo",
      "Trong vòng 1 tháng",
      "Phải đăng ký học lại từ đầu"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ tiếng Anh VSTEP trình độ B1 tương ứng với Bậc mấy trong Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam?",
    "answer": "Bậc 3",
    "options": [
      "Bậc 1",
      "Bậc 2",
      "Bậc 3",
      "Bậc 4"
    ],
    "source": "docx"
  },
  {
    "question": "Kết quả xét duyệt Học bổng KKHT được công bố chậm nhất vào tuần học thứ mấy của học kỳ cấp học bổng?",
    "answer": "Chậm nhất vào tuần học thứ 10",
    "options": [
      "Tuần thứ 5",
      "Tuần thứ 8",
      "Chậm nhất vào tuần học thứ 10",
      "Tuần thứ 15"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên bị buộc học thôi học do kết quả học tập yếu kém có quyền đề nghị chuyển sang hình thức đào tạo nào của Nhà trường?",
    "answer": "Chuyển sang hình thức Vừa làm vừa học (VLVH)",
    "options": [
      "Chuyển sang hệ Tài năng",
      "Chuyển sang hình thức Vừa làm vừa học (VMVH)",
      "Chuyển sang hệ đào tạo Quốc tế TROY",
      "Không được chuyển sang bất kỳ hình thức nào"
    ],
    "source": "js",
    "altAnswer": "Chuyển sang hình thức Vừa làm vừa học (VMVH)"
  },
  {
    "question": "Học bổng Chính phủ phủ cấp cho người học được Nhà trường thực hiện chi trả theo định kỳ nào?",
    "answer": "Chi trả định kỳ theo từng tháng dựa trên số tháng thực học",
    "options": [
      "Chi trả 1 lần duy nhất vào cuối khóa",
      "Chi trả định kỳ theo từng tháng dựa trên số tháng thực học",
      "Chi trả theo năm",
      "Chi trả bằng hiện vật"
    ],
    "source": "docx"
  },
  {
    "question": "Học bổng Trần Đại Nghĩa là học bổng của ĐHBK Hà Nội dành cho đối tượng sinh viên nào?",
    "answer": "Sinh viên có hoàn cảnh kinh tế gia đình đặc biệt khó khăn, có ý chí vươn lên trong học tập",
    "options": [
      "Sinh viên đạt giải Nhất HSGQG cấp quốc gia",
      "Sinh viên có hoàn cảnh kinh tế gia đình đặc biệt khó khăn, có ý chí vươn lên trong học tập",
      "Sinh viên có GPA 4.0",
      "Sinh viên là vận động viên chuyên nghiệp"
    ],
    "source": "docx"
  },
  {
    "question": "Việc miễn giảm học phí cho sinh viên diện chế độ chính sách được thực hiện căn cứ theo văn bản quy định nào của Chính phủ?",
    "answer": "Nghị định 238/2025/NĐ-CP",
    "options": [
      "Nghị định 103/2015/NĐ-CP",
      "Nghị định 238/2025/NĐ-CP",
      "Thông tư 01/2020/TT-BGDĐT",
      "Quyết định 157/QĐ-TTg"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Quy chế đào tạo 2025 (sửa đổi), điểm kết thúc đối với học phần đồ án tốt nghiệp/khóa luận tốt nghiệp cử nhân, đồ án tốt nghiệp kỹ sư là bao nhiêu?",
    "answer": "Dưới 5,0",
    "options": [
      "Dưới 3,0",
      "Dưới 4,0",
      "Dưới 5,0",
      "Dưới 2,0"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên thuộc diện Cử tuyển nộp và nhận giấy xác nhận được hưởng học bổng chính sách tại đâu và vào thời gian nào?",
    "answer": "Tại Phòng 102 - Nhà C1 vào đầu các học kỳ",
    "options": [
      "Tại Phòng Đào tạo vào cuối năm học",
      "Tại Phòng 102 - Nhà C1 vào đầu các học kỳ",
      "Tại Văn phòng Đoàn Thanh niên",
      "Tại Trạm Y tế"
    ],
    "source": "docx"
  },
  {
    "question": "Chuẩn ngoại ngữ đầu ra đối với CTĐT Tiếng Anh Khoa học kỹ thuật và Công nghệ là gì?",
    "answer": "Ngoại ngữ 1 đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3",
    "options": [
      "Ngoại ngữ 1 đạt Bậc 4, Ngoại ngữ 2 đạt Bậc 2",
      "Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3",
      "Ngoại ngữ 1 đạt Bậc 6, Ngoại ngữ 2 không yêu cầu",
      "Cả 2 ngoại ngữ đều đạt Bậc 4"
    ],
    "source": "js",
    "altAnswer": "Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3"
  },
  {
    "question": "Chứng chỉ tiếng Pháp TCF quy đổi tương đương Bậc 3 (B1) yêu cầu điểm số TCF nằm trong khoảng nào?",
    "answer": "300 - 399 điểm",
    "options": [
      "100 - 199 điểm",
      "200 - 299 điểm",
      "300 - 399 điểm",
      "400 - 499 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên không đáp ứng điều kiện phân loại trình độ ngoại ngữ đầu vào sẽ được xếp học như thế nào?",
    "answer": "Được xếp học từ học phần đầu tiên của khối Ngoại ngữ cơ bản tương ứng",
    "options": [
      "Được miễn toàn bộ khối ngoại ngữ cơ bản",
      "Được xếp học từ học phần đầu tiên của khối Ngoại ngữ cơ bản tương ứng",
      "Bị hoàn đăng ký học tập toàn bộ các môn khác",
      "Bị buộc dừng học 1 học kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Học phần \"FL1131 Tiếng Anh cơ sở 1\" có khối lượng thời lượng quy định là bao nhiêu?",
    "answer": "3(3-0-0-6)",
    "options": [
      "2(2-0-0-4)",
      "3(3-0-0-6)",
      "4(2-4-0-8)",
      "5(0-10-0-10)"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên được cấp Học bổng Chính phủ theo Nghị định 179 có được đồng thời hưởng thêm chính sách học bổng khác từ nguồn ngân sách nhà nước không?",
    "answer": "Không, chỉ được lựa chọn hưởng 01 chính sách học bổng từ nguồn ngân sách nhà nước",
    "options": [
      "Được nhận song song tất cả các nguồn",
      "Không, chỉ được lựa chọn hưởng 01 chính sách học bổng từ nguồn ngân sách nhà nước",
      "Được nhận nếu có CPA 4.0",
      "Tùy thuộc vào quyết định của lớp trưởng"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Thông tư số 40/2026/TT-BGDĐT được trích dẫn trong Sổ tay sinh viên, có bao nhiêu hình thức xử lý kỷ luật đối với sinh viên?",
    "answer": "04 hình thức (Khiển trách, Cảnh cáo, Đình chỉ học tập có thời hạn, Buộc thôi học)",
    "options": [
      "02 hình thức (Khiển trách, Cảnh cáo)",
      "03 hình thức",
      "04 hình thức (Khiển trách, Cảnh cáo, Đình chỉ học tập có thời hạn, Buộc thôi học)",
      "05 hình thức"
    ],
    "source": "docx"
  },
  {
    "question": "Mức điểm chữ \"P\" được áp dụng cho loại học phần nào trong chương trình đào tạo?",
    "answer": "Các học phần chỉ yêu cầu đạt, không tính vào điểm trung bình học tập",
    "options": [
      "Các môn học chuyên ngành tính GPA",
      "Các học phần chỉ yêu cầu đạt, không tính vào điểm trung bình học tập",
      "Đồ án tốt nghiệp",
      "Môn học bị kỷ luật"
    ],
    "source": "docx"
  },
  {
    "question": "Học phí học phần \"Giáo dục Quốc phòng - An ninh\" được tính toán dựa trên đơn vị nào?",
    "answer": "Tính theo số TCHP quy đổi của các học phần GDQP-AN",
    "options": [
      "Tính theo số ngày đi học quân sự",
      "Tính theo số TCHP quy đổi của các học phần GDQP-AN",
      "Đóng mức cố định 5 triệu đồng",
      "Do Bộ Quốc phòng thu trực tiếp"
    ],
    "source": "docx"
  },
  {
    "question": "Quy định về việc quản lý và sử dụng Thẻ sinh viên khi vào trường như thế nào?",
    "answer": "Phải đeo thẻ sinh viên; Tuyệt đối không cho người khác mượn hoặc mượn thẻ người khác; Không được cầm cố thẻ sinh viên",
    "options": [
      "Phải đeo thẻ sinh viên; Tuyệt đối không cho người khác mượn hoặc mang thẻ người khác; Không được cầm cầm thẻ sinh viên",
      "Được phép cho bạn cùng phòng mượn thẻ",
      "Cầm có thẻ sinh viên để vay tiền",
      "Không cần mang thẻ sinh viên"
    ],
    "source": "js",
    "altAnswer": "Phải đeo thẻ sinh viên; Tuyệt đối không cho người khác mượn hoặc mang thẻ người khác; Không được cầm cầm thẻ sinh viên"
  },
  {
    "question": "Trường hợp ngoại lệ nào sinh viên đề nghị rút học phần mà KHÔNG phải đóng học phí?",
    "answer": "Đề nghị rút trong tuần đầu tiên của học kỳ thứ 2",
    "options": [
      "Đề nghị rút trong tuần đầu tiên của học kỳ thứ 2",
      "Đề nghị rút trong học kỳ hè",
      "Đề nghị rút ở tuần thứ 10",
      "Không có trường hợp ngoại lệ"
    ],
    "source": "docx"
  },
  {
    "question": "Chuẩn Ngoại ngữ 2 bắt buộc đối với sinh viên ngành Ngôn ngữ Anh hoặc Tiếng Anh KHKT&CN khi xét tốt nghiệp tối thiểu đạt Bậc mấy?",
    "answer": "Bậc 3",
    "options": [
      "Bậc 1",
      "Bậc 2",
      "Bậc 3",
      "Bậc 4"
    ],
    "source": "docx"
  },
  {
    "question": "Thời gian nghỉ học tạm thời tối đa cho phép đối với lý do cá nhân thông thường là bao nhiêu học kỳ chính?",
    "answer": "04 học kỳ chính (và được tính vào thời gian chậm tiến độ)",
    "options": [
      "01 học kỳ chính",
      "02 học kỳ chính",
      "04 học kỳ chính (và được tính vào thời gian chậm tiến độ)",
      "06 học kỳ chính"
    ],
    "source": "docx"
  },
  {
    "question": "Thời hạn Giám đốc Đại học ra quyết định công nhận tốt nghiệp và cấp bằng tốt nghiệp Thạc sĩ cho học viên đủ điều kiện là bao lâu?",
    "answer": "Trong thời hạn 02 tháng tính từ thời điểm đáp ứng đủ điều kiện",
    "options": [
      "Trong thời hạn 01 tháng",
      "Trong thời hạn 02 tháng tính từ thời điểm đáp ứng đủ điều kiện",
      "Trong thời hạn 03 tháng",
      "Trong thời hạn 06 tháng"
    ],
    "source": "docx"
  },
  {
    "question": "Điều kiện về điểm CPA để sinh viên đại học đề nghị xét chuyển vào học Chương trình đào tạo Tài năng sau năm thứ hai là gì?",
    "answer": "CPA >= 3.2",
    "options": [
      "CPA >= 2.5",
      "CPA >= 3.0",
      "CPA >= 3.2",
      "CPA >= 3.6"
    ],
    "source": "docx"
  },
  {
    "question": "Bài thi kiểm tra trình độ tiếng Anh đầu vào (Placement Test) do ĐHBK Hà Nội tổ chức có giá trị sử dụng trong thời gian bao lâu?",
    "answer": "Chỉ có giá trị để phân loại trình độ đầu vào và xếp lớp học phần NNCB năm thứ nhất",
    "options": [
      "Có giá trị 2 năm để xét tốt nghiệp",
      "Chỉ có giá trị để phân loại trình độ đầu vào và xếp lớp học phần NNCB năm thứ nhất",
      "Có giá trị vô thời hạn",
      "Thay thế chứng chỉ IELTS"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ tiếng Trung HSK 6 kết hợp HSKK cao cấp tương ứng Bậc mấy trong Khung năng lực 6 bậc?",
    "answer": "Bậc 6",
    "options": [
      "Bậc 4",
      "Bậc 5",
      "Bậc 6",
      "Bậc 5+"
    ],
    "source": "docx"
  },
  {
    "question": "Mức phí thực hiện lại 01 chuyên đề tiến sĩ đối với nghiên cứu sinh được quy định cụ thể là bao nhiêu?",
    "answer": "2.200.000 đồng / chuyên đề",
    "options": [
      "1.000.000 đồng / chuyên đề",
      "1.500.000 đồng / chuyên đề",
      "2.200.000 đồng / chuyên đề",
      "5.000.000 đồng / chuyên đề"
    ],
    "source": "docx"
  },
  {
    "question": "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi THPT yêu cầu điểm quy đổi thang 30 tối thiểu là bao nhiêu?",
    "answer": "Từ 24/30 trở lên",
    "options": [
      "Từ 24/30 trở lên",
      "Từ 25.5/30 trở lên",
      "Từ 27/30 trở lên",
      "Từ 28.5/30 trở lên"
    ],
    "source": "docx"
  },
  {
    "question": "Tân sinh viên đạt điểm bài kiểm tra HUST English Placement Test từ 475 đến dưới 545 điểm được xếp vào Nhóm trình độ nào?",
    "answer": "Nhóm 4",
    "options": [
      "Nhóm 2",
      "Nhóm 3",
      "Nhóm 4",
      "Nhóm 5"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên thực hiện khai báo thông tin liên lạc và nơi cư trú đầy đủ theo yêu cầu của Đại học được cộng bao nhiêu điểm rèn luyện?",
    "answer": "Cộng 4 điểm",
    "options": [
      "Cộng 2 điểm",
      "Cộng 4 điểm",
      "Cộng 6 điểm",
      "Cộng 8 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Điều kiện bắt buộc từ học kỳ 3 trở đi đối với sinh viên chưa học hoặc chưa được miễn các học phần ngoại ngữ cơ bản (NNCB) để được đăng ký môn khác là gì?",
    "answer": "Bắt buộc phải đăng ký học song hành các học phần NNCB tương ứng ở mỗi kỳ",
    "options": [
      "Phải có chứng chỉ IELTS 6.0",
      "Bắt buộc phải đăng ký học song hành các học phần NNCB tương ứng ở mỗi kỳ",
      "Phải nộp bản cam kết học tập",
      "Bị dừng học 1 kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Địa chỉ Văn phòng Tổ tư vấn và hỗ trợ sinh viên (SSU) chuyên tư vấn tâm lý và hỗ trợ học tập nằm tại phòng nào?",
    "answer": "Phòng 101 - Nhà C1",
    "options": [
      "Phòng 101 - Nhà C1",
      "Phòng 208 - Nhà C2",
      "Phòng 106 - Nhà D4",
      "Tầng 1 - Nhà B9"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ tiếng Nhật JLPT trình độ N2 tương đương với Bậc mấy theo Khung 6 bậc?",
    "answer": "Bậc 4",
    "options": [
      "Bậc 3",
      "Bậc 4",
      "Bậc 5",
      "Bậc 6"
    ],
    "source": "js",
    "altAnswer": "Bậc 5"
  },
  {
    "question": "Sinh viên tham gia đầy đủ Tuần sinh hoạt công dân do Nhà trường tổ chức được cộng bao nhiêu điểm rèn luyện?",
    "answer": "Cộng 6 điểm",
    "options": [
      "Cộng 3 điểm",
      "Cộng 4 điểm",
      "Cộng 6 điểm",
      "Cộng 10 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Mức học phí áp dụng đối với sinh viên nước ngoài tự chi trả kinh phí học tập được tính bằng bao nhiêu lần so với quy định chuẩn?",
    "answer": "1.5 lần",
    "options": [
      "1.0 lần",
      "1.2 lần",
      "1.5 lần",
      "2.0 lần"
    ],
    "source": "docx"
  },
  {
    "question": "Quyết định ban hành Quy định về phân loại trình độ đầu vào và chuẩn ngoại ngữ K71 do lãnh đạo nào ký phê duyệt?",
    "answer": "Phó Giám đốc GS.TS. Vũ Văn Yêm",
    "options": [
      "Giám đốc GS.TS. Lê Anh Tuấn",
      "Phó Giám đốc GS.TS. Vũ Văn Yêm",
      "Trưởng Ban Đào tạo",
      "Trưởng Khoa Ngoại ngữ"
    ],
    "source": "docx"
  },
  {
    "question": "Ứng dụng di động chính thức hỗ trợ sinh viên theo dõi Điểm rèn luyện, cập nhật minh chứng và đăng ký hoạt động ngoại khóa là gì?",
    "answer": "App iCTSV",
    "options": [
      "App BusMap",
      "App iCTSV",
      "App BK-Pay",
      "App HUST-News"
    ],
    "source": "docx"
  },
  {
    "question": "Ký hiệu \"ĐK\" trong bảng danh mục học phần tiếng Anh cơ bản có ý nghĩa gì?",
    "answer": "Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu chưa học hoặc chưa được miễn",
    "options": [
      "Sinh viên được miễn đăng ký",
      "Sinh viên bắt buộc nghỉ học",
      "Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu nêu chưa học hoặc chưa được miễn",
      "Đăng ký học lại do bị điểm phạt"
    ],
    "source": "js",
    "altAnswer": "Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu nêu chưa học hoặc chưa được miễn"
  },
  {
    "question": "Các phòng Học nhóm dành cho sinh viên tại Thư viện Tạ Quang Bửu nằm từ phòng 501 đến phòng 508 thuộc tầng mấy?",
    "answer": "Tầng 5 Thư viện Tạ Quang Bửu",
    "options": [
      "Tầng 3",
      "Tầng 4",
      "Tầng 5 Thư viện Tạ Quang Bửu",
      "Tầng 2"
    ],
    "source": "docx"
  },
  {
    "question": "Đối với học phần từ 2 tín chỉ trở lên, nếu sinh viên bị điểm quá trình là điểm liệt (dưới 3,0 hoặc dưới 5,0 tùy môn) thì điểm kết thúc học phần được tính ra sao?",
    "answer": "Điểm học phần là điểm F",
    "options": [
      "Điểm học phần tính bằng đúng điểm thi cuối kỳ",
      "Vẫn tính trung bình cộng bình thường",
      "Điểm học phần là điểm F",
      "Cho thi lại giữa kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên có quyền nộp đơn xin tự nguyện thôi học không và sau khi ra quyết định có được tiếp nhận trở lại không?",
    "answer": "Được xin thôi học nhưng không được tiếp nhận trở lại",
    "options": [
      "Được xin thôi học và được tiếp nhận trở lại sau 1 năm",
      "Được xin thôi học nhưng không được tiếp nhận trở lại",
      "Không được tự nguyện xin thôi học",
      "Phải nộp phạt tiền học phí nếu xin thôi học"
    ],
    "source": "docx"
  },
  {
    "question": "Tiêu chuẩn xét Học bổng KKHT loại Khá (loại C) yêu cầu mức GPA và DRL tối thiểu là bao nhiêu?",
    "answer": "GPA >= 2.5 và DRL >= 65",
    "options": [
      "GPA >= 2.0 và DRL >= 50",
      "GPA >= 2.5 và DRL >= 65",
      "GPA >= 3.0 và DRL >= 70",
      "GPA >= 3.2 và DRL >= 80"
    ],
    "source": "docx"
  },
  {
    "question": "Điều kiện học tập đối với sinh viên từ năm thứ hai trở đi để đăng ký Chương trình Vay vốn tín dụng ưu đãi STEM là gì?",
    "answer": "Kết quả học tập trung bình (GPA) năm học liền trước đạt loại Giỏi trở lên (từ 3,2 trở lên)",
    "options": [
      "Kết quả học tập trung bình (GPA) năm học liền trước đạt loại Giỏi trở lên (từ 3,2 trở lên)",
      "Đạt CPA từ 2.5 trở lên",
      "Không bị điểm F nào",
      "Có giấy chứng nhận hộ nghèo"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên được xét \"Miễn học\" học phần ngoại ngữ cơ bản sẽ được ghi ký hiệu điểm gì trên hệ thống?",
    "answer": "Điểm R",
    "options": [
      "Điểm A",
      "Điểm P",
      "Điểm R",
      "Điểm M"
    ],
    "source": "docx"
  },
  {
    "question": "Trường hợp hai sinh viên có cùng điểm GPA ở cuối danh sách xét học bổng, tiêu chí ưu tiên nào được sử dụng để xếp hạng?",
    "answer": "Ưu tiên sinh viên có điểm rèn luyện cao hơn",
    "options": [
      "Ưu tiên sinh viên có hoàn cảnh khó khăn hơn",
      "Ưu tiên sinh viên có điểm rèn luyện cao hơn",
      "Ưu tiên sinh viên tích lũy nhiều tín chỉ hơn",
      "Bốc thăm ngẫu nhiên"
    ],
    "source": "docx"
  },
  {
    "question": "Khi tham gia các sự kiện, hội trường nhà trường, sinh viên phải có mặt trước giờ khai mạc ít nhất bao nhiêu phút?",
    "answer": "Trước 15 phút",
    "options": [
      "Trước 2 phút",
      "Trước 5 phút",
      "Trước 15 phút",
      "Đúng giờ khai mạc"
    ],
    "source": "docx"
  },
  {
    "question": "Văn bản pháp lý của Chính phủ quy định về chính sách học phí, miễn giảm học phí áp dụng cho năm học 2026-2027 tại ĐHBK Hà Nội là văn bản nào?",
    "answer": "Nghị định 238/2025/NĐ-CP ngày 03/09/2025",
    "options": [
      "Nghị định 01/2021/NĐ-CP",
      "Nghị định 238/2025/NĐ-CP ngày 03/09/2025",
      "Thông tư 14/2020/TT-BGDĐT",
      "Nghị định 100/2015/NĐ-CP"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên thuộc Nhóm 6 trong phân loại ngoại ngữ đầu vào sẽ nhận được quyền lợi gì?",
    "answer": "Được miễn học toàn bộ các học phần Tiếng Anh cơ sở (từ FL1131 đến FL1135)",
    "options": [
      "Được tặng 100% học phí kỳ 1",
      "Được miễn học toàn bộ các học phần Tiếng Anh cơ sở (từ FL1131 đến FL1135)",
      "Được cấp bằng tốt nghiệp ngay",
      "Miễn học môn Thể dục"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên nghỉ học tạm thời do tai nạn hoặc điều trị bệnh dài ngày sẽ KHÔNG tính vào thời gian chậm tiến độ nếu tổng thời gian nghỉ không vượt quá bao nhiêu học kỳ?",
    "answer": "02 học kỳ chính",
    "options": [
      "02 học kỳ chính",
      "03 học kỳ chính",
      "04 học kỳ chính",
      "05 học kỳ chính"
    ],
    "source": "js",
    "altAnswer": "04 học kỳ chính"
  },
  {
    "question": "Sau thời gian nào hàng ngày, sinh viên không được tự ý tụ tập tại các khu vực công cộng thuộc khuôn viên Nhà trường nếu không được phép?",
    "answer": "Sau 22h00",
    "options": [
      "Sau 17h00",
      "Sau 18h00",
      "Sau 21h00",
      "Sau 22h00"
    ],
    "source": "docx"
  },
  {
    "question": "Chuẩn ngoại ngữ đầu ra đối với Chương trình đào tạo Tiếng Hàn Khoa học và Công nghệ quy định ra sao?",
    "answer": "Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3",
    "options": [
      "Ngoại ngữ 1 (Tiếng Hàn) đạt Bậc 4, Ngoại ngữ 2 đạt Bậc 2",
      "Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3",
      "Chỉ cần đạt TOPIK 2",
      "Cả 2 ngoại ngữ đạt Bậc 4"
    ],
    "source": "docx"
  },
  {
    "question": "Mức Học bổng Chính phủ hỗ trợ hàng tháng cho Học viên Thạc sĩ ngành Vi mạch bán dẫn và các ngành Khoa học cơ bản là bao nhiêu?",
    "answer": "7.400.000 đồng / tháng",
    "options": [
      "5.500.000 đồng / tháng",
      "6.300.000 đồng / tháng",
      "7.400.000 đồng / tháng",
      "8.400.000 đồng / tháng"
    ],
    "source": "js",
    "altAnswer": "8.400.000 đồng / tháng"
  },
  {
    "question": "Địa chỉ văn phòng làm việc của Đoàn Thanh niên Đại học Bách khoa Hà Nội nằm tại phòng nào?",
    "answer": "Phòng 208 - Nhà C2",
    "options": [
      "Phòng 101 - Nhà B8",
      "Phòng 208 - Tòa nhà C2",
      "Phòng 102 - Nhà C1",
      "Tầng 1 - Nhà B9"
    ],
    "source": "js",
    "altAnswer": "Phòng 208 - Tòa nhà C2"
  },
  {
    "question": "Sinh viên đã có quyết định buộc thôi học, nếu thi lại và trúng tuyển mới vào trường thì việc công nhận học phần đã học được xử lý ra sao?",
    "answer": "Phải học lại toàn bộ chương trình, ngoại trừ học phần Giáo dục quốc phòng - an ninh đã được cấp chứng chỉ",
    "options": [
      "Bảo lưu toàn bộ các môn có điểm D trở lên",
      "Bảo lưu tất cả các môn trừ Đồ án tốt nghiệp",
      "Phải học lại toàn bộ chương trình, ngoại trừ học phần Giáo dục quốc phòng - an ninh đã được cấp chứng chỉ",
      "Được miễn trừ 50% số tín chỉ tích lũy cũ"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên nộp chậm học phí học kỳ hè quá thời hạn quy định sẽ bị xử lý như thế nào?",
    "answer": "Bị hủy kết quả đăng ký học phần trong học kỳ hè đó",
    "options": [
      "Bị đình chỉ học kỳ chính tiếp theo",
      "Bị hủy kết quả đăng ký học phần trong học kỳ hè đó",
      "Bị phạt tiền gấp đôi",
      "Bị trừ 100 điểm rèn luyện"
    ],
    "source": "docx"
  },
  {
    "question": "Việc xác nhận Giấy vay vốn ngân hàng cho sinh viên được Ban Công tác sinh viên trả kết quả tại địa điểm nào?",
    "answer": "Phòng 102 hoặc 103 - Nhà C1",
    "options": [
      "Phòng 101 - Nhà B9",
      "Phòng 102 hoặc 103 - Nhà C1",
      "Thư viện Tạ Quang Bửu",
      "Nhà B8"
    ],
    "source": "js",
    "altAnswer": "Nhà B8"
  },
  {
    "question": "Kết quả rèn luyện học kỳ đạt từ 80 điểm đến 89 điểm được xếp loại gì?",
    "answer": "Loại Tốt",
    "options": [
      "Loại Xuất sắc",
      "Loại Tốt",
      "Loại Khá",
      "Loại Trung bình"
    ],
    "source": "docx"
  },
  {
    "question": "Sau khi bảo vệ thành công luận văn Thạc sĩ, học viên phải nộp quyển luận văn tốt nghiệp cho Thư viện Tạ Quang Bửu trong thời hạn bao nhiêu ngày?",
    "answer": "Trong thời hạn 20 ngày kể từ ngày bảo vệ thành công",
    "options": [
      "Trong vòng 10 ngày",
      "Trong thời hạn 20 ngày kể từ ngày bảo vệ thành công",
      "Trong vòng 30 ngày",
      "Nộp trước ngày bảo vệ"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ IELTS Academic đạt từ 7.0 đến dưới 8.0 được quy đổi tương đương với Bậc mấy theo Phụ lục II Quy định ngoại ngữ K71?",
    "answer": "Bậc 5",
    "options": [
      "Bậc 3",
      "Bậc 4",
      "Bậc 5",
      "Bậc 6"
    ],
    "source": "docx"
  },
  {
    "question": "Các học phần Tiếng Anh cơ sở (NNCB) có được tính điểm vào GPA và CPA toàn khóa không?",
    "answer": "Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (P) hoặc không đạt",
    "options": [
      "Có tính bình thường như các môn học khác",
      "Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (R) hoặc không đạt",
      "Chỉ tính vào GPA học kỳ 1",
      "Tính nhân hệ số 2"
    ],
    "source": "js",
    "altAnswer": "Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (R) hoặc không đạt"
  },
  {
    "question": "Học phí đối với các lớp Vừa làm vừa học (VLVH) có sĩ số từ 10 đến 14 sinh viên áp dụng hệ số nhân học phí là bao nhiêu?",
    "answer": "Hệ số 1.5",
    "options": [
      "Hệ số 1.25",
      "Hệ số 1.5",
      "Hệ số 2.0",
      "Hệ số 2.5"
    ],
    "source": "docx"
  },
  {
    "question": "Nhà trường có công nhận chứng chỉ tiếng Anh thi theo hình thức trực tuyến tại nhà (ví dụ: TOEFL iBT Home Edition) không?",
    "answer": "Không công nhận các chứng chỉ tiếng Anh cấp trên cơ sở thi trực tuyến tại nhà",
    "options": [
      "Có công nhận nếu đạt điểm tối đa",
      "Không công nhận các chứng chỉ tiếng Anh cấp trên cơ sở thi trực tuyến tại nhà",
      "Công nhận cho sinh viên thuộc hệ đào tạo từ xa",
      "Công nhận nếu có xác nhận của giảng viên"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên học cùng lúc hai chương trình phải đăng ký học chương trình thứ hai muộn nhất trước thời điểm xét tốt nghiệp chương trình thứ nhất là bao lâu?",
    "answer": "Muộn nhất 02 năm trước thời điểm xét tốt nghiệp",
    "options": [
      "Muộn nhất 06 tháng",
      "Muộn nhất 01 năm",
      "Muộn nhất 02 năm trước thời điểm xét tốt nghiệp",
      "Không giới hạn thời gian"
    ],
    "source": "docx"
  },
  {
    "question": "Trụ sở làm việc của Tổ hỗ trợ triển khai hệ thống iCTSV đặt tại vị trí nào trong trường?",
    "answer": "Phòng 102 - Nhà D3-5",
    "options": [
      "Phòng 101 - Nhà C1",
      "Phòng 102 - Nhà D3-5",
      "Tầng 2 - Nhà C3",
      "Phòng 208 - Nhà C2"
    ],
    "source": "docx"
  },
  {
    "question": "Để đạt Học bổng KKHT loại Xuất sắc (loại A), sinh viên cần đạt tiêu chuẩn GPA và điểm rèn luyện (DRL) học kỳ tối thiểu là bao nhiêu?",
    "answer": "GPA >= 3.6 và DRL >= 90",
    "options": [
      "GPA >= 3.2 và DRL >= 80",
      "GPA >= 3.5 và DRL >= 85",
      "GPA >= 3.6 và DRL >= 90",
      "GPA >= 3.8 và DRL >= 95"
    ],
    "source": "docx"
  },
  {
    "question": "Đối với Chương trình đào tạo chuẩn có chuẩn đầu ra là tiếng Anh, yêu cầu trình độ tiếng Anh tối thiểu khi xét tốt nghiệp là gì?",
    "answer": "Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 3 trở lên",
    "options": [
      "Đạt trình độ Bậc 1 theo Khung 6 bậc",
      "Đạt trình độ Bậc 2 theo Khung 6 bậc",
      "Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 3 trở lên",
      "Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 5 trở lên"
    ],
    "source": "docx"
  },
  {
    "question": "Pháp lệnh của Ủy ban Thường vụ Quốc hội quy định ưu đãi người có công với cách mạng được áp dụng trong xét miễn giảm học phí là văn bản nào?",
    "answer": "Pháp lệnh số 02/2020/UBTVQH14 ngày 09/12/2020",
    "options": [
      "Pháp lệnh số 01/2012/UBTVQH13",
      "Pháp lệnh số 02/2020/UBTVQH14 ngày 09/12/2020",
      "Pháp lệnh số 05/2018/UBTVQH14",
      "Pháp lệnh số 10/2022/UBTVQH15"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân thông thường (ngoài y tế và nghĩa vụ quân sự) cần đáp ứng điều kiện tối thiểu nào?",
    "answer": "Đã học ít nhất một học kỳ tại trường",
    "options": [
      "Đã học ít nhất một học kỳ tại trường",
      "Phải có CPA >= 3.2",
      "Đã học xong năm thứ 3",
      "Không nợ bất kỳ tín chỉ nào"
    ],
    "source": "docx"
  },
  {
    "question": "Quỹ học bổng Khuyến khích học tập (KKHT) KHÔNG xét cấp cho sinh viên đăng ký ít hơn bao nhiêu tín chỉ trong học kỳ cấp học bổng?",
    "answer": "Đăng ký ít hơn 12 tín chỉ",
    "options": [
      "Đăng ký ít hơn 3 tín chỉ",
      "Đăng ký ít hơn 6 tín chỉ",
      "Đăng ký ít hơn 10 tín chỉ",
      "Đăng ký ít hơn 12 tín chỉ"
    ],
    "source": "docx"
  },
  {
    "question": "Hồ sơ đăng ký xét Học bổng Trần Đại Nghĩa bắt buộc phải có giấy tờ xác nhận của cơ quan nào?",
    "answer": "Mẫu đơn đăng ký có xác nhận hoàn cảnh khó khăn của Ủy ban nhân dân địa phương nơi gia đình cư trú",
    "options": [
      "Công an phường/xã",
      "Mẫu đơn đăng ký có xác nhận hoàn cảnh khó khăn của Ủy ban nhân dân địa phương nơi gia đình cư trú",
      "Ban Bảo vệ trường",
      "Hội Cựu sinh viên"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên đã hết thời gian học tập tối đa theo quy định nhưng chưa tốt nghiệp do thiếu môn GDQP-AN hoặc GDTC được gia hạn hoàn thiện trong thời gian tối đa bao lâu?",
    "answer": "Trong thời hạn tối đa 03 năm kể từ khi hết thời hạn học tập",
    "options": [
      "Trong thời hạn tối đa 01 năm",
      "Trong thời hạn tối đa 02 năm",
      "Trong thời hạn tối đa 03 năm kể từ khi hết thời hạn học tập",
      "Không được phép hoàn thiện"
    ],
    "source": "docx"
  },
  {
    "question": "Chính sách hỗ trợ phần chênh lệch học phí cho sinh viên diện Chế độ chính sách (CĐCS) KHÔNG áp dụng cho khối chương trình nào?",
    "answer": "Chương trình đào tạo Kỹ sư chuyên sâu",
    "options": [
      "Chương trình đào tạo chuẩn",
      "Chương trình đào tạo Kỹ sư chuyên sâu",
      "Chương trình thạc sĩ",
      "Tất cả các chương trình"
    ],
    "source": "js",
    "altAnswer": "Chương trình thạc sĩ"
  },
  {
    "question": "Học phí tại Đại học Bách khoa Hà Nội được tính dựa trên đơn vị đo lường nào?",
    "answer": "Số tín chỉ học phí (TCHP) của các học phần đăng ký",
    "options": [
      "Số buổi điểm danh",
      "Số tín chỉ học phí (TCHP) của các học phần đăng ký",
      "Mức phí cố định hàng tháng",
      "Tổng số môn học"
    ],
    "source": "docx"
  },
  {
    "question": "Đối với Chương trình đào tạo Kỹ sư chuyên sâu Thiết kế vi mạch, mức học phí/1 TCHP được tính bằng mức học phí của chương trình cử nhân nào?",
    "answer": "Cử nhân Kỹ thuật Điện tử - Viễn thông",
    "options": [
      "Cử nhân Khoa học máy tính",
      "Cử nhân Kỹ thuật Điện tử - Viễn thông",
      "Cử nhân Vật lý kỹ thuật",
      "Cử nhân Hệ thống thông tin"
    ],
    "source": "docx"
  },
  {
    "question": "Điều 22 Luật Giáo dục số 43/2019/QH14 nghiêm cấm các hành vi nào trong cơ sở giáo dục?",
    "answer": "Xúc phạm nhân phẩm nhà giáo, người học; Xuyên tạc nội dung giáo dục; Gian lận trong học tập, thi cử; Hút thuốc, uống rượu bia, gây rối trật tự",
    "options": [
      "Xúc phạm nhân phẩm nhà giáo/người học; Xuyên tạc nội dung giáo dục; Gian lận trong học tập; Hút thuốc, uống rượu bia, gây rối trật tự",
      "Đi học muộn quá 5 phút",
      "Không tham gia câu lạc bộ sinh viên",
      "Không nộp tiền quỹ lớp"
    ],
    "source": "js",
    "altAnswer": "Xúc phạm nhân phẩm nhà giáo/người học; Xuyên tạc nội dung giáo dục; Gian lận trong học tập; Hút thuốc, uống rượu bia, gây rối trật tự"
  },
  {
    "question": "Sinh viên đạt giải trong các cuộc thi chính thức cấp Quốc gia hoặc Quốc tế được cộng tối đa bao nhiêu điểm rèn luyện ở Mục 5.3?",
    "answer": "Cộng 15 điểm",
    "options": [
      "Cộng 10 điểm",
      "Cộng 12 điểm",
      "Cộng 15 điểm",
      "Cộng 20 điểm"
    ],
    "source": "js",
    "altAnswer": "Cộng 20 điểm"
  },
  {
    "question": "Không gian sinh hoạt chung dành cho sinh viên nội trú Ký túc xá nằm tại tầng mấy của tòa nhà B10?",
    "answer": "Tầng 5 nhà B10",
    "options": [
      "Tầng 1",
      "Tầng 3",
      "Tầng 5 - Tòa nhà B10",
      "Tầng thượng"
    ],
    "source": "js",
    "altAnswer": "Tầng 5 - Tòa nhà B10"
  },
  {
    "question": "Quy tắc xếp bậc đối với chứng chỉ TOEIC 4 kỹ năng trong quy định công nhận ngoại ngữ K71 được tính dựa trên tiêu chí nào?",
    "answer": "Bậc quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng",
    "options": [
      "Tính theo tổng điểm 4 kỹ năng",
      "Tính theo kỹ năng có điểm số cao nhất",
      "Mức quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng",
      "Lấy điểm kỹ năng Đọc làm chuẩn"
    ],
    "source": "js",
    "altAnswer": "Mức quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng"
  },
  {
    "question": "Học viên tốt nghiệp đại học ngành phù hợp khi theo chương trình Thạc sĩ phải học bổ sung tối đa bao nhiêu tín chỉ?",
    "answer": "Không phải học bổ sung",
    "options": [
      "Học bổ sung tối đa 10 tín chỉ",
      "Học bổ sung tối đa 15 tín chỉ",
      "Học bổ sung tối đa 20 tín chỉ",
      "Không phải học bổ sung"
    ],
    "source": "js",
    "altAnswer": "Học bổ sung tối đa 15 tín chỉ"
  },
  {
    "question": "Học phần \"Tiếng Pháp PFIEV 1\" (mã FL1801) có khối lượng thời lượng quy định là bao nhiêu?",
    "answer": "3(3-0-0-6)",
    "options": [
      "2(2-0-0-4)",
      "3(1-4-0-6)",
      "4(2-4-0-8)",
      "3(3-0-0-6)"
    ],
    "source": "js",
    "altAnswer": "4(2-4-0-8)"
  },
  {
    "question": "Sau khi có quyết định công nhận tốt nghiệp, Nhà trường sẽ cấp bằng tốt nghiệp cho sinh viên trong thời hạn bao lâu?",
    "answer": "Trong thời hạn 03 tháng",
    "options": [
      "Trong vòng 30 ngày",
      "Trong thời hạn 03 tháng",
      "Trong vòng 6 tháng",
      "Cấp ngay trong ngày ra quyết định"
    ],
    "source": "docx"
  },
  {
    "question": "Theo quy tắc quy đổi từ dải điểm thang 4 sang thang điểm 10 tương đương, điểm CPA từ 2,0 đến cận 2,5 tương ứng với dải điểm thang 10 nào?",
    "answer": "5.5 đến cận 7.0",
    "options": [
      "4.0 đến cận 5.5",
      "5.5 đến cận 7.0",
      "7.0 đến cận 8.0",
      "8.0 đến cận 9.0"
    ],
    "source": "docx"
  },
  {
    "question": "Trong buổi bảo vệ Đồ án tốt nghiệp tại hội đồng, nếu có 1 thành viên hội đồng cho điểm dưới 5 thì điểm bảo vệ cuối cùng của sinh viên được tính như thế nào?",
    "answer": "Bị điểm liệt và chỉ được ghi tối đa là 4,9 điểm",
    "options": [
      "Vẫn tính trung bình cộng bình thường",
      "Bị tính là điểm liệt và chỉ được ghi tối đa là 4.9 điểm",
      "Bị hủy toàn bộ kết quả học tập",
      "Bắt buộc bảo vệ lại vào ngày hôm sau"
    ],
    "source": "js",
    "altAnswer": "Bị tính là điểm liệt và chỉ được ghi tối đa là 4.9 điểm"
  },
  {
    "question": "Theo quy tắc quy đổi, chứng chỉ APTIS ESOL trình độ A2 (chỉ thể hiện 1 mức năng lực) được xếp vào bậc cơ sở nào trong Bảng quy đổi?",
    "answer": "Bậc 1.2",
    "options": [
      "Bậc 1.1",
      "Bậc 1.2",
      "Bậc 2.1",
      "Bậc 2.3"
    ],
    "source": "js",
    "altAnswer": "Bậc 2.1"
  },
  {
    "question": "Địa chỉ phòng Mượn giáo trình học tập tại Thư viện Tạ Quang Bửu là phòng nào?",
    "answer": "Phòng 111 Thư viện Tạ Quang Bửu",
    "options": [
      "Phòng 102",
      "Phòng 111 Thư viện Tạ Quang Bửu",
      "Phòng 302",
      "Phòng 509"
    ],
    "source": "docx"
  },
  {
    "question": "Quy định về phương tiện giao thông di chuyển vào khuôn viên Trường Bách khoa như thế nào?",
    "answer": "Xe đạp, xe máy, ô tô phải giảm tốc độ, quan sát và gửi xe đúng nơi quy định; xe taxi KHÔNG được vào trường",
    "options": [
      "Xe taxi được tự do di chuyển trong trường",
      "Xe đạp, xe máy, ô tô phải giảm tốc độ, quan sát và gửi xe đúng nơi quy định; xe taxi KHÔNG được vào trường",
      "Cấm tất cả phương tiện cơ giới",
      "Đi xe máy tốc độ tùy ý"
    ],
    "source": "docx"
  },
  {
    "question": "Nếu trung bình cộng điểm của người hướng dẫn và người phản biện đồ án tốt nghiệp cho dưới 5,0 thì sinh viên sẽ bị xử lý ra sao?",
    "answer": "Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng tính là 0 điểm",
    "options": [
      "Được điểm 5.0 để vào bảo vệ",
      "Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng tính là 0 điểm",
      "Được xin hoàn bảo vệ sang kỳ sau",
      "Được nộp lại đồ án sau 1 tuần"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên đăng ký học vượt quá số tín chỉ chuẩn quy định trong một học kỳ có được giảm đơn giá TCHP không?",
    "answer": "Vẫn tính đúng đơn giá TCHP quy định của chương trình đào tạo",
    "options": [
      "Được giảm 20% đơn giá",
      "Vẫn tính đúng đơn giá TCHP quy định của chương trình đào tạo",
      "Được miễn phí các tín chỉ vượt",
      "Tính gấp đôi đơn giá"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Quy chế đào tạo 2025, điều kiện trùng lặp nội dung chuyên môn tối thiểu giữa hai học phần để được xem là \"học phần tương đương\" là bao nhiêu?",
    "answer": "80%",
    "options": [
      "50%",
      "60%",
      "70%",
      "80%"
    ],
    "source": "docx"
  },
  {
    "question": "Chuẩn ngoại ngữ đầu ra xét tốt nghiệp đối với các chương trình chất lượng cao ELITECH giảng dạy bằng tiếng Pháp là gì?",
    "answer": "Chứng chỉ tiếng Pháp DELF B2 hoặc TCF tương đương",
    "options": [
      "DELF A2",
      "Chứng chỉ tiếng Pháp DELF B2 hoặc TCF tương đương",
      "TCF 100 điểm",
      "Không yêu cầu tiếng Pháp"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên đăng ký học lại học phần đã đạt điểm D để cải thiện CPA có phải đóng học phí không?",
    "answer": "Phải đóng 100% học phí theo số TCHP đăng ký",
    "options": [
      "Được miễn phí hoàn toàn",
      "Phải đóng 100% học phí theo số TCHP đăng ký",
      "Phải đóng 150% học phí",
      "Chỉ đóng 50%"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ tiếng Hàn TOPIK 4 tương ứng với Bậc mấy trong Khung năng lực 6 bậc?",
    "answer": "Bậc 4",
    "options": [
      "Bậc 2",
      "Bậc 3",
      "Bậc 4",
      "Bậc 5"
    ],
    "source": "docx"
  },
  {
    "question": "Mức Học bổng Chính phủ hỗ trợ hàng tháng đối với Học viên Thạc sĩ thuộc Chương trình đào tạo tài năng là bao nhiêu?",
    "answer": "8.400.000 đồng / tháng",
    "options": [
      "6.300.000 đồng / tháng",
      "7.400.000 đồng / tháng",
      "8.400.000 đồng / tháng",
      "10.000.000 đồng / tháng"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên là con đẻ của người hoạt động cách mạng trước ngày 01/01/1945 thuộc đối tượng hưởng chính sách học phí nào?",
    "answer": "Miễn 100% học phí",
    "options": [
      "Giảm 50% học phí",
      "Miễn 100% học phí",
      "Giảm 70% học phí",
      "Không được miễn giảm"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ Aptis ESOL (đủ 4 kỹ năng) đạt trình độ B2 được quy đổi tương đương Bậc mấy?",
    "answer": "Bậc 4",
    "options": [
      "Bậc 2",
      "Bậc 3",
      "Bậc 4",
      "Bậc 5"
    ],
    "source": "docx"
  },
  {
    "question": "Học phí các học phần thuộc hệ Vừa làm vừa học hoặc học Sau đại học được thực hiện cơ sở liên kết ngoài Đại học được tính bằng bao nhiêu % so với chương trình chuẩn?",
    "answer": "Bằng 90% học phí chương trình chuẩn, cộng thêm kinh phí phối hợp đào tạo",
    "options": [
      "Bằng 80%",
      "Bằng 90% học phí chương trình chuẩn, cộng thêm kinh phí phối hợp đào tạo",
      "Bằng 100%",
      "Bằng 110%"
    ],
    "source": "docx"
  },
  {
    "question": "Cơ quan nào chịu trách nhiệm đánh giá khả năng và mức độ ứng dụng thực tế của đề tài ĐATN trong quy trình xét cấp Học bổng \"Gắn kết quê hương\"?",
    "answer": "Hội đồng chấm Đồ án tốt nghiệp",
    "options": [
      "Ban Bảo vệ trường",
      "Hội đồng chấm Đồ án tốt nghiệp",
      "Ủy ban nhân dân tỉnh",
      "Hội Sinh viên"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên mồ côi cả cha lẫn mẹ thuộc Nhóm 3 khi đăng ký Học bổng Trần Đại Nghĩa được hưởng mức học bổng là bao nhiêu?",
    "answer": "100% học phí của các học phần trong chương trình đào tạo tại học kỳ xét",
    "options": [
      "30% học phí",
      "50% học phí",
      "100% học phí của các học phần trong chương trình đào tạo tại học kỳ xét",
      "Trợ cấp 2 triệu đồng/tháng"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên không hoàn thành chương trình đào tạo Thạc sĩ được quyền đề nghị cấp chứng nhận các học phần đã tích lũy trong thời hạn bao lâu?",
    "answer": "Trong thời hạn 5 năm kể từ ngày khóa học kết thúc",
    "options": [
      "Trong thời hạn 2 năm",
      "Trong thời hạn 3 năm",
      "Trong thời hạn 5 năm kể từ ngày khóa học kết thúc",
      "Vĩnh viễn"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên thuộc Nhóm 3 trong đối tượng xét cấp Học bổng Trần Đại Nghĩa là ai?",
    "answer": "Sinh viên mồ côi cả cha và mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi",
    "options": [
      "Sinh viên đạt giải Nhất Olympic",
      "Sinh viên mồ côi cả cha lẫn mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi",
      "Sinh viên bị kỷ luật khiển trách",
      "Sinh viên đi du học"
    ],
    "source": "js",
    "altAnswer": "Sinh viên mồ côi cả cha lẫn mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi"
  },
  {
    "question": "Sau khi kết quả đánh giá điểm rèn luyện dự kiến được công bố, sinh viên có thời gian tối thiểu bao nhiêu ngày làm việc để nộp kiến nghị nếu có thắc mắc?",
    "answer": "Kết quả dự kiến được công bố ít nhất 05 ngày làm việc trước khi chính thức công nhận để sinh viên kiến nghị",
    "options": [
      "Ít nhất 02 ngày làm việc",
      "Ít nhất 03 ngày làm việc",
      "Kết quả dự kiến được công bố ít nhất 05 ngày làm việc trước khi chính thức công nhận để sinh viên kiến nghị",
      "Không cho phép kiến nghị"
    ],
    "source": "docx"
  },
  {
    "question": "Tiêu chuẩn về điểm rèn luyện (DRL) học kỳ tối thiểu để đạt Học bổng KKHT loại B (Giỏi) là bao nhiêu điểm?",
    "answer": "DRL >= 80 điểm",
    "options": [
      "DRL >= 70 điểm",
      "DRL >= 80 điểm",
      "DRL >= 85 điểm",
      "DRL >= 90 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Điểm thay đổi quan trọng về cấu trúc học kỳ chính trong năm học từ Quy chế 2023 sang Quy chế 2025 là gì?",
    "answer": "Bỏ chia đợt A và B, một năm học bao gồm hai học kỳ chính và một học kỳ hè",
    "options": [
      "Bỏ chia đợt A và B, một năm học bao gồm hai học kỳ chính và một học kỳ hè",
      "Chia một học kỳ chính thành 3 đợt học A, B, C",
      "Bỏ hoàn toàn học kỳ hè",
      "Bổ sung thêm học kỳ chính thứ 3"
    ],
    "source": "docx"
  },
  {
    "question": "Trường hợp nào sau đây KHÔNG thuộc diện xét cấp Học bổng Trần Đại Nghĩa?",
    "answer": "Sinh viên bị kỷ luật từ mức cảnh cáo trở lên hoặc đã nhận học bổng khác trên 10 triệu đồng",
    "options": [
      "Sinh viên mồ côi cả cha lẫn mẹ",
      "Sinh viên bị kỷ luật từ mức cảnh cáo trở lên hoặc đã nhận học bổng khác trên 10 triệu đồng",
      "Sinh viên đạt giải Học sinh giỏi cấp tỉnh",
      "Sinh viên gặp thiên tài, hỏa hoạn"
    ],
    "source": "docx"
  },
  {
    "question": "Mức định mức cho vay tối đa theo Chương trình Vay vốn đối với sinh viên có hoàn cảnh khó khăn là bao nhiêu?",
    "answer": "4.000.000đ / sinh viên / tháng",
    "options": [
      "2.500.000 đồng / sinh viên / tháng",
      "3.000.000 đồng / sinh viên / tháng",
      "4.000.000 đồng / sinh viên / tháng",
      "5.000.000 đồng / sinh viên / tháng"
    ],
    "source": "js",
    "altAnswer": "4.000.000 đồng / sinh viên / tháng"
  },
  {
    "question": "Sinh viên đang chịu hình thức kỷ luật nào tại thời điểm xét học bổng KKHT sẽ KHÔNG được xét cấp học bổng?",
    "answer": "Chịu hình thức kỷ luật từ mức Khiển trách trở lên",
    "options": [
      "Bị trừ 2 điểm rèn luyện",
      "Chịu hình thức kỷ luật từ mức Khiển trách trở lên",
      "Bị nhắc nhở vì đi muộn",
      "Thi trượt 1 bài kiểm tra giữa kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Nếu sinh viên học một học phần tiếng Anh cơ sở nhưng không đạt điểm kết thúc (bị điểm F), sinh viên phải xử lý ra sao?",
    "answer": "Phải tự đăng ký học lại học phần đó ở các học kỳ tiếp theo",
    "options": [
      "Bị buộc thôi học",
      "Phải đăng ký học lại học phần đó ở các kỳ tiếp theo",
      "Được nhà trường tự động nâng điểm P",
      "Chuyển sang học tiếng Pháp"
    ],
    "source": "js",
    "altAnswer": "Phải đăng ký học lại học phần đó ở các kỳ tiếp theo"
  },
  {
    "question": "Trong Bảng đánh giá điểm rèn luyện sinh viên, Tiêu chí 1 \"Chấp hành pháp luật và nội quy, quy chế của nhà trường\" có điểm cộng tối đa là bao nhiêu?",
    "answer": "Tối đa 30 điểm",
    "options": [
      "Tối đa 15 điểm",
      "Tối đa 20 điểm",
      "Tối đa 25 điểm",
      "Tối đa 30 điểm"
    ],
    "source": "js",
    "altAnswer": "Tối đa 25 điểm"
  },
  {
    "question": "Sinh viên là con đẻ hoặc con nuôi hợp pháp của Người có công với cách mạng được hưởng mức hỗ trợ miễn giảm học phí là bao nhiêu?",
    "answer": "Miễn 100% học phí",
    "options": [
      "Giảm 50% học phí",
      "Giảm 70% học phí",
      "Miễn 100% học phí",
      "Hỗ trợ 2 triệu/kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Mức điểm trung bình tích lũy (CPA) tối thiểu sinh viên cần đạt khi xét công nhận tốt nghiệp đại học là bao nhiêu?",
    "answer": "CPA >= 2,00",
    "options": [
      "CPA >= 1,50",
      "CPA >= 1,80",
      "CPA >= 2,00",
      "CPA >= 2,50"
    ],
    "source": "docx"
  },
  {
    "question": "Học phần \"FL1135 Tiếng Anh cơ sở 5\" có khối lượng thời lượng quy định là bao nhiêu?",
    "answer": "3(3-0-0-6)",
    "options": [
      "2(2-0-0-4)",
      "4(2-4-0-8)",
      "3(3-0-0-6)",
      "5(0-10-0-10)"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ tiếng Anh quốc tế dùng để xét công nhận chuẩn đầu ra phải đảm bảo điều kiện thời hạn như thế nào?",
    "answer": "Cấp trong vòng 2 năm tính đến thời điểm xét chuẩn ngoại ngữ đầu ra và còn hiệu lực",
    "options": [
      "Cấp trong vòng 1 năm",
      "Cấp trong vòng 2 năm tính đến thời điểm xét chuẩn ngoại ngữ đầu ra và còn hiệu lực",
      "Cấp trong vòng 3 năm",
      "Có giá trị vô thời hạn"
    ],
    "source": "docx"
  },
  {
    "question": "Hành vi nào sau đây bị NGHIÊM CẤM đối với sinh viên trong giờ học trên lớp?",
    "answer": "Tự ý ghi âm, ghi hình, chụp ảnh trong giờ học khi chưa được sự đồng ý của giáo viên",
    "options": [
      "Tự ý ghi âm, ghi hình, chụp ảnh trong giờ học khi chưa được sự đồng ý của giáo viên",
      "Lắng nghe giảng bài",
      "Phát biểu ý kiến khi giảng viên yêu cầu",
      "Ghi chép bài"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Bảng 2.1 Phụ lục II, chứng chỉ IELTS Academic đạt mức điểm 2.0 được quy đổi tương đương Bậc cơ sở nào?",
    "answer": "Không được quy đổi",
    "options": [
      "Bậc 1.1",
      "Bậc 1.2",
      "Bậc 2.1",
      "Không được quy đổi"
    ],
    "source": "docx"
  },
  {
    "question": "Trường hợp sinh viên có đơn xin nghỉ học tạm thời hoặc thôi học được chấp thuận trong 7 tuần đầu của học kỳ chính thì nghĩa vụ học phí là bao nhiêu?",
    "answer": "Phải đóng 50% học phí của học kỳ đó",
    "options": [
      "Được miễn 100% học phí",
      "Phải đóng 50% học phí của học kỳ đó",
      "Phải đóng 100% học phí",
      "Đóng 20% học phí"
    ],
    "source": "docx"
  },
  {
    "question": "Cổng thông tin chính thức hỗ trợ hướng nghiệp, tìm việc làm thêm và thực tập dành cho sinh viên Bách khoa có tên là gì?",
    "answer": "Cổng thông tin HustWork (hustwork.hust.edu.vn)",
    "options": [
      "Cổng thông tin HustWork (hustwork.hust.edu.vn)",
      "Cổng BK-Jobs",
      "Cổng Vieclam24h",
      "Cổng HUST-Career"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên được phép đăng ký học chương trình đào tạo thứ hai (bằng kép) sớm nhất khi nào?",
    "answer": "Khi đã được xếp trình độ năm thứ hai của chương trình thứ nhất",
    "options": [
      "Ngay từ học kỳ 1 năm thứ nhất",
      "Khi đã được xếp trình độ năm thứ hai của chương trình thứ nhất",
      "Sau khi đã tốt nghiệp chương trình thứ nhất",
      "Khi có CPA 4.0"
    ],
    "source": "docx"
  },
  {
    "question": "Trường hợp lớp học phần bị hủy do không đủ sĩ số tối thiểu theo quy định thì số tiền học phí sinh viên đã nộp xử lý ra sao?",
    "answer": "Được hoàn trả hoặc trừ vào nghĩa vụ học phí của học kỳ tiếp theo",
    "options": [
      "Bị thu hồi vào quỹ trường",
      "Được hoàn trả hoặc trừ vào nghĩa vụ học phí của học kỳ tiếp theo",
      "Chuyển thành tiền phạt",
      "Mua sách thư viện"
    ],
    "source": "docx"
  },
  {
    "question": "Yêu cầu về các kỹ năng đối với chứng chỉ tiếng Anh quốc tế được sử dụng để xét chuẩn ngoại ngữ đầu ra là gì?",
    "answer": "Phải đánh giá đầy đủ 4 kỹ năng (Nghe, Nói, Đọc, Viết) và còn hiệu lực trong vòng 2 năm",
    "options": [
      "Chỉ cần 2 kỹ năng Nghe và Đọc",
      "Phải đánh giá đầy đủ 4 kỹ năng (Nghe, Nói, Đọc, Viết) và còn hiệu lực trong vòng 2 năm",
      "Chỉ cần kỹ năng Viết và Đọc",
      "Không giới hạn thời hạn cấp chứng chỉ"
    ],
    "source": "docx"
  },
  {
    "question": "Mức học phí đối với các học phần học ở học kỳ hè được tính như thế nào so với học kỳ chính?",
    "answer": "Bằng 1,0 lần mức học phí kỳ chính",
    "options": [
      "Bằng 1,0 lần mức học phí kỳ chính",
      "Bằng 1,2 lần mức học phí kỳ chính",
      "Bằng 1,5 lần mức học phí kỳ chính",
      "Bằng 2,0 lần mức học phí kỳ chính"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân sẽ bị xét buộc thôi học nếu tổng thời gian nghỉ vượt quá bao nhiêu học kỳ?",
    "answer": "Nghỉ quá 04 học kỳ chính",
    "options": [
      "Nghỉ quá 02 học kỳ chính",
      "Nghỉ quá 03 học kỳ chính",
      "Nghỉ quá 04 học kỳ chính",
      "Nghỉ quá 05 học kỳ chính"
    ],
    "source": "docx"
  },
  {
    "question": "Chứng chỉ Cambridge English Qualifications trình độ B2 First (FCE) đạt từ 160-179 điểm được quy đổi sang Bậc mấy?",
    "answer": "Bậc 4",
    "options": [
      "Bậc 2",
      "Bậc 3",
      "Bậc 4",
      "Bậc 5"
    ],
    "source": "docx"
  },
  {
    "question": "Quy mô lớp học phần tối thiểu đối với chương trình đào tạo thạc sĩ theo Quy chế 2025 được điều chỉnh thành bao nhiêu học viên?",
    "answer": "5 học viên",
    "options": [
      "20 học viên",
      "15 học viên",
      "10 học viên",
      "5 học viên"
    ],
    "source": "docx"
  },
  {
    "question": "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm Thi đánh giá tư duy (TSA) cần đạt điểm xét tuyển tối thiểu là bao nhiêu?",
    "answer": "Từ 60,00/100 trở lên",
    "options": [
      "Từ 60,00/100 trở lên",
      "Từ 65,50/100 trở lên",
      "Từ 72,47/100 trở lên",
      "Từ 80,00/100 trở lên"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên là người dân tộc thiểu số rất ít người ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn được hưởng mức hỗ trợ học phí ra sao?",
    "answer": "Miễn 100% học phí",
    "options": [
      "Miễn 100% học phí",
      "Giảm 70% học phí",
      "Giảm 50% học phí",
      "Giảm 30% học phí"
    ],
    "source": "docx"
  },
  {
    "question": "Học phần \"FL1132 Tiếng Anh cơ sở 2\" có thời lượng và số tín chỉ quy định là bao nhiêu?",
    "answer": "3(3-0-0-6)",
    "options": [
      "2(2-0-0-4)",
      "3(3-0-0-6)",
      "4(2-4-0-8)",
      "5(5-0-0-10)"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên có cha hoặc mẹ bị tai nạn lao động hưởng trợ cấp thường xuyên được hưởng mức giảm học phí là bao nhiêu?",
    "answer": "Giảm 50% học phí",
    "options": [
      "Miễn 100% học phí",
      "Giảm 70% học phí",
      "Giảm 50% học phí",
      "Giảm 30% học phí"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm rèn luyện (DRL)?",
    "answer": "Trừ 10 điểm",
    "options": [
      "Trừ 5 điểm",
      "Trừ 10 điểm",
      "Trừ 20 điểm",
      "Trừ 50 điểm"
    ],
    "source": "js",
    "altAnswer": "Trừ 20 điểm"
  },
  {
    "question": "Sinh viên nộp hồ sơ văn bản giấy đăng ký Học bổng Trần Đại Nghĩa tại đâu?",
    "answer": "Phòng C1 - 102 (gặp cô Nghiêm Thị Kim Chi)",
    "options": [
      "Phòng C1 - 102 (gặp cô Nghiệm/ cô Kim Chi)",
      "Thư viện Tạ Quang Bửu",
      "Hội trường C2",
      "Trung tâm Y tế Bách khoa"
    ],
    "source": "js",
    "altAnswer": "Phòng C1 - 102 (gặp cô Nghiệm/ cô Kim Chi)"
  },
  {
    "question": "Quy định về chương trình ngoại ngữ cơ bản K71 KHÔNG áp dụng cho đối tượng sinh viên nào?",
    "answer": "Sinh viên ngành Ngôn ngữ Anh",
    "options": [
      "Sinh viên hệ đào tạo tài năng",
      "Sinh viên ngành Ngôn ngữ Anh",
      "Sinh viên là người nước ngoài theo học CTĐT có ngôn ngữ giảng dạy chính là tiếng Việt",
      "Sinh viên học bằng kép"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên từ K67 đến K70 (Nhóm 2) đăng ký Học bổng Trần Đại Nghĩa cần đạt mức GPA học kỳ 2025.2 tối thiểu là bao nhiêu?",
    "answer": "GPA ≥ 2,0",
    "options": [
      "GPA >= 1.5",
      "GPA >= 2.0",
      "GPA >= 2.5",
      "GPA >= 3.2"
    ],
    "source": "js",
    "altAnswer": "GPA >= 2.5"
  },
  {
    "question": "Sinh viên tự ý chuyển sang ngành học KHÔNG thuộc danh mục ưu tiên của Nghị định 179 sẽ bị xử lý học bổng ra sao?",
    "answer": "Không tiếp tục được hưởng học bổng và phải hoàn trả kinh phí đã nhận thông qua cơ sở đào tạo",
    "options": [
      "Tiếp tục được nhận bình thường",
      "Không tiếp tục được hưởng học bổng và phải hoàn trả kinh phí đã nhận thông qua cơ sở đào tạo",
      "Được giảm 50% học bổng",
      "Chuyển học bổng cho người khác"
    ],
    "source": "docx"
  },
  {
    "question": "Đối với chương trình đào tạo Thạc sĩ, lớp học phần có quy mô dưới 5 học viên được xem xét tổ chức dưới hình thức nào?",
    "answer": "Mở lớp dưới hình thức đồ án, khóa luận hoặc tiểu luận chuyên đề thay thế giờ lên lớp",
    "options": [
      "Bị hủy lớp bắt buộc",
      "Mở lớp dưới hình thức đồ án, khóa luận hoặc tiểu luận chuyên đề thay thế giờ lên lớp",
      "Học viên phải tự học trực tuyến",
      "Ghép học chung với sinh viên đại học"
    ],
    "source": "docx"
  },
  {
    "question": "Địa điểm làm thủ tục và nhận Giấy xác nhận ưu đãi giáo dục đào tạo cho sinh viên diện Chế độ chính sách là phòng nào?",
    "answer": "Phòng 102 - Nhà C1",
    "options": [
      "Phòng 101 - Nhà B9",
      "Phòng 102 - Nhà C1",
      "Phòng 208 - Nhà C2",
      "Phòng 106 - Nhà D4"
    ],
    "source": "docx"
  },
  {
    "question": "Kênh thanh toán học phí trực tuyến chính thức và an toàn dành cho sinh viên ĐHBK Hà Nội là gì?",
    "answer": "Nộp trên Cổng thông tin sinh viên ctt.hust.edu.vn / app eHUST qua tài khoản ngân hàng liên kết",
    "options": [
      "Chuyển khoản qua số tài khoản cá nhân của giảng viên",
      "Nộp trên Cổng thông tin sinh viên ctsv.hust.edu.vn / app iCTSV qua tài khoản ngân hàng liên kết",
      "Nộp tiền mặt cho lớp trưởng",
      "Đưa tiền mặt cho Ban Bảo vệ"
    ],
    "source": "js",
    "altAnswer": "Nộp trên Cổng thông tin sinh viên ctsv.hust.edu.vn / app iCTSV qua tài khoản ngân hàng liên kết"
  },
  {
    "question": "Khối lượng học tập tối đa được xem xét công nhận và chuyển đổi tín chỉ từ cơ sở đào tạo khác không được vượt quá bao nhiêu % khối lượng toàn khóa?",
    "answer": "Không vượt quá 50%",
    "options": [
      "Không vượt quá 30%",
      "Không vượt quá 40%",
      "Không vượt quá 50%",
      "Không vượt quá 60%"
    ],
    "source": "docx"
  },
  {
    "question": "Học viên cao học nghỉ học tạm thời vì lý do cá nhân thông thường được phép nghỉ thời gian tối đa là bao nhiêu?",
    "answer": "Tối đa 12 tháng (và được tính vào thời gian học tập)",
    "options": [
      "Tối đa 6 tháng",
      "Tối đa 12 tháng (và được tính vào thời gian học tập)",
      "Tối đa 18 tháng",
      "Tối đa 24 tháng"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên K71 đăng ký học các lớp tiếng Anh tăng cường/dịch vụ ngoài giờ có phải nộp học phí không?",
    "answer": "Phải nộp học phí theo quy định đối với lớp học phần dịch vụ/tăng cường",
    "options": [
      "Được miễn phí hoàn toàn",
      "Phải nộp học phí theo quy định đối với lớp học phần dịch vụ/tăng cường",
      "Được trừ vào tiền học bổng",
      "Do Đoàn Thanh niên chi trả"
    ],
    "source": "docx"
  },
  {
    "question": "Quy định về \"Học phần song hành\" áp dụng cho hai học phần A và B được hiểu như thế nào?",
    "answer": "Sinh viên phải theo học học phần A trước hoặc học đồng thời với học phần B",
    "options": [
      "Sinh viên bắt buộc phải học học phần A trước 1 năm",
      "Sinh viên phải học học phần A trước hoặc học đồng thời với học phần B",
      "Sinh viên được miễn học phần B nếu đã qua học phần A",
      "Hai học phần được thi chung trong một buổi thi"
    ],
    "source": "js",
    "altAnswer": "Sinh viên phải học học phần A trước hoặc học đồng thời với học phần B"
  },
  {
    "question": "Mức học phí áp dụng cho các lớp học phần tổ chức theo yêu cầu riêng của 01 sinh viên (lớp đặc biệt) do cấp nào quyết định?",
    "answer": "Giám đốc Đại học Bách khoa Hà Nội quyết định",
    "options": [
      "Giảng viên phụ trách môn học",
      "Giám đốc Đại học Bách khoa Hà Nội quyết định",
      "Trưởng khoa",
      "Lớp trưởng"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên đang học cùng lúc hai chương trình đào tạo sẽ bị dừng học chương trình thứ hai khi nào?",
    "answer": "Khi bị cảnh báo học tập ở chương trình thứ nhất",
    "options": [
      "Khi bị cảnh cáo học tập ở chương trình thứ nhất",
      "Khi bị điểm C ở chương trình 2",
      "Khi không tham gia câu lạc bộ",
      "Khi rút bớt tín chỉ ở kỳ hè"
    ],
    "source": "js",
    "altAnswer": "Khi bị cảnh cáo học tập ở chương trình thứ nhất"
  },
  {
    "question": "Chứng chỉ tiếng Trung HSK 4 kết hợp HSKK trung cấp được Phụ lục VIII xếp vào Bậc mấy theo Khung 6 bậc?",
    "answer": "Bậc 3",
    "options": [
      "Bậc 2",
      "Bậc 3",
      "Bậc 4",
      "Bậc 5"
    ],
    "source": "docx"
  },
  {
    "question": "Quy mô sức chứa tổng cộng của Ký túc xá Bách khoa hiện nay là bao nhiêu chỗ ở?",
    "answer": "4.500 chỗ ở (gồm 8 tòa nhà 4-5 tầng)",
    "options": [
      "2.000 chỗ ở",
      "3.000 chỗ ở",
      "4.500 chỗ ở (gồm 8 tòa nhà 4-5 tầng)",
      "10.000 chỗ ở"
    ],
    "source": "docx"
  },
  {
    "question": "Học phí của các lớp \"Học phần rút gọn\" (cho sinh viên học lại) được tính bằng bao nhiêu so với lớp bình thường?",
    "answer": "Bằng 50%",
    "options": [
      "Bằng 100%",
      "Bằng 75%",
      "Bằng 50%",
      "Miễn phí 100%"
    ],
    "source": "docx"
  },
  {
    "question": "Trọng số của điểm thi cuối kỳ đối với học phần từ 2 tín chỉ trở lên được quy định nằm trong khoảng nào?",
    "answer": "Từ 0,5 đến 0,8",
    "options": [
      "Từ 0,3 đến 0,5",
      "Từ 0,4 đến 0,6",
      "Từ 0,5 đến 0,8",
      "Cố định là 0,7"
    ],
    "source": "docx"
  },
  {
    "question": "Giá trị của Học bổng KKHT loại Xuất sắc (loại A) bằng bao nhiêu lần so với loại Khá (loại C)?",
    "answer": "Bằng 1.5 lần",
    "options": [
      "Bằng 1.2 lần",
      "Bằng 1.3 lần",
      "Bằng 1.5 lần",
      "Bằng 2.0 lần"
    ],
    "source": "docx"
  },
  {
    "question": "Quy đổi 1 TCHT học phần \"Lý thuyết / Bài tập\" hệ đại học chính quy tương tương ứng bằng bao nhiêu TCHP?",
    "answer": "1.0 TCHP",
    "options": [
      "1.0 TCHP",
      "1.2 TCHP",
      "1.5 TCHP",
      "2.0 TCHP"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Quy chế đào tạo, \"Học phần tiên quyết\" của một học phần B được hiểu như thế nào?",
    "answer": "Sinh viên phải học xong học phần A và đạt điểm đạt trở lên mới được đăng ký học học phần B",
    "options": [
      "Sinh viên chỉ cần đăng ký học phần A là đủ điều kiện học B",
      "Sinh viên phải học xong học phần A và đạt điểm đạt trở lên mới được đăng ký học học phần B",
      "Sinh viên phải học song song học phần A và học phần B trong cùng một kỳ",
      "Sinh viên bị điểm F học phần A vẫn được học học phần B"
    ],
    "source": "docx"
  },
  {
    "question": "Mức Học bổng Chính phủ (Nghị định 179/2026/NĐ-CP) hỗ trợ hàng tháng cho sinh viên ngành Kỹ thuật then chốt & Công nghệ chiến lược là bao nhiêu?",
    "answer": "5.500.000 đồng / tháng",
    "options": [
      "3.000.000 đồng / tháng",
      "3.700.000 đồng / tháng",
      "4.200.000 đồng / tháng",
      "5.500.000 đồng / tháng"
    ],
    "source": "docx"
  },
  {
    "question": "Mức điểm rèn luyện (DRL) học kỳ 2025.2 tối thiểu đối với sinh viên Nhóm 2 đăng ký Học bổng Trần Đại Nghĩa là bao nhiêu điểm?",
    "answer": "DRL >= 70 điểm",
    "options": [
      "DRL >= 50 điểm",
      "DRL >= 65 điểm",
      "DRL >= 70 điểm",
      "DRL >= 80 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Số điện thoại đường dây nóng (Hotline) chính thức của Tổ tư vấn và hỗ trợ sinh viên (SSU) là số nào?",
    "answer": "024 3869 2942",
    "options": [
      "024 3869 2110",
      "024 3869 3108",
      "024 3869 2942",
      "024 3868 1954"
    ],
    "source": "js",
    "altAnswer": "024 3868 1954"
  },
  {
    "question": "Sinh viên có được tự ý hủy lớp học phần ngoại ngữ cơ bản đã đăng ký học song hành trong học kỳ không?",
    "answer": "Không được phép hủy, trừ trường hợp xin rút hoặc chủ động rút toàn bộ đăng ký học tập trong học kỳ",
    "options": [
      "Được hủy tự do trên hệ thống",
      "Không được phép hủy, trừ trường hợp xin rút hoặc chủ động rút toàn bộ đăng ký học tập trong học kỳ",
      "Được hủy nếu đóng phí phạt",
      "Được hủy ở tuần thứ 5"
    ],
    "source": "docx"
  },
  {
    "question": "Văn phòng làm việc của Hội Sinh viên Đại học Bách khoa Hà Nội đặt tại vị trí nào?",
    "answer": "Phòng 106 - Nhà D4",
    "options": [
      "Phòng 101 - Tòa nhà B1",
      "Phòng 208 - Nhà C2",
      "Phòng 106 - Nhà D4",
      "Nhà C1B"
    ],
    "source": "docx"
  },
  {
    "question": "Kết quả bài thi kiểm tra tiếng Anh đầu vào (HUST English Placement Test) đối với tân sinh viên K71 được sử dụng để làm gì?",
    "answer": "Phân loại trình độ đầu vào, xếp lớp và xét miễn các học phần ngoại ngữ cơ bản",
    "options": [
      "Xét đạt chuẩn ngoại ngữ đầu ra khi tốt nghiệp",
      "Phân loại trình độ đầu vào, xếp lớp và miễn các học phần ngoại ngữ cơ bản",
      "Quy đổi trực tiếp thành điểm thi tốt nghiệp đại học",
      "Cộng trực tiếp vào điểm trung bình tích lũy CPA"
    ],
    "source": "js",
    "altAnswer": "Phân loại trình độ đầu vào, xếp lớp và miễn các học phần ngoại ngữ cơ bản"
  },
  {
    "question": "Văn phòng Quản lý Ký túc xá Bách khoa và Trung tâm Dịch vụ & Hỗ trợ Bách khoa nằm tại đâu?",
    "answer": "Tầng 1 - Nhà B9",
    "options": [
      "Tầng 1 - Nhà B9",
      "Tầng 5 - Nhà B10",
      "Tòa nhà C1",
      "Nhà D3"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Quy chế đào tạo 2025, điểm trung bình toàn khóa (CPA tốt nghiệp) cho chương trình Kỹ sư được tính như thế nào?",
    "answer": "Chỉ tính dựa trên các học phần thuộc chương trình đào tạo kỹ sư đăng ký tốt nghiệp",
    "options": [
      "Tính trung bình của cả giai đoạn Cử nhân và Kỹ sư",
      "Chỉ tính dựa trên các học phần thuộc chương trình đào tạo kỹ sư đăng ký tốt nghiệp",
      "Lấy điểm CPA của giai đoạn Cử nhân làm điểm tốt nghiệp Kỹ sư",
      "Cộng trung bình cộng của tất cả các môn học từ năm thứ 1 đến năm thứ 5"
    ],
    "source": "docx"
  },
  {
    "question": "Quỹ học bổng Khuyến khích học tập (KKHT) được trích từ nguồn nào và chiếm tỷ lệ bao nhiêu?",
    "answer": "Trích từ nguồn học phí, bằng 8% học phí của học kỳ lấy điểm xét cấp học bổng",
    "options": [
      "Ngân sách nhà nước, chiếm 5%",
      "Trích từ nguồn học phí, bằng 8% học phí của học kỳ lấy điểm xét cấp học bổng",
      "Tài trợ của doanh nghiệp, chiếm 10%",
      "Quỹ cựu sinh viên, chiếm 12%"
    ],
    "source": "docx"
  },
  {
    "question": "Ký hiệu điểm chữ \"X\" trong hệ thống quản lý học tập đại diện cho trạng thái nào?",
    "answer": "Điểm học phần chưa hoàn thiện do thiếu dữ liệu đánh giá",
    "options": [
      "Học phần đạt điểm xuất sắc",
      "Điểm học phần chưa hoàn thiện do thiếu dữ liệu đánh giá",
      "Sinh viên bỏ thi không lý do",
      "Học phần được công nhận tương đương"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên có kết quả học tập và rèn luyện của học kỳ trước đó đạt mức Giỏi (GPA >= 3.2, DRL >= 80) được cộng bao nhiêu điểm rèn luyện?",
    "answer": "Cộng 4 điểm",
    "options": [
      "Cộng 2 điểm",
      "Cộng 4 điểm",
      "Cộng 6 điểm",
      "Cộng 8 điểm"
    ],
    "source": "docx"
  },
  {
    "question": "Trường hợp nào sau đây sinh viên KHÔNG được quyền đề nghị phúc khảo hoặc khiếu nại điểm?",
    "answer": "Bài thi trắc nghiệm trên máy tính",
    "options": [
      "Bài thi viết tự luận cuối kỳ",
      "Bài thi trắc nghiệm trên máy tính",
      "Các học phần được tổ chức thi theo hình thức vấn đáp hoặc đánh giá trước hội đồng",
      "Bài kiểm tra giữa kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Điều kiện về ngoại ngữ để sinh viên chương trình Việt - Pháp PFIEV được đăng ký nhận Phụ lục văn bằng kỹ sư của phía Pháp là gì?",
    "answer": "Đạt tối thiểu DELF B1 và Chứng chỉ TOEIC quốc tế (Nghe & Đọc) đạt từ 600 điểm trở lên",
    "options": [
      "Đạt DELF A2 và TOEIC 450",
      "Đạt tối thiểu DELF B1 và Chứng chỉ TOEIC quốc tế (Nghe & Đọc) đạt từ 600 điểm trở lên",
      "Đạt DELF B2",
      "Chỉ cần qua các môn chuyên ngành"
    ],
    "source": "docx"
  },
  {
    "question": "Theo Quy chế đào tạo 2025, sinh viên bị hạn chế khối lượng đăng ký học tập khi nào?",
    "answer": "Khi bị cảnh báo học tập mức 1",
    "options": [
      "Khi chưa đạt chuẩn ngoại ngữ theo trình độ năm học",
      "Khi bị cảnh báo học tập từ mức 2 trở lên tại học kỳ 1 của năm học",
      "Khi bị cảnh báo học tập mức 1",
      "Tất cả sinh viên có CPA < 2.0"
    ],
    "source": "docx"
  },
  {
    "question": "Bảng quy đổi chứng chỉ ngoại ngữ ban hành kèm Quy định K71 có áp dụng cho sinh viên các khóa cũ (từ K70 trở về trước) không?",
    "answer": "Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực; nếu mức mới khác cũ thì áp dụng mức cao hơn",
    "options": [
      "Không áp dụng cho khóa cũ",
      "Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực nếu mức mới khác có áp dụng mức cao hơn",
      "Bắt buộc khóa cũ phải thi lại",
      "Chỉ áp dụng cho hệ tài năng"
    ],
    "source": "js",
    "altAnswer": "Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực nếu mức mới khác có áp dụng mức cao hơn"
  },
  {
    "question": "Học viên thuộc chương trình tích hợp Cử nhân - Thạc sĩ được đăng ký học trước tối đa bao nhiêu tín chỉ thuộc CTĐT thạc sĩ khi còn ở giai đoạn cử nhân?",
    "answer": "Tối đa 15 tín chỉ",
    "options": [
      "Tối đa 10 tín chỉ",
      "Tối đa 15 tín chỉ",
      "Tối đa 20 tín chỉ",
      "Tối đa 30 tín chỉ"
    ],
    "source": "docx"
  },
  {
    "question": "Thời gian hưởng Học bổng Chính phủ tối đa cho người học thuộc chương trình đào tạo Cử nhân là bao nhiêu năm?",
    "answer": "Không quá 04 năm",
    "options": [
      "Không quá 03 năm",
      "Không quá 04 năm",
      "Không quá 05 năm",
      "Hưởng vĩnh viễn"
    ],
    "source": "docx"
  },
  {
    "question": "Quy đổi 1 TCHT học phần \"Thực tập tốt nghiệp\" hệ đại học chính quy tương ứng ứng bằng bao nhiêu TCHP?",
    "answer": "2.5 TCHP",
    "options": [
      "1.0 TCHP",
      "1.5 TCHP",
      "2.0 TCHP",
      "2.5 TCHP"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên có hành vi nộp chứng chỉ ngoại ngữ giả mạo để gian lận chuẩn đầu ra sẽ bị chịu mức xử lý kỷ luật nào?",
    "answer": "Bị đình chỉ học tập hoặc buộc thôi học tùy mức độ nghiêm trọng",
    "options": [
      "Trừ 5 điểm rèn luyện",
      "Nhắc nhở nội bộ",
      "Bị đình chỉ học tập hoặc buộc thôi học tùy mức độ nghiêm trọng",
      "Phải nộp phạt 1 triệu đồng"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên không nộp đủ học phí đúng thời hạn quy định sẽ bị xử lý như thế nào?",
    "answer": "Bị đình chỉ đăng ký học tập một học kỳ kế tiếp",
    "options": [
      "Bị phạt tiền 10%",
      "Bị đình chỉ đăng ký học tập một học kỳ kế tiếp",
      "Bị trừ điểm rèn luyện",
      "Bị buộc thôi học lập tức"
    ],
    "source": "docx"
  },
  {
    "question": "Mức điểm đạt đối với các học phần thuộc chương trình đào tạo cử nhân và kỹ sư (ngoại trừ học phần tốt nghiệp) là từ mức điểm chữ nào?",
    "answer": "Từ điểm D trở lên",
    "options": [
      "Từ điểm F trở lên",
      "Từ điểm D trở lên",
      "Từ điểm C trở lên",
      "Từ điểm B trở lên"
    ],
    "source": "docx"
  },
  {
    "question": "Thời gian điều chỉnh đăng ký học phần bổ sung vào các lớp học phần đã mở ở đầu học kỳ chính kéo dài trong bao lâu?",
    "answer": "Kéo dài trong 2 tuần đầu",
    "options": [
      "Chỉ thực hiện trong 3 ngày đầu",
      "Chỉ thực hiện trong tuần đầu của học kỳ",
      "Kéo dài trong 2 tuần đầu",
      "Trong suốt 7 tuần đầu"
    ],
    "source": "js",
    "altAnswer": "Chỉ thực hiện trong tuần đầu của học kỳ"
  },
  {
    "question": "Mức học phí áp dụng đối với sinh viên quốc tế học các chương trình đào tạo bằng tiếng Anh được tính như thế nào?",
    "answer": "Bằng 1.5 lần mức học phí quy định tương ứng",
    "options": [
      "Bằng 1.0 lần mức học phí người Việt Nam",
      "Bằng 1.5 lần mức học phí quy định tương ứng",
      "Bằng 2.0 lần",
      "Bằng 3.0 lần"
    ],
    "source": "docx"
  },
  {
    "question": "Khung điểm CPA quy đổi sang xếp loại học lực \"Giỏi\" theo Quy chế đào tạo là bao nhiêu?",
    "answer": "3.20 đến 3.59",
    "options": [
      "2.50 đến 3.19",
      "3.20 đến 3.59",
      "3.60 đến 4.00",
      "2.00 đến 2.49"
    ],
    "source": "docx"
  },
  {
    "question": "Thời gian Ban Công tác sinh viên thông báo công khai kế hoạch đăng ký xét Học bổng Trao đổi sinh viên tối thiểu là bao lâu để người học chuẩn bị?",
    "answer": "Tối thiểu 02 tuần",
    "options": [
      "Tối thiểu 01 tuần",
      "Tối thiểu 02 tuần",
      "Tối thiểu 03 tuần",
      "Tối thiểu 01 tháng"
    ],
    "source": "docx"
  },
  {
    "question": "Đối với sinh viên Nhóm 4 (gặp tai nạn, rủi ro đột xuất), Học bổng Trần Đại Nghĩa hỗ trợ các mức tiền mặt cố định là bao nhiêu?",
    "answer": "5 triệu đồng và 10 triệu đồng",
    "options": [
      "2 triệu đồng và 3 triệu đồng",
      "3 triệu đồng và 5 triệu đồng",
      "5 triệu đồng và 10 triệu đồng",
      "10 triệu đồng và 20 triệu đồng"
    ],
    "source": "docx"
  },
  {
    "question": "Mức học phí học lại học phần đối với Nghiên cứu sinh trình độ Tiến sĩ được quy định cụ thể là bao nhiêu?",
    "answer": "850.000 đồng / TCHP",
    "options": [
      "500.000 đồng / TCHP",
      "650.000 đồng / TCHP",
      "850.000 đồng / TCHP",
      "1.200.000 đồng / TCHP"
    ],
    "source": "docx"
  },
  {
    "question": "Chuẩn tiếng Anh đầu ra đối với sinh viên chương trình liên kết đào tạo với Đại học TROY (Hoa Kỳ) khi xét tốt nghiệp là gì?",
    "answer": "Chứng chỉ IELTS Academic 6.0 trở lên (hoặc TOEFL iBT tương đương)",
    "options": [
      "IELTS 5.0",
      "Chứng chỉ IELTS Academic 6.0 trở lên (hoặc TOEFL iBT tương đương)",
      "VSTEP B1",
      "TOEIC 450"
    ],
    "source": "docx"
  },
  {
    "question": "Mức học phí/1 TCHP của Chương trình đào tạo Kỹ sư chuyên sâu Trí tuệ nhân tạo sinh (GenAI) được tính bằng mức học phí của chương trình cử nhân nào?",
    "answer": "Chương trình Khoa học dữ liệu và Trí tuệ nhân tạo (IT-E10)",
    "options": [
      "Chương trình Cử nhân Công nghệ thông tin Việt - Nhật",
      "Chương trình Khoa học dữ liệu và Trí tuệ nhân tạo (IT-E10)",
      "Chương trình Kỹ thuật Máy tính",
      "Chương trình Tin học công nghiệp"
    ],
    "source": "docx"
  },
  {
    "question": "Thời gian hưởng Học bổng Chính phủ tối đa cho sinh viên thuộc chương trình đào tạo Kỹ sư (từ 150 tín chỉ trở lên) là bao nhiêu năm?",
    "answer": "Không quá 05 năm",
    "options": [
      "Không quá 03 năm",
      "Không quá 04 năm",
      "Không quá 05 năm",
      "Không quá 06 năm"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên học cùng lúc hai chương trình đào tạo (bằng kép) cần lưu ý quy định gì về việc đăng ký tốt nghiệp?",
    "answer": "Bắt buộc phải đăng ký tốt nghiệp đồng thời trong cùng một đợt cho cả hai CTĐT",
    "options": [
      "Bắt buộc phải đăng ký tốt nghiệp đồng thời trong cùng một đợt cho cả hai CTĐT",
      "Phải tốt nghiệp chương trình 1 trước ít nhất 1 năm mới được tốt nghiệp chương trình 2",
      "Không được công nhận bất kỳ tín chỉ chung nào giữa hai chương trình",
      "Được cấp 1 văn bằng gộp chung cả hai ngành"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên được điều động vào lực lượng vũ trang nghỉ học tạm thời thì thời gian nghỉ được tính như thế nào?",
    "answer": "Không tính vào thời gian học chậm tiến độ",
    "options": [
      "Tính hoàn toàn vào thời gian chậm tiến độ",
      "Không tính vào thời gian học chậm tiến độ",
      "Chỉ tính bằng 50% thời gian chậm tiến độ",
      "Phải làm đơn xin nghỉ lại mỗi kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên phải đăng ký tối thiểu bao nhiêu tín chỉ trong học kỳ lấy điểm xét học bổng để không bị loại (trừ HK1 năm thứ nhất)?",
    "answer": "Tối thiểu 12 tín chỉ",
    "options": [
      "Tối thiểu 10 tín chỉ",
      "Tối thiểu 12 tín chỉ",
      "Tối thiểu 15 tín chỉ",
      "Tối thiểu 18 tín chỉ"
    ],
    "source": "docx"
  },
  {
    "question": "Sinh viên nghỉ học tạm thời phải nộp đơn đề nghị tiếp nhận trở lại học chậm nhất vào thời điểm nào?",
    "answer": "Chậm nhất 01 tuần trước khi bắt đầu học kỳ mới",
    "options": [
      "Ngay ngày đầu tiên đi học lại",
      "Chậm nhất 01 tuần trước khi bắt đầu học kỳ mới",
      "Sau khi học kỳ mới bắt đầu 2 tuần",
      "Vào tuần thi cuối kỳ"
    ],
    "source": "docx"
  },
  {
    "question": "Số đợt xét tốt nghiệp đại học trong một năm theo Quy chế đào tạo 2025 được quy định là bao nhiêu đợt?",
    "answer": "5 đợt",
    "options": [
      "2 đợt",
      "3 đợt",
      "5 đợt",
      "12 đợt"
    ],
    "source": "docx"
  },
  {
    "question": "Khái niệm \"Học phần học trước\" khác với \"Học phần tiên quyết\" ở điểm cốt lõi nào?",
    "answer": "Sinh viên chỉ cần đăng ký và học xong học phần A (có thể chưa đạt) là đã đủ điều kiện học học phần B",
    "options": [
      "Yêu cầu sinh viên phải đạt điểm A trở lên",
      "Sinh viên chỉ cần đăng ký và học xong học phần A (có thể chưa đạt) là đã đủ điều kiện học học phần B",
      "Bắt buộc phải học trong học kỳ hè",
      "Không tính tín chỉ vào chương trình đào tạo"
    ],
    "source": "docx"
  },
  {
    "question": "Mức điểm IELTS Academic đạt từ 8.5 đến 9.0 được Bảng 2.1 quy đổi tương đương Bậc mấy theo Khung 6 bậc?",
    "answer": "Bậc 6 (CEFR C2)",
    "options": [
      "Bậc 4",
      "Bậc 5",
      "Bậc 6 (CEFR C2)",
      "Bậc 5.2"
    ],
    "source": "docx"
  },
  {
    "question": "Điều kiện học lực để sinh viên hết năm thứ nhất được xem xét chuyển sang một chương trình đào tạo khác là gì?",
    "answer": "CPA >= 2.5 (từ loại khá trở lên) và không bị cảnh báo học tập",
    "options": [
      "CPA >= 2.0",
      "CPA >= 2.5 (từ loại khá trở lên) và không bị cảnh báo học tập",
      "CPA >= 3.2",
      "CPA >= 3.6"
    ],
    "source": "docx"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = answerKey;
} else if (typeof window !== 'undefined') {
  window.answerKey = answerKey;
}
