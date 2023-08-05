import React from 'react'
import './Details.css'
import{periodicservice} from "../../Product"
import DetailProducts from './DetailProducts'


const DetailService = () => {
  return (
    <div className="peroidmain">
      <div className="periodicservices-main">
        <h4 className="periodhead">Detailed Services</h4>
        {periodicservice.map((products)=>(
        <DetailProducts data={products}/> ))} 
        </div>
          
    </div>
  )
}

export default DetailService