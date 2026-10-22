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
});
