import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carservice from './images/20230719085250_[fpdl.in]_automobile-repair-maintenance-service_1150-43139_large.jpg'
import homelogo from './images/carservice.png'
import login from './images/user.png'
import searchlogo from './images/search.png'
import cart from './images/shopping-cart.png'

const Layout = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div>
      <div className='first-nav'>
      <div className='nav-title'>
      <Link to='/'><img width={70} height={70} src={homelogo} alt="" /></Link>
      <h3 className='nav-title-mec'>Mechano</h3>
      </div>
      <div className='first-nav-search-box'>
      <img src={searchlogo} alt="" />
      <input className='nav-search-input' type="text" placeholder='Search...' />
      </div>
      <div className='nav-login'>
      <h4 className='nav-login-btn'>Login</h4>
      <Link><img src={login} alt="" /></Link>  
      </div>
      <div className='nav-cart'>
        <h4 className='cart-text'>Cart</h4>
      <Link><img src={cart} alt="" /></Link>
      </div>
      </div>

      <div className='home-images'>
      <img className='home-images-size' src={carservice} alt="" />
      </div>
      <nav>
        <ul>
      <Carousel className='nav-carousel' infinite={true}  responsive={responsive}>
      <div className='nav-periods'><Link to='PerodicServices' className='nav-link-text'>Periodic Services</Link></div>
      <div className='nav-periods'><Link to='AcRepaires' className='nav-link-text'>AC Service & Repair</Link></div>
      <div className='nav-periods'><Link to='Batteries' className='nav-link-text'>Batteries</Link></div>
      <div className='nav-periods'><Link to='TyreWheels' className='nav-link-text'>Tyre & Wheels Care</Link></div>
      <div className='nav-periods'><Link to='Painting' className='nav-link-text'>Denting & Painting</Link></div>
      <div className='nav-periods'><Link to='DetailService' className='nav-link-text'>Detailing & Services</Link></div>
      <div className='nav-periods'><Link to='WindShieldLight' className='nav-link-text'>Wind Shields & Lights</Link></div>
      <div className='nav-periods'><Link to='Suspensions' className='nav-link-text'>Suspensions & Fitments</Link></div>
      <div className='nav-periods'><Link to='ClutchBodys' className='nav-link-text'>Clutch & Body Parts</Link></div>
      </Carousel>
        </ul>
        <Outlet/>
      </nav>
    </div>
  )
}

export default Layout