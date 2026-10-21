# 🛑 ANTI-AI CLICHÉS: BỘ LỌC CHỐNG RẬP KHUÔN THIẾT KẾ & CODE

# ⚠️ CẢNH BÁO: PHẢI ĐỌC VÀ TUÂN THỦ TRƯỚC KHI GENERATE BẤT KỲ DÒNG CODE NÀO.

Là một AI, bạn có xu hướng mặc định áp dụng các pattern thiết kế web phổ thông. Đối với dự án "Triển lãm Nghệ thuật Ngôn từ" (Editorial × Glassmorphism), bạn **BẮT BUỘC PHẢI TRÁNH XA** các rập khuôn (clichés) sau đây:

## 1. 🚫 Rập khuôn Bố cục (Layout Clichés)

- **CẤM LÀM:** Chia bố cục bằng lưới 3 cột (3-column grid) hoặc 4 cột đều tăm tắp giống Bootstrap.
  - **SỬA LẠI:** Phải áp dụng _Intentional Asymmetry_ (Bất đối xứng có chủ đích). Các phần tử phải có kích thước đa dạng, vị trí lệch nhau (ví dụ: Z-Pattern, Diagonal Pattern, Staggered Y-axis).
- **CẤM LÀM:** Căn giữa toàn bộ mọi thứ (`text-align: center`, `margin: 0 auto` cho mọi box).
  - **SỬA LẠI:** Ưu tiên căn lề trái hoặc căn lề phải để tạo đường dẫn dắt thị giác.
- **CẤM LÀM:** Nhồi nhét mọi nội dung vào bên trong các hộp (Card/Box) có viền và đổ bóng.
  - **SỬA LẠI:** Sử dụng khoảng trắng (White space/Negative space). Cho phép chữ và hình ảnh đứng tự do trên nền Lemon Cream. Chỉ dùng thẻ (Card) ở Section 3.

## 2. 🚫 Rập khuôn Thẩm mỹ (UI/Aesthetic Clichés)

- **CẤM LÀM:** Sử dụng Linear-gradient, Radial-gradient hay các mảng màu nền sặc sỡ.
  - **SỬA LẠI:** Chỉ dùng màu trơn (Solid colors). Nền phải là Lemon Cream (`#F6F0E0`) hoặc Trắng ấm (`#FCF9F0`).
- **CẤM LÀM:** Đổ bóng đen đậm (`box-shadow: 0 4px 8px rgba(0,0,0,0.2)`).
  - **SỬA LẠI:** Shadow phải cực kỳ tinh tế, nhạt màu, hoặc dùng "Halo Effect" ánh trắng ấm.
- **CẤM LÀM:** Bo góc tròn xoe cho mọi thứ (`border-radius: 20px` hoặc `99px`).
  - **SỬA LẠI:** Sách và hình ảnh mang tính tạp chí (Editorial) phải có góc vuông vức (`0px`) hoặc bo cực nhẹ (`2px` - `4px`).
- **CẤM LÀM:** Lạm dụng màu chính (Red Wine) để tô màu cả một Section lớn.
  - **SỬA LẠI:** Red Wine (`#7B1113`) CHỈ dùng cho Nút bấm, Tiêu đề cần nhấn mạnh, và Icon.
  - **CẤM LÀM:** Bo tròn quá đà các nút bấm (Button) tạo thành hình viên thuốc (`border-radius: 50px` hoặc `999px`).
  - **SỬA LẠI:** Nút bấm trong phong cách Editorial cần sự góc cạnh, dứt khoát và trưởng thành. Chỉ sử dụng góc vuông sắc nét (`border-radius: 0px`) hoặc bo cực kỳ nhẹ (`border-radius: 2px` đến `4px`) để làm mềm một chút nhưng vẫn giữ nguyên form khối hình chữ nhật.

## 3. 🚫 Rập khuôn Thương mại điện tử (eCommerce Clichés)

- **CẤM LÀM:** Tự ý thêm Nút "Buy Now", "Add to Cart", "Đọc ngay", "Read More".
- **CẤM LÀM:** Tự ý thêm Đánh giá sao (⭐⭐⭐⭐⭐), Giá tiền ($19.99), Lượt xem, Lượt tải.
- **CẤM LÀM:** Tạo thanh Phân trang (Pagination: 1 2 3 ... Next) hoặc nút "Xem tất cả" dẫn sang trang khác.
  - **SỬA LẠI:** Đây là không gian KHÔNG ÁP LỰC. Thay bằng nút "Khám phá thêm" hoặc "Shuffle" để tráo đổi ngẫu nhiên 4 cuốn sách khác ngay tại chỗ.

## 4. 🚫 Rập khuôn Code & Cấu trúc (Code Clichés)

- **CẤM LÀM:** Trộn lẫn CSS/JS vào chung file `index.html` (Inline/Internal styles).
  - **SỬA LẠI:** Tách biệt tuyệt đối ra `/css/style.css` và `/js/app.js`.
- **CẤM LÀM:** Tự ý `import` Tailwind CSS, Bootstrap, FontAwesome từ CDN (trừ Google Fonts đã chỉ định).
  - **SỬA LẠI:** Code 100% bằng Vanilla CSS. Nếu cần icon, dùng SVG dạng inline hoặc CSS Shapes.
- **CẤM LÀM:** Viết tên class bừa bãi.
  - **SỬA LẠI:** Sử dụng quy ước đặt tên class ngữ nghĩa (BEM cơ bản) và bám sát các class đã định nghĩa sẵn như `.glass-panel`, `.halo-glow`.

## 5. 🚫 Rập khuôn Nội dung (Content Clichés)

- **CẤM LÀM:** Dùng chữ `Lorem ipsum dolor sit amet...` để làm dữ liệu mẫu.
  - **SỬA LẠI:** Phải tự tạo dữ liệu mẫu (mock data) bằng tiếng Việt hoặc tiếng Anh có ý nghĩa, mang tính văn học, hàn lâm hoặc cảm xúc.
- **CẤM LÀM:** Viết copy (văn bản) kiểu máy móc, quảng cáo rẻ tiền (VD: "Chào mừng bạn đến với trang web tuyệt vời của chúng tôi!").
  - **SỬA LẠI:** Copy phải mang tính tự sự, sâu sắc, đúng tinh thần tạp chí văn chương ("Nơi đây không có giỏ hàng...").
- **CẤM LÀM:** Tự ý chèn các icon (emoji, FontAwesome, SVG icons) vào trong nội dung văn bản, tiêu đề, tóm tắt hoặc các thẻ (card).
  - **SỬA LẠI:** Phong cách Editorial tôn vinh sự tĩnh lặng và nghệ thuật Typography. Hãy để câu chữ tự lên tiếng. Chỉ sử dụng icon ở mức độ tối thiểu cho mục đích điều hướng (ví dụ: mũi tên nhỏ `➔` ở nút CTA), TUYỆT ĐỐI không dùng icon để minh họa hay trang trí nội dung.
