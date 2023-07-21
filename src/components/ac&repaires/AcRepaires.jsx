import React from 'react'
import './AcRepaires.css'
import tick from './images/checkmark.png'
import mainlogos from './images/carservice.png'
import acrepair from './images/20230720130511_[fpdl.in]_car-air-conditioner-check-service-leak-detection-fill-refrigerant_539854-514_normal.jpg'
import highacrepair from './images/20230720132006_[fpdl.in]_men-repair-truck-man-teaches-repair-car-two-men-uniform_1157-46530_normal.jpg'
import accoil from './images/20230720132552_[fpdl.in]_mechanic-repairing-engine-part-with-ratchet_1170-1698_normal.jpg'
import condensor from './images/20230720133936_[fpdl.in]_close-up-ar-air-conditioner-filter-cabin-car_140555-536_normal.jpg'
import compressor from './images/20230720134432_[fpdl.in]_mechanic-servicing-car-engine_1170-1678_normal.jpg'
import vbelt from './images/20230720135408_[fpdl.in]_auto-mechanic-cleaning-car-s-air-filter-with-air-blow-gun-workshop_637285-4217_normal.jpg'
import radiator from './images/20230720135520_[fpdl.in]_auto-mechanic-opening-radiator-cap-checking-overheated-car-cooling-system-workshop_637285-4221_normal.jpg'
import { Link } from 'react-router-dom'
import HomeCopy from '../Home/HomeCopy'
import HomeFooter from '../Home/HomeFooter'

const AcRepaires = () => {
  return (
    <div>
<div className='acmain'>
<div className='acservices-main'>
  <h4 className='achead'>Service Packages</h4>
  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={acrepair} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.3,999</span>
        <span className='rs-18290'>₹ 2,999/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>Regular Ac Services</h5>
        <span className='times'>4 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>One Month warranty</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Vent Cleaning</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Gas (upto 400 gms)</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Air filter cleaning</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Inspection</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Condnser Cleaning</span>
        </div>
        </div>
        <div className='ac-cart'>
          <Link className='link-button' to='Cart'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={highacrepair} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.12,850</span>
        <span className='rs-18290'>₹ 8,999/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>High Performance Ac Service</h5>
        <span className='times'>8 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Vent Cleaning</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Gas (upto 600 gms)</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Cooling Coil Cleaning </span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Leak Test</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Dashboard Cleaning</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Compressor oil cleaning</span>
        </div>
        </div>
        <div className='ac-cart'>
          <Link to='Cart' className='link-button'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={accoil} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.41,284</span>
        <span className='rs-18290'>₹ 28,999/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>Cooling Coil Services</h5>
        <span className='times'>8 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>3 Month Warranty</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Cooling Coil Services</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Pipe, Valve Sensors Cost</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Free Pickup & Drop</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Spare parts Cost Only</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Gas, Compressor oil Cost</span>
        </div>
        </div>
        <div className='ac-cart'>
        <Link to='Cart' className='link-button'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={condensor} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.25,700</span>
        <span className='rs-18290'>₹ 17,799/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>Compressor Services</h5>
        <span className='times'>8 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>3 Month Warranty</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Condensor Replacements</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Spare Parts Cost Only</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Free Pickup & Drop</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac and Gas cost</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Coolant and Radiator</span>
        </div>
        </div>
        <div className='ac-cart'>
        <Link to='Cart' className='link-button'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={compressor} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.71,140</span>
        <span className='rs-18290'>₹ 49,799/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>Compressor Services</h5>
        <span className='times'>8 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Compressor Replacement</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Spare parts Cost only</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Free Pickup & Drops</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Compressor Oil Cost</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Ac Pipe, Valve cost</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>3 Month Warranty</span>
        </div>
        </div>
        <div className='ac-cart'>
        <Link to='Cart' className='link-button'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={radiator} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.4,999</span>
        <span className='rs-18290'>₹ 3,299/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>Radiator Services</h5>
        <span className='times'>2 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Free Pickup & Drop</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Coolant & Draining</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Anti-Freeze Cooling </span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Coolant Leakage </span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Radiator Flushing</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Radiator Cleaning</span>
        </div>
        </div>
        <div className='ac-cart'>
        <Link to='Cart' className='link-button'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={vbelt} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>Rs.9,439</span>
        <span className='rs-18290'>₹ 8,499/-</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>V-belt Services</h5>
        <span className='times'>6 hrs Taken</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>V-belt Replacement</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Pulley, Bearing cost</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>1 Month Warranty</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Free pickup & Drop</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Scanning Cost</span>
        </div>
        <div className='detailss'>
          <img src={tick} alt="" />
          <span>Opening of v belt</span>
        </div>
        </div>
        <div className='ac-cart'>
        <Link to='Cart' className='link-button'><button className='acbutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

</div>
<div className='ac-search'>
  <div className='ac-search-logo'>
    <img width={40} height={40} src={mainlogos} alt="" />
    <span className='accustomerdetails'>Customer Details</span>
  </div>
  <div className='ac-search-name'>
    <span>Name :</span>
    <input className='ac-search-input' type="text" placeholder=' Name...' />
  </div>
  <div className='ac-search-name'>
    <span>Email :</span>
    <input className='ac-search-input' type="email" placeholder=' Email...' />
  </div>
  <div className='ac-search-name'>
    <span>Mobile No :</span>
    <input className='ac-search-input' type="numbers" placeholder=' Mobile Number...'/>
  </div>
  <div className='ac-search-name'>
    <span>Address :</span>
    <input  className='ac-search-input' type="text" placeholder=' Address...'/>
  </div>
  <div className='ac-button-type'>
    <button className='ac-submit'>Submit</button>
  </div> 
</div>
</div>
<div>
  <HomeFooter/>
  <HomeCopy/>
</div>
    </div>
  )
}

export default AcRepaires