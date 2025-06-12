const getUserName = () => {
    let name = localStorage.getItem("userName");
    if (!name) {
      name = prompt("Adınızı giriniz:");
      localStorage.setItem("userName", name || "Ziyaretçi");
    }
    return name;
  };
  
  const showGreeting = (name) => {
    const greetingEl = document.getElementById("greeting");
    greetingEl.innerHTML = `Merhaba, <strong>${name}</strong>! Hoş geldin!`;
  };
  
  const updateClock = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("tr-TR", { hour12: false });
    const dayStr = now.toLocaleDateString("tr-TR", { weekday: "long" });
    const clockEl = document.getElementById("clock");
    clockEl.innerHTML = `${timeStr} ${capitalize(dayStr)}`;
  };
  
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  document.addEventListener("DOMContentLoaded", () => {
    const userName = getUserName();
    showGreeting(userName);
    updateClock();
    setInterval(updateClock, 1000);
  });
  