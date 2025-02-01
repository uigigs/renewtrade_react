import React from 'react';

const JoinUs = () => {
  const joinUsItems = [
    { text: "Learn More About Our Projects", href: "#" },
    { text: "View Tokenomics", href: "#" },
    { text: "Invest Now", href: "#" },
  ];

  return (
    <div className="join-us-section">
      <img src="./images/shape/s-line2.svg" alt="img" className='s-shape' />
      <div className="container">
        <div className="section-title text-center">
          <h2>Join Us in Shaping a Sustainable Future</h2>
          <p>
            Invest in renewable energy. Earn passive income. Contribute to a greener planet. Renewtrade – Powering the Future with Renewable Energy and DeFi.
          </p>
        </div>
        <div className="join-us-content">
          <h3>Get Started Today</h3>
          <ul>
            {joinUsItems.map((item, index) => (
              <li key={index}>
                <img src="./images/icons/check-green-bg.svg" alt="icon" />
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
