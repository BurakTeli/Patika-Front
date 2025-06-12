# JavaScript Clock & Greeting App

This project is a simple yet well-structured JavaScript application that welcomes the user by name and displays the current time and day in real-time. It was built with clean code principles and is suitable for beginners who want to learn DOM manipulation and JavaScript basics in a professional manner.

## 🧠 Features

- Prompts the user to enter their name
- Saves and retrieves the name using `localStorage`
- Displays a personalized greeting message
- Shows the current time in HH:MM:SS format
- Displays the day of the week in Turkish
- Automatically updates the clock every second

## 🛠️ Technologies Used

- **HTML5** – Semantic page structure
- **CSS3** – Responsive and modern user interface
- **JavaScript (ES6+)** – Functional programming, real-time updates, and DOM manipulation

## 📁 Project Structure


## 📌 Code Explanation

### index.html
- Contains semantic structure using `<main>`, `<h1>`, and `<div>` tags.
- Links to external CSS and JavaScript files.
- Includes containers for dynamic content: greeting and clock display.

### style.css
- Applies a dark background with warm accent colors (orange/yellow).
- Uses Flexbox for vertical and horizontal centering.
- Ensures a clean and readable layout with responsive text sizes.

### app.js
- `getUserName()`:
  - Checks if a name is stored in `localStorage`.
  - If not, asks the user for their name and stores it.
- `showGreeting(name)`:
  - Dynamically updates the greeting section with the user's name.
- `updateClock()`:
  - Retrieves current time and weekday.
  - Formats and injects them into the DOM.
  - Runs every second using `setInterval()`.
- `capitalize(str)`:
  - Capitalizes the first letter of the day name for display.

## ✅ Best Practices Applied

- Modular and functional JavaScript code
- Usage of `DOMContentLoaded` to ensure DOM readiness
- Clear and maintainable CSS styling
- Semantic HTML for accessibility and readability
- Persistent storage through `localStorage`

## 🎯 Purpose

This application is built as an introductory project for JavaScript learners. It introduces important concepts such as:

- DOM access and manipulation
- Real-time data updates using timers
- Handling user input and storing preferences
- Clean code architecture and file separation

