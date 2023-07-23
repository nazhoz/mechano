import React from 'react'
import './WindSheild.css'
import { Link } from 'react-router-dom'
import tick from './images/checkmark.png'
import logo from './images/carservice.png'
import frondwind from './images/frond windsheidl.jpg'
import rearwind from './images/rear windsheild.jpg'
import frondlight from './images/frondlights.jpg'
import backlight from './images/rear lights.jpg'
import HomeFooter from '../Home/HomeFooter'

const WindShieldLight = () => {
  return (
    <div>
      <div className="windmain">
        <div className="windservices-main">
          <h4 className="windhead">WindShield & Lights Serivces</h4>
          <div className="windservices-firstpart">
            <div className="windservices-imgpart">
              <img width={180} height={180} src={frondwind} alt="" />
              <div className="windpart-rupees">
                <span className="rs-25995">Rs 61,789</span>
                <span className="rs-18295">₹ 55,999/-</span>
              </div>
            </div>
            <div className="windservice-scndpart">
              <div className="windservice-scndpart-head">
                <h5 className="basicwind">Frond Windsheild Services</h5>
                <span className="timezzz">6 hour Taken</span>
              </div>
              <div className="windservice-scndpart-details">
                <div className="winddetails">
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>1 Month Warranty</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>WindSheild (ISI Approved)</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Sensor Charges Additional</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting WindSheild</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Consumables</span>
                  </div>
                </div>
                <div className="wind-cart">
                  <Link className="link-button" to="Cart">
                    <button className="windbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="windservices-firstpart">
            <div className="windservices-imgpart">
              <img width={180} height={180} src={rearwind} alt="" />
              <div className="windpart-rupees">
                <span className="rs-25995">Rs.54,850</span>
                <span className="rs-18295">₹ 48,999/-</span>
              </div>
            </div>
            <div className="windservice-scndpart">
              <div className="windservice-scndpart-head">
                <h5 className="basicwind">Rear WindSheild Services</h5>
                <span className="timezzz">Take 6 Hours</span>
              </div>
              <div className="windservice-scndpart-details">
                <div className="winddetails">
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>1 Month Warranty</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>WindSheild (ISI Approved)</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Defogger Charges Additional</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting WindSheild</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Consumable</span>
                  </div>
                </div>
                <div className="wind-cart">
                  <Link to="Cart" className="link-button">
                    <button className="windbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="windservices-firstpart">
            <div className="windservices-imgpart">
              <img width={180} height={180} src={frondlight} alt="" />
              <div className="windpart-rupees">
                <span className="rs-25995">Rs.97,850</span>
                <span className="rs-18295">₹ 89,999/-</span>
              </div>
            </div>
            <div className="windservice-scndpart">
              <div className="windservice-scndpart-head">
                <h5 className="basicwind">Front HeadLights Services</h5>
                <span className="timezzz">Takes 4 Hours</span>
              </div>
              <div className="windservice-scndpart-details">
                <div className="winddetails">
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>1 Month Warranty</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Recommonded for crack/damages</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Headlight OES</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Headlights</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>LED s Additional</span>
                  </div>
                </div>
                <div className="wind-cart">
                  <Link to="Cart" className="link-button">
                    <button className="windbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="windservices-firstpart">
            <div className="windservices-imgpart">
              <img width={180} height={180} src={backlight} alt="" />
              <div className="windpart-rupees">
                <span className="rs-25995">Rs.29,950</span>
                <span className="rs-18295">₹ 20,999/-</span>
              </div>
            </div>
            <div className="windservice-scndpart">
              <div className="windservice-scndpart-head">
                <h5 className="basicwind">Rear Tail Lights Services</h5>
                <span className="timezzz">Take 4 Hours</span>
              </div>
              <div className="windservice-scndpart-details">
                <div className="winddetails">
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>1 Month Warranty</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Tail Lights OES</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Tail Light Diffrent Price</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>Opening & fitting of lights</span>
                  </div>
                  <div className="detailssssss">
                    <img src={tick} alt="" />
                    <span>LED Additional</span>
                  </div>
                </div>
                <div className="wind-cart">
                  <Link to="Cart" className="link-button">
                    <button className="windbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wind-search">
          <div className="wind-search-logo">
            <img width={40} height={40} src={logo} alt="" />
            <span className="windcustomerdetails">Customer Details</span>
          </div>
          <div className="wind-search-name">
            <span>Name :</span>
            <input
              className="wind-search-input"
              type="text"
              placeholder=" Name..."
            />
          </div>
          <div className="wind-search-name">
            <span>Email :</span>
            <input
              className="wind-search-input"
              type="email"
              placeholder=" Email..."
            />
          </div>
          <div className="wind-search-name">
            <span>Mobile No :</span>
            <input
              className="wind-search-input"
              type="numbers"
              placeholder=" Mobile Number..."
            />
          </div>
          <div className="wind-search-name">
            <span>Address :</span>
            <input
              className="wind-search-input"
              type="text"
              placeholder=" Address..."
            />
          </div>
          <div className="wind-button-type">
            <button className="wind-submit">Submit</button>
          </div>
        </div>
      </div>
      <div>
      <HomeFooter/>
      </div>
    </div>
  )
}

export default WindShieldLight