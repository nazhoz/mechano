import React from 'react'
import './Tyre&Wheels.css'
import { Link } from 'react-router-dom'
import tick from './images/checkmark.png'
import mech from './images/carservice.png'
import wheelbalance from './images/20230721122957_[fpdl.in]_auto-mechanic-uses-tire-balancing-machine-turning-tire_281858-3048_normal.jpg'
import wheelalign from './images/20230721123119_[fpdl.in]_auto-mechanic-installing-sensor-during-suspension-adjustment-automobile-wheel-alignment-work_281858-3035_normal.jpg'
import wheelbearing from './images/20230721123424_[fpdl.in]_mechanic-with-tool-wheel-hands-mechanic-blue-work-clothes_1157-46152_normal.jpg'
import mudflap from './images/car-mud-flaps-1574673941-5170389-removebg-preview.png'
import HomeFooter from '../Home/HomeFooter'

const TyreWheels = () => {
  return (
    <div>
      <div className='tyremain'>
<div className='tyreservices-main'>
  <h4 className='tyrehead'>Tyre Alignments & Fittings</h4>
  <div className='tyreservices-firstpart'>
    <div className='tyreservices-imgpart'>
      <img width={180} height={180} src={wheelbalance} alt="" />
      <div className='tyrepart-rupees'>
        <span className='rs-25992'>Rs 22,899</span>
        <span className='rs-18292'>₹ 15,799/-</span>
      </div>
    </div>
    <div className='tyreservice-scndpart'>
      <div className='tyreservice-scndpart-head'>
        <h5 className='basictyre'>Wheel Balancing</h5>
        <span className='timezs'>8 hour Taken</span>
      </div>
      <div className='tyreservice-scndpart-details'>
        <div className='tyredetails'>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Automated Wheel Balance</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Alloy Weights</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Steering Adjustments</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Weight Correction</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Laser Assisted Alignment</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Camber Adjustment</span>
        </div>
        </div>
        <div className='tyre-cart'>
          <Link className='link-button' to='Cart'><button className='tyrebutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='tyreservices-firstpart'>
    <div className='tyreservices-imgpart'>
      <img width={180} height={180} src={wheelalign} alt="" />
      <div className='tyrepart-rupees'>
        <span className='rs-25992'>Rs.16,850</span>
        <span className='rs-18292'>₹ 11,999/-</span>
      </div>
    </div>
    <div className='tyreservice-scndpart'>
      <div className='tyreservice-scndpart-head'>
        <h5 className='basictyre'>Wheel Alignments</h5>
        <span className='timezs'>5 hrs Taken</span>
      </div>
      <div className='tyreservice-scndpart-details'>
        <div className='tyredetails'>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Automated Wheel Balance</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Alloy Weights</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Steering Adjustments</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Weight Correction</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Laser Assisted Alignment</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Camber Adjustment</span>
        </div>
        </div>
        <div className='tyre-cart'>
          <Link to='Cart' className='link-button'><button className='tyrebutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='tyreservices-firstpart'>
    <div className='tyreservices-imgpart'>
      <img width={180} height={180} src={wheelbearing} alt="" />
      <div className='tyrepart-rupees'>
        <span className='rs-25992'>Rs.22,850</span>
        <span className='rs-18292'>₹ 16,999/-</span>
      </div>
    </div>
    <div className='tyreservice-scndpart'>
      <div className='tyreservice-scndpart-head'>
        <h5 className='basictyre'>Wheel Bearing Service</h5>
        <span className='timezs'>3 hrs Taken</span>
      </div>
      <div className='tyreservice-scndpart-details'>
        <div className='tyredetails'>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Automated Wheel Balance</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Alloy Weights</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Steering Adjustments</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Weight Correction</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Laser Assisted Alignment</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Camber Adjustment</span>
        </div>
        </div>
        <div className='tyre-cart'>
          <Link to='Cart' className='link-button'><button className='tyrebutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className='tyreservices-firstpart'>
    <div className='tyreservices-imgpart'>
      <img width={180} height={180} src={mudflap} alt="" />
      <div className='tyrepart-rupees'>
        <span className='rs-25992'>Rs.6,850</span>
        <span className='rs-18292'>₹ 3,999/-</span>
      </div>
    </div>
    <div className='tyreservice-scndpart'>
      <div className='tyreservice-scndpart-head'>
        <h5 className='basictyre'>Wheel Mud Flap</h5>
        <span className='timezs'>8 hrs Taken</span>
      </div>
      <div className='tyreservice-scndpart-details'>
        <div className='tyredetails'>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Ac Vent Cleaning</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Ac Gas (upto 600 gms)</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Cooling Coil Cleaning </span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Ac Leak Test</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Dashboard Cleaning</span>
        </div>
        <div className='detailssss'>
          <img src={tick} alt="" />
          <span>Compressor oil cleaning</span>
        </div>
        </div>
        <div className='tyre-cart'>
          <Link to='Cart' className='link-button'><button className='tyrebutton'>+Add to Cart</button></Link>
        </div>
      </div>
    </div>
  </div>



</div>
<div className='tyre-search'>
  <div className='tyre-search-logo'>
    <img width={40} height={40} src={mech} alt="" />
    <span className='tyrecustomerdetails'>Customer Details</span>
  </div>
  <div className='tyre-search-name'>
    <span>Name :</span>
    <input className='tyre-search-input' type="text" placeholder=' Name...' />
  </div>
  <div className='tyre-search-name'>
    <span>Email :</span>
    <input className='tyre-search-input' type="email" placeholder=' Email...' />
  </div>
  <div className='tyre-search-name'>
    <span>Mobile No :</span>
    <input className='tyre-search-input' type="numbers" placeholder=' Mobile Number...'/>
  </div>
  <div className='tyre-search-name'>
    <span>Address :</span>
    <input  className='tyre-search-input' type="text" placeholder=' Address...'/>
  </div>
  <div className='tyre-button-type'>
    <button className='tyre-submit'>Submit</button>
  </div> 
</div>
</div>
<div>
  <HomeFooter/>
</div>
    </div>
  )
}

export default TyreWheels