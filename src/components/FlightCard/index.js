import React from 'react';

const FlightCard = ({heading,place1,going,place2,icon,icon1,icon2}) => {
  return (<>
    <div className="flightcard">
        <div className="flightcard-content">
        <div>
            <p>{heading}<i className={`${icon1}`}></i> </p>
            <h2>{place1}</h2>
        </div>
        <div className='flightcard-content-middle'>
        <i className={`${icon}`}></i>
        </div>
        <div className='second-div'>
            <p>{going} <i className={`${icon1}`}></i></p>
            <h2>{place2}</h2>
        </div>
        </div>
    </div>
  </>);
};

export default FlightCard;
