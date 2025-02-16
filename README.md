# PPOB (Payment Point Online Banking) Application

## 📌 Overview
PPOB (Payment Point Online Banking) is a web application for managing digital payments, including top-ups, transactions, and account management. This project is built using **React** with **Tailwind CSS** for the frontend and integrates authentication and balance management features.

## 🛠️ Technologies Used
- **React** (JavaScript Framework)
- **Tailwind CSS** (Styling)
- **Redux** (State Management)
- **React Router** (Navigation)
- **Axios** (API Handling)
- **LocalStorage** (Token-based Authentication)

## 🚀 Features
### ✅ Authentication
- Login & Logout system with token-based authentication
- Redirect users to the login page if unauthorized
- Prevent access to login page when already logged in

### ✅ User Dashboard
- Display user information
- Show current balance with a toggle visibility feature

### ✅ Top-Up Feature
- Users can top up their balance with predefined or custom amounts
- Validation to ensure the amount is between **Rp10.000 - Rp1.000.000**
- Prevents submission of amounts **≤ 0**
- Confirmation modal before proceeding with top-up
- Success modal upon successful transaction

### ✅ Transactions
- View a list of past transactions

### ✅ Navigation
- Responsive **Navbar** with active link highlighting
- **Protected Routes** using `ProtectedLayout` to restrict access to authenticated users

## 📂 Project Structure
```
ppob-app/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── utils/│
└── README.md
```

## 🔧 Installation & Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ppob-app.git
   cd ppob-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## 🔑 Authentication Handling
- User authentication is managed with **tokens stored in LocalStorage**.
- If a user is not logged in, they will be redirected to the login page.
- Users cannot access the `/login` page if they are already authenticated.

---
💡 **Developed by Aditia Nugraha**

