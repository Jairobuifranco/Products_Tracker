# 🛒 Product Tracker

A full-stack Laravel + React application that allows users to **add**, **edit**, **view**, and **delete** products with a name, price, and description.

## 🚀 Features

- ✅ User Authentication (Register, Login, Email Verification)
- 📦 Product Management (CRUD)
- 🎨 Modern React UI with Inertia.js
- 🧠 Validation on both client and server
- 🧪 Pest-powered test suite
- ☁️ SQLite database with migrations & seeders

## 🖼️ UI Overview

- Built with [Inertia.js](https://inertiajs.com/) + [React](https://reactjs.org/)
- Tailwind CSS for styling
- Shadcn/UI components for sleek UI elements

## 🛠️ Tech Stack

- **Backend:** Laravel 12
- **Frontend:** React, TypeScript, Inertia.js
- **Styling:** Tailwind CSS
- **Testing:** PestPHP
- **Database:** SQLite

## 📂 Project Structure

app/
├── Http/Controllers/ProductController.php
├── Models/Product.php

resources/js/
├── pages/Products/
│ ├── Index.tsx
│ ├── Create.tsx
│ ├── Edit.tsx

## ⚙️ Setup Instructions

1. Close the repo:
```
git clone https://github.com/YOUR_USERNAME/products-tracker.git
   cd products-tracker
```
2. Install backend dependencies:
```
composer install
```
3. Install front end dependencies:
 ```
 npm install
 ```
4. Set up environment file:
```
cp .env.example .env
php artisan key:generate
```
5. Run migration:
```
php artisan serve
npm run dev
```
7. Visit http://localhost:8000
