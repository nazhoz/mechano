
import React, { useContext, useState } from "react";
import { periodicservice } from "../../Product";
import { ShopContext } from "../../Context/Shop-context";
import { CartItem } from "./Cart-Item";
import InvoicePopup from "./InvoicePopup";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [buttonPopup, setButtonPopup] = useState(false);


  const [invoiceNumber, setInvoiceNumber] = useState(1);

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // Handle the checkout logic here, if needed
    setButtonPopup(true);



    setInvoiceNumber((prevInvoiceNumber) => prevInvoiceNumber + 1);
  };


  const currentDate = new Date();
  const invoiceDate = currentDate.toLocaleDateString();





  const handleShareWhatsApp = () => {
    const message =
      `You have received a service order :\n\n================================\nOrder Details\n================================\n\n` +
      `Name: ${userData.name}\n` +
      `Address: ${userData.address}\n` +
      `Phone Number: ${userData.phoneNumber}\n\n` +
      "Booked services \n\n";

    const message2 = `\n\nTotal Amount: Rs. ${totalAmount}\n`;

    const servicesDetails = periodicservice
      .filter((product) => cartItems[product.id] !== 0)
      .map((product) => `${product.title}: ${product.amount}`)
      .join("\n");

    const fullMessage = `${message}${servicesDetails}${message2}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=918078291170&text=${encodedMessage}`;

    window.open(whatsappURL);
  };

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-head">
          <h1 className="caart-head">Services Items</h1>
        </div>
        <div className="cartItems">
          {periodicservice.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className="checkout">
        <div className="chekot">
          <div className="container">
            <div className="card">
              <p className="signup">Address</p>
              <div className="inputBox1">
                <input
                  type="text"
                  required
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                />
                <span className="user">Name</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  required
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                />
                <span>Address</span>
              </div>

              <div className="inputBox">
                <input
                  type="tel"
                  required
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleInputChange}
                />
                <span>Mobile Number</span>
              </div>
              <p className="totalcheck">Total Amount : ₹ {totalAmount}/-</p>
              <div className="checkoutbtn">
                <button className="checkbtn" onClick={handleCheckout}>
                  Checkout
                </button>
                <InvoicePopup
                  triggerbutton={buttonPopup}
                  settriggerbutton={setButtonPopup}
                >
                  <h3 className="bill">MECHANO INVOICE</h3>
                  {/* Display the user data from userData state here */}
                  <div className="billcontent">
                    <div>
                      <p className="billname">Name: {userData?.name}</p>
                      <p className="billname">Address: {userData?.address}</p>
                      <p className="billname">
                        Mobile Number: {userData?.phoneNumber}
                      </p>
                    </div>
                    <div className="billnamecontent">
                      <p className="billname">Invoice Date : {invoiceDate}</p>
                      <p className="billname">Invoice Number : M{invoiceNumber}</p>
                    </div>
                  </div>

                  <div className="Tabledata">
                    <table className="PrintTable">
                      <thead className="TableHead">
                        <tr className="TableHeadRow">
                          <th className="TableHeadData1">Services</th>
                          <th className="TableHeadData2">Time</th>
                          <th className="TableHeadData2">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {periodicservice.map((product) => {
                          if (cartItems[product.id] !== 0) {
                            return (
                              <tr key={product.id}>
                                <td className="TableRowData1">
                                  {product.title}
                                </td>
                                <td className="TableRowData1">
                                  {product.time}
                                </td>
                                <td className="TableRowData1">
                                  {product.amount}/-
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <p className="totalchecks">
                      Total Amount : ₹ {totalAmount}/-
                    </p>
                  </div>
                  <div className="purchasebtn">
                    <button
                      className="purchase--btn"
                      onClick={() => {
                        handleShareWhatsApp();
                      }}
                    >
                      Send
                    </button>
                  </div>
                </InvoicePopup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
