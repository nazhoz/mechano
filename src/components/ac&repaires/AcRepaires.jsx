import React from 'react'
import './AcRepaires.css'
import { periodicservice } from '../../Product'
import AcProducts from './AcProducts'

const AcRepaires = () => {
  return (

<div className="acmain">
      <div className="acservices-main">
        <h4 className="achead">Ac Services</h4>
        {periodicservice.map((products)=>(
        <AcProducts data={products}/> ))} 
        </div>
          
    </div>
  )
}

export default AcRepaires