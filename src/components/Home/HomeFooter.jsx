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
        <div className="home-footer-one-imgs">
          <Link to="Home">
            <img width={50} height={50} src={mainlogo} alt="" />
          </Link>
          <div>
          <a className="playstore-button" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="texts">
          <span className="text-1">GET IT ON</span>
          <span className="text-2">Google Play</span>
          </span>
          </a>
          </div>

        </div>






        <div className="socialicons">
        <ul className="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span><i className="fab fa-facebook-f"></i></span>
    </li>
    <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <span><i className="fab fa-twitter"></i></span>
    </li>
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span><i className="fab fa-instagram"></i></span>
    </li>
    <li className="icon whatsapp">
        <span className="tooltip">whatsapp</span>
        <span><img className="whatspp" width={18} height={18} src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="" srcset="" /></span>
    </li>
</ul>


        </div>



        
    </div>
  );
};

export default HomeFooter;
