import React from 'react'

const DashboardContent = () => {
  return (
    <div className='dashboard-content'>
        <div className="dashboard-banner">
            <div className="dashboard-container">
                <h2>Presale Dashboard</h2>
                <p>Explore your transaction history, referral rewards and rank.</p>
            </div>
        </div>
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