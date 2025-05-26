// Tüm butonları ve içerik alanlarını seç
const buttons = document.querySelectorAll('.class-buttons button');
const classText = document.querySelector('.class-text');
const classImage = document.querySelector('.class-image img');

// Her sınıfa özel içerikler
const classData = {
  Yoga: {
    text: `
      <h3>Why Choose Yoga?</h3>
      <p>
        Yoga is a mind-body practice that combines physical postures, breathing techniques, 
        and meditation. It improves flexibility, builds strength, and reduces stress.
      </p>
      <h4>Yoga Class Schedule</h4>
      <ul>
        <li>Saturday–Sunday: 8:00am – 10:00am</li>
        <li>Monday–Tuesday: 10:00am – 12:00pm</li>
        <li>Wednesday–Friday: 3:00pm – 6:00pm</li>
      </ul>
    `,
    image: 'assets/images/yoga.jpg'
  },
  Group: {
    text: `
      <h3>Why Choose Group Classes?</h3>
      <p>
        Group classes are a great way to stay motivated and enjoy your workouts with others. 
        Exercising in a group setting provides energy, structure, and friendly competition.
      </p>
      <h4>Group Class Schedule</h4>
      <ul>
        <li>Monday – Wednesday: 6:00pm – 7:00pm</li>
        <li>Thursday – Friday: 5:00pm – 6:00pm</li>
        <li>Saturday: 10:00am – 11:30am</li>
      </ul>
    `,
    image: 'assets/images/group.webp'
  },
  Solo: {
    text: `
      <h3>Why Choose Solo Training?</h3>
      <p>
        Solo training allows you to fully concentrate on your personal goals without distractions. 
        It offers the flexibility to customize your routine based on your own pace and preferences.
      </p>
      <h4>Solo Training Schedule</h4>
      <ul>
        <li>Monday – Friday: 9:00am – 10:00am</li>
        <li>Sunday: 4:00pm – 5:30pm</li>
      </ul>
    `,
    image: 'assets/images/solo.jpg'
  },
  Stretching: {
    text: `
      <h3>Why Choose Stretching?</h3>
      <p>
        Stretching helps improve your flexibility, reduce muscle tension, and prevent injuries. 
        It’s an essential part of a well-balanced fitness program.
      </p>
      <h4>Stretching Class Schedule</h4>
      <ul>
        <li>Monday – Saturday: 6:30am – 7:00am</li>
        <li>Evenings: 8:00pm – 8:30pm</li>
      </ul>
    `,
    image: 'assets/images/stret.webp'
  }
};

// Butonlara tıklanınca içerikleri güncelle
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Aktif sınıfı güncelle
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Tıklanan butona göre içerik yükle
    const key = btn.textContent.trim();
    const data = classData[key];

    if (data) {
      classText.innerHTML = data.text;
      classImage.src = data.image;
    } else {
      console.warn("Veri bulunamadı:", key);
    }
  });
});
