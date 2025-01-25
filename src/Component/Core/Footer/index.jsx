import React from 'react'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className="footer-img">
            <img src="./images/img/footer-bg.png" alt="img" />
        </div>
        <div className="footer-content">
            <div className="container">
                <a href="/" className='logo footer-logo'><img src="./images/logo/logo.svg" alt="logo" /></a>
                <ul>
                    <li><a href="#" target='_blank'><img src="./images/icons/x.svg" alt="icon" /></a></li>
                    <li><a href="#" target='_blank'><img src="./images/icons/telegram.svg" alt="icon" /></a></li>
                    <li><a href="#" target='_blank'><img src="./images/icons/radit.svg" alt="icon" /></a></li>
                </ul>
                <p>Copyright © 2024 <a href="/">Renewtrade</a>. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer