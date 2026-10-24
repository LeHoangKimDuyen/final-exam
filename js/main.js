/* ==========================================================================
   MAIN SCRIPT - SCROLL EFFECTS, ANIMATIONS & JAVASCRIPT TYPING
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Hiệu ứng gõ chữ tự nhiên (JavaScript Typing Effect)
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    // Lấy nội dung gốc gồm cả thẻ <br>
    const originalHTML = heroTitle.innerHTML.trim();
    heroTitle.innerHTML = "";

    // Tạo phần tử chứa chữ đã gõ và con trỏ nhấp nháy riêng biệt
    const textContainer = document.createElement("span");
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    cursor.setAttribute("aria-hidden", "true");

    heroTitle.appendChild(textContainer);
    heroTitle.appendChild(cursor);

    // Chuyển chuỗi HTML thành các token: ký tự đơn lẻ hoặc thẻ <br>
    const tokens = [];
    let i = 0;
    while (i < originalHTML.length) {
      if (originalHTML.slice(i).toLowerCase().startsWith("<br>")) {
        tokens.push("<br>");
        i += 4;
      } else if (originalHTML.slice(i).toLowerCase().startsWith("<br />")) {
        tokens.push("<br />");
        i += 6;
      } else if (originalHTML.slice(i).toLowerCase().startsWith("<br/>")) {
        tokens.push("<br/>");
        i += 5;
      } else {
        tokens.push(originalHTML[i]);
        i++;
      }
    }

    let tokenIndex = 0;
    const typeSpeed = 65; // Làm chậm nhịp gõ 110ms mỗi ký tự

    const typeNext = () => {
      if (tokenIndex < tokens.length) {
        const token = tokens[tokenIndex];
        if (token.startsWith("<br")) {
          textContainer.innerHTML += "<br>";
        } else {
          textContainer.innerHTML += token;
        }
        tokenIndex++;
        setTimeout(typeNext, typeSpeed);
      } else {
        // Sau khi đã in ra ký tự cuối cùng, chờ 2000ms rồi tự động ẩn con trỏ
        setTimeout(() => {
          const activeCursor = heroTitle.querySelector(".typing-cursor");
          if (activeCursor) {
            activeCursor.remove();
          }
        }, 2000);
      }
    };

    // Bắt đầu hiệu ứng sau khoảng đệm nhẹ 300ms
    setTimeout(typeNext, 300);
  }

  // 2. Kích hoạt thư viện AOS (Animate On Scroll) với chuyển động từ tốn, mượt mà
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      offset: 100,
      duration: 1200,
      easing: "ease-in-out",
    });
  }

  // 3. Hiệu ứng đổi màu nền toàn cục theo độ cuộn chuột (Scroll Background Overlay)
  const bgOverlay = document.getElementById("scroll-bg-overlay");
  if (bgOverlay) {
    const handleScrollBg = () => {
      const scrollHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const scrollableHeight = scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      let scrollPercent = window.scrollY / scrollableHeight;
      scrollPercent = Math.max(0, Math.min(1, scrollPercent));

      bgOverlay.style.opacity = scrollPercent;
    };

    window.addEventListener("scroll", handleScrollBg, { passive: true });
    handleScrollBg();
  }

  // 4. Trải nghiệm Âm thanh (Soundscape Audio Experience) & Đĩa than xoay tròn
  const vinylWrapper = document.getElementById("vinylWrapper");
  const vinylDisc = document.getElementById("vinylDisc");
  const vinylToggleBtn = document.getElementById("vinylToggleBtn");
  const soundscapeAudio = document.getElementById("soundscapeAudio");

  if (soundscapeAudio && vinylDisc && vinylToggleBtn) {
    const playIcon = vinylToggleBtn.querySelector(".play-icon");
    const pauseIcon = vinylToggleBtn.querySelector(".pause-icon");

    const updateAudioState = (isPlaying) => {
      if (isPlaying) {
        vinylDisc.classList.add("is-playing");
        if (playIcon) playIcon.style.display = "none";
        if (pauseIcon) pauseIcon.style.display = "block";
        vinylToggleBtn.setAttribute("aria-label", "Tạm dừng âm thanh");
      } else {
        vinylDisc.classList.remove("is-playing");
        if (playIcon) playIcon.style.display = "block";
        if (pauseIcon) pauseIcon.style.display = "none";
        vinylToggleBtn.setAttribute("aria-label", "Phát âm thanh");
      }
    };

    const togglePlayback = () => {
      if (soundscapeAudio.paused) {
        soundscapeAudio
          .play()
          .then(() => {
            updateAudioState(true);
          })
          .catch((err) => {
            console.warn("Không thể tự động phát âm thanh:", err);
          });
      } else {
        soundscapeAudio.pause();
        updateAudioState(false);
      }
    };

    // Cho phép click vào nút Play/Pause hoặc click trực tiếp vào đĩa than
    vinylToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlayback();
    });

    vinylWrapper?.addEventListener("click", () => {
      togglePlayback();
    });

    // Đồng bộ trạng thái khi audio phát, dừng hoặc kết thúc
    soundscapeAudio.addEventListener("play", () => updateAudioState(true));
    soundscapeAudio.addEventListener("pause", () => updateAudioState(false));
    soundscapeAudio.addEventListener("ended", () => updateAudioState(false));
  }

  // 5. Hỗ trợ tương tác chạm lật thẻ 3D trên màn hình cảm ứng (Did You Know Section)
  const bentoFlipCards = document.querySelectorAll(".bento-flip-grid .flip-card");
  bentoFlipCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});
