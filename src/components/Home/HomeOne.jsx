import React from 'react'
import { Link } from 'react-router-dom'
import picone from './images/20230719111525_[fpdl.in]_mechanic-showing-customer-problem-with-car_1170-1258_normal.jpg'
import pictwo from './images/20230719112346_[fpdl.in]_car-repair-maintenance-theme-electric-mechanic-uniform-working-auto-service-making-car-diagnostics-using-obd-device-with-laptop_627829-3962_normal.jpg'
import picthree from './images/20230719112328_[fpdl.in]_auto-mechanic-checking-car_1303-14047_normal.jpg'
import picfour from './images/20230719112942_[fpdl.in]_car-repairmen-using-laptop-while-doing-car-engine-diagnostic-auto-repair-shop_637285-4273_normal.jpg'
import right from './images/right-arrow.png'

const HomeOne = () => {
  return (
    <div className='homeone-main'>
        <div className='homeone-head'>
        <h2 className='homeone-heading'>Services Available</h2>
        <img className='homeone-head-img' src={right} alt="" />
        </div>
        <div className='homeone-content'>
            <div className='homeone-items'>
                <Link to='perodicServices'><img className='homeone-imgs' width={240} height={270} src={picone} alt="" /></Link>
                <Link className='homeone-link-text' to='PerodicServices'><span className='homeone-text'>Periodic Services</span></Link>
            </div>
            <div className='homeone-items'>
                <Link to='AcRepaires'><img className='homeone-imgs' width={240} height={270} src={pictwo} alt="" /></Link>
                <Link className='homeone-link-text' to='AcRepaires'><span className='homeone-text'>AC Service & Repair</span></Link>
            </div>
            <div className='homeone-items'>
                <Link to='Batteries'><img className='homeone-imgs' width={240} height={270} src={picthree} alt="" /></Link>
                <Link className='homeone-link-text' to='Batteries'><span className='homeone-text'>Battery Services</span></Link>
            </div>
            <div className='homeone-items'>
                <Link to='TyreWheels'><img className='homeone-imgs' width={240} height={270} src={picfour} alt="" /></Link>
                <Link className='homeone-link-text' to='TyreWheels'><span className='homeone-text'>Wheel Alingments</span></Link>
            </div>
        </div>
    </div>
  )
}

export default HomeOne