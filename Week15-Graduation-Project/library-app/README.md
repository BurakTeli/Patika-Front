# 📚 Library Management System

A complete full-stack Library Management System that allows users to manage books, authors, publishers, categories, and borrowing operations. Built with **React + TypeScript** for the frontend and **Spring Boot + PostgreSQL** for the backend.

> This project was developed as a part of a capstone/final project to demonstrate skills in full-stack development, component architecture, REST API integration, and state management.

---

## 📌 Table of Contents

- [🎯 Features](#-features)
- [🛠️ Technologies Used](#-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔌 API Endpoints](#-api-endpoints)
- [📦 Data Models (Types)](#-data-models-types)
- [📸 Screenshots](#-screenshots)
- [🙋 FAQ](#-faq)
- [🤝 Contribution](#-contribution)
- [📃 License](#-license)
- [🧠 Author](#-author)

---

## 🎯 Features

- ✅ Create, update, and delete books
- ✅ Associate books with authors, publishers, and multiple categories
- ✅ Borrow book system (planned)
- ✅ Notification system with `success` / `error` alerts
- ✅ Form validation and input handling
- ✅ Dynamic multi-select for categories
- ✅ Responsive and accessible design
- ✅ Professional folder structure and clean codebase

---

## 🛠️ Technologies Used

### 🖥️ Frontend

- React (Vite)
- TypeScript
- Axios
- CSS Modules
- React Icons
- HTML5/CSS3

### ⚙️ Backend

- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL
- RESTful APIs

### 📦 Dev Tools

- VS Code
- Postman
- GitHub / Git
- Render / Koyeb (deployment-ready)

---

## 📁 Project Structure

📦 library-app-frontend
├── public/ # Static files
├── src/
│ ├── components/ # Reusable UI components (e.g., Notification)
│ ├── pages/ # Page-level components (Books, Authors, etc.)
│ ├── services/ # Axios API calls
│ ├── styles/ # CSS files
│ ├── types.ts # Global TypeScript interfaces
│ └── App.tsx # Entry component with routing
└── README.md