// Select input and output DOM elements
// Evaluation Form 8 - User inputs for height and weight
const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.getElementById('bmiValue');

// Event listener for BMI calculation on button click
calculateBtn.addEventListener('click', () => {
  // Convert input values to float numbers
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validation: Ensure inputs are positive and not empty
  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValue.textContent = "Please enter valid height and weight!";
    return;
  }

  // Convert height to meters
  const heightInMeters = height / 100;

  // BMI formula: weight (kg) / [height (m)]²
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(1); // Round to 1 decimal

  // Display BMI result
  bmiValue.textContent = `${bmiRounded} (Normal Range: 18.5 - 24.9)`;
});
