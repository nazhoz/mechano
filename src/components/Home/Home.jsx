import React from 'react'
import './Home.css'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import HomeFooter from './HomeFooter'
import HomeCopy from './HomeCopy'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
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
      <HomeOne/>
      <HomeTwo/>
      <HomeFooter/>
      <HomeCopy/>
    </div>
  )
}

export default Home