import React from "react";
import "./Batteries.css";
import { Link } from "react-router-dom";
import tick from "./images/checkmark.png";
import exide from "./images/Exide-MTRED45L-removebg-preview.png";
import amaron from "./images/amron-8-400x267-removebg-preview.png";
import mainlogss from "./images/carservice.png";
import HomeFooter from "../Home/HomeFooter";

const Batteries = () => {
  return (
    <div className="battery-all">
      <div className="batterymain">
        <div className="batteryservices-main">
          <h4 className="batteryhead">Batteries</h4>
          <div className="batteryservices-firstpart">
            <div className="batteryservices-imgpart">
              <img width={180} height={180} src={exide} alt="" />
              <div className="batterypart-rupees">
                <span className="rs-25991">Rs 10,899</span>
                <span className="rs-18291">₹ 9,799/-</span>
              </div>
            </div>
            <div className="batteryservice-scndpart">
              <div className="batteryservice-scndpart-head">
                <h5 className="basicbattery">Exide Battery</h5>
                <span className="timez">80 Amp Hour</span>
              </div>
              <div className="batteryservice-scndpart-details">
                <div className="batterydetails">
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>55 Month warranty</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Free Cost Installtion</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Old Battery Price Included</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Available at Doorstep</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Free Installtion</span>
                  </div>
                </div>
                <div className="battery-cart">
                  <Link className="link-button" to="Cart">
                    <button className="batterybutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="batteryservices-firstpart">
            <div className="batteryservices-imgpart">
              <img width={180} height={180} src={amaron} alt="" />
              <div className="batterypart-rupees">
                <span className="rs-25991">Rs.12,850</span>
                <span className="rs-18291">₹ 8,999/-</span>
              </div>
            </div>
            <div className="batteryservice-scndpart">
              <div className="batteryservice-scndpart-head">
                <h5 className="basicbattery">High Performance Ac Service</h5>
                <span className="timez">8 hrs Taken</span>
              </div>
              <div className="batteryservice-scndpart-details">
                <div className="batterydetails">
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Ac Vent Cleaning</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Ac Gas (upto 600 gms)</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Cooling Coil Cleaning </span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Ac Leak Test</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Dashboard Cleaning</span>
                  </div>
                  <div className="detailsss">
                    <img src={tick} alt="" />
                    <span>Compressor oil cleaning</span>
                  </div>
                </div>
                <div className="battery-cart">
                  <Link to="Cart" className="link-button">
                    <button className="batterybutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="battery-search">
          <div className="battery-search-logo">
            <img width={40} height={40} src={mainlogss} alt="" />
            <span className="batterycustomerdetails">Customer Details</span>
          </div>
          <div className="battery-search-name">
            <span>Name :</span>
            <input
              className="battery-search-input"
              type="text"
              placeholder=" Name..."
            />
          </div>
          <div className="battery-search-name">
            <span>Email :</span>
            <input
              className="battery-search-input"
              type="email"
              placeholder=" Email..."
            />
          </div>
          <div className="battery-search-name">
            <span>Mobile No :</span>
            <input
              className="battery-search-input"
              type="numbers"
              placeholder=" Mobile Number..."
            />
          </div>
          <div className="battery-search-name">
            <span>Address :</span>
            <input
              className="battery-search-input"
              type="text"
              placeholder=" Address..."
            />
          </div>
          <div className="battery-button-type">
            <button className="battery-submit">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default Batteries;
