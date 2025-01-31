import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import StakingContent from './StakingContent'

const StakingInner = () => {
  return (
    <div className='dashboard-inner'>
        <Sidebar/>
        <StakingContent/>
    </div>
  )
}

export default StakingInner