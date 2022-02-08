import React from 'react';
import RecImg from "../../assets/images/solotraveller.jpg"

const RecDestination = ({rating,place,country}) => {
  return (<>
    <div className="recdestination-bg">
        <figure>
            <img src={RecImg} alt="" className='img-fluid'/>
        </figure>
    <div className="recdestination-rating">
            <h5 className='rating-para'><i className="fas fa-star"></i><span>{rating}</span></h5>
        </div>
        
        <h2>{place}</h2>
        <p><i className="fas fa-map-marker-alt"></i><span>{country}</span></p>
    </div>
  </>);
};

export default RecDestination;
