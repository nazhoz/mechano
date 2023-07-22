import React from 'react'
import './Painting.css'
import { Link } from 'react-router-dom'
import tick from './images/checkmark.png'
import bumperpaint from './images/20230722080341_[fpdl.in]_car-painter-protective-clothes-mask-painting-automobile-bumper-with-metallic-paint-varnish-chamber-workshop_308072-1027_normal.jpg'
import rearbumper from './images/20230722080640_[fpdl.in]_car-painter-protective-clothes-mask-painting-automobile-bumper-with-metallic-paint-varnish-chamber-workshop_308072-1030_normal.jpg'
import bootpaint from './images/20230722080840_[fpdl.in]_man-with-protective-clothes-mask-painting-automobile-car-bumper-repair-shop_342744-799_normal.jpg'
import fullpaint from './images/20230722081612_[fpdl.in]_professional-painter-painting-vehicle-workshop_308072-945_normal.jpg'
import logo from './images/carservice.png'
import HomeFooter from '../Home/HomeFooter'
const Painting = () => {
  return (
    <div>
      <div className="paintmain">
        <div className="paintservices-main">
          <h4 className="painthead">Painting & Denting</h4>
          <div className="paintservices-firstpart">
            <div className="paintservices-imgpart">
              <img width={180} height={180} src={bumperpaint} alt="" />
              <div className="paintpart-rupees">
                <span className="rs-25993">Rs 4,689</span>
                <span className="rs-18293">₹ 3,999/-</span>
              </div>
            </div>
            <div className="paintservice-scndpart">
              <div className="paintservice-scndpart-head">
                <h5 className="basicpaint">Bumper Painting</h5>
                <span className="timezss">24 hour Taken</span>
              </div>
              <div className="paintservice-scndpart-details">
                <div className="paintdetails">
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="paint-cart">
                  <Link className="link-button" to="Cart">
                    <button className="paintbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="paintservices-firstpart">
            <div className="paintservices-imgpart">
              <img width={180} height={180} src={rearbumper} alt="" />
              <div className="paintpart-rupees">
                <span className="rs-25993">Rs.4,850</span>
                <span className="rs-18293">₹ 3,999/-</span>
              </div>
            </div>
            <div className="paintservice-scndpart">
              <div className="paintservice-scndpart-head">
                <h5 className="basicpaint">Rear Bumper Painting</h5>
                <span className="timezss">24 hrs Taken</span>
              </div>
              <div className="paintservice-scndpart-details">
                <div className="paintzdetails">
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="paint-cart">
                  <Link to="Cart" className="link-button">
                    <button className="paintbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="paintservices-firstpart">
            <div className="paintservices-imgpart">
              <img width={180} height={180} src={bootpaint} alt="" />
              <div className="paintpart-rupees">
                <span className="rs-25993">Rs.3,850</span>
                <span className="rs-18293">₹ 2,999/-</span>
              </div>
            </div>
            <div className="paintservice-scndpart">
              <div className="paintservice-scndpart-head">
                <h5 className="basicpaint">Boot Painting</h5>
                <span className="timezss">24 hrs Taken</span>
              </div>
              <div className="paintservice-scndpart-details">
                <div className="paintdetails">
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="paint-cart">
                  <Link to="Cart" className="link-button">
                    <button className="paintbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="paintservices-firstpart">
            <div className="paintservices-imgpart">
              <img width={180} height={180} src={fullpaint} alt="" />
              <div className="paintpart-rupees">
                <span className="rs-25993">Rs.22,850</span>
                <span className="rs-18293">₹ 19,999/-</span>
              </div>
            </div>
            <div className="paintservice-scndpart">
              <div className="paintservice-scndpart-head">
                <h5 className="basicpaint">Whole Body Painting</h5>
                <span className="timezss">8 days Taken</span>
              </div>
              <div className="paintservice-scndpart-details">
                <div className="paintdetails">
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>2 Year Warranty on Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Grade a Primer Applied</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Remove Minor Dent & Scartch</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>High Quality Dupont Paint</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Panel Rubbing & Polishing</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tick} alt="" />
                    <span>Clear Coat Protective paint</span>
                  </div>
                </div>
                <div className="paint-cart">
                  <Link to="Cart" className="link-button">
                    <button className="paintbutton">+Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paint-search">
          <div className="paint-search-logo">
            <img width={40} height={40} src={logo} alt="" />
            <span className="paintcustomerdetails">Customer Details</span>
          </div>
          <div className="paint-search-name">
            <span>Name :</span>
            <input
              className="paint-search-input"
              type="text"
              placeholder=" Name..."
            />
          </div>
          <div className="paint-search-name">
            <span>Email :</span>
            <input
              className="paint-search-input"
              type="email"
              placeholder=" Email..."
            />
          </div>
          <div className="paint-search-name">
            <span>Mobile No :</span>
            <input
              className="paint-search-input"
              type="numbers"
              placeholder=" Mobile Number..."
            />
          </div>
          <div className="paint-search-name">
            <span>Address :</span>
            <input
              className="paint-search-input"
              type="text"
              placeholder=" Address..."
            />
          </div>
          <div className="paint-button-type">
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

export default Painting