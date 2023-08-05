import React , {useContext} from  'react'
import {ShopContext} from "../../Context/Shop-context";

const TyreProducts = (props) => {
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

      while(cat=="tyre"){
  return (
    <div>
        <div className="tyreservices-firstpart">
            <div className="tyreservices-imgpart">
              <img width={180} height={180} src={image} alt="" />
              <div className="tyrepart-rupees">
                <span className="rs-25992">{price}</span>
                <span className="rs-18292">{amount}</span>
              </div>
            </div>
            <div className="tyreservice-scndpart">
              <div className="tyreservice-scndpart-head">
                <h5 className="basictyre">{title}</h5>
                <span className="timezs">{time}</span>
              </div>
              <div className="tyreservice-scndpart-details">
                <div className="tyredetails">
                  <div className="detailssss">
                    <img src={tickmark} alt="" />
                    <span>{detailone}</span>
                  </div>
                  <div className="detailssss">
                    <img src={tickmark} alt="" />
                    <span>{detailtwo}</span>
                  </div>
                  <div className="detailssss">
                    <img src={tickmark} alt="" />
                    <span>{detailthree}</span>
                  </div>
                  <div className="detailssss">
                    <img src={tickmark} alt="" />
                    <span>{detailfour}</span>
                  </div>
                  <div className="detailssss">
                    <img src={tickmark} alt="" />
                    <span>{detailfive}</span>
                  </div>
                  <div className="detailssss">
                    <img src={tickmark} alt="" />
                    <span>{detailsix}</span>
                  </div>
                </div>
                <div className="tyre-cart">
                <button className="tyrebutton" onClick={()=> addToCart(id)}>+Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>                </div>
              </div>
            </div>
          </div>
    </div>
  )}
}

export default TyreProducts