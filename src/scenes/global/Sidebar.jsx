import { BarChart3, Calendar, ChevronDown, CreditCard, FileText, LayoutDashboard, MessageSquare, Package, Settings, ShoppingBag, Users, Zap } from 'lucide-react'
import { useState } from 'react';



const Sidebar = ({open, currentPage}) => {

    const menuItems = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        badge: "New",
    },
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        submenu:[
            {id: "overview", label:"Overview"},
            {id: "reports", label:"Reports"},
            {id: "insights", label:"Insights"}
        ],
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        count: "2.4k",
        submenu:[
            {id: "allusers", label:"All Users"},
            {id: "roles", label:"Roles & Permissions"},
            {id: "activities", label:"Activities"}
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        label: "E-commerce",
        submenu:[
            {id: "products", label:"Products"},
            {id: "orders", label:"Orders"},
            {id: "customers", label:"Customers"}
        ],
    },
    {
        id: "inventory",
        icon: Package,
        label: "Inventory",
        count: "847",
    },
    {
        id: "transaction",
        icon: CreditCard,
        label: "Transactions",
    },
    {
        id: "messages",
        icon: MessageSquare,
        label: "Messages",
        badge:"12",
    },
    {
        id: "calender",
        icon: Calendar,
        label: "Calender",
    },
    {
        id: "reports",
        icon: FileText,
        label: "Reports",
    },
    {
        id: "settings",
        icon: Settings,
        label: "Settings",
    },
];

    const [openSubmenu , setOpenSubmenu] = useState(currentPage)

  return (
    <div className={`transform transition duration-300 ease-in-out bg-white/80  dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50  dark:border-slate-700/50 flex flex-col relative z-10
    ${open? "translate-x-0 w-72" : "-translate-x-full w-0 overflow-hidden"}`}>
        {/* logo */}
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                    <Zap className='w-6 h-6 text-white'/>
                </div>

                {/* conditional rendering */}
                <div>
                    <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
                    <p className='text-xs text-slate-500 dark:text-slate-400 '>Admin Panel</p>
                </div>
            </div>
        </div>
        {/* Navigation */}
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto '>
            {menuItems.map((items)=>{
                const Icon = items.icon;
                    return(
                        <div key={items.id} >
                            <button onClick={()=>{
                                setOpenSubmenu(openSubmenu === items.id? null : items.id);
                                }} 
                                className={`'text-slate-900 dark:text-white hover:bg-slate-300 hover:dark:bg-slate-600/50 transform transition-all duration-300 rounded w-full flex items-center px-1' ${openSubmenu === items.id? "bg-linear-to-r from-blue-900 to-purple-600 transform transition-all duration-300" : "hover:bg-slate-300 dark:hover:bg-slate-600/50"}`}>
                                <div key={items.id} className='w-full p-3 flex items-center gap-2  text-white'><Icon />
                                <span>{items.label}</span>

                                {/* Conditional Rendering  */}
                                {items.badge && <span className='bg-red-600 rounded-full text-white text-xs py-1 px-2'>{items.badge}</span>}

                                {items.count && <span className='bg-slate-200/60 rounded-full text-white text-xs py-1 px-2'>{items.count}</span>}
                                
                                </div>
                                {items.submenu && (
                                    <>
                                    <ChevronDown className={`text-slate-200 transition-transform ${openSubmenu === items.id? "rotate-180" : ""}` }/>
                                    </>
                                )}
                            </button>

                            {/* submenu  */}
                            {items.submenu && (
                            <div
                                className={`
                                overflow-hidden transition-all duration-300
                                ${openSubmenu === items.id ? "max-h-90 opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                {items.submenu.map((submenu) => (
                                <div className='w-full py-1'>
                                    <button className='w-full h-10 px-2 py-1 hover:bg-slate-700/50 rounded'>
                                    {submenu.label}
                                    </button>
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                    )
            })}
        </nav>
        <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 '>
            <img src="https://img.freepik.com/premium-vector/cute-penguin-cartoon-icon-illustration_1062857-650.jpg" alt="user" className='w-10 h-10 rounded-full ring-2 ring-blue-500' />
            <div className='flex-1 min-w-0'>
                <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-slate-800 dark:text-white truncate '>Ayushi Soni</p>
                    <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>Administrator </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
