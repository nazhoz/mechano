import React from "react";
import { Link } from "react-router-dom";
import mainlogo from "./images/carservice.png";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import insta from "./images/instagram.png";
import whaspp from "./images/whatsapp.png";
import youtube from "./images/youtube.png";
import playstore from "./images/playstore.png";
import appstore from "./images/app-store.png";

const HomeFooter = () => {
  return (
    <div className="home-main-footer">
      <div className="home-footer-one">
        <div className="home-footer-one-imgs">
          <Link to="Home">
            <img width={50} height={50} src={mainlogo} alt="" />
          </Link>
          <span>Mechano</span>
        </div>
        <div className="home-footer-social">
          <img
            className="footer-hover"
            width={30}
            height={30}
            src={fb}
            alt=""
          />
          <img
            className="footer-hover"
            width={30}
            height={30}
            src={twitter}
            alt=""
          />
          <img
            className="footer-hover"
            width={30}
            height={30}
            src={insta}
            alt=""
          />
          <img
            className="footer-hover"
            width={30}
            height={30}
            src={whaspp}
            alt=""
          />
          <img
            className="footer-hover"
            width={30}
            height={30}
            src={youtube}
            alt=""
          />
        </div>
      </div>
      <div className="home-footer-two">
        <div className="footer-playstore">
          <img width={40} height={40} src={playstore} alt="" />
          <span>Download</span>
        </div>
        <div className="footer-appstore">
          <img width={40} height={40} src={appstore} alt="" />
          <span>Download</span>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
