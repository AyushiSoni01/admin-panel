import React, { useState } from 'react'
import Sidebar from '../global/sidebar'
import Topbar from '../global/Topbar'
import DashboardContent from '../components/DashboardContent'

const Dashboard = () => {

  const [open, setOpen] = useState(true)
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900  transition-all duration-500'>
      <div className='h-screen flex overflow-hidden'>
        <Sidebar open={open} collapsed={sideBarCollapsed} onToggle={()=>{!setSideBarCollapsed}} currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <div className=' flex-1 flex flex-col overflow-hidden transition-all duration-300'><Topbar open={open} setOpen={setOpen}/>
        
        <main className='flex-1 overflow-y-auto bg-transparent'>
          <div className='p-6 space-y-6'>
            {currentPage === "dashboard" && <DashboardContent />}
          </div>
        </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
