import React from 'react'
import MainMenu from './MainMenu'

const Header = () => {
  return (
    <div className='header-section'>
        <div className="container">
            <div className="header-inner">
                <a href="#" className='logo'><img src="./images/logo/logo.svg" alt="logo" /></a>
                <MainMenu/>
            </div>
        </div>
    </div>
  )
}

export default Header