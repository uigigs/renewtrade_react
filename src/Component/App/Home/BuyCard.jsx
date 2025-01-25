import React from 'react';
import ProgressBar from '../../Core/ProgressBar/ProgressBar';

const BuyCard = () => {
  return (
    <div className="buy-card">
      <h4>Buy Now Before Price Rises</h4>
      <ProgressBar progressValue="75.52" /> {/* Pass numeric value as a string */}
      <div className="token-detail">
        <div className="left">
          <h6>USD RAISED SO FAR : <span>$4,218,740.31</span></h6>
        </div>
        <div className="right">
          <h6>Tokens Sold : <span>230,959,770.21</span></h6>
        </div>
      </div>
      <form action="#">
        <div className="rtx-input">
            <input type="text" placeholder="1 $RTX = $0.0228" />
            <div className="next-price">Next Price: $0.0239</div>
        </div>
        <div className="payment-method">
            <ul>
                <li><img src="./images/icons/eth.svg" alt="eth" /> <span>ETH</span></li>
                <li><img src="./images/icons/usdt.svg" alt="eth" /> <span>USDT</span></li>
                <li><img src="./images/icons/card.svg" alt="eth" /> <span>Card</span></li>
            </ul>
        </div>
        <div className="input-row">
            <div className="rtx-input bg-white">
                <label>ETH you pay</label>
                <input type="text" />
                <span className="token-img"><img src="./images/icons/eth.svg" alt="eth" /></span>
            </div>
            <div className="rtx-input bg-white">
                <label>$RTX you receive</label>
                <input type="text" />
                <span className="token-img"><img src="./images/icons/rtx.svg" alt="eth" /></span>
            </div>
        </div>
        <button className='connect-btn'>Connect wallet & Pay</button>
        <button className='giveaway-btn'>250,000 Giveaway</button>
      </form>
    </div>
  );
};

export default BuyCard;
