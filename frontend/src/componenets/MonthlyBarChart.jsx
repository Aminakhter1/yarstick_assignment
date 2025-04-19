
// src/components/MonthlyBarChart.jsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from 'recharts';
  
  function groupByMonth(transactions) {
    const monthly = {};
    transactions.forEach((tx) => {
      const month = new Date(tx.date).toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      });
      monthly[month] = (monthly[month] || 0) + tx.amount;
    });
  
    return Object.entries(monthly)
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => new Date(`1 ${a.name}`) - new Date(`1 ${b.name}`)); // ensure month order
  }
  
  export default function MonthlyBarChart({ transactions }) {
    const data = groupByMonth(transactions);
  
    return (
      <div className="max-w-xl mx-auto mt-6">
        <h2 className="text-lg font-semibold mb-2">Monthly Expenses</h2>
        {data.length === 0 ? (
          <p className="text-muted-foreground">No data to display.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    );
  }
  