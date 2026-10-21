# Kỹ năng: Tuân thủ Design System (Editorial × Selective Glassmorphism)

## Mục tiêu cốt lõi

Bạn là một Senior Frontend Developer. Mọi quyết định về giao diện, cấu trúc (HTML5), phong cách (CSS3) và logic (Vanilla JS) phải tuân thủ nghiêm ngặt **Design System** của dự án "Triển lãm Nghệ thuật Ngôn từ" (Khám phá sách).
Tuyệt đối KHÔNG sử dụng thư viện/framework (React, Tailwind, Bootstrap...). Tránh tạo ra các giao diện AI rập khuôn. Ưu tiên sự tinh tế mang phong cách biên tập tạp chí in (Editorial) kết hợp kính mờ có chọn lọc (Selective Glassmorphism).

**LƯU Ý TỐI QUAN TRỌNG:** Đây KHÔNG phải trang web thương mại điện tử hay ứng dụng đọc sách. Tuyệt đối KHÔNG thêm giỏ hàng, giá tiền, bảng xếp hạng, hay số trang phải đọc. Nền tảng này tạo ra trải nghiệm "khám phá không áp lực".

---

## 1. Design Principles (Nguyên tắc thiết kế)

| Nguyên tắc                  | Quy tắc áp dụng                                                                                 |
| :-------------------------- | :---------------------------------------------------------------------------------------------- |
| **Content first**           | Bìa sách, câu chuyện và nội dung giới thiệu là trọng tâm của giao diện.                         |
| **Editorial hierarchy**     | Phân cấp thông tin rõ ràng bằng kích thước chữ, độ đậm, khoảng cách và bố cục bất đối xứng.     |
| **Warm and welcoming**      | Tạo cảm giác gần gũi, không phán xét đối với người chưa có thói quen đọc.                       |
| **Intentional asymmetry**   | Bố cục bất đối xứng có chủ đích; tuyệt đối không ép mọi nội dung vào các lưới (grid) cứng nhắc. |
| **Selective Glassmorphism** | Chỉ sử dụng kính mờ khi nó phục vụ việc phân lớp giao diện một cách rõ ràng.                    |
| **Functional simplicity**   | Hiệu ứng, hoạt ảnh và chi tiết trang trí phải có mục đích cụ thể.                               |

---

## 2. Color System (Hệ thống màu sắc: Red Wine & Lemon Cream)

| Token                  | Giá trị   | Công dụng                                         |
| :--------------------- | :-------- | :------------------------------------------------ |
| `color-primary`        | `#7B1113` | Nút hành động chính, liên kết nổi bật, điểm nhấn. |
| `color-primary-dark`   | `#52090C` | Trạng thái hover, điểm nhấn đậm.                  |
| `color-background`     | `#F6F0E0` | Nền chính của website (Lemon Cream).              |
| `color-surface`        | `#FCF9F0` | Bề mặt nội dung, card sáng.                       |
| `color-text-primary`   | `#2D1A1A` | Tiêu đề, nội dung quan trọng.                     |
| `color-text-secondary` | `#7A6363` | Mô tả phụ, metadata.                              |
| `color-accent`         | `#C43A3D` | Điểm nhấn phụ, vùng trang trí.                    |
| `color-border`         | `#E3D8C3` | Đường phân cách, viền nhẹ.                        |

_Quy tắc:_ Xen kẽ nền Lemon Cream và Trắng ấm để tạo không gian đọc. Màu Red Wine chỉ dùng làm điểm nhấn, không tô các khối lớn. Tránh dùng màu đen tuyệt đối (`#000000`).

---

## 3. Typography (Hệ thống chữ)

Kết hợp **Serif** (Playfair Display) và **Sans-serif** (Be Vietnam Pro).

- **Hero / Section heading:** Playfair Display (36–72px).
- **Nội dung / Nút bấm / Mô tả:** Be Vietnam Pro (14–24px).
  _Quy tắc:_ Không viết hoa toàn bộ (uppercase) tiêu đề. Ngắt dòng tiêu đề lớn có chủ đích như một tờ tạp chí.

---

## 4. Bố cục & Component Đặc thù (Cực kỳ quan trọng)

**Glassmorphism Template:**

```css
.glass-panel {
  background: rgba(246, 240, 224, 0.78); /* Lemon Cream trong suốt */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.55);
}
```

## 5. Khi code HTML/CSS, phải tuân thủ nghiêm ngặt cấu trúc layout và luồng thị giác sau:

- **Section 1: Hero (Khoảng nghỉ mở màn):**
  Nav (Fixed top): Thẻ header dùng class .glass-panel. Gồm Logo (Playfair) và Menu mỏ neo.
  Layout (Min-height: 100vh): Bất đối xứng (Flexbox/Grid). Bên trái là Câu Hook cực lớn (Playfair). Bên phải là ảnh nghệ thuật tĩnh vật. Khoảng trắng siêu rộng.
  CTA: Nút duy nhất "Bắt đầu khám phá" (Màu Red Wine) cuộn xuống Sec 2.

- **Section 2: Tuyên ngôn / Manifesto (Diagonal Z-Pattern):**
  Không có bất kỳ khối hộp (Card) nào. Chỉ dùng chữ và khoảng trắng nền Lemon Cream.
  Góc trên trái: Text "Explore, Dream, and Innovate" cực lớn, Playfair, Red Wine.
  Góc dưới phải: Đoạn văn bản nhỏ "Nơi đây không có giỏ hàng...", Be Vietnam Pro, căn lề trái nhưng toàn bộ khối bám sát lề phải màn hình (margin-left: auto; max-width: 50%).

- **Section 3: Cỗ máy Cảm xúc / Bộ lọc ngang (Staggered Horizontal Scroll):**
  Đóng vai trò là bộ lọc (Filter).
  Layout: Flexbox cuộn ngang. display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory;.
  Thẻ cảm xúc: Các thẻ vuông/chữ nhật kích thước cố định bằng nhau (vd: flex: 0 0 300px).
  Hiệu ứng Nhấp nhô: BẮT BUỘC dùng :nth-child(even) { transform: translateY(40px); }.

- **Section 4: Không gian Khám phá (Interactive Books - Trọng tâm JS):**
  Hiển thị đúng 4 cuốn sách lọc từ Section 3. KHÔNG phân trang 12/24/48. KHÔNG nút A-Z.
  Layout nghiêng (Tilt CSS):
  Sách lẻ: transform: rotate(-15deg);
  Sách chẵn: transform: rotate(15deg);
  Hover: Xoay về rotate(0deg) scale(1.05) translateY(-10px). Đổ bóng mượt mà transition: all 0.4s ease;.
  Nút Shuffle: Một nút nhỏ "Khám phá thêm". Khi click, JS random 4 cuốn khác.
  Modal Popup (Click vào sách):
  Hiện lớp .glass-backdrop-dark che toàn màn hình.
  Box nội dung dùng .halo-glow đặt ở giữa.
  Layout trong Box: Bìa sách bên trái nằm tràn viền lồi ra khỏi khối hộp (Negative Margin). Bên phải là Tên sách (Red Wine), Tác giả, Nhãn giải thưởng, Trích dẫn đắt giá.

- **Section 5: Tiêu điểm Tạp chí (Overlapping Z-Pattern):**
  Thể hiện sự phân cấp của tạp chí.
  Trái/Trung tâm: Ảnh bìa sách cực lớn.
  Phải: Khối hộp chứa chữ dùng .glass-panel đè lên (overlap) một góc của bức ảnh lớn.
  Góc trên-phải & Góc dưới-trái: Chèn các đoạn text phụ gọn gàng (nhãn chủ đề, tóm tắt).

- **Section 6: Footer:**
  Tối giản. Nền Lemon Cream. Text center.

## 6. QUY TRÌNH VIẾT JAVASCRIPT (VANILLA JS)

Dữ liệu (data.js): Tạo một mảng const books = [...]. Mỗi object gồm: id, title, author, genre_id (khớp với Sec 3), cover_img, quote, summary, awards. Dữ liệu phải sang trọng, có chiều sâu.
Logic (app.js):
Viết hàm filterBooksByEmotion(genre) kích hoạt khi click thẻ ở Sec 3.
Viết hàm renderBooks(bookArray) để vẽ 4 sách nghiêng 15 độ.
Viết hàm shuffleBooks() gắn vào nút khám phá thêm.
Viết hàm Quản lý Modal (Mở, Đóng khi click nền mờ, Cập nhật DOM của popup).

## 7. AI GUARDRAILS (CẤM LÀM NHỮNG ĐIỀU SAU)

Cấm tự ý thêm Linear-gradient hay Radial-gradient vào nền.
Cấm tự ý bo tròn quá mức (border-radius: 99px) cho hình ảnh sách. Sách phải vuông vức hoặc bo cực nhẹ (2-4px).
Cấm thêm Box-shadow đen đậm dập khuôn. Shadow phải tinh tế, màu nhạt.
Cấm dùng hình ảnh Placeholder có chứa text (như via.placeholder.com). Nếu không có ảnh thật, hãy dùng một thẻ div màu #E3D8C3 có chữ Tựa đề ở giữa.
Cấm viết toàn bộ code vào một file index.html. Phải tách rời.
