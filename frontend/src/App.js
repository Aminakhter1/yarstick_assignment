
// src/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { api } from "./services/api.jsx";
import TransactionForm from "./componenets/TransactionForm.jsx";
import TransactionList from "./componenets/TransactionList.jsx";
import MonthlyBarChart from "./componenets/MonthlyBarChart.jsx";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/transactions/${id}`);
      fetchTransactions();
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  const handleEdit = (data) => {
    setEditData(data);
    navigate("/"); // Navigate to home page for editing
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-indigo-600">
          Personal Finance Tracker
        </h1>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="space-y-6">
                <section className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
                     Add / Edit Transaction
                  </h2>
                  <TransactionForm
                    fetchTransactions={fetchTransactions}
                    editData={editData}
                    clearEdit={() => setEditData(null)}
                  />
                </section>

                <div className="flex justify-center gap-6 text-indigo-600 font-medium">
                  <Link to="/transactions" className="underline">
                    View All Transactions
                  </Link>
                  <Link to="/chart" className="underline">
                    View Monthly Chart
                  </Link>
                </div>
              </div>
            }
          />

          {/* Transactions Page */}
          <Route
            path="/transactions"
            element={
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
                  All Transactions
                </h2>
                <TransactionList
                  transactions={transactions}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
                <div className="mt-6 text-right">
                  <Link to="/" className="text-indigo-600 underline">
                    ⬅ Back to Home
                  </Link>
                </div>
              </section>
            }
          />

          {/* Chart Page */}
          <Route
            path="/chart"
            element={
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
                   Monthly Overview
                </h2>
                <MonthlyBarChart transactions={transactions} />
                <div className="mt-6 text-right">
                  <Link to="/" className="text-indigo-600 underline">
                    ⬅ Back to Home
                  </Link>
                </div>
              </section>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
