import React from 'react'

const CardInfo = ({ illnessCount, resolvedCount, illnessMonth }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
            <div className="stats-card">
                <p className="stats-time-text">
                    <span>{illnessCount}</span>
                </p>
                <p className="stats-day-text text-gray-400">Total Illnesses</p>
                <img src="/caire-logo.png" alt="logo" width="40px" height="40px" className="stats-moon bg-dark-200 rounded-full" />
            </div>

            <div className="stats-card">
                <p className="stats-time-text">
                    <span>{resolvedCount}</span><span className="stats-time-sub-text">out of {illnessCount}</span>
                </p>
                <p className="stats-day-text text-gray-400">Resolved Health Condition</p>
                <img src="/caire-logo.png" alt="logo" width="40px" height="40px" className="stats-moon bg-dark-200 rounded-full" />
            </div>

            <div className="stats-card">
                <p className="stats-time-text">
                    <span>{illnessMonth}</span>
                </p>
                <p className="stats-day-text text-gray-400">Total Illnesses This Month</p>
                <img src="/caire-logo.png" alt="logo" width="40px" height="40px" className="stats-moon bg-dark-200 rounded-full" />
            </div>
        </div>
    )
}

export default CardInfo