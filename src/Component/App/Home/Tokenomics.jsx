import React from 'react'

const Tokenomics = () => {
  return (
    <div className='tokenomics-section'>
        <div className="container">
            <div className="section-title text-center">
                <h2>Tokenomics</h2>
            </div>
            <div className="tokenomics-content">
                <div className="tokenomics-text one">
                    <h6>Presale <br /><span>48%</span></h6>
                </div>
                <div className="tokenomics-text two">
                    <h6>Marketing <br /><span>13%</span></h6>
                </div>
                <div className="tokenomics-text three">
                    <h6>Exchange Listings <br /><span>11%</span></h6>
                </div>
                <div className="tokenomics-text four">
                    <h6>Staking & Rewards <br /><span>21%</span></h6>
                </div>
                <div className="tokenomics-text five">
                    <h6>Team <br /><span>7%</span></h6>
                </div>
                <div className="tokenomics-img">
                    <img src="./images/img/tokenomics.png" alt="icon" />
                </div>
                <div className="count">
                    <ul>
                        <li>Start Price <strong>0.008</strong></li>
                        <li>Supply Total <strong>1,700,000,000.00</strong></li>
                        <li>End Price <strong>0.08</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tokenomics