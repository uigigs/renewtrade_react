import React from 'react'

const Staking = () => {
    return (
        <div className='staking-section'>
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="staking-right">
                            <img src="./images/img/whitehouse.png" alt="icon" className='staking-img desktop' />
                            <img src="./images/img/whitehouse-mobile.png" alt="icon" className='staking-img mobile' />
                            <img src="./images/shape/revenue-shape2.png" alt="icon" className='staking-shape' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="staking-left">
                            <div className="section-title">
                                <h2>Governance & Staking</h2>
                            </div>
                            <p>Participate in decision-making and governance rights by holding tokens. Lock your tokens for staking rewards and earn more from holding long-term. The longer you stake, the higher the returns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking