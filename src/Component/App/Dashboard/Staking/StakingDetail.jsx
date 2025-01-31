import React from 'react'

const StakingDetail = () => {
  return (
    <div className='staking-detail'>
        <div className="row">
            <div className="col-md-6">
                <div className="staking-detail-card">
                    <ul>
                        <li><span className='underline'>Stake amount</span> <span className='highlight'>0.00 RNEW</span></li>
                        <li><span className='underline'>Estimated profit</span> <span className='highlight2'>0.00 RNEW</span></li>
                        <li><span className='underline'>Total</span> <span className='highlight2'>0.00 RNEW</span></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="staking-detail-card">
                    <ul>
                        <li><span className='highlight'>RNEW to be locked</span> <span className='highlight'>0.00</span></li>
                        <li><span className='underline'>Duration</span> <span className='highlight'>12 Weeks</span></li>
                        <li><span className='underline'>Unlock On</span> <span className='highlight'>May 1 2025, 13:14</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StakingDetail