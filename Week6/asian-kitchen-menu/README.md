# Asian Kitchen Menu

A modern, modular and fully responsive restaurant menu application built with vanilla JavaScript, CSS, and HTML.

---

## Project Overview

Asian Kitchen Menu is a single-page web app that showcases a dynamic, filterable menu for an Asian restaurant. Menu data and categories are managed entirely through JavaScript. All category buttons, menu rendering, and filtering logic are implemented as separate components, following a modular code structure.

---

## Features

- Add new menu items easily in a single data file
- Filter menu items dynamically by cuisine (e.g., Korea, Japan, China)
- Category filter buttons generated automatically from menu data
- Modern and clean card design for each dish
- Responsive layout (desktop and mobile friendly)
- Accessible and lightweight, no frameworks or external dependencies except Bootstrap
- Clear code with English comments and component-based structure

---

## Folder Structure

asian-kitchen-menu/
│
├── index.html
├── css/
│ └── style.css
├── js/
│ ├── data/
│ │ └── menuData.js
│ ├── components/
│ │ ├── renderMenu.js
│ │ ├── renderButtons.js
│ │ └── handleFilter.js
│ └── app.js
└── README.md

Or, if you prefer a single-file approach:

asian-kitchen-menu/
│
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── README.md

---

## How to Run

1. Download or clone the repository to your computer.
2. Open `index.html` directly in your web browser.
3. All features will work offline after the first load. No installation is required.

---

## Usage

- To add or edit menu items, update the `menuData.js` file (or the `menu` array in `script.js`).
- Categories and buttons are generated automatically based on the `category` field of each item.
- Click on a category button to filter dishes. Click "All" to see all menu items again.
- All code is commented in English for easy learning and customization.

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5 (CDN)
- JavaScript (ES6+)

---

## License

This project is open source and free for personal or educational use.

---

## Author

Developed by [Burak TELLİ].
