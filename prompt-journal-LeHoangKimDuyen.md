# NHẬT KÝ TIẾN TRÌNH PROMPT (FINAL EXAM PROMPT DIARY)

**Dự án:** Triển lãm Văn học Tương tác Distil (`distilreview.com`)  
**Phương pháp:** Prompt Engineering & Pair Programming cùng Senior AI Assistant  
**Phong cách chủ đạo:** Editorial UI × Selective Glassmorphism (Tuân thủ nghiêm ngặt nguyên tắc Anti-AI)  
**Thời gian thực hiện:** 22/10/2026 – 24/10/2026

---

## I. TỔNG QUAN CHIẾN LƯỢC PROMPT ENGINEERING

Trong suốt quá trình kiến tạo dự án Distil, quy trình chỉ đạo AI được xây dựng theo phương pháp luận chặt chẽ:

1. **Thiết lập Ngữ cảnh & Ràng buộc cốt lõi (Context & Constraints):** Mọi prompt đều khai báo vai trò `Senior Frontend Developer`, cấm triệt để việc sử dụng framework ngoài (Tailwind, Bootstrap), kiên định với Vanilla HTML5/CSS3/ES6 và tuân thủ các quy chuẩn thiết kế chống rập khuôn AI (không bo góc hình viên thuốc, không bóng đổ đen gắt, tôn vinh typography có thứ bậc).
2. **Kỹ thuật Ép thực thi tự động (Tool Execution Enforcement):** Thay vì để AI xuất code rời rạc bắt lập trình viên copy thủ công, các prompt áp đặt cơ chế sử dụng công cụ ghi đè trực tiếp vào file mã nguồn (`write_file`, `edit_file`), đảm bảo tính toàn vẹn của dự án.
3. **Chu trình Phát triển Lặp (Iterative Refinement Loop):** Dự án không được tạo ra trong một lần duy nhất mà trải qua 7 giai đoạn liên hoàn: _Khởi tạo khung -> Kiểm tra trực quan -> Phát hiện lỗi layout/UX -> Ra lệnh vá lỗi (Hotfix) -> Tinh chỉnh nhịp điệu Cinematic -> Đồng bộ đa trang._

---

## II. BẢNG TỔNG HỢP CÁC GIAI ĐOẠN PHÁT TRIỂN

| Giai đoạn       |   Các Prompt   | Trọng tâm công việc                                                                         | Kết quả chính                                                                                                                         |
| :-------------- | :------------: | :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| **Giai đoạn 1** | Prompt 01 – 08 | Khởi tạo cấu trúc nền tảng, Section 1 (Hero) & Section 2 (Manifesto)                        | Bố cục bất đối xứng 55/45, lưới Z-pattern 2 hàng, khắc phục lỗi header fixed che chữ và responsive mobile.                            |
| **Giai đoạn 2** | Prompt 09 – 15 | Xây dựng Cỗ máy Cảm xúc (Section 3), Trang Đăng nhập (`auth.html`) & Hồ sơ (`profile.html`) | Horizontal Scroll Snap, logic kéo cuộn Drag-to-Scroll bằng chuột, cấu trúc tab và xác thực qua `localStorage`.                        |
| **Giai đoạn 3** | Prompt 16 – 20 | Tái cấu trúc UX/UI, CSDL 43 cuốn sách & Đồng bộ Modal chi tiết                              | Bỏ bộ lọc dư thừa, thêm Focus Modal hòa trộn ảnh `mix-blend-mode`, thuật toán Shuffle Fallback và đồng bộ sang Profile.               |
| **Giai đoạn 4** | Prompt 21 – 25 | Thăng hoa Cinematic: JS Typing Effect, AOS Scroll & Hào quang Cảm xúc                       | Chuyển hiệu ứng gõ chữ sang JavaScript chống cắt chữ tiếng Việt, tự ẩn con trỏ, hiệu ứng đổi màu nền toàn cục và mở rộng đệm bóng đổ. |
| **Giai đoạn 5** | Prompt 26 – 30 | Nâng cấp Editorial Footer, Tinh gọn Header & Ảnh Cinematic                                  | Footer 3 cột Bold Contrast (nền đỏ rượu, chữ trắng), thông điệp tự sự SDG 04, chèn 3 ảnh điện ảnh có hiệu ứng zoom chậm.              |
| **Giai đoạn 6** | Prompt 31 – 32 | Đột phá Đa giác quan: Soundscape Đĩa than & Bento Grid 3D Flip Card                         | Thay Section 5 bằng đĩa than phát nhạc xoay tròn mượt mà; thêm Section "Có thể bạn chưa biết" dạng Bento Grid lật thẻ 3D 180°.        |
| **Giai đoạn 7** | Prompt 33 – 35 | Hệ thống hóa công nghệ & Tổng kết hồ sơ đồ án                                               | Tổng hợp từ khóa kỹ thuật nổi bật, tổng quan mục đích nhân văn và xuất bản nhật ký tiến trình prompt.                                 |

---

## III. CHI TIẾT LỊCH SỬ TỪNG CÂU PROMPT

---

### GIAI ĐOẠN 1: KHỞI TẠO NỀN TẢNG & ĐỊNH HÌNH PHONG CÁCH EDITORIAL

#### PROMPT 01 (Step 0 | 22/10/2026, 14:36)

- **Nội dung tóm tắt:** Yêu cầu AI đọc kỹ các tệp quy chuẩn `skill.md`, `design-system.md`, `anti-AI.md` trong thư mục skill và xác nhận việc nắm bắt các quy tắc trước khi viết code.
- **Mục đích:** Thiết lập hệ tư tưởng và neo giữ quy chuẩn thiết kế ngay từ đầu; ngăn chặn AI tự ý dùng các mẫu giao diện phổ thông (generic AI UI) như bo góc hình viên thuốc (pill buttons) hay đổ bóng đen nặng nề.
- **Hiệu quả:** AI xác nhận hiểu toàn bộ hệ màu (Red Wine, Lemon Cream), font chữ (Playfair/Cormorant Garamond, Be Vietnam Pro) và cam kết chỉ dùng Vanilla Web.
- **Vì sao có prompt tiếp theo:** Sau khi AI đã nạp đầy đủ quy tắc, cần tiến hành khởi tạo mã nguồn thực tế cho Header và Section 1.

---

#### PROMPT 02 (Step 10 | 22/10/2026, 14:55)

- **Nội dung tóm tắt:** Khởi tạo cấu trúc file `index.html` và viết CSS layout vào `style.css` cho Thanh điều hướng (Nav) và Section 1 (Hero mở màn) theo tỷ lệ bất đối xứng 55% khối chữ / 45% khối ảnh tĩnh vật.
- **Mục đích:** Dựng khung xương đầu tiên của trang web, mang chất tạp chí in cổ điển với trích đoạn kịch kinh điển và hiệu ứng kính mờ cố định ở Header.
- **Hiệu quả:** Tạo ra các file mã nguồn đầu tiên, hiển thị được cấu trúc cơ bản của trang bìa.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 03):** Khi xem trước trên trình duyệt, phát hiện **2 lỗi CSS nghiêm trọng**: Do Header dùng `position: fixed` nên chữ ở Hero bị chui lên dưới lớp kính mờ và bị che khuất; đồng thời nội dung bị dính sát lề trái do thiếu padding bù trừ và `box-sizing`, làm mất hoàn toàn không gian âm (negative space).

---

#### PROMPT 03 — HOTFIX 01 (Step 20 | 22/10/2026, 15:17)

- **Nội dung tóm tắt:** Ra lệnh cập nhật gấp CSS cho `.hero-section`: Thêm `padding-top: 120px` bù trừ Header, thêm `padding-left/right: 10%`, cài đặt `box-sizing: border-box`, và cố định tỷ lệ `flex: 0 0 55%` (trái) và `flex: 0 0 45%` (phải).
- **Mục đích:** Khắc phục triệt để lỗi chữ bị che lấp và phục hồi khoảng thở negative space chuẩn tỉ lệ vàng Editorial.
- **Hiệu quả:** Section 1 đứng độc lập, thoáng đãng, bố cục 55/45 sắc nét, không còn xung đột với Header fixed.
- **Vì sao có prompt tiếp theo:** Section 1 đã hoàn thiện mỹ mãn, tiến hành xây dựng Section 2 (Tuyên ngôn / Manifesto).

---

#### PROMPT 04 (Step 25 | 22/10/2026, 15:58)

- **Nội dung tóm tắt:** Viết HTML và CSS cho Section 2 (Manifesto) theo bố cục đường chéo Z-Pattern: Tiêu đề Hook ("Explore, Dream, and Innovate") nằm góc trên-trái (`align-self: flex-start; max-width: 65%`), đoạn văn bản tự sự nằm góc dưới-phải (`align-self: flex-end; max-width: 45%`), đứng tự do trên nền giấy, không dùng khung card.
- **Mục đích:** Thể hiện tuyên ngôn triết lý của Distil bằng nhịp điệu thị giác đường chéo độc đáo, phá bỏ cấu trúc khối hộp thông thường.
- **Hiệu quả:** Sinh ra cấu trúc HTML/CSS cho Section 2.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 05):** Khi render thực tế, cơ chế Flexbox cột mặc định khiến khối văn bản bên dưới không tự dạt sang phải như mong muốn mà vẫn bị dồn thẳng hàng bên trái, phá hỏng hoàn toàn ý đồ Z-Pattern.

---

#### PROMPT 05 — HOTFIX 02 (Step 35 | 22/10/2026, 16:03)

- **Nội dung tóm tắt:** Vá lỗi bố cục Section 2: Bổ sung `gap: 80px`, giữ tiêu đề bên trái, và ép khối văn bản sang sát lề phải màn hình bằng việc kết hợp cả `align-self: flex-end` lẫn `margin-left: auto`.
- **Mục đích:** Khôi phục độ bất đối xứng nghệ thuật có chủ đích (Intentional Asymmetry).
- **Hiệu quả:** Khối văn bản đã dạt sang bên phải chuẩn Z-Pattern.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 06):** Sau khi quan sát tổng thể, nhận thấy phần tuyên ngôn chỉ có chữ đứng một mình tạo cảm giác trống trải, khoảng cách với Section 1 quá hẹp, và chữ tiêu đề quá lớn gây mất cân đối thị giác so với toàn trang.

---

#### PROMPT 06 — TÁI CẤU TRÚC SECTION 2 (Step 39 | 22/10/2026, 16:16)

- **Nội dung tóm tắt:** Viết lại toàn bộ Section 2 thành lưới 2 hàng đan xen hình ảnh: Hàng 1 gồm tiêu đề bên trái (`50%`) và khung ảnh nhỏ ngang `.visual-sm` bên phải (`35%`); Hàng 2 gồm khung ảnh lớn dọc `.visual-lg` bên trái (`40%`) và đoạn văn tự sự bên phải (`45%`). Tăng padding trên lên `200px`.
- **Mục đích:** Biến đoạn tuyên ngôn thành một tác phẩm nghệ thuật thị giác hoàn chỉnh, nơi câu chữ và hình ảnh tương hỗ theo đường z-pattern chặt chẽ.
- **Hiệu quả:** Tạo nên một bố cục tạp chí in sang trọng, giảm nhẹ kích thước chữ tiêu đề và cân bằng không gian bằng 2 khung ảnh nghệ thuật.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 07):** Khoảng cách giữa 2 hàng đang quá xa (`gap: 120px`), khiến 4 thành phần trông bị phân rã, thiếu tính gắn kết thị giác của một trang báo liền mạch.

---

#### PROMPT 07 — HOTFIX 03 (Step 57 | 22/10/2026, 16:21)

- **Nội dung tóm tắt:** Tinh chỉnh kéo gần các khối tử ở Section 2: Giảm `gap` xuống còn `60px`, đảm bảo `.manifesto-row` dùng `align-items: center`, và ép khối chữ hàng 2 thêm `margin-top: -20px` để nhích lên giao thoa nhẹ với khung ảnh dọc bên cạnh.
- **Mục đích:** Tạo sự giao thoa thị giác mềm mại giữa ảnh và chữ, đặc trưng của thiết kế Editorial cao cấp.
- **Hiệu quả:** 4 phần tử khóa chặt vào nhau thành một thể thống nhất, bố cục cực kỳ hài hòa và tinh tế.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 08):** Khi kiểm tra trên thiết bị di động (màn hình hẹp dưới 768px), phát hiện Section 1 bị vỡ giao diện: chữ bị ép vào một cột hẹp và rớt dòng liên tục từng từ.

---

#### PROMPT 08 — HOTFIX 04 (Step 65 | 22/10/2026, 16:31)

- **Nội dung tóm tắt:** Cập nhật `@media (max-width: 768px)` cho Section 1: Ép `.hero-content` và `.hero-visual-wrapper` trả về `flex: 0 0 100%; max-width: 100%`, xóa toàn bộ padding nội bộ gây co ép chữ.
- **Mục đích:** Sửa lỗi hiển thị responsive trên điện thoại, trả lại không gian dàn chữ tự nhiên.
- **Hiệu quả:** Chữ trên mobile co giãn mượt mà, layout chuyển thành 1 cột cân đối hoàn hảo.
- **Vì sao có prompt tiếp theo:** Hoàn thành xong giai đoạn mở màn (Header, Hero, Manifesto); chuyển sang xây dựng tính năng trọng tâm: Cỗ máy Cảm xúc.

---

### GIAI ĐOẠN 2: CỖ MÁY CẢM XÚC & KHỞI TẠO CÁC TRANG VỆ TINH

#### PROMPT 09 (Step 71 | 22/10/2026, 16:54)

- **Nội dung tóm tắt:** Viết HTML và CSS cho Section 3 (Cỗ máy Cảm xúc / Emotions) gồm nhóm nút lọc, đường đua cuộn ngang tràn mép phải (`scroll-snap-type: x mandatory`), và 5 thẻ cảm xúc có hiệu ứng nhấp nhô so le (`:nth-child(even)` translateY 48px).
- **Mục đích:** Tạo nên một "đường đua cảm xúc" phá cách, đưa người dùng vào hành trình chọn tâm trạng trước khi chọn sách.
- **Hiệu quả:** Dựng thành công thanh cuộn ngang mượt mà, ẩn thanh cuộn thô thiển của trình duyệt, hiệu ứng nhấp nhô hoạt động chuẩn xác.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 10):** Người dùng máy tính để bàn (dùng chuột) không thể vuốt màn hình như điện thoại, thanh cuộn bị ẩn khiến việc cuộn ngang bằng chuột rất khó khăn và thiếu tương tác hover sinh động.

---

#### PROMPT 10 (Step 89 | 22/10/2026, 21:03)

- **Nội dung tóm tắt:** Bổ sung tính năng kéo-để-cuộn (Drag-to-Scroll) bằng Vanilla JS cho track cảm xúc (lắng nghe `mousedown`, `mousemove`, `mouseup`; tắt tạm thời `scrollSnapType` khi kéo và bật lại khi nhả chuột); CSS hover đổi màu viền sang đỏ rượu.
- **Mục đích:** Cung cấp trải nghiệm lướt chuột mượt mà không bị khựng cho người dùng máy tính để bàn.
- **Hiệu quả:** Track cảm xúc có thể kéo thả tự nhiên bằng chuột, con trỏ đổi `grab`/`grabbing`, thả tay là thẻ tự động hít vào vị trí cân bằng.
- **Vì sao có prompt tiếp theo:** Section 3 đã hoàn thiện; tiếp tục mở rộng hệ sinh thái ứng dụng với trang Đăng nhập (`auth.html`).

---

#### PROMPT 11 (Step 102 | 23/10/2026, 22:46)

- **Nội dung tóm tắt:** Tạo trang `auth.html` với cấu trúc Split-screen (45% bên trái là hình ảnh & câu trích dẫn văn học nghệ thuật, 55% bên phải là Form đăng nhập với input gạch chân mỏng tối giản, không bo góc tròn).
- **Mục đích:** Xây dựng cổng đăng nhập tách biệt, thanh lịch, đồng bộ tuyệt đối với nhận diện thương hiệu của Distil.
- **Hiệu quả:** Trang `auth.html` ra đời với bố cục sang trọng, trường nhập liệu sắc sảo.
- **Vì sao có prompt tiếp theo:** Sau khi có trang Đăng nhập, cần có trang đích để người dùng xem thông tin và sách đã lưu (`profile.html`).

---

#### PROMPT 12 (Step 107 | 23/10/2026, 22:56)

- **Nội dung tóm tắt:** Tạo trang `profile.html` với Header cố định, khu vực hiển thị Avatar hình tròn lớn cùng tên độc giả, 2 Tab chuyển đổi ("Sách Yêu Thích" & "Lịch Sử Xem"), và lưới sách 4 cột mẫu.
- **Mục đích:** Dựng giao diện quản lý sách cá nhân cho độc giả.
- **Hiệu quả:** Tạo được khung giao diện trang cá nhân tối giản, đẹp mắt.
- **Vì sao có prompt tiếp theo:** Cần kết nối trạng thái đăng nhập giữa `auth.html`, `profile.html` và Header trên trang chủ `index.html`.

---

#### PROMPT 13 (Step 111 | 23/10/2026, 23:01)

- **Nội dung tóm tắt:** Cập nhật Header của `index.html`: Thêm khu vực `.auth-area` gồm nút "Đăng nhập" và "Avatar người dùng". Viết hàm `checkAuthState()` trong `app.js` để đọc `localStorage('currentUser')`, tự động đổi hiển thị nút đăng nhập thành Avatar tròn chứa chữ cái đầu của tên người dùng.
- **Mục đích:** Tự động hóa trải nghiệm người dùng, duy trì phiên đăng nhập xuyên suốt các trang.
- **Hiệu quả:** Người dùng đăng nhập ở `auth.html` lập tức được đồng bộ avatar trên toàn bộ hệ thống.
- **Vì sao có prompt tiếp theo:** Cần xây dựng cơ chế dữ liệu ngầm để lưu lại lịch sử đọc và sách yêu thích khi người dùng tương tác.

---

#### PROMPT 14 (Step 175 | 23/10/2026, 23:31)

- **Nội dung tóm tắt:** Viết các hàm logic mảng bằng Vanilla JS: `addToHistory(bookObj)` (dùng `unshift`, giới hạn 12 cuốn bằng `.slice(0, 12)`, loại bỏ trùng lặp) và `toggleFavorite(bookObj, starBtn)` để lưu vào `localStorage`.
- **Mục đích:** Xây dựng tầng quản trị dữ liệu (Data layer) phía client không cần backend database.
- **Hiệu quả:** Các hàm xử lý mảng hoạt động chính xác theo thuật toán hàng đợi (Queue).
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 15):** Các hàm này mới chỉ ở dạng rời rạc, cần được đấu nối trực tiếp vào các sự kiện thực tế trong 3 file `auth.html`, `app.js` và `profile.html`.

---

#### PROMPT 15 (Step 177 | 23/10/2026, 23:46)

- **Nội dung tóm tắt:** Tích hợp logic cụ thể vào 3 vị trí: Xử lý submit form và chuyển hướng ở `auth.html`; gọi `addToHistory` khi click mở thẻ sách ở `app.js`; và viết hàm `renderBooks(type)` để render dữ liệu động ra lưới sách theo tab ở `profile.html`.
- **Mục đích:** Khép kín toàn bộ vòng lặp dữ liệu: Đăng nhập -> Duyệt sách -> Xem chi tiết -> Lưu lịch sử -> Hiển thị trên Profile.
- **Hiệu quả:** Hệ thống dữ liệu hoạt động trơn tru giữa các trang.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 16):** Đánh giá lại trải nghiệm thấy nhóm nút lọc cảm xúc ở Section 3 bị thừa thãi (vì đã có các thẻ cảm xúc kéo trượt), danh xưng cảm xúc chưa chuẩn văn học, và bìa sách trong Modal bị lộ viền trắng thô kệch.

---

### GIAI ĐOẠN 3: TÁI THIẾT KẾ TRẢI NGHIỆM, DATABASE ẢO 43 SÁCH & MODAL CAO CẤP

#### PROMPT 16 (Step 179 | 24/10/2026, 02:13)

- **Nội dung tóm tắt:** Cập nhật lớn về UI: Xóa bỏ nhóm nút lọc ở Section 3, chuẩn hóa tên 5 cảm xúc thành _Hồi hộp, Xao xuyến, Thấu cảm, Ngột ngạt, Choáng ngợp_; nâng cấp Focus Modal ở Section 4 với nút Trái Tim yêu thích `.btn-heart-modal`, thanh cuộn văn bản `.scrollable-summary`, và dùng `mix-blend-mode: multiply` để triệt tiêu hoàn toàn nền trắng của ảnh bìa sách.
- **Mục đích:** Nâng tầm thẩm mỹ từ "giao diện website thường" lên "triển lãm nghệ thuật tinh tế", giải quyết vấn đề ảnh sách có viền trắng không tiệp màu nền giấy.
- **Hiệu quả:** Đưa ra giải pháp kỹ thuật xuất sắc, loại bỏ viền trắng ảnh sách hoàn toàn.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 17):** AI chỉ in mã ra màn hình chat bắt người dùng copy thủ công, vi phạm tính tự động hóa và gây nguy cơ sai sót khi dán mã.

---

#### PROMPT 17 — RÀNG BUỘC THỰC THI TUYỆT ĐỐI (Step 197 | 24/10/2026, 02:21)

- **Nội dung tóm tắt:** Ra lệnh đanh thép: _"RÀNG BUỘC THỰC THI TỐI THƯỢNG (CRITICAL): BẮT BUỘC sử dụng công cụ chỉnh sửa tệp để ghi trực tiếp và tự động áp dụng các thay đổi... TUYỆT ĐỐI KHÔNG chỉ in ra màn hình bắt người dùng copy thủ công!"_
- **Mục đích:** Thiết lập kỷ luật làm việc cho AI, buộc AI phải dùng Tool can thiệp trực tiếp vào mã nguồn.
- **Hiệu quả:** AI bắt đầu sử dụng chuẩn xác các công cụ chỉnh sửa file, tự động áp dụng các thay đổi từ Prompt 16 vào dự án.
- **Vì sao có prompt tiếp theo:** Sau khi UI đã sẵn sàng, cần nạp kho dữ liệu sách thực tế đồ sộ và logic xáo trộn sách.

---

#### PROMPT 18 (Step 217 | 24/10/2026, 02:32)

- **Nội dung tóm tắt:** Xây dựng cơ sở dữ liệu ảo `bookDatabase` gồm đầy đủ 43 cuốn sách văn học kinh điển được phân theo đúng 5 cảm xúc (mỗi cuốn có tóm tắt phê bình sâu sắc). Viết hàm `renderBookGrid()` với thuật toán Shuffle và cơ chế Fallback chống trùng lặp, gắn sự kiện click thẻ cảm xúc cuộn mượt xuống Section 4, và gắn logic Thả Tim vào `localStorage`.
- **Mục đích:** Thổi linh hồn vào dự án với nội dung sách phong phú, sâu sắc và thuật toán gợi ý ngẫu nhiên thông minh.
- **Hiệu quả:** 43 cuốn sách được tích hợp trọn vẹn, cơ chế lọc và cuộn mượt hoạt động chuẩn xác.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 19):** Khung ảnh bìa sách trong Modal (`.focus-book-cover`) bị chia đôi không gian kỳ lạ do xung đột giữa thẻ `img` mới và khối chữ tĩnh `.focus-book-inner` cũ chưa được dọn dẹp.

---

#### PROMPT 19 — HOTFIX 05 (Step 231 | 24/10/2026, 02:44)

- **Nội dung tóm tắt:** Sửa lỗi giao diện Modal trong `style.css`: Ẩn hoàn toàn khối chữ cũ bằng `.focus-book-inner { display: none !important; }` và ép ảnh bìa lấp đầy tuyệt đối bằng `position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;`.
- **Mục đích:** Trả lại toàn bộ không gian khung 3/4 cho ảnh bìa sách trong Modal.
- **Hiệu quả:** Bìa sách trong Modal hiện lên to rõ, tràn khung sắc nét, hòa trộn màu giấy tuyệt mỹ.
- **Vì sao có prompt tiếp theo:** Trang chủ đã có Modal hoàn hảo và nút trái tim, trong khi trang Profile vẫn dùng nút ngôi sao cũ và chưa mở được Modal.

---

#### PROMPT 20 (Step 241 | 24/10/2026, 02:55)

- **Nội dung tóm tắt:** Đồng bộ toàn diện UI thẻ sách ở `profile.html`: Bỏ nút ngôi sao, thay bằng icon trái tim `.card-heart-icon`, sao chép nguyên vẹn cấu trúc Modal sang `profile.html`, và gắn sự kiện click mở Focus Modal giống hệt trang chủ.
- **Mục đích:** Đồng nhất trải nghiệm giữa trang khám phá và trang lưu trữ cá nhân.
- **Hiệu quả:** Độc giả có thể bấm vào bất kỳ cuốn sách nào trong kho Yêu thích hoặc Lịch sử ở Profile để mở Modal xem lại trích dẫn.
- **Vì sao có prompt tiếp theo:** Khung tính năng và dữ liệu đã hoàn thiện; bước vào giai đoạn nâng cấp trải nghiệm thị giác điện ảnh (Cinematic Web Animations).

---

### GIAI ĐOẠN 4: THĂNG HOA CINEMATIC & TINH CHỈNH VI MÔ

#### PROMPT 21 (Step 267 | 24/10/2026, 03:56)

- **Nội dung tóm tắt:** Tích hợp 3 hiệu ứng tương tác cao cấp: Hiệu ứng máy đánh chữ CSS `@keyframes typing` cho tiêu đề Hero, thư viện AOS cho các khối nội dung khi cuộn trang, và hiệu ứng đổi màu nền toàn cục theo độ cuộn chuột qua lớp `#scroll-bg-overlay`.
- **Mục đích:** Tạo ra chiều sâu không gian và cảm giác trang web đang "sống" và tương tác với người đọc khi họ cuộn chuột.
- **Hiệu quả:** Hiệu ứng cuộn AOS và đổi màu nền ngà `#f4f1ea` diễn ra ấn tượng.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 22):** Hiệu ứng Typing bằng CSS thuần bộc lộ nhược điểm cố hữu: bị cắt cụt chữ tiếng Việt khi xuống dòng (do `white-space: nowrap`), không hỗ trợ đa dòng và con trỏ nhấp nháy bị kéo dài bất thường theo chiều cao của cả section.

---

#### PROMPT 22 — FIX TYPING EFFECT SANG JAVASCRIPT (Step 333 | 24/10/2026, 04:08)

- **Nội dung tóm tắt:** Xóa bỏ CSS typing cũ; chuyển sang viết Vanilla JS phân tách từng ký tự và thẻ `<br>`, dùng `setTimeout` gõ từng chữ một với độ trễ 50-80ms, kèm con trỏ nhấp nháy `.typing-cursor` riêng biệt có chiều cao đúng bằng 1 dòng chữ (`1em`).
- **Mục đích:** Khắc phục triệt để lỗi gõ chữ tiếng Việt đa dòng, đảm bảo dấu tiếng Việt không bị cắt và con trỏ chuẩn tỷ lệ typography.
- **Hiệu quả:** Tiêu đề được gõ ra tự nhiên từng ký tự, tự động xuống dòng mượt mà, con trỏ nhấp nháy thanh thoát.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 23):** Nhịp gõ chữ còn hơi nhanh (50-80ms) chưa toát lên vẻ tự sự từ tốn; con trỏ nhấp nháy liên tục sau khi đã gõ xong gây mất tập trung; và hiệu ứng cuộn trang AOS mặc định trượt lên quá nhanh so với phong cách thư thái của thư viện.

---

#### PROMPT 23 — ĐỒNG BỘ NHỊP ĐIỆU CINEMATIC (Step 343 | 24/10/2026, 04:21)

- **Nội dung tóm tắt:** Làm chậm tốc độ gõ chữ lên mức 100-120ms/ký tự; thêm `setTimeout` 2000ms sau khi kết thúc để tự động xóa hoàn toàn `.typing-cursor` khỏi DOM; tăng thời lượng cuộn AOS lên `1200ms` với `easing: 'ease-in-out'`.
- **Mục đích:** Thiết lập nhịp điệu chuyển động đồng bộ, khoan thai, quý phái chuẩn phong cách Cinematic Editorial.
- **Hiệu quả:** Trang web mở ra chậm rãi, sâu lắng; con trỏ biến mất gọn gàng sau khi gõ xong, các khối nội dung lướt lên êm ru như phim điện ảnh.
- **Vì sao có prompt tiếp theo:** Chuyển sang hoàn thiện trải nghiệm hover cho 5 thẻ cảm xúc ở Section 3.

---

#### PROMPT 24 (Step 353 | 24/10/2026, 04:38)

- **Nội dung tóm tắt:** Cập nhật trạng thái hover của `.emotion-card`: Xóa viền đỏ cũ, thêm `transform: translateY(-3px)` nâng thẻ nhẹ nhàng, và tỏa ánh sáng hào quang trắng kem `box-shadow: 0 0 20px 4px rgba(244, 241, 234, 0.6)`.
- **Mục đích:** Thay thế màu viền đỏ gắt bằng ánh sáng dịu nhẹ lan tỏa đều, tăng cảm giác huyền ảo ấm áp.
- **Hiệu quả:** Thẻ cảm xúc hover phát sáng lung linh, tạo cảm giác lơ lửng rất đẹp.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 25):** Khi quan sát kỹ trên màn hình rộng, các thẻ nằm ở vị trí sát mép ngoài (thẻ số 1, 3, 5) bị cắt xén một phần bóng đổ và hiệu ứng nảy lên do container bao bọc thiếu khoảng đệm (padding) thở.

---

#### PROMPT 25 — HOTFIX 06 (Step 369 | 24/10/2026, 04:48)

- **Nội dung tóm tắt:** Thêm `padding: 30px` vào container cha bọc danh sách thẻ cảm xúc và gỡ bỏ mọi thuộc tính `overflow: hidden` nếu có.
- **Mục đích:** Tạo không gian thở (breathing room) để bóng đổ hào quang tỏa rộng tự nhiên mà không bị mép màn hình hay viền container cắt cụt.
- **Hiệu quả:** Hào quang tỏa sáng trọn vẹn 360 độ quanh cả 5 thẻ cảm xúc, bóng đổ mềm mại không tì vết.
- **Vì sao có prompt tiếp theo:** Các tương tác chính đã hoàn thiện; tiến hành tái thiết kế Footer thành cấu trúc Editorial chuyên nghiệp.

---

### GIAI ĐOẠN 5: EDITORIAL FOOTER, BOLD CONTRAST & KHUNG ẢNH ĐIỆN ẢNH

#### PROMPT 26 (Step 383 | 24/10/2026, 05:05)

- **Nội dung tóm tắt:** Thay thế toàn bộ Footer cũ bằng cấu trúc Editorial Footer 3 cột: Cột 1 (Thương hiệu Distil), Cột 2 (Thông điệp Mục tiêu Phát triển Bền vững SDG 04 - Giáo dục chất lượng), Cột 3 (Điều hướng quay về đầu trang & Bản quyền).
- **Mục đích:** Đưa giá trị nhân văn và trách nhiệm xã hội vào chân trang web theo chuẩn báo chí quốc tế.
- **Hiệu quả:** Cấu trúc 3 cột grid phân chia mạch lạc (`1fr 2fr 1fr`), làm nổi bật thông điệp giáo dục.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 27):** Footer nền trắng ngà ban đầu quá mờ nhạt, hòa lẫn vào nền trang và không tạo ra được một điểm "hạ màn" (outro) vững chãi, uy nghi cho chuyến tham quan triển lãm.

---

#### PROMPT 27 — BOLD CONTRAST FOOTER (Step 399 | 24/10/2026, 05:10)

- **Nội dung tóm tắt:** Nâng cấp Footer thành phiên bản "Bold Contrast": Chuyển sang nền đỏ trầm sang trọng (`var(--clr-primary-dark)` / `#7b1113`), ép toàn bộ chữ sang màu trắng ngà `#f4f1ea`, tăng mạnh không gian thở với `padding: 100px 20px 80px`.
- **Mục đích:** Tạo cái kết tương phản mạnh mẽ, trang trọng và lắng đọng ở cuối trang web.
- **Hiệu quả:** Khối chân trang nổi bật lộng lẫy, màu đỏ rượu vang mang lại chiều sâu thị giác cực lớn.
- **Vì sao sau đó phải sửa lại (Lý do có Prompt 28):** Nội dung thông điệp SDG 04 hiện tại đang trích nguyên văn nghị quyết Liên Hợp Quốc nên quá khô cứng, không ăn nhập với ngôn từ tự sự văn học của Distil.

---

#### PROMPT 28 — COPYWRITING SDG 04 (Step 409 | 24/10/2026, 05:13)

- **Nội dung tóm tắt:** Đóng vai trò Copywriter để viết lại nội dung cột SDG 04 thành áng văn tự sự giàu chất thơ: Tiêu đề "SDG 04: GIÁO DỤC CHẤT LƯỢNG", câu trích in nghiêng _"Vì tri thức là đặc quyền không của riêng ai"_, kèm thông điệp mở ra cơ hội thắp sáng tiềm năng con người. Đồng bộ vào cả `index.html` và `profile.html`.
- **Mục đích:** Hòa trộn sứ mệnh giáo dục toàn cầu vào linh hồn nghệ thuật của dự án.
- **Hiệu quả:** Khối chân trang trở nên truyền cảm xúc mạnh mẽ, chạm đến trái tim người đọc.
- **Vì sao có prompt tiếp theo:** Các khung ảnh ở Section 1 và Section 2 vẫn đang để màu xám placeholder, cần lấp đầy bằng các bức ảnh nghệ thuật cinematic.

---

#### PROMPT 29 (Step 427 | 24/10/2026, 06:08)

- **Nội dung tóm tắt:** Chèn 3 bức ảnh cinematic vào 3 khung trống ở Section 1 (`frame-1.jpg`) và Section 2 (`frame-2.jpg`, `frame-3.jpg`). CSS thiết lập `object-fit: cover`, cha có `overflow: hidden`, và thêm hiệu ứng Cinematic Hover zoom nhẹ `transform: scale(1.05)` trong 1.2s cubic-bezier.
- **Mục đích:** Hiện thực hóa các không gian tĩnh vật, mang lại cảm giác góc máy quay điện ảnh đang lia nhẹ vào chủ thể.
- **Hiệu quả:** 3 khung hình hòa nhập hoàn hảo vào bố cục, hover zoom chậm rãi đầy chất nghệ thuật.
- **Vì sao có prompt tiếp theo:** Kiểm tra lại thanh Header thấy 4 menu điều hướng là quá nhiều, trong đó "Bộ sưu tập" và "Tiêu điểm" làm phân tán sự chú ý của người xem.

---

#### PROMPT 30 (Step 460 | 24/10/2026, 06:23)

- **Nội dung tóm tắt:** Tinh gọn Header trên cả `index.html` và `profile.html`: Xóa bỏ 2 liên kết "Bộ sưu tập" và "Tiêu điểm", chỉ giữ lại "Tuyên ngôn" và "Cảm xúc"; dùng `margin-left: auto; margin-right: 36px` đẩy cụm menu sang sát nút Avatar/Đăng nhập.
- **Mục đích:** Tối giản hóa điều hướng, dẫn dắt độc giả tập trung tuyệt đối vào 2 điểm nhấn cốt lõi, tạo khoảng trống thanh thoát cho logo bên trái.
- **Hiệu quả:** Thanh Header đạt đến độ tinh giản cao cấp, cân đối hoàn hảo trên mọi kích thước màn hình.
- **Vì sao có prompt tiếp theo:** Nhận thấy Section 5 cũ (Epilogue thẻ lật chữ 3D) có nội dung đơn điệu, cần thay thế bằng một điểm nhấn đa giác quan kết hợp âm thanh.

---

### GIAI ĐOẠN 6: ĐỘT PHÁ ĐA GIÁC QUAN — SOUNDSCAPE & BENTO 3D FLIP

#### PROMPT 31 — SECTION SOUNDSCAPE ĐĨA THAN (Step 502 | 24/10/2026, 08:14)

- **Nội dung tóm tắt:** Thay thế hoàn toàn Section 5 cũ bằng Section Soundscape mang phong cách Editorial: Cột trái là thông điệp "Hãy để không gian chạm đến bạn", cột phải là khung tròn đĩa than nghệ thuật (`#vinylWrapper`, `#vinylDisc`) tích hợp nút Play/Pause Spindle và phát lặp lại file audio `fairytale-from-shrek.mp3`.
- **Mục đích:** Khơi gợi thính giác của độc giả, biến việc đọc sách thành trải nghiệm đa giác quan hoài niệm với tiếng nhạc du dương.
- **Hiệu quả:** Đĩa than xoay tròn mượt mà (`@keyframes spinVinyl`) khi phát nhạc và đóng băng tự nhiên khi tạm dừng; click trực tiếp vào đĩa hoặc nút tâm trục đều điều khiển bật/tắt audio trơn tru.
- **Vì sao có prompt tiếp theo:** Sau khi bổ sung âm thanh, cần thêm một phân đoạn nội dung tri thức hấp dẫn ngay trước Footer để độc giả khám phá thêm về các giải thưởng văn học danh giá.

---

#### PROMPT 32 — SECTION BENTO GRID & 3D CARD FLIP (Step 548 | 24/10/2026, 11:00)

- **Nội dung tóm tắt:** Tạo mới Section "Có thể bạn chưa biết" đặt ngay trên Footer. Yêu cầu kết hợp bố cục Bento Grid bất đối xứng 3 cột (Hàng 1 chia tỷ lệ 2:1, Hàng 2 chia tỷ lệ 1:2) và hiệu ứng lật thẻ 3D 180° (`perspective: 1200px`, `transform-style: preserve-3d`) giới thiệu 4 giải thưởng văn học của 4 tác phẩm từ thư mục `images/tin-tuc/`.
- **Mục đích:** Mang đến một bến đỗ tri thức bất ngờ ở cuối trang, kết hợp mỹ cảm hiện đại của Bento layout và sự kỳ thú của hiệu ứng lật thẻ 3 chiều.
- **Hiệu quả:** 4 thẻ lật 3D hoạt động hoàn hảo: Mặt trước là ảnh điện ảnh tràn viền với overlay mờ; Mặt sau là nền nhung đỏ rượu hé lộ câu chuyện lịch sử giải thưởng sâu sắc; hỗ trợ chạm lật trên cả điện thoại di động.
- **Vì sao có prompt tiếp theo:** Dự án đã hoàn thiện 100% về tính năng, mỹ thuật và trải nghiệm; cần đúc kết hệ thống kỹ thuật phục vụ báo cáo bảo vệ đồ án.

---

### GIAI ĐOẠN 7: TỔNG KẾT HỆ THỐNG & XUẤT BẢN NHẬT KÝ

#### PROMPT 33 (Step 591 | 24/10/2026, 18:03)

- **Nội dung tóm tắt:** _"Từ dự án này, hãy tóm tắt từ khóa kỹ thuật nổi bật được áp dụng ở từng page và section. Nói ngắn gọn, đúng trọng tâm."_
- **Mục đích:** Hệ thống hóa toàn bộ các giải pháp công nghệ đã triển khai (CSS Grid/Flexbox, Vanilla JS, Web APIs, GPU animations) thành các thuật ngữ chuyên môn phục vụ thuyết minh đồ án.
- **Hiệu quả:** Bản tổng hợp từ khóa kỹ thuật mạch lạc, sắc bén, thể hiện chiều sâu chuyên môn Frontend.
- **Vì sao có prompt tiếp theo:** Cần bổ sung góc nhìn tổng quan về ý nghĩa nhân văn và sứ mệnh sản phẩm để bài thuyết trình có chiều sâu cảm xúc.

---

#### PROMPT 34 (Step 594 | 24/10/2026, 18:35)

- **Nội dung tóm tắt:** _"Tổng quan về dự án, mục đích"_
- **Mục đích:** Đúc kết tầm nhìn, bản sắc thương hiệu, triết lý "Đọc sách theo cảm xúc" và giá trị phụng sự cộng đồng gắn liền với Mục tiêu SDG 04 của Liên Hợp Quốc.
- **Hiệu quả:** Bản tuyên ngôn hoàn chỉnh định vị Distil là một không gian triển lãm văn học tiên phong.
- **Vì sao có prompt tiếp theo:** Bước cuối cùng để hoàn tất tài liệu đồ án: lưu trữ toàn bộ hành trình trao đổi và phát triển vào tệp nhật ký chính thức.

---

#### PROMPT 35 (Step 596 | 24/10/2026, 19:08)

- **Nội dung tóm tắt:** _"Tạo lịch sử prompt cho file final-exam-diary mà tôi đã tạo sẵn, thu thập các câu prompt của tôi, mục đích, và hiệu quả câu prompt như thế nào, vì sao sau đó tôi lại có câu prompt sửa lại."_
- **Mục đích:** Tổng hợp toàn diện tiến trình kỹ nghệ câu lệnh (Prompt Engineering), ghi chép lại mọi phân tích nguyên nhân - kết quả để tạo thành bản nhật ký đồ án mẫu mực.
- **Hiệu quả:** Xuất bản tài liệu `final-exam-diary.md` chi tiết, minh bạch và khoa học.

---

## IV. ĐÚC KẾT BÀI HỌC VỀ PROMPT ENGINEERING

1. **Kiểm soát chặt chẽ vai trò và quy chuẩn thiết kế (Strict Role & Constraint Definition):**
   - Việc liên tục nhắc lại ràng buộc _"Senior Frontend Developer"_, _"Vanilla HTML5/CSS3/JS"_, và _"Anti-AI Design System"_ đã ngăn chặn hoàn toàn việc AI tự ý đưa vào các thư viện nặng nề hoặc áp dụng các thiết kế giao diện rập khuôn, rẻ tiền.

2. **Chuyển dịch từ "Tư vấn" sang "Thực thi" (Action-oriented Prompts):**
   - Prompt 17 là bước ngoặt quyết định khi áp đặt lệnh cấm in code và bắt buộc AI dùng công cụ can thiệp tệp. Điều này giúp loại bỏ 100% lỗi sai sót do copy-paste thủ công của con người và đẩy tốc độ phát triển lên mức tối đa.

3. **Chiến lược phân tách module và tinh chỉnh vi mô (Modular & Incremental Refinement):**
   - Không bao giờ yêu cầu AI viết toàn bộ website trong một câu lệnh duy nhất. Quy trình thành công của Distil là xây dựng từng Section, kiểm tra trực quan, và lập tức đưa ra các prompt "Hotfix" tập trung vào đúng một điểm nghẽn (ví dụ: Prompt 03 sửa bù trừ Header, Prompt 07 chỉnh âm lề giao thoa, Prompt 22 chuyển gõ chữ sang JS, Prompt 25 mở rộng đệm bóng đổ).

4. **Nâng cấp từ Mỹ cảm đến Linh hồn (From Polish to Narrative):**
   - Sức mạnh của Prompt Engineering thể hiện rõ nhất ở các prompt về Copywriting và Nhịp điệu (Prompt 23, 27, 28): AI không chỉ là cỗ máy sinh mã, mà trở thành người đồng hành sáng tạo nội dung, điều chỉnh từng nhịp trễ 100ms và gọt giũa từng câu chữ để truyền tải trọn vẹn thông điệp giáo dục nhân văn.
