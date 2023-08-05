import React,{useContext} from 'react'
import {ShopContext} from "../../Context/Shop-context";

const BatteryProducts = (props) => {
    const {
        cat,
        id,
        image,
        price,
        amount,
        title,
        time,
        tickmark,
        detailone,
        detailtwo,
        detailthree,
        detailfour,
        detailfive,
        detailsix,
      } = props.data;
      const { addToCart, cartItems}= useContext(ShopContext)
      const cartItemAmount = cartItems[id]
      while(cat=="battery"){
  return (
    <div>
        <div className="batteryservices-firstpart">
            <div className="batteryservices-imgpart">
              <img width={180} height={180} src={image} alt="" />
              <div className="batterypart-rupees">
                <span className="rs-25991">{price}</span>
                <span className="rs-18291">{amount}</span>
              </div>
            </div>
            <div className="batteryservice-scndpart">
              <div className="batteryservice-scndpart-head">
                <h5 className="basicbattery">{title}</h5>
                <span className="timez">{time}</span>
              </div>
              <div className="batteryservice-scndpart-details">
                <div className="batterydetails">
                  <div className="detailsss">
                    <img src={tickmark} alt="" />
                    <span>{detailone}</span>
                  </div>
                  <div className="detailsss">
                    <img src={tickmark} alt="" />
                    <span>{detailtwo}</span>
                  </div>
                  <div className="detailsss">
                    <img src={tickmark} alt="" />
                    <span>{detailthree}</span>
                  </div>
                  <div className="detailsss">
                    <img src={tickmark} alt="" />
                    <span>{detailfour}</span>
                  </div>
                  <div className="detailsss">
                    <img src={tickmark} alt="" />
                    <span>{detailfive}</span>
                  </div>
                  <div className="detailsss">
                    <img src={tickmark} alt="" />
                    <span>{detailsix}</span>
                  </div>
                </div>
                <div className="battery-cart">         
                 <button className="batterybutton" onClick={()=> addToCart(id)}>+Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )}
}

export default BatteryProducts