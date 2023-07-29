import React , {useContext} from 'react'
import './Cart.css'
import {ShopContext} from "../../Context/Shop-context";

export const CartItem = (props) => {
    const {
        id,
        image,
        amount,
        title,
        tickmark,
        detailone,
        detailtwo,
        detailthree,
        detailfour,
        detailfive,
        detailsix,
      } = props.data;
      const { cartItems, addToCart, removeFromCart, updateCartItemCount}= useContext(ShopContext)
  return (
    <div className='CartItem'>
        <div className="cartservices-firstpart">
        <div className="cartservices-imgpart">
          <img width={180} height={180} src={image} alt="" />
          <div className='caart-rs-input'>
          <div className="imgpart-rupees">
            {/* <span className="rs-25999">{price}</span> */}
            <span className="rs-18299">{amount}</span>
          </div>
          <div className='countHandler'>
            <button className='caart-btn' onClick={()=> removeFromCart(id)}>-</button>
            <input className='caart-input' value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
            <button className='caart-btn' onClick={()=> addToCart(id)}>+</button>
          </div>
          </div>
        </div>
        <div className="cartservice-scndpart">
          <div className="cartservice-scndpart-head">
            <h5 className="basiccart">{title}</h5>
            {/* <span className="timecart">{time}</span> */}
          </div>
          <div className="cartservice-scndpart-details">
            <div className="cartdetails">
              <div className="detailscart">
                <img src={tickmark} alt="" />
                <span>{detailone}</span>
              </div>
              <div className="detailscart">
                <img src={tickmark} alt="" />
                <span>{detailtwo} </span>
              </div>
              <div className="detailscart">
                <img src={tickmark} alt="" />
                <span>{detailthree}</span>
              </div>
              <div className="detailscart">
                <img src={tickmark} alt="" />
                <span>{detailfour}</span>
              </div>
              <div className="detailscart">
                <img src={tickmark} alt="" />
                <span>{detailfive}</span>
              </div>
              <div className="detailscart">
                <img src={tickmark} alt="" />
                <span>{detailsix}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
