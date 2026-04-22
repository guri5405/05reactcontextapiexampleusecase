# 🌙 Theme Switcher using Context API

## 📌 Overview

This project demonstrates how to implement a **Light and Dark Theme Switcher** using the **React Context API**.
It eliminates prop drilling by managing global state efficiently and enables seamless theme changes across components.

---

## 🚀 Features

* 🌗 Toggle between Light & Dark mode
* 🌍 Global state management using Context API
* 🪝 Custom hook (`useTheme`) for simplified access
* 🎨 Dynamic UI updates using Tailwind CSS
* 🧱 Clean and scalable project structure

---

## 🛠️ Tech Stack

* React (Vite)
* Context API
* Tailwind CSS (via CDN)

---

## 📂 Project Structure

```id="c4d9h2"
src/
├── component/
│   ├── ThemeBtn.jsx
│   └── Card.jsx
├── context/
│   └── theme.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ How It Works

* `ThemeContext` stores the theme state and toggle function
* `ThemeProvider` wraps the application and provides global access
* `useTheme` custom hook simplifies consuming the context
* `ThemeBtn` component toggles between light and dark modes
* Tailwind `dark:` classes automatically update UI styles

---

## 🧪 Run the Project

```bash id="w8j2k1"
npm install
npm run dev
```

---

## 🎯 Learning Outcomes

* Understanding how the React Context API works
* Managing global state efficiently
* Creating reusable custom hooks
* Implementing dark mode in modern UI

---

## 🚀 Future Improvements

* 💾 Persist theme using `localStorage`
* ✨ Add smooth animations/transitions
* ⚡ Use full Tailwind setup (not CDN) for production

---

## 📌 Notes

* This project is ideal for beginners learning **state management without Redux**
* Keeps the codebase lightweight and easy to scale

---

### ⚛️ Built with React & 🎨 Tailwind CSS
