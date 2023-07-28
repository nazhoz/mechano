import React from "react";
import "./Perodic.css";
import{periodicservice} from "../../Product"
import PeroidicProducts from "./PeroidicProducts";

const PerodicServices = () => {
  return (
    <div className="peroidmain">
      <div className="periodicservices-main">
        <h4 className="periodhead">Periodic Services</h4>
        {periodicservice.map((products)=>(
        <PeroidicProducts data={products}/> ))} 
        </div>
          
    </div>
  );
};

export default PerodicServices;
