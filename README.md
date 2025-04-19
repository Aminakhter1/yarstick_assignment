# Personal Finance Tracker

A simple and responsive personal finance tracker built with **React**, **Recharts**, and **Tailwind CSS**. It allows users to manage their income/expenses and visualize monthly spending through a bar chart.

---

##  Features

-  Add and edit financial transactions
-  Delete unwanted transactions
-  View monthly expense summary via interactive bar chart
-  Persistent data via API integration (Axios)
-  Responsive and mobile-friendly UI using Tailwind CSS
- Client-side routing with React Router

---

## Demo

live link:https://yarstick-assignment-l6p2.vercel.app/

---

## Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Recharts](https://recharts.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

##  Getting Started
Getting Started

### 1. Clone the Repository

```bash
git clone <url>

###2.Install all dependencies
npm install

###3. Start the Development Server

npm run dev

API Setup
This project expects a backend API with the following endpoints:


Method	Endpoint	Description
GET	/transactions	Fetch all transactions
POST	/transactions	Create a new transaction
PUT	/transactions/:id	Update an existing transaction
DELETE	/transactions/:id	Delete a transaction

Build for Production
bash
npm run build
