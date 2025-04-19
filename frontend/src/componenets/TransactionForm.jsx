// src/components/TransactionForm.jsx
import { useState, useEffect } from "react";
import { api } from "../services/api";

const initialForm = {
  amount: "",
  description: "",
  date: "",
};

export default function TransactionForm({ fetchTransactions, editData, clearEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editData) {
        await api.put(`/transactions/${editData._id}`, form);
        clearEdit();
      } else {
        await api.post("/transactions", form);
      }
      setForm(initialForm);
      fetchTransactions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          {editData ? "Update" : "Add"} Transaction
        </button>
        {editData && (
          <button
            type="button"
            onClick={clearEdit}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
