import React from "react";
import FlightCard from "../../components/FlightCard";
import NavBar from "../../components/NavBar";
import NavTabs from "../../components/NavTabs";
import Solotraveller from "../../assets/images/solotraveller.jpg";
import { Button } from "react-bootstrap";
import TouristTravelDist from "../../components/TouristTravelDest";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tabs, Tab } from "react-bootstrap";
import RecDestination from "../../components/RecDestination";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
  };

  const testimonialData = [
    {
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, eligendi eaque a amet in quidem soluta voluptatem. Voluptatum temporibus doloribus ipsum harum numquam doloremque modi pariatur est! Quos, illo laudantium!",
      name: "-Mr.ABCD",
      img: "../images/men.jpg",
    },
    {
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, eligendi eaque a amet in quidem soluta voluptatem. Voluptatum temporibus doloribus ipsum harum numquam doloremque modi pariatur est! Quos, illo laudantium!",
      name: "-Mr.DEFG",
      img: "../images/men.jpg",
    },
    {
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, eligendi eaque a amet in quidem soluta voluptatem. Voluptatum temporibus doloribus ipsum harum numquam doloremque modi pariatur est! Quos, illo laudantium!",
      name: "-Mr.HIJK",
      img: "../images/men.jpg",
    },
  ];
  return (
    <>
      <div className="banner-img">
        <div className="container">
          <NavBar heading="Travelo" signinbtn="Sign In" />
          <div className="banner-caption">
            <h1>
              Discover Your Life,Travel <br /> Where You Want
            </h1>
            <p>
              Would you explore nature paradise in the world, let's find the{" "}
              <br /> best destination in the world.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-section">
        <div className="container">
          <div className="banner-tab">
            <Tabs defaultActiveKey="flight">
              <Tab eventKey="flight" title="Flight">
                <div className="banner-flight">
                  <div className="row">
                    <div className="col-md-5">
                      <FlightCard
                        heading="Living From"
                        place1="London"
                        going="Going to"
                        place2="New York"
                        icon="fas fa-plane"
                      />
                    </div>
                    <div className="col-md-5">
                      <FlightCard
                        heading="Leave"
                        icon1="fas fa-plane"
                        icon2="fas fa-plane"
                        place1="1 Jan, Sat"
                        going="Return"
                        place2="10 Jan, Mon"
                        icon="far fa-calendar-alt"
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="banner-flight-searchicon">
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="hotel" title="Hotel">
                <div className="banner-flight">
                  <div className="row">
                    <div className="col-md-5">
                      <FlightCard
                        heading="Living From"
                        place1="London"
                        going="Going to"
                        place2="New York"
                        icon="fas fa-plane"
                      />
                    </div>
                    <div className="col-md-5">
                      <FlightCard
                        heading="Leave"
                        icon1="fas fa-plane"
                        icon2="fas fa-plane"
                        place1="1 Jan, Sat"
                        going="Return"
                        place2="10 Jan, Mon"
                        icon="far fa-calendar-alt"
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="banner-flight-searchicon">
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>

          <div className="special-offer section-gutter">
            <h1 className="mb-3">Special Upcomming Offers</h1>
            <NavTabs name="Team" name1="Couple" name2="Family" />
          </div>

          <div className="travelanycorner">
            <div className="row">
              <div className="col-md-5">
                <figure className="travelanycorner-figure">
                  <img src={Solotraveller} alt=""></img>
                </figure>
                <div className="touristtravel1">
                  <TouristTravelDist count="2000+" name="tourists" />
                </div>
                <div className="touristtravel2">
                  <TouristTravelDist count="100+" name="destinations" />
                </div>
                <div className="touristtravel3">
                  <TouristTravelDist count="300+" name="hotels" />
                </div>
              </div>
              <div className="col-md-6 offset-md-1">
                <div className="travelanycorner-content">
                  <h1>
                    Travel Any Corner Of <br /> The World With US
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis illum porro ad vero odit! Porro assumenda, optio
                    excepturi vel praesentium accusantium. Explicabo, dolor in?
                    Nam libero eveniet numquam pariatur animi! Explicabo, dolor
                    in? Nam libero eveniet numquam pariatur animi! Explicabo,
                    dolor in? Nam libero eveniet numquam pariatur animi!
                    <br />
                    Explicabo, dolor in? Nam libero eveniet numquam pariatur
                    animi!
                  </p>
                  <Button className="travelanycorner-btn">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation Destination */}

          <div className="recommendation-destination section-gutter-top">
            <div className="recommendation-destionation-heading">
              <h2>Recommendation Destination</h2>
              <Tabs defaultActiveKey="popular">
                <Tab eventKey="popular" title="Popular">
                  <div className="row">
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Hawaiian Isalands"
                        country="United States"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.9"
                        place="Machu Picchu"
                        country="Peru"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Great Wall Of China"
                        country="China"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Hawaiian Isalands"
                        country="United States"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="adventure" title="Adventure">
                  <div className="row">
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Hawaiian Isalands"
                        country="United States"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.9"
                        place="Machu Picchu"
                        country="Peru"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="beach" title="Beach">
                  <div className="row">
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Hawaiian Isalands"
                        country="United States"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.9"
                        place="Machu Picchu"
                        country="Peru"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Great Wall Of China"
                        country="China"
                      />
                    </div>
                    <div className="col-md-3">
                      <RecDestination
                        rating="4.8"
                        place="Hawaiian Isalands"
                        country="United States"
                      />
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>

          {/* What Our Travellers Says */}

          <div className="travellers-testimonials section-gutter">
            <div className="travellers-testimonials-heading">
              <h2>What Our Travellers Says</h2>
              <Button className="testimonial-btn">Give a Review</Button>
            </div>
            <div className="row">
              <Slider {...settings}>
                {testimonialData.map((data, index) => {
                  return (
                    <div className="col-md-6 col-align" key={index}>
                      <div className="testimonial-slider-wrapper">
                        <h4>{data.para}</h4>
                        <h2>{data.name}</h2>
                        <p>Happy Traveller</p>
                        <div className="testimonial-quote">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <figure className="testimonial-img-wrapper">
                          <img src={data.img} alt="" />
                        </figure>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div className="section-gutter map-bg">
            <h2>
              Dont Miss The 30% Discount If <br /> You Register Today
            </h2>
            <Button className="map-btn">Register Today</Button>
          </div>
        </div>
        <footer className=" footer">
          <NavBar heading="&copy; 2022 Travelo LLC All Rights Reserved" />
        </footer>
      </section>
    </>
  );
};

export default Home;
