import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardInner from './DashboardInner'

const Dashboard = () => {
  return (
    <div className='dashboard dashboard-body'>
        <DashboardHeader/>
        <DashboardInner/>
    </div>
  )
}

export default Dashboard