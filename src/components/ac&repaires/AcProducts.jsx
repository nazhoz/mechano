import React , {useContext} from 'react'
import {ShopContext} from "../../Context/Shop-context";


const AcProducts = (props) => {
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
      while(cat=="ac"){
  return (
    <div>

<div className='acservices-firstpart'>
    <div className='acservices-imgpart'>
      <img width={180} height={180} src={image} alt="" />
      <div className='acpart-rupees'>
        <span className='rs-25990'>{price}</span>
        <span className='rs-18290'>{amount}</span>
      </div>
    </div>
    <div className='acservice-scndpart'>
      <div className='acservice-scndpart-head'>
        <h5 className='basicac'>{title}</h5>
        <span className='times'>{time}</span>
      </div>
      <div className='acservice-scndpart-details'>
        <div className='acdetails'>
        <div className='detailss'>
          <img src={tickmark} alt="" />
          <span>{detailone}</span>
        </div>
        <div className='detailss'>
          <img src={tickmark} alt="" />
          <span>{detailtwo}</span>
        </div>
        <div className='detailss'>
          <img src={tickmark} alt="" />
          <span>{detailthree}</span>
        </div>
        <div className='detailss'>
          <img src={tickmark} alt="" />
          <span>{detailfour}</span>
        </div>
        <div className='detailss'>
          <img src={tickmark} alt="" />
          <span>{detailfive}</span>
        </div>
        <div className='detailss'>
          <img src={tickmark} alt="" />
          <span>{detailsix}</span>
        </div>
        </div>
        <div className='ac-cart'>
        <button className="acbutton" onClick={()=> addToCart(id)}>+Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )}
}

export default AcProducts