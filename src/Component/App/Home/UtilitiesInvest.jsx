import React from 'react';

const tokenUtilitiesData = [
  {
    id: 1,
    icon: './images/icons/governenc.svg',
    title: 'Governance',
    description: 'Tokenholders can vote on new energy projects and platform upgrades.',
  },
  {
    id: 2,
    icon: './images/icons/staking.svg',
    title: 'Staking Rewards',
    description: 'Lock your tokens and earn more. Boosted returns for long-term holders.',
  },
  {
    id: 3,
    icon: './images/icons/discount.svg',
    title: 'Energy Discounts',
    description:
      'Get real-world discounts on renewable energy services by partnering with energy providers.',
  },
];

const whyInvestData = [
  {
    id: 1,
    icon: './images/icons/eco.svg',
    title: 'Eco-Conscious Investment',
    description:
      'Contribute to combating climate change and reducing carbon footprints by investing in sustainable energy projects.',
  },
  {
    id: 2,
    icon: './images/icons/earn.svg',
    title: 'Staking Rewards',
    description:
      'Regular, transparent revenue distributions directly from the renewable energy sector. No middleman involved.',
  },
  {
    id: 3,
    icon: './images/icons/blockchain.svg',
    title: 'Energy Discounts',
    description:
      'Every transaction and revenue distribution is immutably recorded, ensuring trust and accountability.',
  },
];

const UtilitiesInvest = () => {
  return (
    <div className="utilities-invest-section">
      <div className="container">
        <div className="utilities-invest-inner">
          <img
            src="./images/shape/border.svg"
            alt="icon"
            className="utilities-invest-inner-border"
          />
          {/* Left Column */}
          <div className="utilities-invest-column left">
            <div className="column-title">
              <h3>Token Utilities: <br /> More than Just Profit Sharing</h3>
              <p>The Renewtrade token goes beyond profit-sharing. It offers:</p>
            </div>
            <ul>
              {tokenUtilitiesData.map((item) => (
                <li key={item.id}>
                  <div className="icon">
                    <img src={item.icon} alt={`${item.title} icon`} />
                  </div>
                  <div className="detail">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Center Column */}
          <div className="utilities-invest-column center">
            <div className="air-mil-img">
              <img src="./images/img/air-mil.png" alt="img" />
            </div>
          </div>
          {/* Right Column */}
          <div className="utilities-invest-column right">
            <div className="column-title">
              <h3>Why Invest in Renewtrade?</h3>
            </div>
            <ul>
              {whyInvestData.map((item) => (
                <li key={item.id}>
                  <div className="icon">
                    <img src={item.icon} alt={`${item.title} icon`} />
                  </div>
                  <div className="detail">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilitiesInvest;
