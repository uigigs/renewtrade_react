import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const roadmapStages = [
  {
    stage: "Stage 01",
    title: "Foundation Building",
    tasks: [
      "Develop and deploy smart contracts.",
      "Conduct a comprehensive smart contract audit.",
      "Launch the presale event to early supporters.",
      "Establish a strong presence across key social media platforms.",
    ],
  },
  {
    stage: "Stage 02",
    title: "Growth & Collaboration",
    tasks: [
      "Acquire renewable energy assets to back the project’s vision.",
      "Complete KYC verification for the core team to ensure transparency and trust.",
      "Announce strategic partnerships to enhance project credibility.",
      "Host community competitions to drive engagement and reward early adopters.",
    ],
  },
  {
    stage: "Stage 03",
    title: "Ecosystem Expansion",
    tasks: [
      "Enhance community features and introduce additional engagement initiatives.",
      "Expand the token's utility by integrating it into various renewable energy assets.",
      "Launch the RenewTrade platform, enabling seamless transactions and trading.",
    ],
  },
  {
    stage: "Stage 04",
    title: "Market & Global Outreach",
    tasks: [
      "Complete token listing on decentralized exchanges (DEX).",
      "Establish partnerships focused on carbon offsetting initiatives.",
      "Begin global expansion to extend RenewX's impact across international markets.",
      "Finalize token listing on centralized exchanges (CEX).",
      "Scale up marketing efforts to increase awareness and adoption.",
    ],
  },
];

const Roadmap = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="roadmap-section">
      <img src="./images/shape/roadmap-shape.svg" alt='shape' className="roadmap-shape"/>
      <div className="container">
        <div className="section-title text-center">
          <h2>Roadmap</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
      </div>
        <div className="roadmap-slider">
          <Slider {...sliderSettings}>
            {roadmapStages.map((stage, index) => (
              <div className="slider-item" key={index}>
                <h6>{stage.stage}</h6>
                <img src="./images/shape/roadmap-card-shape.svg" alt="shape" className='roadmap-card-shape' />
                <div className="roadmap-card">
                  <h3>{stage.title}</h3>
                  <ul>
                    {stage.tasks.map((task, i) => (
                      <li key={i}>
                        <img src="./images/icons/check.svg" alt="icon" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  );
};

export default Roadmap;
