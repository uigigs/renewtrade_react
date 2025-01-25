import React from 'react'

const WhatIs = () => {
  return (
    <div className='what-is-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="what-is-left">
                        <div className="what-is-shape">
                            <img src="./images/shape/s-line.png" alt="img" />
                        </div>
                        <div className="section-title">
                            <h2>What is Renewtrade</h2>
                        </div>
                        <p>Renewtrade is a revolutionary platform that merges renewable energy with decentralized finance (DeFi), offering the first-ever cryptocurrency token backed by energy production from solar, wind, and hydroelectric power sources. Investors can now earn from energy projects, while simultaneously promoting global sustainability.</p>
                    
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="what-is-right">
                        <div className="what-is-img">
                            <img src="./images/img/what-is-img.svg" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatIs