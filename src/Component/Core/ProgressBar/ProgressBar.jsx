import React from 'react';

const ProgressBar = ({ progressValue }) => {
  const progressPercentage = parseFloat(progressValue);

  return (
    <div className="progress-bar">
      <div 
        className="progress-inner" 
        style={{ width: `${progressPercentage}%` }}
      />
      <span className="progress-text">{progressValue}% Sold</span>
    </div>
  );
};

export default ProgressBar;
