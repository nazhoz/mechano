import React from 'react'
import './Home.css'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import HomeFooter from './HomeFooter'
import HomeCopy from './HomeCopy'

const Home = () => {
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