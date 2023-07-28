import React, {useContext} from 'react'
import { periodicservice } from '../../Product'
import {ShopContext} from "../../Context/Shop-context";
import {CartItem} from './Cart-Item'


const Cart = () => {
  const { cartItems ,getTotalCartAmount}= useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div className='cart-head'>
        <h1 className='caart-head'>Services Items</h1>
      </div>
      <div className='cartItems'>
        {periodicservice.map((products)=>{
          if (cartItems[products.id] !== 0){
            return <CartItem data={products}/>
          }
        })}
      </div> 
      <div className='checkout'>
        <p>Sub Total : ₹{totalAmount}</p>
        <div className='checkoutbtn'>
        <button className='checkbtn'>continue Service</button>
        <button className='checkbtn'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart