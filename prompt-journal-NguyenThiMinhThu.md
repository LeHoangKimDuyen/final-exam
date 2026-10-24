# NHẬT KÝ PROMPT KỸ THUẬT (PROMPT JOURNAL)

**Thành viên:** Nguyễn Thị Minh Thư  
**Dự án:** Triển lãm Văn học Tương tác Distil (`distilreview.com`)  
**Vai trò:** Frontend Developer & Functional Specifications Author  
**Quy chuẩn áp dụng:** Editorial UI × Selective Glassmorphism (Anti-AI Design System)

---

## I. TẬP HỢP TOÀN VĂN CÁC CÂU PROMPT NGUYÊN BẢN (NGUYỄN THỊ MINH THƯ)

### PHẦN 1: PROMPT TỔNG HỢP NGUYÊN BÀI (GỘP LIỀN MẠCH)

> Vui lòng đọc toàn bộ các file tài liệu quy chuẩn có sẵn trong thư mục dự án của bạn, kết hợp đọc cả 3 file HTML gồm index.html, profile.html, auth.html, file style.css và các file javascript gồm app.js, main.js để thực hiện chính xác các yêu cầu bên dưới, đồng thời tuân thủ nghiêm ngặt theo đúng tinh thần, màu sắc, phong cách thiết kế và quy tắc kỹ thuật đã định nghĩa trong tài liệu dự án.
>
> **Thứ nhất**, về việc bổ sung logo thương hiệu vào Header trên cả 3 trang HTML, hãy lấy tệp ảnh logo từ đường dẫn `images/LogoTD.PNG` (hoặc `./images/LogoTD.PNG`), đặt ở thanh Header hoặc Navbar ngay bên phía phải tên thương hiệu Distil. Căn chỉnh logo và tên thương hiệu Distil nằm trên cùng một hàng ngang bằng cách sử dụng `display: flex`, `align-items: center`, gap từ `8px` đến `12px`; giữ tỉ lệ ảnh logo chuẩn không bị bóp méo bằng `object-fit: contain`, chiều cao vừa vặn với chữ Distil từ `32px` đến `40px` và cập nhật đồng bộ cấu trúc logo này vào cả 3 file `index.html`, `profile.html`, `auth.html`.
>
> **Thứ hai**, về việc tinh chỉnh giao diện Popup sách trong không gian khám phá, hãy giữ nguyên toàn bộ logic mở hoặc đóng popup, xử lý dữ liệu và chức năng thả tim hoặc yêu thích hiện có, chỉ điều chỉnh bố cục CSS với chiều rộng Popup to hơn một chút có `max-width` từ `850px` đến `900px` và `width` là `90%`, cố định chiều cao tối đa với `max-height` là `85vh` hoặc `550px` để khung không bị dài tràn ra ngoài. Đẩy phần bìa sách ở bên trái xích sang trái thêm một khoảng với gap từ `28px` đến `36px`, chỉnh tỉ lệ chia cột sao cho bìa sách chiếm khoảng `30%` đến `35%` diện tích ngang còn phần chữ màu trắng bên phải chiếm ưu tiên rộng hơn từ `65%` đến `70%`. Giới hạn chiều cao tối đa cho đoạn văn bản mô tả chữ trắng bên phải với `max-height` từ `220px` đến `280px`, thêm thuộc tính `overflow-y: auto` để người dùng lướt xuống đọc tiếp tiện lợi như đọc sách mà khung Popup bên ngoài không bị phình to hay kéo dài ra, đồng thời tùy chỉnh thanh cuộn scrollbar nhỏ gọn tiệp màu tối với giao diện chung. Đảm bảo không thay đổi tên các class, ID hoặc cấu trúc DOM mà mã lệnh JavaScript đang gọi tới.
>
> **Thứ ba**, về phần sửa lỗi đăng nhập và thêm tính năng đăng ký tài khoản qua storage, hãy khắc phục triệt để lỗi hiện tại bằng cách không cho phép đăng nhập khi người dùng chỉ nhập tên tài khoản hoặc nhập sai mật khẩu; khi bấm nút Đăng nhập, hệ thống phải so khớp cả Username hoặc Email lẫn Mật khẩu với dữ liệu tài khoản đã lưu, nếu sai hoặc không tồn tại thì hiển thị thông báo lỗi rõ ràng như "Tên đăng nhập hoặc mật khẩu không chính xác!" và giữ nguyên ở trang đăng nhập, tuyệt đối không cho chuyển sang trang Profile hay Trang chủ. Nếu chưa có tệp hoặc trang đăng ký, hãy tạo giao diện Đăng ký tài khoản hoặc Form Đăng ký chuyển đổi mượt mà ngay tại trang `auth.html`, thiết kế đồng bộ 100% với tông màu, kiểu chữ, input, nút bấm của trang `auth.html` và `profile.html` với các trường bắt buộc gồm Tên tài khoản hoặc Username/Email, Mật khẩu hoặc Password, Nhập lại mật khẩu hoặc Confirm Password. Sử dụng `localStorage` của trình duyệt để lưu danh sách tài khoản đã đăng ký dưới dạng mảng JSON với khóa `registered_users`; khi người dùng bấm nút Đăng ký, hệ thống kiểm tra các trường đã nhập đầy đủ chưa và mật khẩu xác nhận có khớp nhau không, kiểm tra tên tài khoản đã tồn tại trong `localStorage` chưa để tránh trùng lặp, nếu hợp lệ thì lưu tài khoản mới vào `localStorage`, hiển thị thông báo "Đăng ký tài khoản thành công!" rồi tự động chuyển hướng về trang `auth.html`. Dữ liệu lưu trong `localStorage` phải được bảo lưu nguyên vẹn kể cả khi người dùng tắt hẳn trình duyệt, nhấn F5 làm mới trang hoặc mở lại trang vào lần sau thì vẫn dùng chính tài khoản đó để đăng nhập bình thường.
>
> **Thứ tư**, về việc tự động tìm kiếm và viết lại nội dung tóm tắt sách theo từng thể loại, hãy thay thế toàn bộ phần văn bản giới thiệu sách ngắn và sơ sài hiện tại bằng bài tóm tắt chi tiết, lôi cuốn cho từng cuốn sách trên website. Yêu cầu hệ thống hoặc AI tự động nhận diện thể loại của từng cuốn sách như trinh thám, tâm lý, lãng mạn, giả tưởng, phát triển bản thân dựa trên Tên tác phẩm và Tên tác giả để điều chỉnh văn phong cho phù hợp. Tùy vào thể loại mà bài tóm tắt sẽ có định hướng cấu trúc linh hoạt theo các phần gồm:
>
> - _Phần 1:_ giới thiệu khởi nguồn bối cảnh hoặc biến cố mở đầu (sự kiện bùng nổ, nhân vật chính, xung đột ban đầu);
> - _Phần 2:_ trình bày mạch phát triển cốt truyện hoặc hành trình nhân vật (ngã rẽ cuộc đời, thử thách, bí mật hé lộ);
> - _Phần 3:_ nêu nút thắt cao trào hoặc góc nhìn điều tra (sự thật ngầm ẩn, mâu thuẫn đỉnh điểm);
> - _Phần 4:_ đặt các câu hỏi mấu chốt khơi gợi tò mò kèm biểu tượng cảm xúc và nội dung _"❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách:"_ (hoặc đối với sách chữa lành, tản văn, phát triển bản thân thì dùng _"❓ Điều đọng lại sau trang sách dành cho bạn:"_).  
>   Cập nhật phần tóm tắt mới này vào tệp dữ liệu JSON hoặc JavaScript nơi lưu trữ mảng thông tin các cuốn sách, đảm bảo định dạng xuống dòng và biểu tượng hiển thị đẹp mắt, không bị lỗi font hay dính liền chữ khi đưa lên giao diện Popup, đồng thời tận dụng triệt để thuộc tính thanh cuộn `overflow-y: auto` để phần nội dung tóm tắt dài này có thể lướt xuống đọc mượt mà mà không làm biến dạng khung Popup.

---

### PHẦN 2: PROMPT TÍCH HỢP GỬI MÃ OTP QUA GMAIL THẬT (ĐẶT LẠI MẬT KHẨU)

> Tích hợp tính năng gửi mã OTP quên mật khẩu qua Gmail thật cho website:
>
> 1. **Kết nối dịch vụ gửi email thực tế:** Sử dụng cấu hình API gửi email (hoặc thư viện hỗ trợ phía backend/frontend như EmailJS, Nodemailer nếu có server, hoặc cấu hình SMTP qua Google API / Gmail SMTP Service).
> 2. **Luồng hoạt động chuẩn thực tế:**
>    - Khi người dùng nhập Gmail và bấm "Gửi mã", hệ thống sẽ tạo mã OTP ngẫu nhiên (6 chữ số).
>    - Hệ thống gọi API để thực hiện gửi một bức thư điện tử (email) thực sự từ địa chỉ hệ thống đến đúng hộp thư Gmail mà người dùng vừa nhập.
>    - Giao diện hiển thị thông báo: "Mã xác thực đã được gửi đến email [địa_chỉ_email]. Vui lòng kiểm tra hộp thư (cả mục Spam nếu cần) để lấy mã!".
> 3. **Xác thực mã:** Người dùng mở Gmail cá nhân, lấy mã OTP vừa nhận được điền vào ô xác nhận trên website. Hệ thống đối chiếu mã này với mã đã gửi để cấp quyền chuyển sang bước đổi mật khẩu mới.

---

### PHẦN 3: PROMPT YÊU CẦU AI/CODER RÀ SOÁT TÀI LIỆU QUY CHUẨN CÓ SẴN

> Yêu cầu hệ thống hoặc AI tự động quét, đọc và rà soát lại toàn bộ các file tài liệu hướng dẫn quy chuẩn đang có sẵn trong các thư mục của dự án (bao gồm các file markdown, quy định thiết kế, quy tắc hệ thống hoặc thư mục chứa hướng dẫn).  
> Đảm bảo toàn bộ các chỉnh sửa từ Section 1 đến Section 5 (chèn logo, tùy chỉnh popup sách, sửa lỗi đăng nhập, thêm tính năng đăng ký, tự động viết tóm tắt sách, tích hợp OTP) phải tuân thủ nghiêm ngặt theo đúng tinh thần, màu sắc, phong cách thiết kế và quy tắc kỹ thuật đã được định nghĩa trong các tài liệu đó, tuyệt đối không làm sai lệch cấu trúc sẵn có của dự án.

---

## II. XÁC ĐỊNH MỤC ĐÍCH CỦA TỪNG CÂU PROMPT

| Nhóm Prompt            | Nội dung trọng tâm                                           | Mục đích cốt lõi                                                                                                                            |
| :--------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| **Phần 1 - Yêu cầu 1** | Bổ sung Logo `LogoTD.PNG` vào Header cả 3 trang              | Thiết lập nhận diện thương hiệu trực quan (Visual Branding), định danh Distil rõ nét ngay tại thanh điều hướng cố định.                     |
| **Phần 1 - Yêu cầu 2** | Tinh chỉnh CSS Popup Modal (Tỉ lệ 30/70, `overflow-y: auto`) | Cải thiện trải nghiệm đọc chi tiết sách: mở rộng không gian hiển thị, cố định chiều cao tránh tràn màn hình khi tóm tắt dài.                |
| **Phần 1 - Yêu cầu 3** | Sửa lỗi đăng nhập & Thêm Form Đăng ký lưu `localStorage`     | Hoàn thiện chu trình xác thực tài khoản người dùng khép kín (End-to-End Client Auth Flow), đảm bảo dữ liệu bền vững qua `registered_users`. |
| **Phần 1 - Yêu cầu 4** | Viết lại nội dung tóm tắt 43 sách theo cấu trúc 4 phần       | Nâng tầm nội dung từ mô tả sơ sài thành những bài tóm tắt văn học giàu kịch tính, khơi gợi trí tò mò của độc giả.                           |
| **Phần 2**             | Gửi mã OTP xác thực qua Gmail thật                           | Hiện thực hóa quy trình bảo mật khôi phục mật khẩu chuyên nghiệp (Production-like Security Verification).                                   |
| **Phần 3**             | Rà soát quy chuẩn thiết kế `skill.md` & `anti-AI.md`         | Giữ vững ranh giới thiết kế, ngăn chặn AI làm sai lệch bảng màu, font chữ hoặc đưa vào các mẫu giao diện rập khuôn.                         |

---

## III. ĐÁNH GIÁ HIỆU QUẢ CỦA CÁC CÂU PROMPT NÀY

### 1. Ưu điểm nổi bật (Hiệu quả cao)

- **Thông số định lượng rõ ràng:** Cung cấp thông số CSS chi tiết (`max-width: 850px - 900px`, `width: 90%`, `max-height: 85vh / 550px`, cột `30%` vs `70%`, gap `28px - 36px`), giúp loại bỏ hoàn toàn việc AI phỏng đoán layout.
- **Xử lý tình huống biên (Edge Cases) chặt chẽ:** Chỉ rõ các kịch bản sai sót (trùng username, sai password, chưa nhập đủ trường) và quy định cơ chế lưu trữ bền vững (F5 tải lại trang không mất tài khoản).
- **Cấu trúc Storytelling văn học mẫu mực:** Việc chia khung tóm tắt thành 4 hồi (Khởi nguồn -> Phát triển -> Nút thắt -> Hook câu hỏi) mang lại giá trị nhân văn và chiều sâu học thuật vượt trội cho dự án.

### 2. Thách thức kỹ thuật trong thực tế (Hạn chế)

- **Hội chứng "Mega-Prompt" (Quá tải ngữ cảnh):** Việc gom 4 module phức tạp vào một prompt dài khiến AI gặp rủi ro quá tải bộ nhớ đệm (Context Overflow), dễ làm sót chi tiết hoặc sinh mã đứt đoạn.
- **Rào cản kiến trúc Client-only:** Yêu cầu gửi Gmail thật qua SMTP/Nodemailer trên một website tĩnh thuần túy (không có Node.js server độc lập) rất khó triển khai an toàn hoặc dễ để lộ Private API Key nếu dùng EmailJS.
- **Xung đột nhẹ với quy chuẩn Anti-AI:** Việc chèn biểu tượng cảm xúc (emoji `❓`) vào văn bản tóm tắt có thể làm giảm bớt tính sang trọng, nghiêm cẩn của phong cách tạp chí in Editorial cổ điển.

---

## IV. PHÂN TÍCH NGUYÊN NHÂN VÌ SAO SAU ĐÓ CẦN CÁC CÂU PROMPT SỬA LẠI

Sau khi triển khai bộ prompt của Minh Thư, nhóm phát triển tiếp tục đưa ra các câu prompt sửa đổi (được ghi nhận trong `final-exam-diary.md`) vì **4 nguyên nhân kỹ thuật và thẩm mỹ thực tế**:

### 1. Phải chia nhỏ để "Vá lỗi giao diện phát sinh thực tế" (Hotfixes)

- **Xung đột khung ảnh bìa trong Modal (Prompt 19):**  
  Khi áp dụng giao diện Modal mới, khung ảnh bìa `.focus-book-cover` bị chia đôi không gian do xung đột giữa thẻ `img` mới thêm và khối chữ tĩnh `.focus-book-inner` cũ.  
  -> _Khắc phục:_ Phải ra prompt khẩn cấp ép `.focus-book-inner { display: none !important; }` và dùng `position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;`.
- **Lỗi hiệu ứng hào quang bị cắt mép (Prompt 25):**  
  Hiệu ứng phát sáng trắng kem của thẻ cảm xúc bị mép container xén cụt.  
  -> _Khắc phục:_ Phải ra prompt bổ sung `padding: 30px` cho container cha để tạo không gian thở (breathing room).
- **Lỗi Header Fixed che khuất nội dung (Prompt 03):**  
  Header fixed làm mất không gian âm của Hero Section.  
  -> _Khắc phục:_ Bổ sung `padding-top: 120px` và `box-sizing: border-box`.

### 2. Chuyển đổi từ CSS thuần sang JavaScript để xử lý triệt để lỗi hiển thị

- **Lỗi cắt chữ tiếng Việt của CSS Typing (Prompt 22 & 23):**  
  Ý tưởng ban đầu dùng CSS `@keyframes typing` bị lỗi nghiêm trọng khi hiển thị tiếng Việt có dấu: chữ bị cắt cụt do `white-space: nowrap` và con trỏ nhấp nháy bị kéo dài bất thường.  
  -> _Khắc phục:_ Viết lại cơ chế gõ chữ bằng Vanilla JS, bóc tách từng token và thẻ `<br>`, tự động ẩn con trỏ nhấp nháy sau 2s, và làm chậm nhịp AOS lên `1200ms` để tạo tổng thể Cinematic êm ái.

### 3. Nâng tầm thẩm mỹ từ "Đúng kỹ thuật" sang "Nghệ thuật Editorial đỉnh cao"

- **Chuyển Footer sang phiên bản "Bold Contrast" (Prompt 27):**  
  Chân trang nền kem ban đầu mờ nhạt, thiếu điểm nhấn hạ màn.  
  -> _Khắc phục:_ Nâng cấp lên nền đỏ trầm (`#7b1113`) với toàn bộ chữ trắng ngà `#f4f1ea` và đệm rộng `100px 20px 80px`.
- **Tự sự hóa thông điệp SDG 04 (Prompt 28):**  
  Nội dung SDG 04 ban đầu khô khan theo dạng báo cáo hành chính.  
  -> _Khắc phục:_ Biên tập lại thành áng văn triết lý: _"Vì tri thức là đặc quyền không của riêng ai"_, thổi hồn văn học vào cam kết giáo dục toàn cầu.
- **Tinh gọn thanh Header (Prompt 30):**  
  Header có 4 liên kết gây phân tán thị giác.  
  -> _Khắc phục:_ Xóa 2 mục thừa, chỉ giữ "Tuyên ngôn" và "Cảm xúc", dùng `margin-left: auto; margin-right: 36px` tạo nhịp điệu cân bằng.

### 4. Đột phá thêm các chiều kích tương tác Đa giác quan mới

- Nhằm nâng tầm website vượt khỏi khuôn khổ trang danh mục sách thông thường, nhóm đã ra thêm 2 prompt mang tính đột phá:
  - **Section Soundscape Đĩa than (Prompt 31):** Tích hợp khung đĩa than xoay tròn mượt mà (`@keyframes spinVinyl`) phát lặp lại âm thanh cổ điển `fairytale-from-shrek.mp3`, kích hoạt thính giác người đọc.
  - **Section Bento Grid 3D Flip Card (Prompt 32):** Tạo mới khu vực "Có thể bạn chưa biết" với bố cục Bento bất đối xứng 3 cột (2:1 và 1:2) và 4 thẻ lật 3 chiều 180° khám phá giải thưởng văn học danh giá.

---

## V. TỔNG KẾT BÀI HỌC HỢP TÁC (PAIR PROGRAMMING INSIGHTS)

Sự kết hợp giữa tập hợp prompt của **Nguyễn Thị Minh Thư** và các prompt tinh chỉnh kế tiếp là minh chứng sống động cho quy trình làm việc cặp đôi xuất sắc:

1. **Minh Thư giữ vai trò "Kiến trúc sư Chức năng" (Functional Architect):** Định nghĩa cấu trúc dữ liệu, luồng xác thực tài khoản, kích thước chi tiết và chiều sâu kịch bản tóm tắt sách.
2. **Các prompt hiệu chỉnh giữ vai trò "Tổng đạo diễn Sáng tạo & Kiểm định Chất lượng" (Creative Director & QA Lead):** Phân tách các module khổng lồ thành các bước tinh chỉnh vi mô, triệt tiêu lỗi layout CSS/JS phát sinh, bảo vệ tính toàn vẹn của Design System Anti-AI và đưa trải nghiệm người dùng chạm đến ngưỡng điện ảnh (Cinematic Experience).
