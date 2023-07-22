import React from 'react'
import './Details.css'
import { Link } from 'react-router-dom'
import tick from './images/checkmark.png'
import logo from './images/carservice.png'
import ceramiccoating from './images/20230722103359_[fpdl.in]_car-wrapping-with-foil-car-service_1303-32343_normal.jpg'
import ceramiccoat from './images/20230722103524_[fpdl.in]_hard-wax-car-polishing-with-orbital-polisher-remove-scratches-closeup-working-process-detailing-auto-service_255847-8459_normal.jpg'
import paintcoating from './images/20230722103748_[fpdl.in]_car-wrapping-with-foil-car-service_1303-32337_normal.jpg'
import silencer from './images/20230722103950_[fpdl.in]_man-fixing-motorcycle-modern-workshop_158595-8121_normal.jpg'
import HomeFooter from '../Home/HomeFooter'
const DetailService = () => {
  return (
    <div>
      <div className="detailsmain">
        <div className="detailsservices-main">
          <h4 className="detailshead">Detailed Service</h4>
          <div className="detailsservices-firstpart">
            <div className="detailsservices-imgpart">
              <img width={180} height={180} src={ceramiccoating} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">Rs 4,689</span>
                <span className="rs-18294">₹ 3,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Bumper Painting</h5>
                <span className="timezz">24 hour Taken</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="details-cart">
                  <Link className="link-button" to="Cart">
                    <button className="detailsbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsservices-firstpart">
            <div className="detailsservices-imgpart">
              <img width={180} height={180} src={ceramiccoat} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">Rs.4,850</span>
                <span className="rs-18294">₹ 3,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Rear Bumper Painting</h5>
                <span className="timezz">24 hrs Taken</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="details-cart">
                  <Link to="Cart" className="link-button">
                    <button className="detailsbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsservices-firstpart">
            <div className="detailsservices-imgpart">
              <img width={180} height={180} src={paintcoating} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">Rs.3,850</span>
                <span className="rs-18294">₹ 2,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Boot Painting</h5>
                <span className="timezz">24 hrs Taken</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="details-cart">
                  <Link to="Cart" className="link-button">
                    <button className="detailsbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsservices-firstpart">
            <div className="detailsservices-imgpart">
              <img width={180} height={180} src={silencer} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">Rs.22,850</span>
                <span className="rs-18294">₹ 19,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Whole Body Painting</h5>
                <span className="timezz">8 days Taken</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="details-cart">
                  <Link to="Cart" className="link-button">
                    <button className="detailsbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details-search">
          <div className="details-search-logo">
            <img width={40} height={40} src={logo} alt="" />
            <span className="detailscustomerdetails">Customer Details</span>
          </div>
          <div className="details-search-name">
            <span>Name :</span>
            <input
              className="details-search-input"
              type="text"
              placeholder=" Name..."
            />
          </div>
          <div className="details-search-name">
            <span>Email :</span>
            <input
              className="details-search-input"
              type="email"
              placeholder=" Email..."
            />
          </div>
          <div className="details-search-name">
            <span>Mobile No :</span>
            <input
              className="details-search-input"
              type="numbers"
              placeholder=" Mobile Number..."
            />
          </div>
          <div className="details-search-name">
            <span>Address :</span>
            <input
              className="details-search-input"
              type="text"
              placeholder=" Address..."
            />
          </div>
          <div className="details-button-type">
            <button className="tyre-submit">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <HomeFooter/>
      </div>
    </div>
  )
}

export default DetailService