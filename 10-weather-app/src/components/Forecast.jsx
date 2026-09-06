import React from 'react'

function Forecast({ time, icon, temp }) {
    const formattedTime = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <div className='flex flex-col items-center justify-between text-white py-2'>
            <p>{formattedTime}</p>
            <img src={icon} alt="Weather Icon" className='w-12 h-12' />
            <p>{temp} &deg;</p>
        </div>
    )
}

export default Forecast
