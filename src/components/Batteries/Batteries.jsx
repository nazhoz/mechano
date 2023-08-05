import React from "react";
import "./Batteries.css";
import BatteryProducts from "./BatteryProducts";
import {periodicservice} from "../../Product"

const Batteries = () => {
  return (
    <div className="batterymain">
      <div className="batteryservices-main">
        <h4 className="batteryhead">Batteries</h4>
        {periodicservice.map((products)=>(
        <BatteryProducts data={products}/> ))} 
        </div>
          
    </div>
  );
};

export default Batteries;
