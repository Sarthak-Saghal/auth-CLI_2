# ✨ Modern Signup UI — React Authentication 

A **modern, dark-themed signup interface** designed for seamless user onboarding.  
This UI focuses on **clarity, aesthetics, and smooth user experience**, combining minimal design with subtle animations.

# Glassmorphism_Login_UI

A **glassmorphism-inspired React authentication UI featuring translucent surfaces, soft blur effects, and elegant depth.**



---

### 📦 Dependencies Installation (Required)

Before running the project, install the following dependencies:

### ▶ React Router DOM  
Used for client-side routing and navigation.

```bash
npm install react-router-dom


```
### Framer Motion
``` bash
npm install framer-motion
```
### React Icons

```bash
npm install react-icons
```


## 🖼 UI Overview

The signup screen is divided into two main sections:

### 🔮 Left Panel — Onboarding Guide
- Gradient-based visual card
- Step-by-step signup guidance
- Encourages users with a clear onboarding flow:
  1. Sign up your account
  2. Set up your workspace
  3. Set up your profile

### 🔐 Right Panel — Signup Form
- Email & password-based registration
- Social authentication options (Google & GitHub)
- Clean input fields with placeholder hints
- Password visibility toggle
- Clear call-to-action button
- Login redirect for existing users

---

## ✨ Features

- Modern dark UI with gradient highlights
- Fully responsive layout
- Social login buttons (Google & GitHub)
- Accessible input fields
- Password visibility toggle
- Clear onboarding steps
- Minimal and distraction-free design

---

## 🛠 Tech Stack

- React
- React Router DOM
- Framer Motion (for animations)
- React Icons
- Tailwind CSS (or custom CSS)
- Vite / CRA

---
## 🔗 Application Routing Structure

The application routes are defined in `App.jsx` as follows:

```jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Logout from "./Pages/Logout";

export default function App() {
  return (
    <Routes>
      {/* Redirect root to signup */}
      <Route path="/" element={<Navigate to="/signup" replace />} />

      {/* Authentication routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/logout" element={<Logout />} />

      {/* Fallback route */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center text-white">
            Page not found
          </div>
        }
      />
    </Routes>
  );
}
```

