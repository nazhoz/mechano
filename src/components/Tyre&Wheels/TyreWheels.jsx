import React from "react";
import "./Tyre&Wheels.css";
import{periodicservice} from "../../Product"
import TyreProducts from "./TyreProducts";

const TyreWheels = () => {
  return (
    <div className="tyremain">
    <div className="tyreservices-main">
      <h4 className="tyrehead">Tyre & Wheels Services</h4>
      {periodicservice.map((products)=>(
      <TyreProducts data={products}/> ))} 
      </div>
        
  </div>
  );
};

export default TyreWheels;
