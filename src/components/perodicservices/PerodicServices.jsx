import React from "react";
import "./Perodic.css";
import basicservice from "./images/20230720082753_[fpdl.in]_satisfied-couple-signing-documents-while-talking-their-mechanic-auto-repair-shop_637285-7722_normal.jpg";
import standardservice from "./images/20230720084411_[fpdl.in]_mechanic-showing-quotation-customer_1170-1553_normal.jpg";
import comperhensiveservice from "./images/20230720084445_[fpdl.in]_auto-repairman-using-laptop-while-running-car-diagnostic-working-with-colleague-workshop_637285-7670_normal.jpg";
import tick from "./images/checkmark.png";
import brakepads from "./images/20230720105510_[fpdl.in]_set-brake-pads-mirror-background_88135-32480_normal.jpg";
import backbrake from "./images/brake pads.png";
import fronddisc from "./images/disc pads.png";
import discturn from "./images/20230720115340_[fpdl.in]_mechanic-changing-brake-discs-car-service_1303-26909_normal.jpg";
import mainlogo from "./images/carservice.png";
import { Link } from "react-router-dom";

const PerodicServices = () => {
  return (
    <div className="peroidmain">
      <div className="periodicservices-main">
        <h4 className="periodhead">Periodic Services</h4>
        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={basicservice} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.25,999</span>
              <span className="rs-18299">₹ 18,299/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Basic Services</h5>
              <span className="time">4 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Wiper Fluid Replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Battery Water Top Up </span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Engine Oil Replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Air filter cleaning</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Wiper Fluid Replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Oil Filter Replacements</span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={standardservice} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.27,999</span>
              <span className="rs-18299">₹ 20,299/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Standard Serivces</h5>
              <span className="time">8 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Frond Brake Pads Service</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Fuel filter Change</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Ac Filter Cleaning</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Air filter cleaning</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Coolent Top Up</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Brake Fluid Top up</span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={comperhensiveservice} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.34,999</span>
              <span className="rs-18299">₹ 25,599/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Comperhensive Services</h5>
              <span className="time">8 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Fuel Filter Checking</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Car Scanning</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Wheel Alignment</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Engine Oil Replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Engine Flushing</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Tyre Rotation</span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={brakepads} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.16,920</span>
              <span className="rs-18299">₹ 13,530/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Brake Maintenance</h5>
              <span className="time">3 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>One Month Warranty</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Opening & fitting pads</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Applicable two sets</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Front Brake Cleaning</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Front brakes replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Incpection of Brake Pads </span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={backbrake} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.15,675</span>
              <span className="rs-18299">₹ 12,540/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Rear Brake Services</h5>
              <span className="time">3 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>One Month Warranty</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Opening & fitting pads</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Applicable two sets</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Front brakes replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Incpection of Brake Pads </span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Front Brake Cleaning</span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={fronddisc} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.16,250</span>
              <span className="rs-18299">₹ 13,000/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Front Disc Brakes Services</h5>
              <span className="time">5 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Front Disc Brake Replacement</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Increases Brake Life & Safety</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Open & fitting of Disc Brakes</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Reduces Vibration & Noises</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Free Pickup & Drop</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Corrosion Resistance</span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="periodicservices-firstpart">
          <div className="periodicservices-imgpart">
            <img width={180} height={180} src={discturn} alt="" />
            <div className="imgpart-rupees">
              <span className="rs-25999">Rs.3,749</span>
              <span className="rs-18299">₹ 2,999/-</span>
            </div>
          </div>
          <div className="periodicservice-scndpart">
            <div className="periodicservice-scndpart-head">
              <h5 className="basicser">Disc turning</h5>
              <span className="time">4 hrs Taken</span>
            </div>
            <div className="periodicservice-scndpart-details">
              <div className="periodicdetails">
                <div className="details">
                  <img src={tick} alt="" />
                  <span>1 Month Warranty</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Opening of Brakes Discs</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Fitting of Brakes Discs</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Applicable for 2 sets Discs</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Incpection of Brake Discs</span>
                </div>
                <div className="details">
                  <img src={tick} alt="" />
                  <span>Resurfacing of Brake Discs</span>
                </div>
              </div>
              <div className="periodic-cart">
                <Link to="Cart" className="link-button">
                  <button className="acbutton">+Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="period-search">
        <div className="period-search-logo">
          <img width={40} height={40} src={mainlogo} alt="" />
          <span className="customerdetails">Customer Details</span>
        </div>
        <div className="period-search-name">
          <span>Name :</span>
          <input
            className="period-search-input"
            type="text"
            placeholder=" Name..."
          />
        </div>
        <div className="period-search-name">
          <span>Email :</span>
          <input
            className="period-search-input"
            type="email"
            placeholder=" Email..."
          />
        </div>
        <div className="period-search-name">
          <span>Mobile No :</span>
          <input
            className="period-search-input"
            type="numbers"
            placeholder=" Mobile Number..."
          />
        </div>
        <div className="period-search-name">
          <span>Address :</span>
          <input
            className="period-search-input"
            type="text"
            placeholder=" Address..."
          />
        </div>
        <div className="period-button-type">
          <button className="period-submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PerodicServices;
