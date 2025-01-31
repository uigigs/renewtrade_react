import React from 'react'

const Breadcumbs = ({title, subtitle}) => {
  return (
    <div className="breadcumbs-section">
            <div className="dashboard-container">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
  )
}

export default Breadcumbs