
// src/pages/TransactionsPage.jsx
import { useEffect, useState } from "react";
import { api } from "../services/api.jsx";
import TransactionList from "./TransactionList.jsx";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState(null);

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

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Transactions</h2>
      <TransactionList
        transactions={transactions}
        onEdit={setEditData}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TransactionsPage;
