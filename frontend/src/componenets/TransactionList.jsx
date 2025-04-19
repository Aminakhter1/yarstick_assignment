
// src/components/TransactionList.jsx
//import { Button } from "@/components/ui/button";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li key={tx._id} className="border p-3 rounded flex justify-between items-center">
              <div>
                <p className="font-medium">₹{tx.amount}</p>
                <p className="text-sm text-muted-foreground">{tx.description}</p>
                <p className="text-xs text-muted-foreground">{new Date(tx.date).toLocaleDateString()}</p>
              </div>
              <div className="space-x-1">
                <button size="sm" onClick={() => onEdit(tx)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Edit</button>
                <button size="sm" variant="destructive" onClick={() => onDelete(tx._id)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
