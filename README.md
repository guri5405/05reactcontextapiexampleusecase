# 🌙 Theme Switcher using Context API

## 📌 Overview

This project demonstrates how to implement a light and dark theme switcher using React Context API. It avoids prop drilling by managing global state efficiently and allows seamless theme changes across components.

## 🚀 Features

* Toggle between Light & Dark mode
* Global state management using Context API
* Custom hook (`useTheme`) for easy access
* Dynamic UI updates with Tailwind CSS
* Clean and scalable project structure

## 🛠️ Tech Stack

* React (Vite)
* Context API
* Tailwind CSS (CDN)

## 📂 Project Structure

src/
├── component/
│   ├── ThemeBtn.jsx
│   └── Card.jsx
├── context/
│   └── theme.js
├── App.jsx
└── main.jsx

## ⚙️ How It Works

* `ThemeContext` stores theme state and toggle functions
* `ThemeProvider` wraps the app and provides global access
* `useTheme` custom hook simplifies context usage
* `ThemeBtn` toggles between light and dark mode
* Tailwind `dark:` classes update UI automatically

## 🧪 Run the Project

npm install
npm run dev

## 🎯 Learning Outcomes

* Understanding React Context API
* Managing global state efficiently
* Creating reusable custom hooks
* Implementing dark mode UI

## 🚀 Future Improvements

* Persist theme using localStorage
* Add animations
* Use full Tailwind setup for production

---

Made with React ⚛️ and Tailwind CSS 🎨
