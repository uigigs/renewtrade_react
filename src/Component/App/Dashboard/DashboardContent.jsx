import React from 'react'
import Breadcumbs from './Breadcumbs'

const DashboardContent = () => {
  return (
    <div className='dashboard-content'>
        <Breadcumbs title="Presale Dashboard" subtitle="Explore your transaction history, referral rewards and rank."/>
        <div className="dashboard-container">
            <div className="dashboard-card-section">
                <div className="dashboard-card">
                    <div className="icon">
                        <img src="./images/icons/icon-service.png" alt="icon" />
                    </div>
                    <h3>0 LCAI</h3>
                    <h6>Estimated USD valuation: $0</h6>
                    <p>Total Assets</p>
                    <img src="./images/icons/premium-badge.png" alt="icon" className='icon-wattermark' />
                </div>
            </div>
        </div>

        <div className="copyright">
            Copyright © 2024
        </div>
    </div>
  )
}

export default DashboardContent