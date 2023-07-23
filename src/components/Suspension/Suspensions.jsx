import React from 'react'
import { Link } from 'react-router-dom'
import tick from './images/checkmark.png'
import logo from './images/carservice.png'
import frontshock from './images/fron shock.jpg'
import rearshock from './images/rear shock.jpg'
import fullshock from './images/full suspension.jpg'
import axle from './images/axle.jpg'
import sile from './images/silencer repair.jpg'
import turbo from './images/Turbochargesrepair.jpg'
import './Suspension.css'

const Suspensions = () => {
  return (
    <div>
      <div className="shockmain">
        <div className="shockservices-main">
          <h4 className="shockhead">Suspension & Fittments</h4>
          <div className="shockservices-firstpart">
            <div className="shockservices-imgpart">
              <img width={180} height={180} src={frontshock} alt="" />
              <div className="shockpart-rupees">
                <span className="rs-25996">Rs 28,789</span>
                <span className="rs-18296">₹ 25,999/-</span>
              </div>
            </div>
            <div className="shockservice-scndpart">
              <div className="shockservice-scndpart-head">
                <h5 className="basicshock">Frond Shock Absorber Service</h5>
                <span className="timezzzz">6 hour Taken</span>
              </div>
              <div className="shockservice-scndpart-details">
                <div className="windshock">
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>1 Month Warranty</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Shocker Strut Replacement</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Damper OES Replacement</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Additionally Shock Mount</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Airmatic Shock cost Additional</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Opening & Fittments</span>
                  </div>
                </div>
                <div className="shock-cart">
                  <Link className="link-button" to="Cart">
                    <button className="shockbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="shockservices-firstpart">
            <div className="shockservices-imgpart">
              <img width={180} height={180} src={rearshock} alt="" />
              <div className="shockpart-rupees">
                <span className="rs-25996">Rs.21,850</span>
                <span className="rs-18296">₹ 18,999/-</span>
              </div>
            </div>
            <div className="shockservice-scndpart">
              <div className="shockservice-scndpart-head">
                <h5 className="basicshock">Rear Shock Absorber Service</h5>
                <span className="timezzzz">Take 4 Hours</span>
              </div>
              <div className="shockservice-scndpart-details">
                <div className="windshock">
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>1 Month Warranty</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Shocker Strut Replacement</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Damper OES Replacement</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Additionally Shock Mount</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Airmatic Shock cost Additional</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Opening & Fittments</span>
                  </div>
                </div>
                <div className="shock-cart">
                  <Link to="Cart" className="link-button">
                    <button className="shockbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="shockservices-firstpart">
            <div className="shockservices-imgpart">
              <img width={180} height={180} src={fullshock} alt="" />
              <div className="shockpart-rupees">
                <span className="rs-25996">Rs.11,850</span>
                <span className="rs-18296">₹ 8,499/-</span>
              </div>
            </div>
            <div className="shockservice-scndpart">
              <div className="shockservice-scndpart-head">
                <h5 className="basicshock">Front HeadLights Services</h5>
                <span className="timezzzz">Takes 4 Hours</span>
              </div>
              <div className="shockservice-scndpart-details">
                <div className="shockdetails">
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>25 Points CheckLists</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Front Shocker Check</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Shocker Mount Check</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Jumping Rod Bush Check</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Rear Shock Check</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Link Rod Insepction</span>
                  </div>
                </div>
                <div className="shock-cart">
                  <Link to="Cart" className="link-button">
                    <button className="shockbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="shockservices-firstpart">
            <div className="shockservices-imgpart">
              <img width={180} height={180} src={axle} alt="" />
              <div className="shockpart-rupees">
                <span className="rs-25996">Rs.19,950</span>
                <span className="rs-18296">₹ 15,999/-</span>
              </div>
            </div>
            <div className="shockservice-scndpart">
              <div className="shockservice-scndpart-head">
                <h5 className="basicshock">Axle Repairs</h5>
                <span className="timezzzz">Take 6 Hours</span>
              </div>
              <div className="shockservice-scndpart-details">
                <div className="shockdetails">
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Check Excessive Noise</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Axle Repair</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Axle Bearing & Boots</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Opening & fitting of Axle</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Wheel Bearing Costs</span>
                  </div>
                </div>
                <div className="shock-cart">
                  <Link to="Cart" className="link-button">
                    <button className="shockbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="shockservices-firstpart">
            <div className="shockservices-imgpart">
              <img width={180} height={180} src={sile} alt="" />
              <div className="shockpart-rupees">
                <span className="rs-25996">Rs.9,950</span>
                <span className="rs-18296">₹ 7,999/-</span>
              </div>
            </div>
            <div className="shockservice-scndpart">
              <div className="shockservice-scndpart-head">
                <h5 className="basicshock">Silencer Services</h5>
                <span className="timezzzz">Take 6 Hours</span>
              </div>
              <div className="shockservice-scndpart-details">
                <div className="shockdetails">
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Loud Noise for Services</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Underbody Silencer Insecption</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Sensor cost Additional</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Repair & welding</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Hanger Clamp costs</span>
                  </div>
                </div>
                <div className="shock-cart">
                  <Link to="Cart" className="link-button">
                    <button className="shockbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="shockservices-firstpart">
            <div className="shockservices-imgpart">
              <img width={180} height={180} src={turbo} alt="" />
              <div className="shockpart-rupees">
                <span className="rs-25996">Rs.39,950</span>
                <span className="rs-18296">₹ 34,999/-</span>
              </div>
            </div>
            <div className="shockservice-scndpart">
              <div className="shockservice-scndpart-head">
                <h5 className="basicshock">TurboCharger Repairs</h5>
                <span className="timezzzz">Take 8 Hours</span>
              </div>
              <div className="shockservice-scndpart-details">
                <div className="shockdetails">
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>White Smoke from Exhaust</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>ECM Repairs</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of ECM</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Electric Circuits Repairs</span>
                  </div>
                  <div className="detailsssssss">
                    <img src={tick} alt="" />
                    <span>Circuit Board Additional</span>
                  </div>
                </div>
                <div className="shock-cart">
                  <Link to="Cart" className="link-button">
                    <button className="shockbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="shock-search">
          <div className="shock-search-logo">
            <img width={40} height={40} src={logo} alt="" />
            <span className="shockcustomerdetails">Customer Details</span>
          </div>
          <div className="shock-search-name">
            <span>Name :</span>
            <input
              className="shock-search-input"
              type="text"
              placeholder=" Name..."
            />
          </div>
          <div className="shock-search-name">
            <span>Email :</span>
            <input
              className="shock-search-input"
              type="email"
              placeholder=" Email..."
            />
          </div>
          <div className="shock-search-name">
            <span>Mobile No :</span>
            <input
              className="shock-search-input"
              type="numbers"
              placeholder=" Mobile Number..."
            />
          </div>
          <div className="shock-search-name">
            <span>Address :</span>
            <input
              className="shock-search-input"
              type="text"
              placeholder=" Address..."
            />
          </div>
          <div className="shock-button-type">
            <button className="shock-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suspensions