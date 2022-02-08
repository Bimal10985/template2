import React from 'react';
import { Button } from 'react-bootstrap';
import OfferImg from "../../assets/images/offerimg.png"

const SpecialOfferCard = () => {
  return (<>

    <div className="specialoffercard-bg">
        <figure >
            <img src={OfferImg} alt="" className='img-fluid offerimg-card' />
        </figure>
        <span className='span-bg'>Adventure</span>
        <span className='span-duration'>6 Days,5 Nights</span>
        <h2>Machu Picchu</h2>
        <h3 className='text-rotatae'>12 Jan 2020</h3>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h4>700$ <sub>/person</sub></h4>
            </div>
            <div>
               <Button className='offer-card-btn'>Book Now</Button>
            </div>
        </div>
    </div>
    
  </>);
};

export default SpecialOfferCard;
