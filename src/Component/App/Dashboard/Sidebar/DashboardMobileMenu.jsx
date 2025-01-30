import React from 'react'
import SidebarContent from './SidebarContent'

const DashboardMobileMenu = () => {
  return (
    <div className='dashboard-mobile-menu'>
      <button
        className="dashboard-menu-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <img src="./images/icons/menu-icon.svg" alt="icon" />
      </button>

      <div
        className="offcanvas offcanvas-bg offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="dashboard-mobilemenu-top">
            <a href="#" className="logo">Renewtrade</a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ><img src="./images/icons/close.svg" alt="icon" /></button>
          </div>

            <ul>
                <li><a href="#">Tokenomics</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Docs</a></li>
            </ul>
        </div>
        <div className="offcanvas-body">
          <SidebarContent/>
        </div>
      </div>
    </div >
  )
}

export default DashboardMobileMenu