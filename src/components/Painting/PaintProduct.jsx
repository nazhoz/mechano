import React , {useContext} from 'react'
import {ShopContext} from "../../Context/Shop-context";

const PaintProduct = (props) => {
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
      while(cat=="paint"){
  return (
    <div>
        <div className="paintservices-firstpart">
            <div className="paintservices-imgpart">
              <img width={180} height={180} src={image} alt="" />
              <div className="paintpart-rupees">
                <span className="rs-25993">{price}</span>
                <span className="rs-18293">{amount}</span>
              </div>
            </div>
            <div className="paintservice-scndpart">
              <div className="paintservice-scndpart-head">
                <h5 className="basicpaint">{title}</h5>
                <span className="timezss">{time}</span>
              </div>
              <div className="paintservice-scndpart-details">
                <div className="paintdetails">
                  <div className="detailssssz">
                    <img src={tickmark} alt="" />
                    <span>{detailone}</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tickmark} alt="" />
                    <span>{detailtwo}</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tickmark} alt="" />
                    <span>{detailthree}</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tickmark} alt="" />
                    <span>{detailfour}</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tickmark} alt="" />
                    <span>{detailfive}</span>
                  </div>
                  <div className="detailssssz">
                    <img src={tickmark} alt="" />
                    <span>{detailsix}</span>
                  </div>
                </div>
                <div className="paint-cart">
                <button className="paintbutton" onClick={()=> addToCart(id)}>+Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )}
}

export default PaintProduct