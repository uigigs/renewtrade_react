import React from 'react'
import BuyCard from './BuyCard'

const BannerOne = () => {
  return (
    <div className='banner-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="banner-text">
                        <h1>Welcome to Renewtrade</h1>
                        <h2>The Future of Renewable <span>Energy and Decentralized Finance</span></h2>
                        <p>Bringing sustainable energy and financial growth together, backed by real-world assets.</p>
                        <BuyCard/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="banner-right">
                        <div className="banner-img">
                            <img src="./images/img/banner1-img.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerOne