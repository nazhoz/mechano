import React, { useContext } from "react";
import {ShopContext} from "../../Context/Shop-context";

const PeroidicProducts = (props) => {
  const {
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

  return (
    <div>
      <div className="periodicservices-firstpart">
        <div className="periodicservices-imgpart">
          <img width={180} height={180} src={image} alt="" />
          <div className="imgpart-rupees">
            <span className="rs-25999">{price}</span>
            <span className="rs-18299">{amount}</span>
          </div>
        </div>
        <div className="periodicservice-scndpart">
          <div className="periodicservice-scndpart-head">
            <h5 className="basicser">{title}</h5>
            <span className="time">{time}</span>
          </div>
          <div className="periodicservice-scndpart-details">
            <div className="periodicdetails">
              <div className="details">
                <img src={tickmark} alt="" />
                <span>{detailone}</span>
              </div>
              <div className="details">
                <img src={tickmark} alt="" />
                <span>{detailtwo} </span>
              </div>
              <div className="details">
                <img src={tickmark} alt="" />
                <span>{detailthree}</span>
              </div>
              <div className="details">
                <img src={tickmark} alt="" />
                <span>{detailfour}</span>
              </div>
              <div className="details">
                <img src={tickmark} alt="" />
                <span>{detailfive}</span>
              </div>
              <div className="details">
                <img src={tickmark} alt="" />
                <span>{detailsix}</span>
              </div>
            </div>
            <div className="periodic-cart">
                <button className="acbutton" onClick={()=> addToCart(id)}>+Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeroidicProducts;
