import React, { createContext, useState, useEffect } from "react";
import { periodicservice } from "../Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const product of periodicservice) {
    cart[product.id] = 0;
  }
  return cart;
};





const getSavedCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("MyCart");
  return savedCart ? JSON.parse(savedCart) : getDefaultCart();
};

const saveToLocalStorage = (cartItems) => {
  localStorage.setItem("MyCart", JSON.stringify(cartItems));
};






export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getSavedCartFromLocalStorage());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = periodicservice.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.amount;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updateCart = { ...prev };
      if (updateCart[itemId] > 0) {
        updateCart[itemId] -= 1;
      }
      return updateCart;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  useEffect(() => {
    saveToLocalStorage(cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// import React, { createContext, useState, useEffect } from 'react';
// import { periodicservice } from '../Product';

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i <= periodicservice.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(() => {
//     // Load cart items from local storage on initial render
//     const storedCartItems = JSON.parse(localStorage.getItem('MyCart')) || getDefaultCart();
//     return storedCartItems;
//   });

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = periodicservice.find((product) => product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.amount;
//       }
//     }
//     return totalAmount;
//   };

//   useEffect(() => {
//     // Update local storage whenever cartItems change
//     localStorage.setItem('MyCart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (itemId) => {
//     setCartItems((prev) => {
//       const newCartItems = { ...prev };
//       newCartItems[itemId] = newCartItems[itemId] + 1;
//       return newCartItems;
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const newCartItems = { ...prev };
//       newCartItems[itemId] = newCartItems[itemId] - 1;
//       return newCartItems;
//     });
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItems((prev) => {
//       const newCartItems = { ...prev };
//       newCartItems[itemId] = newAmount;
//       return newCartItems;
//     });
//   };

//   const contextValue = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//     getTotalCartAmount,
//   };

//   return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
// };
