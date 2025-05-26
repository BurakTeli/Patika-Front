// Elemanları seç
const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.getElementById('bmiValue');

// BMI hesapla
calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValue.textContent = "Please enter valid height and weight!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(1);

  bmiValue.textContent = `${bmiRounded} (Normal Range: 18.5 - 24.9)`;
});
