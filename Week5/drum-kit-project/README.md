# Drum Kit – Interactive JavaScript Project

This project is a fully interactive Drum Kit application developed using HTML5, CSS3, and JavaScript (ES6+). The application responds to both mouse clicks and keyboard key presses, triggering specific drum sounds and visual animations in real-time.

## 🧠 Features

- Keyboard and mouse support for triggering drum sounds
- Audio playback with `Audio` API
- Dynamic button highlighting using CSS animations
- Modular, scalable structure with reusable logic
- Semantic and accessible HTML structure
- Mobile-friendly responsive layout

## 🛠️ Technologies Used

- **HTML5** – Semantic layout with accessibility-friendly elements (`<main>`, `<section>`, `<button>`, etc.)
- **CSS3** – Modern layout with Grid system, transitions, and visual feedback
- **JavaScript (ES6+)** – Event-driven architecture with `addEventListener`, `Audio`, `dataset`, and modular functions

## 📁 Project Structure


## 📌 Code Explanation

### HTML (index.html)
- Buttons are created with semantic structure and `data-key` / `data-sound` attributes.
- `<kbd>` elements represent the keyboard keys for improved UX and accessibility.
- Layout is wrapped in a `<main>` container for semantic correctness.

### CSS (style.css)
- Uses Grid layout for responsive design across devices.
- Animations are triggered via the `.active` class with transitions and shadow effects.
- Color palette and layout are designed with dark-themed aesthetics.

### JavaScript (script.js)
- `playSound(key)`:
  - Selects the button with the corresponding key.
  - Loads and plays the appropriate sound file.
  - Resets audio time to allow rapid replays.
- `triggerAnimation(button)`:
  - Adds the `.active` class and removes it after 150ms to create a button press effect.
- Event listeners:
  - Global `keydown` event to detect keyboard input.
  - Button-specific `click` events to support mouse interaction.

## ✅ Best Practices Applied

- Clean and modular code structure
- DRY principle through reusable functions
- Data-driven design using `data-*` attributes
- Responsive design with mobile support
- Accessible markup with semantic tags and keyboard usability
- Separation of concerns between HTML, CSS, and JS

## 🎯 Purpose

The project was designed to reinforce key JavaScript concepts, including:

- Event handling for DOM elements and keyboard inputs
- Real-time sound playback using the Web Audio API
- Visual feedback integration using CSS transitions
- Building interactive, user-driven experiences with minimal dependencies
