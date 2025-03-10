import React from 'react'

const WhatIs = () => {
    return (
        <div className='what-is-section' id='about'>
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="what-is-right">
                            <div className="what-is-img">
                                <img src="./images/img/what-is-img.svg" alt="img" className='what-is-right-img' />
                                <img src="./images/shape/what-is-shape.png" alt="img" className='what-is-shape' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="what-is-left">
                            <div className="what-is-shape s-line">
                                <img src="./images/shape/s-line.png" alt="img" />
                            </div>
                            <div className="section-title">
                                <h2>What is Renewtrade</h2>
                            </div>
                            <p>Renewtrade is a revolutionary platform that merges renewable energy with decentralized finance (DeFi), offering the first-ever cryptocurrency token backed by energy production from solar, wind, and hydroelectric power sources. Investors can now earn from energy projects, while simultaneously promoting global sustainability.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIs