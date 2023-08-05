import React, { useContext } from "react";
import {ShopContext} from "../../Context/Shop-context";
import './Details.css'


const DetailProducts = (props) => {
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

      while(cat=="detail"){
  return (
    <div>
        <div className="detailsservices-firstpart">
            <div className="detailsservices-imgpart">
              <img width={180} height={180} src={image} alt="" />
              <div className="detailspart-rupees">
                <span className="rs-25994">{price}</span>
                <span className="rs-18294">{amount}</span>
              </div>
            </div>
            <div className="detailsservice-scndpart">
              <div className="detailsservice-scndpart-head">
                <h5 className="basicdetails">{title}</h5>
                <span className="timezz">{time}</span>
              </div>
              <div className="detailsservice-scndpart-details">
                <div className="detailsdetails">
                  <div className="detailsssss">
                    <img src={tickmark} alt="" />
                    <span>{detailone}</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tickmark} alt="" />
                    <span>{detailtwo}</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tickmark} alt="" />
                    <span>{detailthree}</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tickmark} alt="" />
                    <span>{detailfour}</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tickmark} alt="" />
                    <span>{detailfive}</span>
                  </div>
                  <div className="detailsssss">
                    <img src={tickmark} alt="" />
                    <span>{detailsix}</span>
                  </div>
                </div>
                <div className="details-cart">
                <button className="detailsbutton" onClick={()=> addToCart(id)}>+Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>                </div>
              </div>
            </div>
          </div>
    </div>
  )}
}

export default DetailProducts