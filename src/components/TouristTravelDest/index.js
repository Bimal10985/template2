import React from 'react';

const TouristTravelDist = ({count,name}) => {
  return (<>
    <div className="touristtraveldist-bg">
        <h1>{count}</h1>
        <p>{name}</p>
    </div>
  </>
    );
};

export default TouristTravelDist;
