# 🧾 Inventory Management System

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/github/license/tusharranker1/inventory-management)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-%20green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-blue)

An efficient and scalable **Inventory Management System** built with modern full-stack technologies. This system allows administrators to manage products, users, and dashboard metrics through a clean UI with light/dark mode support.

---

## 🌟 Features

- 📦 Product management (CRUD)
- 📊 Dashboard with real-time metrics
- 🌗 Light/Dark theme support
- 💾 Persistent Redux state
- 🧠 API calls using Redux Toolkit Query
- ⚡ Tailwind CSS v4 with dynamic theming
- 🧩 Scalable architecture with separate client & server

---

## ⚙️ Tech Stack

**Frontend**  
- Next.js 14  
- Tailwind CSS v4  
- Redux Toolkit + RTK Query  
- Lucide icons  
- `tw-colors` for dynamic theming  

**Backend**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  

---

#AWS Architecture
![Live Demo](https://ims3.s3.ap-south-1.amazonaws.com/Blank+diagram.png)


## 📁 Project Structure

inventory-management/
├── client/ # Frontend (Next.js app)
│ ├── app/ # Pages & layout
│ ├── components/ # Reusable components
│ ├── state/ # Redux slices & API setup
│ ├── public/ # Static files
│ └── tailwind.config.ts
│
├── server/ # Backend (Express API)
│ ├── controllers/ # Route logic
│ ├── routes/ # API endpoints
│ ├── models/ # MongoDB schemas
│ ├── middleware/ # Auth, error handling
│ └── .env # Environment variables
│
└── README.md


---

## 🖥️ Client Setup (Frontend)

### 1. Navigate to client folder

```bash
git clone https://github.com/tusharranker1/inventory-management/
cd client
npm i
```
### 2. .env.local file setup
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api

npm run dev
# or
pnpm dev

## 🧪 Server Setup (Backend)
### 1. Navigate to the server folder 

```bash
npm i
npm run dev
```
###2. .env file setup
PORT=5000
MONGO_URL=mongodb://localhost:27017/inventorydb


