import React from 'react';

const crowdfundingData = [
  {
    id: 1,
    icon: './images/icons/accessibility.svg',
    title: 'Accessibility',
    description: 'Open to all, enabling even small investments.',
  },
  {
    id: 2,
    icon: './images/icons/global.svg',
    title: 'Global Participation',
    description: 'Anyone can invest without geographic barriers.',
  },
  {
    id: 3,
    icon: './images/icons/income-wallet.svg',
    title: 'Passive Income',
    description: 'Earn from energy production while supporting green initiatives.',
  },
];

const Crowdfunding = () => {
  return (
    <div className="crowdfunding-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="crowdfunding-left">
              <ul>
                {crowdfundingData.map((item) => (
                  <li key={item.id}>
                    <div className="icon">
                      <img src={item.icon} alt={`${item.title} icon`} />
                    </div>
                    <div className="detail">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="crowdfunding-right">
              <div className="section-title">
                <h2>Crowdfunding for Green Energy</h2>
              </div>
              <p>
                Our embedded crowdfunding platform enables smaller investors to support renewable energy projects globally. Whether it's solar farms, wind turbines, or micro-hydroelectric projects, you can contribute towards real-world change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdfunding;
