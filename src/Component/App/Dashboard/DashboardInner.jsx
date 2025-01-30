import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import DashboardContent from './DashboardContent'

const DashboardInner = () => {
  return (
    <div className='dashboard-inner'>
        <Sidebar/>
        <DashboardContent/>
    </div>
  )
}

export default DashboardInner