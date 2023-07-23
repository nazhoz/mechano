import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import carbattery from "./images/car_bettery__1_-removebg-preview.png";
import carsuspension from "./images/car_suspension-removebg-preview.png";
import carsteering from "./images/20230719133114__fpdl.in__steering-wheel_1339-655_normal-removebg-preview.png";
import carclutch from "./images/car_clutch-removebg-preview.png";
import carbrakes from "./images/car_brakes-removebg-preview.png";
import cartyres from "./images/car_tyres__3_-removebg-preview.png";
import arrow from "./images/right-arrow.png";

const HomeTwo = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="hometwo-main">
      <div className="hometwo-head-main">
        <h2 className="hometwo-curated">Curated Custom Services</h2>
        <img className="hometwo-arrow" src={arrow} alt="" />
      </div>
      <div>
        <Carousel
          className="hometwo-main-carousel"
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlay={"desktop" ? true : false}
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          <div className="hometwo-carousel">
            <Link to="Batteries">
              <img className="homecaroimg" width={200} height={200} src={carbattery} alt="" />
            </Link>
            <Link className="battery-link" to="Batteries">
              <span className="hometwo-battery-name">Battery</span>
            </Link>
          </div>
          <div className="hometwo-carousel">
            <Link to="Suspensions">
              <img className="homecaroimg" width={200} height={200} src={carsuspension} alt="" />
            </Link>
            <Link className="battery-link" to="Suspensions">
              <span className="hometwo-battery-name">Suspensions</span>
            </Link>
          </div>
          <div className="hometwo-carousel">
            <Link to="PerodicServices">
              <img className="homecaroimg" width={200} height={200} src={carsteering} alt="" />
            </Link>
            <Link className="battery-link" to="PerodicServices">
              <span className="hometwo-battery-name">Steering</span>
            </Link>
          </div>
          <div className="hometwo-carousel">
            <Link to="ClutchBodys">
              <img className="homecaroimg" width={200} height={200} src={carclutch} alt="" />
            </Link>
            <Link className="battery-link" to="ClutchBodys">
              <span className="hometwo-battery-name">Clutchs</span>
            </Link>
          </div>
          <div className="hometwo-carousel">
            <Link to="ClutchBodys">
              <img className="homecaroimg" width={200} height={200} src={carbrakes} alt="" />
            </Link>
            <Link className="battery-link" to="ClutchBodys">
              <span className="hometwo-battery-name">Brakes</span>
            </Link>
          </div>
          <div className="hometwo-carousel">
            <Link to="TyreWheels">
              <img className="homecaroimg" width={200} height={200} src={cartyres} alt="" />
            </Link>
            <Link className="battery-link" to="TyreWheels">
              <span className="hometwo-battery-name">Wheels</span>
            </Link>
          </div>
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default HomeTwo;
