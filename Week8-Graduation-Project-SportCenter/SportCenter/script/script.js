/*
 * Function: changeInfoAndImg
 * Description:
 *   Dynamically updates the content of the classes section, including the text information and associated image,
 *   based on which class button (Yoga, Group, Solo, Stretching) the user clicks.
 *   Also handles adding/removing highlighting effect on buttons.
 */
function changeInfoAndImg() {
    // Select all class buttons within the classes-buttons container
    var buttons = document.querySelectorAll(".classes-buttons button"); 

    // Select individual DOM elements that will be updated based on selected class
    var img = document.getElementById("classes-chosen-photo");
    var title = document.getElementById("info-title");
    var desc = document.getElementById("info-desc");
    var timeTitle = document.getElementById("info-time-title");
    var time = document.getElementById("info-time");
    var timeAdd = document.getElementById("info-time-add");
    var timeExtra = document.getElementById("info-time-extra");

    // Attach click event listener to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove 'highlight' class from all buttons to reset any previous selection
            buttons.forEach(btn => btn.classList.remove("highlight"));

            // Add 'highlight' class to the clicked button to visually indicate selection
            this.classList.add("highlight");

            // Conditionally update the information and image according to the clicked button's ID
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

// Immediately invoke the function after defining to ensure it's ready
changeInfoAndImg();

/*
 * Function: calculateBMI
 * Description:
 *   Calculates the Body Mass Index (BMI) based on user input for height and weight.
 *   Updates a visual indicator position based on the BMI category (underweight, normal, overweight, etc).
 */
function calculateBMI() {
    // Retrieve height and convert it from centimeters to meters
    var height = parseFloat(document.getElementById("height").value) / 100;

    // Retrieve weight value from input
    var weight = parseFloat(document.getElementById("weight").value);

    // If either height or weight is invalid or not present, exit function
    if (!height || !weight) return; 

    // Calculate BMI using standard formula: weight / (height^2)
    var bmi = weight / (height * height);

    // Reference to the BMI visual indicator element
    var indicator = document.getElementById("bmi-indicator");

    // Determine BMI category and adjust the position (left) of the indicator accordingly
    if (bmi < 18.5) {
        indicator.style.left = '15%'; // Underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
        indicator.style.left = '31.5%'; // Normal weight
    } else if (bmi >= 25 && bmi < 29.9) {
        indicator.style.left = '48%'; // Overweight
    } else if (bmi >= 30 && bmi < 34.9) {
        indicator.style.left = '64%'; // Obese
    } else {
        indicator.style.left = '80.5%'; // Extremely obese
    }
}

// Attach input event listeners to height and weight fields to trigger BMI calculation on change
document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

/*
 * Function: changeClassList
 * Description:
 *   Monitors the window's scroll event and dynamically applies/removes a CSS class
 *   on the navigation bar to change its background styling once user scrolls down.
 */
function changeClassList() {
    var navbar = document.getElementById('navbar');

    // Listen to scroll event on window
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll'); // Add class for background change
        } else {
            navbar.classList.remove('navbar-scroll'); // Remove when scrolled to top
        }
    });
}

// Initialize navbar scroll behavior
changeClassList();

/*
 * Event: DOMContentLoaded
 * Description:
 *   Ensures that the hamburger menu for mobile navigation toggles visibility of the menu.
 *   Waits until the document has fully loaded to attach the event listener.
 */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-hmbrgr").addEventListener("click", function () { 
        let menu = document.querySelector(".navbar ul");
        menu.classList.toggle("show"); // Toggles class to show/hide menu
    });
});
