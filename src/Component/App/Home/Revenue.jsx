import React from 'react'

const Revenue = () => {
  return (
    <div className='revenue-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="revenue-left">
                        <div className="section-title">
                            <h2>Revenue Sharing Model</h2>
                        </div>
                        <p>Renewtrade tokenholders earn passive income from the revenue generated by operational renewable energy projects.</p>
                        <p>50% of net revenues from solar, wind, and hydroelectric energy projects are shared with tokenholders. Earnings are distributed quarterly or biannually.</p>
                        <h3>Income Distribution Tiers</h3>
                        <img src="./images/icons/arrow-right-line.svg" alt="icon" className="tier-arrow" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="revenue-right">
                        <div className="tier-text">
                            <h6>Tier 01</h6>
                            <p>Investments under $5,000 - Earn up to 10% of total profits.</p>
                        </div>
                        <div className="tier-img">
                            <img src="./images/img/tier-img.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Revenue