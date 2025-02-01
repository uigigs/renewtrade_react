import React, { useEffect } from 'react';

const MainMenu = () => {
  useEffect(() => {
    const handleMenuClick = (event) => {
      const targetHref = event.currentTarget.getAttribute("href");

      // If href is "#" or invalid, prevent the default behavior
      if (targetHref === "#" || !targetHref) {
        event.preventDefault();
        return;
      }

      // Prevent the default link behavior (jumping to the top)
      event.preventDefault();

      const offcanvasElement = document.getElementById('offcanvasExample');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

      // Check if offcanvas is open
      if (offcanvasInstance && offcanvasInstance._isShown) {
        // Close offcanvas without scrolling to the section
        offcanvasInstance.hide();

        // Use a slight delay before scrolling to ensure the offcanvas closes first
        setTimeout(() => {
          const targetId = targetHref.substring(1);  // Remove the leading '#'
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); // Adjust the timeout duration if necessary
      } else {
        // If offcanvas is not open, just scroll to the section
        const targetId = targetHref.substring(1);  // Remove the leading '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Attach event listeners to menu links
    const menuLinks = document.querySelectorAll('.main-menu-list a');
    menuLinks.forEach(link => link.addEventListener('click', handleMenuClick));

    // Clean up the event listeners on component unmount
    return () => {
      menuLinks.forEach(link => link.removeEventListener('click', handleMenuClick));
    };
  }, []);

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
              <li><a href="#about">About</a></li>
              <li><a href="#HowItWorks">How It Works</a></li>
              <li><a href="#Tokenomics">Tokenomics</a></li>
              <li><a href="#Roadmap">Roadmap</a></li>
              <li><a href="#Staking">Staking</a></li>
            </ul>
          </div>

          <div className="main-menu-btns">
            <a href="/dashboard" className='dashboard-btn'>Dashboard</a>
            <button className='wallet-btn'><img src="./images/icons/wallet.svg" alt="icon" /> Connect Wallet</button>
          </div>

          <div className="menu-footer">
            <ul>
              <li><a href="#" target='_blank'><img src="./images/icons/twitter-green.svg" alt="icon" /></a></li>
              <li><a href="#" target='_blank'><img src="./images/icons/telegram-green.svg" alt="icon" /></a></li>
              <li><a href="#" target='_blank'><img src="./images/icons/light-green.svg" alt="icon" /></a></li>
              <li><a href="#" target='_blank'><img src="./images/icons/m-green.svg" alt="icon" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
