import React from 'react'
import './Clutch.css'
import tick from './images/checkmark.png'
import logo from './images/carservice.png'
import carclutch from './images/carclutch.jpg'
import caclutch from './images/clutch car.jpg'
import { Link } from 'react-router-dom'
import HomeFooter from '../Home/HomeFooter'

const ClutchBodys = () => {
  return (
    <div>
<div className="clutchmain">
        <div className="clutchservices-main">
          <h4 className="clutchhead">Clutch Services</h4>
          <div className="clutchservices-firstpart">
            <div className="clutchservices-imgpart">
              <img width={180} height={180} src={carclutch} alt="" />
              <div className="clutchpart-rupees">
                <span className="rs-25997">Rs 11,899</span>
                <span className="rs-18297">₹ 8,799/-</span>
              </div>
            </div>
            <div className="clutchservice-scndpart">
              <div className="clutchservice-scndpart-head">
                <h5 className="basicclutch">Clutch Overhaul</h5>
                <span className="timet">Take 8 Hours</span>
              </div>
              <div className="clutchservice-scndpart-details">
                <div className="clutchdetails">
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>55 Month warranty</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Free Cost Installtion</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Old Battery Price Included</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Available at Doorstep</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Free Installtion</span>
                  </div>
                </div>
                <div className="clutch-cart">
                  <Link className="link-button" to="Cart">
                    <button className="clutchbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="clutchservices-firstpart">
            <div className="clutchservices-imgpart">
              <img width={180} height={180} src={caclutch} alt="" />
              <div className="clutchpart-rupees">
                <span className="rs-25997">Rs.12,850</span>
                <span className="rs-18297">₹ 8,999/-</span>
              </div>
            </div>
            <div className="clutchservice-scndpart">
              <div className="clutchservice-scndpart-head">
                <h5 className="basicclutch">High Performance Ac Service</h5>
                <span className="timet">8 hrs Taken</span>
              </div>
              <div className="clutchservice-scndpart-details">
                <div className="clutchdetails">
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Ac Vent Cleaning</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Ac Gas (upto 600 gms)</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Cooling Coil Cleaning </span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Ac Leak Test</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Dashboard Cleaning</span>
                  </div>
                  <div className="detaill">
                    <img src={tick} alt="" />
                    <span>Compressor oil cleaning</span>
                  </div>
                </div>
                <div className="clutch-cart">
                  <Link to="Cart" className="link-button">
                    <button className="clutchbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clutch-search">
          <div className="clutch-search-logo">
            <img width={40} height={40} src={logo} alt="" />
            <span className="clutchcustomerdetails">Customer Details</span>
          </div>
          <div className="clutch-search-name">
            <span>Name :</span>
            <input
              className="clutch-search-input"
              type="text"
              placeholder=" Name..."
            />
          </div>
          <div className="clutch-search-name">
            <span>Email :</span>
            <input
              className="clutch-search-input"
              type="email"
              placeholder=" Email..."
            />
          </div>
          <div className="clutch-search-name">
            <span>Mobile No :</span>
            <input
              className="clutch-search-input"
              type="numbers"
              placeholder=" Mobile Number..."
            />
          </div>
          <div className="clutch-search-name">
            <span>Address :</span>
            <input
              className="clutch-search-input"
              type="text"
              placeholder=" Address..."
            />
          </div>
          <div className="clutch-button-type">
            <button className="clutch-submit">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <HomeFooter/>
      </div>
    </div>
  )
}

export default ClutchBodys