import React from 'react'

const LockOverview = () => {
  return (
    <div className='lock-overview'>
        <label>Lock overview</label>
        <div className="overview-content">
            <div className="left">
                <div className="icon"><img src="./images/icons/renew2.svg" alt="icon" /></div>
                <div className="text">
                    <h4>My RNEW <br />Stake</h4>
                </div>
            </div>
            <div className="tight">
                <h4>0.00</h4>
            </div>
        </div>
    </div>
  )
}

export default LockOverview