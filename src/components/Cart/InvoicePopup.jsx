import React  from "react";
import "./Popup.css";


const InvoicePopup = (props) => {


  const retrievedData = localStorage.getItem('userDetails');
  const userData = JSON.parse(retrievedData);

  const name = userData.name;
  const address = userData.address;
  const phoneNumber = userData.phoneNumber;

  return props.triggerbutton ? (
    <div className="invoicepopup">
      <div className="invoice-popup-inner">
        <button
          className="invoice-close-btn"
          onClick={() => props.settriggerbutton(false)}
        >
          x
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default InvoicePopup;
