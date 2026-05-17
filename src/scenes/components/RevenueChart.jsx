import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "January", revenue: 120000, expenses: 85000 },
  { month: "February", revenue: 115000, expenses: 80000 },
  { month: "March", revenue: 130000, expenses: 90000 },
  { month: "April", revenue: 125000, expenses: 88000 },
  { month: "May", revenue: 140000, expenses: 95000 },
  { month: "June", revenue: 150000, expenses: 100000 },
  { month: "July", revenue: 160000, expenses: 105000 },
  { month: "August", revenue: 155000, expenses: 102000 },
  { month: "September", revenue: 145000, expenses: 98000 },
  { month: "October", revenue: 165000, expenses: 110000 },
  { month: "November", revenue: 170000, expenses: 115000 },
  { month: "December", revenue: 180000, expenses: 120000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monthly Revenue & Expenses
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-linear-to-r from-blue-400 to-purple-500 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-linear-to-r from-slate-400 to-slate-600 rounded-full" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expenses
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>

              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            
            <XAxis
              dataKey="month"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
              }}
              formatter={(value) => {`$${value.toLocaleString()}`, ""}}
            />

            <Bar
              dataKey="revenue"
              fill="url(#revenueGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar
              dataKey="expenses"
              fill="url(#expensesGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
