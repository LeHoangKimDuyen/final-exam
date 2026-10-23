/* ==========================================================================
   /* === SECTION 3: DRAG TO SCROLL === */
/* ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".emotions-scroll-track");
  if (!track) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Bắt đầu kéo: Tắt snap để tránh khựng giật khi rê chuột
  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.style.scrollSnapType = "none";
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  // Hủy/Dừng kéo khi chuột rời vùng track: Bật lại scroll-snap
  track.addEventListener("mouseleave", () => {
    if (!isDown) return;
    isDown = false;
    track.style.scrollSnapType = "x mandatory";
  });

  // Thả chuột: Kết thúc kéo và bật lại scroll-snap để thẻ tự hít vị trí
  track.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    track.style.scrollSnapType = "x mandatory";
  });

  // Di chuyển chuột: Tính toán độ dời với hệ số velocity 1.5 tạo độ mượt
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  /* ==========================================================================
     === SECTION 4: INTERACTIVE 3D BOOKS - SPLIT VIEW FOCUS MODAL ===
     ========================================================================== */
  const bookCards = document.querySelectorAll(".book-card");
  const bookOverlay = document.querySelector(".book-overlay");
  const focusContainer = document.querySelector(".book-focus-container");
  const closeBtn = document.querySelector(".btn-close-focus");

  if (bookCards.length && bookOverlay && focusContainer) {
    // Các phần tử nội dung hiển thị trong Focus Modal
    const focusTitle = focusContainer.querySelector(".focus-book-title");
    const focusAuthor = focusContainer.querySelector(".focus-book-author");
    const detailTitle = focusContainer.querySelector(".detail-title");
    const detailAuthor = focusContainer.querySelector(".detail-author");
    const detailBadge = focusContainer.querySelector(".detail-badge");
    const detailSummary = focusContainer.querySelector(".detail-summary");

    // Hàm đóng Focus Modal và đưa sách về trạng thái ban đầu
    const closeFocus = () => {
      focusContainer.classList.remove("is-active");
      bookOverlay.classList.remove("is-active");
      bookCards.forEach((c) => c.classList.remove("is-active"));
      document.body.style.overflow = "";
    };

    // Hàm kích hoạt mở Focus Modal với dữ liệu của cuốn sách tương ứng
    const openFocus = (card) => {
      // Đọc dữ liệu chi tiết mẫu từ bên trong cuốn sách
      const detailSource = card.querySelector(".book-detail-data");
      const title = detailSource?.querySelector(".detail-title")?.textContent || card.querySelector(".book-title")?.textContent || "Tên Cuốn Sách";
      const author = detailSource?.querySelector(".detail-author")?.textContent || `Tác giả: ${card.querySelector(".book-author")?.textContent || "Tác Giả"}`;
      const badge = detailSource?.querySelector(".detail-badge")?.textContent || "Thể loại / Cảm xúc";
      const summary = detailSource?.querySelector(".detail-summary")?.textContent || "";

      // Đổ dữ liệu vào CỘT PHẢI (Right side)
      if (detailTitle) detailTitle.textContent = title;
      if (detailAuthor) detailAuthor.textContent = author;
      if (detailBadge) detailBadge.textContent = badge;
      if (detailSummary) detailSummary.textContent = summary;

      // Đổ dữ liệu vào CỘT TRÁI (Left side: Khung sách giấy dựng thẳng đứng)
      if (focusTitle) focusTitle.textContent = card.querySelector(".book-title")?.textContent || title;
      if (focusAuthor) focusAuthor.textContent = card.querySelector(".book-author")?.textContent || author.replace(/^Tác giả:\s*/i, "");

      // Kích hoạt trạng thái nổi bật
      bookCards.forEach((c) => c.classList.remove("is-active"));
      card.classList.add("is-active");
      bookOverlay.classList.add("is-active");
      focusContainer.classList.add("is-active");
      document.body.style.overflow = "hidden";
    };

    // Bắt sự kiện click vào các cuốn sách trong Grid
    bookCards.forEach((card) => {
      card.addEventListener("click", () => {
        openFocus(card);
      });

      // Hỗ trợ điều hướng bằng bàn phím
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openFocus(card);
        }
      });
    });

    // Cơ chế đóng: Click vào vùng nền tối Overlay
    bookOverlay.addEventListener("click", () => {
      closeFocus();
    });

    // Cơ chế đóng: Click vào nút đóng (X)
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeFocus();
      });
    }

    // Cơ chế đóng: Nhấn phím Escape (ESC)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && focusContainer.classList.contains("is-active")) {
        closeFocus();
      }
    });
  }
});
