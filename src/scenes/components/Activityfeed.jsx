import { Clock, CreditCard, ShoppingCart, User, Settings, Bell } from 'lucide-react'

const activities = [
    {
        id : 1,
        type : "user",
        icon : User,
        title : "New User registered",
        description : "Ayushi created an account",
        time : "2 min ago",
        color : "text-blue-500",
        bgcolor : "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        id : 2,
        type : "order",
        icon : ShoppingCart,
        title : "New order registered",
        description : "Order #3847 for $2455",
        time : "5 min ago",
        color : "text-emerald-500",
        bgcolor : "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
        id : 3,
        type : "payment",
        icon : CreditCard,
        title : "Payment Processed",
        description : "Payment of $5100 completed",
        time : "2 min ago",
        color : "text-purple-500",
        bgcolor : "bg-purple-100 dark:bg-purple-900/30"
    },
    {
        id : 4,
        type : "system",
        icon : Settings,
        title : "System Update",
        description : "Database Backup Completed",
        time : "1 hour ago",
        color : "text-orange-500",
        bgcolor : "bg-orange-100 dark:bg-orange-900/30"
    },
    {
        id : 5,
        type : "notification",
        icon : Bell,
        title : "Low Stock Alert",
        description : "iPhone 15 Pro stock is low",
        time : "2 hours ago",
        color : "text-red-500",
        bgcolor : "bg-red-100 dark:bg-red-900/30"
    },
]

const Activityfeed = () => {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Activity Feed</h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Recent System Activities</p>
        </div>
        <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All</button>
      </div>
      <div className='p-6 '>
        <div className='space-y-4'>
            {activities.map((activity) => {
                return (
                    <div className='flex items-start space-x-4 rounded-xl hover:bg-slate-500 dark:hover:bg-slate-800/50 transition-colors'>
            <div className={`p-2 rounded-lg ${activity.bgcolor}`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`}/>
            </div>
            <div className='flex-1 min-w-0'>
                <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>{activity.title}</h4>
                <p className='text-sm text-slate-600 dark:text-slate-400 truncate'>{activity.description}</p>
                <div className='flex items-center-safe space-x-1 mt-1'>
                    <Clock className='w-3 h-3 text-slate-400'/>
                    <span className='text-xs text-slate-500 dark:text-slate-400'>{activity.time}</span>
                </div>
            </div>
            </div>
                );
            })}
        </div>
      </div>
    </div>
  )
}

export default Activityfeed
