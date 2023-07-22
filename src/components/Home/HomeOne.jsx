import React from "react";
import { Link } from "react-router-dom";
import picone from "./images/schedule.png";
import pictwo from "./images/air-conditioner.png";
import picthree from "./images/low-battery.png";
import picfour from "./images/wheel-alignment.png";
import picfive from "./images/car-radiator.png";
import right from "./images/right-arrow.png";

const HomeOne = () => {
  return (
    <div className="homeone-main">
      <div className="homeone-head">
        <h2 className="homeone-heading">Services Available</h2>
        <img className="homeone-head-img" src={right} alt="" />
      </div>
      <div className="homeone-content">
        <div className="homeone-items">
          <Link to="perodicServices">
            <img
              className="homeone-imgs"
              width={80}
              height={80}
              src={picone}
              alt=""
            />
          </Link>
          <Link className="homeone-link-text" to="PerodicServices">
            <span className="homeone-text">Periodic Services</span>
          </Link>
        </div>
        <div className="homeone-items">
          <Link to="AcRepaires">
            <img
              className="homeone-imgs"
              width={80}
              height={80}
              src={pictwo}
              alt=""
            />
          </Link>
          <Link className="homeone-link-text" to="AcRepaires">
            <span className="homeone-text">AC Service & Repair</span>
          </Link>
        </div>
        <div className="homeone-items">
          <Link to="Batteries">
            <img
              className="homeone-imgs"
              width={80}
              height={80}
              src={picthree}
              alt=""
            />
          </Link>
          <Link className="homeone-link-text" to="Batteries">
            <span className="homeone-text">Battery Services</span>
          </Link>
        </div>
        <div className="homeone-items">
          <Link to="TyreWheels">
            <img
              className="homeone-imgs"
              width={80}
              height={80}
              src={picfour}
              alt=""
            />
          </Link>
          <Link className="homeone-link-text" to="TyreWheels">
            <span className="homeone-text">Wheel Alingments</span>
          </Link>
        </div>
        <div className="homeone-items">
          <Link to="PerodicServices">
            <img
              className="homeone-imgs"
              width={80}
              height={80}
              src={picfive}
              alt=""
            />
          </Link>
          <Link className="homeone-link-text" to="TyreWheels">
            <span className="homeone-text">Raditor Service</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;
