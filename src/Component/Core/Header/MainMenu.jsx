import React from 'react'

const MainMenu = () => {
  return (
    <div className='main-menu'>
      <button
        className="menu-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Menu <span><img src="./images/icons/menu.svg" alt="icon" /></span>
      </button>

      <div
        className="offcanvas offcanvas-bg offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="main-menu-top">
            <a href="#" className="logo">Renewtrade</a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="offcanvas-body">
            <div className="main-menu-list">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Tokenomics</a></li>
                    <li><a href="#">Roadmap</a></li>
                    <li><a href="#">Staking</a></li>
                </ul>
            </div>

            <div className="main-menu-btns">
                <a href="/dashboard" className='dashboard-btn'>Dashboard</a>
                <button className='wallet-btn'><img src="./images/icons/wallet.svg" alt="icon" /> Connect Wallet</button>
            </div>
        </div>
      </div>
    </div >
  )
}

export default MainMenu