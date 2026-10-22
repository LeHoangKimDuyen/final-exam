# BẢNG PHÂN CÔNG NHIỆM VỤ DỰ ÁN (CẬP NHẬT THEO THỜI GIAN THỰC TẾ)

**Dự án:** Triển lãm Nghệ thuật Ngôn từ (Book Exploration Experience)
**Mô hình làm việc:** Phân chia theo luồng Layout dọc (Top/Bottom) và Trọng tâm Kỹ thuật.

## VAI TRÒ & KHỐI LƯỢNG CÔNG VIỆC

**Thành viên Lê Hoàng Kim Duyên (Nhóm Trưởng)**

- **Vai trò:** Quản lý hệ thống (DevOps), Tích hợp Dữ liệu, và UI Nửa trên.
- **Nhiệm vụ cụ thể:**
  1. Khởi tạo repo GitHub, thiết lập các file gốc (`index.html`, `style.css`), và nạp bộ quy tắc Anti-AI/Design System/skill.
  2. Dựng HTML & CSS cho **Section 1, 2, 3**.
  3. Quản lý nội dung: Tìm kiếm hình ảnh bìa sách/ảnh nghệ thuật, tạo file `data.js` chứa các trích dẫn văn học.
  4. Code logic JavaScript (`app.js`) cho Section 4 (Tích hợp chức năng cho phần giao diện mà bạn B làm).
  5. Quản lý Git: Xử lý trộn code (Merge), giải quyết conflict và đưa web lên mạng (Deploy).

**Thành viên Nguyễn Thị Minh Thư (Thành viên)**

- **Vai trò:** Chuyên viên Giao diện (UI Layout Nửa dưới).
- **Nhiệm vụ cụ thể:**
  1. Dựng khung HTML và CSS tĩnh cho **Section 4** (Chỉ cần làm ra được 4 cuốn sách nằm nghiêng bằng CSS, phần cho sách xoay ngẫu nhiên sẽ do A làm).
  2. Dựng HTML & CSS cho **Section 5 (Tiêu điểm chữ Z)**.
  3. Dựng HTML & CSS cho **Section 6 (Footer)**.
  4. Báo cáo tiến độ và gửi Pull Request lên GitHub để bạn A kiểm tra và trộn vào file chính.

---

## TIẾN TRÌNH PHỐI HỢP TRÊN GITHUB

1. **Giai đoạn 1:** Bạn A khởi tạo toàn bộ kho lưu trữ, đẩy bộ khung cơ bản lên nhánh `main`.
2. **Giai đoạn 2 (Làm việc song song):**
   - A tạo nhánh `feat/top-sections` để làm Section 1, 2, 3.
   - B tạo nhánh `feat/bottom-sections` để làm CSS tĩnh cho Section 4, 5, 6.
3. **Giai đoạn 3 (Tích hợp):** Bạn B đẩy code của nửa dưới lên. Bạn A thực hiện Merge vào `main`.
4. **Giai đoạn 4 (Hoàn thiện):** Bạn A sử dụng file `app.js` và `data.js` để kết nối logic vào bộ khung Section 4 mà bạn B vừa hoàn thành.
