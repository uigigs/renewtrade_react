import React, { useState } from 'react';
import Breadcumbs from './../Breadcumbs';
import LockOverview from './LockOverview';
import StakingDetail from './StakingDetail';

const percentageOptions = ['25%', '50%', '75%', 'max'];
const durationOptions = [
    { label: '3M', value: 12 },
    { label: '6M', value: 24 },
    { label: '1Y', value: 48 },
    { label: '2Y', value: 96 },
    { label: '3Y', value: 144 },
];

const StakingContent = () => {
    const [selectedPercentage, setSelectedPercentage] = useState(25);
    const [selectedWeeks, setSelectedWeeks] = useState(12);

    return (
        <div className='staking-content'>
            <Breadcumbs 
                title="Staking" 
                subtitle="Enjoy the benefits of RNEW staking, revenue share, DAO voting, farm yield boosting, participating in IFOs, and so much more!" 
            />
            <div className="dashboard-container">
                <div className="staking-card">
                    <div className="staking-card-header">
                        <h3>Lock RNEW to earn more RNEW</h3>
                        <a href="#" className='get-btn'>Get RNEW <span><img src="./images/icons/arrow-top.svg" alt="icon" /></span></a>
                    </div>
                    <div className="staking-card-body">
                        <form action="#" className='staking-form'>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>+ Add LCAI</label>
                                    <div className="staking-input">
                                        <div className="left">
                                            <div className="icon"><img src="./images/icons/renew.svg" alt="icon" /></div>
                                            <div className="text">
                                                <input type="text" placeholder='0' />
                                                <h6>~0.00 USD</h6>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h6>Balance: <br /><span>0.00</span></h6>
                                            <h6>RNEW</h6>
                                        </div>
                                    </div>
                                    <div className="quick-select-btn">
                                        <ul>
                                            {percentageOptions.map((option) => (
                                                <li key={option}>
                                                    <button 
                                                        className={selectedPercentage === option ? 'active' : ''} 
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedPercentage(option);
                                                        }}
                                                    >
                                                        {option}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>+ Add LCAI</label>
                                    <div className="staking-input">
                                        <div className="left">
                                            <div className="icon"><img src="./images/icons/duration.svg" alt="icon" /></div>
                                            <div className="text">
                                                <input type="text" placeholder='0' value={selectedWeeks} readOnly />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h6>Weeks</h6>
                                        </div>
                                    </div>
                                    <div className="quick-select-btn">
                                        <ul>
                                            {durationOptions.map(({ label, value }) => (
                                                <li key={label}>
                                                    <button 
                                                        className={selectedWeeks === value ? 'active' : ''} 
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedWeeks(value);
                                                        }}
                                                    >
                                                        {label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <LockOverview/>
                        <StakingDetail/>
                        <button className='stake-btn'><img src="./images/icons/wallet.svg" alt="icon" />STAKE</button>
                        </form>
                        <p className="info">
                            <img src="./images/icons/que.svg" alt="icon" /> 
                            New to RNEW Staking
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StakingContent;
