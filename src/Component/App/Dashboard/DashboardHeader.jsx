import React from 'react'
import DashboardMobileMenu from './Sidebar/DashboardMobileMenu'

const DashboardHeader = () => {
  return (
    <div className='dashboard-header'>
        <div className="header-left">
            <div className="dashboard-side-menu-btn">
              <DashboardMobileMenu/>
            </div>
            <a href="#" className="logo">Renewtrade</a>
        </div>
        <div className="header-right">
            <ul>
                <li><a href="#">Tokenomics</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Docs</a></li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardHeader