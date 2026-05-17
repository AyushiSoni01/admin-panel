import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'
import Tablesection from './Tablesection'
import Activityfeed from './Activityfeed'

const DashboardContent = () => {
  return (
    <div className='space-y-6'>
          {/* Stats grid  */}
     <StatsGrid />

     {/* Charts section  */}
     <ChartSection />

     <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
      <div className='xl:col-span-2'>
        <Tablesection />
      </div>
      <div>
        <Activityfeed />
      </div>
     </div>
    </div>
  )
}

export default DashboardContent
