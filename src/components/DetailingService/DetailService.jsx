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
              <img width={180} height={180} src={ceramiccoat} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">Rs 8,689</span>
                <span className="rs-18294">₹ 5,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Car Rubbing & Polishing</h5>
                <span className="timezz">6 hour Taken</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Pressure Car Washing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Alloy Polishing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Rubbing with 3M Compound</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Tyre Dressing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Machine Rubbing</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>3M Wax Polishing</span>
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
              <img width={180} height={180} src={ceramiccoating} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">Rs.34,850</span>
                <span className="rs-18294">₹ 31,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Meguiar's Ceramic Coating</h5>
                <span className="timezz">Take 3 Days</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Complete Paint Corrections</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Remove Minor Scratchs</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Exterior Car Wash</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>2 Layer of Coating</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Deep All Round Spa</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Ultra Shine Protection</span>
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
                <span className="rs-25994">Rs.97,850</span>
                <span className="rs-18294">₹ 85,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Paint Protection Films</h5>
                <span className="timezz">Takes 6 Days</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>3 Year Warranty</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Every 3 Years</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Every PPF</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Remove Minor Scartchs</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>External Car Wash</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Ultra Shine Polishing</span>
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
                <span className="rs-25994">Rs.9,950</span>
                <span className="rs-18294">₹ 7,999/-</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">Silencer Coating</h5>
                <span className="timezz">Take 6 Hours</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>3 Month Warranty</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Recommended Every 1 Year</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Silencer Anti-rusting Coating</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>2 Layer of Protection</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Silencer Corrosion Protection</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tick} alt="" />
                    <span>Underbody Teflon Coating</span>
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