import React from 'react'

const SidebarContent = () => {
  return (
    <div className='sidebar-content'>
        <div className="sidebar-menu">
            <ul>
                <li><a href="#"><span className="icon"></span> Dashboard</a></li>
            </ul>
        </div>

        <div className="sidebar-bottom">
            <div className="profile">
                <div className="dp">
                    <img src="./images/avater/avatar.png" alt="" />
                </div>
                <div className="text">
                    <h5>0x77AC...76AC</h5>
                    <h5><span>0 LCAI</span></h5>
                </div>
            </div>
            <div className="sidebar-bottom-card">
                <button className='btn-connect'><img src="./images/icons/wallet.svg" alt="icon" />Connect</button>
                <button className='btn-disconnect'><img src="./images/icons/disconnect.svg" alt="icon" />Disconnect</button>
                <ul>
                    <li><a href="#"><img src="./images/icons/twitter.svg" alt="icon" /></a></li>
                    <li><a href="#"><img src="./images/icons/telegram2.svg" alt="icon" /></a></li>
                    <li><a href="#"><img src="./images/icons/light.svg" alt="icon" /></a></li>
                    <li><a href="#"><img src="./images/icons/m.svg" alt="icon" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SidebarContent