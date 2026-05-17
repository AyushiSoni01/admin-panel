import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react'
import React from 'react'

const recentOrders = [
    {
        id : "#3847",
        customer : "John Smith",
        product : "Macbook Pro 16",
        amount : "$2399",
        status : "Completed",
        date : "2025-01-15",
    },
    {
        id : "#3848",
        customer : "Sarah Johnson",
        product : "iPhone 15 Pro",
        amount : "$1199",
        status : "Pending",
        date : "2025-02-15",
    },
    {
        id : "#3849",
        customer : "Emily Davis",
        product : "Macbook Pro 16",
        amount : "$2399",
        status : "Cancelled",
        date : "2025-01-15",
    },
    {
        id : "#3850",
        customer : "John Smith",
        product : "Macbook Pro 16",
        amount : "$2399",
        status : "Completed",
        date : "2025-01-15",
    },

]

const topProducts = [
    {
        name : "Mac Book 16 Pro",
        sales: "1247",
        revenue : "$2,999,999",
        trend : "up",
        change: "+12%",
    },
    {
        name : "iPhone 15 Pro",
        sales: "1247",
        revenue : "$2,999,999",
        trend : "up",
        change: "+12%",
    },
    {
        name : "Mac Book Pro",
        sales: "1247",
        revenue : "$2,999,999",
        trend : "up",
        change: "+12%",
    },
    {
        name : "Mac Book Pro",
        sales: "1247",
        revenue : "$2,999,999",
        trend : "down",
        change: "-12%",
    },
]

const Tablesection = () => {

    const getstatuscolor = (status) => {
        switch(status){
            case "Completed":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
            case "Pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "Cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 ";
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
        }
    };

  return (
    <div className='space-y-6'>
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 '>
                <div className='flex items-center justify-between '>
                    <div>
                        <h3 className='text-lg font-bold text-slate-800 dark:text-white '>Recent Orders</h3>
                        <p className='text-sm text-slate-500 dark:text-slate-400 '>Latest Customer Orders</p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All </button>
                </div>
            </div>

            {/* Tables  */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-200'>Order ID</th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-200'>Product</th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-200'>Amount</th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-200'>Status</th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-200'>Date</th>
                        </tr>
                    </thead> 
                        <tbody>
                        {recentOrders.map((order, index) => {
                            return (
                            <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors' key={index}>
                            <td className='p-4'><span className='text-sm font-medium text-blue-400'>{order.id}</span></td>
                            <td className='p-4'><span className='text-sm text-slate-800 dark:text-white'>{order.customer}</span></td>
                            <td className='p-4'><span className='text-sm text-slate-800 dark:text-white'>{order.product}</span></td>
                            <td className='p-4'><span className='text-sm text-slate-800 dark:text-white'>{order.amount}</span></td>
                            <td className='p-4'>
                                <span className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getstatuscolor(order.status)}`}>{order.date}</span>
                            </td>
                            <td className='p-4'><span className='text-sm text-slate-800 dark:text-white'><MoreHorizontal className='w-4 h-4' /></span></td>
                        </tr>
                            );
                        })}
                    </tbody>                    
                </table>
            </div>
        </div>
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 '>
                    <div className='flex items-center justify-between'>
                        <div className='text-lg font-bold text-slate-800 dark:text-white'>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
                        </div>
                        <p className='text-sm text-slate-500 dark:text-slate-400'> Best Performing Products</p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All</button>
                </div>

                {topProducts.map((product, index) => {
                    return (
                        <div className='p-6 space-y-4'>
                    <div key={index} className='flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                        <div className='flex-1'>
                            <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>{product.name}</h4>
                            <p className='text-xs text-slate-500 dark:text-slate-400'>{product.sales}</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-sm font-semibold text-slate-800 dark:text-white'>{product.revenue}</p>
                            <div className='flex items-center space-x-1'>
                                {product.trend === "up" ? (
                                    <TrendingUp className='w-3 h-3 text-emerald-500' />
                                ): product.trend === "down" ? (
                                    <TrendingDown className="w-3 h-3 text-red-500" />
                                ) : null}
                                <span className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{product.change}</span>
                            </div>
                        </div>
                    </div>
                </div>
                    );
                })}
            </div>
    </div>
  )
}

export default Tablesection
