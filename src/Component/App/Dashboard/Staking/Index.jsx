import React from 'react'
import DashboardHeader from '../DashboardHeader'
import DashboardInner from '../DashboardInner'
import StakingInner from './StakingInner'

const Staking = () => {
  return (
    <div className='staking dashboard-body'>
        <DashboardHeader/>
        <StakingInner/>
    </div>
  )
}

export default Staking