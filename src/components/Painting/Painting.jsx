import React from 'react'
import './Painting.css'
import{periodicservice} from "../../Product"
import PaintProduct from './PaintProduct'

const Painting = () => {
  return (
    <div className="peroidmain">
      <div className="periodicservices-main">
        <h4 className="periodhead">Painting and Denting</h4>
        {periodicservice.map((products)=>(
        <PaintProduct data={products}/> ))} 
        </div>
          
    </div>
  )
}

export default Painting