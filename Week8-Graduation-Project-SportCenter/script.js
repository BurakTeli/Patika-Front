/**
 * This function dynamically updates the class information and image
 * displayed on the page when the user clicks one of the class type buttons.
 * It handles the UI interaction by assigning event listeners to each button.
 */
function changeInfoAndImg() { 
  // Get all relevant DOM elements that will be updated when a button is clicked
  var buttons = document.querySelectorAll(".classes-buttons button"); 
  var img = document.getElementById("classes-chosen-photo");
  var title = document.getElementById("info-title");
  var desc = document.getElementById("info-desc");
  var timeTitle = document.getElementById("info-time-title");
  var time = document.getElementById("info-time");
  var timeAdd = document.getElementById("info-time-add");
  var timeExtra = document.getElementById("info-time-extra");

  // Loop through each button and attach a click event listener
  buttons.forEach(button => {
      button.addEventListener("click", function() {
          // Remove the "highlight" class from all buttons to reset their state
          buttons.forEach(btn => btn.classList.remove("highlight"));
          
          // Add "highlight" class to the currently clicked button for visual feedback
          this.classList.add("highlight");

          // Dynamically update the content and image based on which button was clicked
          if (this.id === "btn-yoga") {
              title.textContent = "Why are your Yoga?";
              desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.";
              timeTitle.textContent = "When comes Yoga Your Time.";
              time.textContent = "Saturday-Sunday: 8:00am - 10:00am";
              timeAdd.textContent = "Monday-Tuesday: 10:00am - 12:00pm";
              timeExtra.textContent = "Wednesday-Friday: 3:00pm - 6:00pm";
              img.src = "./images/yoga.jpg";
          } else if (this.id === "btn-group") {
              title.textContent = "Group Classes";
              desc.textContent = "Enjoy the pleasure of working out while socializing in group classes. These sessions not only help you stay motivated but also create a sense of community, making your fitness journey more enjoyable and engaging.";
              timeTitle.textContent = "Group Classes Schedule";
              time.textContent = "Saturday-Sunday: 10:00am - 12:00pm";
              timeAdd.textContent = "Monday-Tuesday: 1:00pm - 3:00pm";
              timeExtra.textContent = "Wednesday-Friday: 5:00pm - 7:00pm";
              img.src = "./images/group.webp";
          } else if (this.id === "btn-solo") {
              title.textContent = "Solo Workouts";
              desc.textContent = "Achieve your personal goals with individual training sessions. These workouts allow you to focus on your specific needs, improve your performance, and progress at your own pace. Whether you're aiming for strength, endurance, personalized training helps you stay dedicated.";
              timeTitle.textContent = "Solo Workouts Schedule";
              time.textContent = "Everyday: 6:00am - 8:00am";
              timeAdd.textContent = "";
              timeExtra.textContent = "Everyday: 4:00pm - 6:00pm";
              img.src = "./images/solo.jpg";
          } else if (this.id === "btn-stretching") {
              title.textContent = "Stretching Sessions";
              desc.textContent = "Stretching sessions for flexibility and relaxation. These sessions help improve mobility, reduce muscle tension, and enhance overall well-being. Whether you're recovering from a workout or simply looking to relieve stress, guided stretching exercises provide a refreshing way to relax your body and mind.";
              timeTitle.textContent = "Stretching Sessions Schedule";
              time.textContent = "Saturday-Sunday: 8:00am - 9:00am";
              timeAdd.textContent = "Monday-Tuesday: 4:00pm - 5:00pm";
              timeExtra.textContent = "Wednesday-Friday: 7:00pm - 8:00pm";
              img.src = "./images/stret.webp";
          }
      });
  });
}

// Initialize class change functionality immediately after script is loaded
changeInfoAndImg();

/**
* This function calculates the BMI (Body Mass Index) in real-time
* whenever the user inputs their height or weight.
*/
function calculateBMI() {
  // Convert height from cm to meters and parse weight as a float
  var height = parseFloat(document.getElementById("height").value) / 100;
  var weight = parseFloat(document.getElementById("weight").value);

  // If either height or weight is not entered, exit function to prevent errors
  if (!height || !weight) return; 

  // Calculate BMI using standard formula: weight (kg) / height^2 (m²)
  var bmi = weight / (height * height);
  var indicator = document.getElementById("bmi-indicator");

  // Adjust the indicator position based on the BMI range using 'left' CSS property
  if (bmi < 18.5) {
      indicator.style.left = '15%'; // Underweight
  } else if (bmi >= 18.5 && bmi < 24.9) {
      indicator.style.left = '31.5%'; // Normal
  } else if (bmi >= 25 && bmi < 29.9) {
      indicator.style.left = '48%'; // Overweight
  } else if (bmi >= 30 && bmi < 34.9) {
      indicator.style.left = '64%'; // Obese
  } else {
      indicator.style.left = '80.5%'; // Extremely Obese
  }
}

// Attach real-time input listeners for height and weight fields
document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

/**
* This function adds a background color to the navbar once the user scrolls
* a certain distance down the page, improving visibility and user experience.
*/
function changeClassList() { 
  var navbar = document.getElementById('navbar');
  
  // Monitor scroll event on the window
  window.addEventListener('scroll', function() {
      // If the page is scrolled more than 50px, apply the scroll style
      if (window.scrollY > 50) {
          navbar.classList.add('navbar-scroll');
      } else {
          navbar.classList.remove('navbar-scroll');
      }
  });
}
changeClassList();

/**
* When the DOM is fully loaded, enable the hamburger menu toggle functionality.
* This allows the navbar list to appear/disappear on small screens.
*/
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-hmbrgr").addEventListener("click", function () { 
      let menu = document.querySelector(".navbar ul");
      menu.classList.toggle("show");
  });
});
