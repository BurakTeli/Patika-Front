// Utility: Tuşa basıldığında sesi oynatır ve animasyonu tetikler
function playSound(key) {
    const button = document.querySelector(`.drum-key[data-key="${key}"]`);
    if (!button) return;
  
    const soundName = button.dataset.sound;
    const audio = new Audio(`sounds/${soundName}`);
    audio.currentTime = 0; // Hızlı tekrar için ses sıfırlanır
    audio.play();
  
    triggerAnimation(button);
  }
  
  // Utility: Görsel animasyonu başlatır
  function triggerAnimation(button) {
    button.classList.add("active");
  
    // Geçici sınıf kaldırımı (CSS transition süresi ile uyumlu)
    setTimeout(() => {
      button.classList.remove("active");
    }, 150);
  }
  
  // Event: Klavye tuşuna basıldığında
  window.addEventListener("keydown", (e) => {
    const pressedKey = e.key.toUpperCase();
    playSound(pressedKey);
  });
  
  // Event: Butona tıklandığında
  document.querySelectorAll(".drum-key").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.key;
      playSound(key);
    });
  });
  