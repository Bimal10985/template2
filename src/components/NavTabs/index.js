import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import SpecialOfferCard from "../SpecialOfferCard";

const NavTabs = ({ name, name1, name2 }) => {
  return (
    <>
      <Tabs
        defaultActiveKey="popular"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="popular" title={name}>
          <div className="row">
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
          </div>
        </Tab>
        <Tab eventKey="adventure" title={name1}>
          <div className="row">
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
          </div>
        </Tab>
        <Tab eventKey="beach" title={name2}>
          <div className="row">
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
            <div className="col-md-4">
              <SpecialOfferCard />
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default NavTabs;
