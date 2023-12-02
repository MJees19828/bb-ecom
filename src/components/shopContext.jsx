// eslint-disable react-refrsh/only-export-components
// eslint-disable react-hooks/rules-of-hooks
// eslint-disable no-unused-var

import react,{createContext, useState} from 'react'
import {PRODUCTS, PRODUCTS1} from './products'

// context
export const ShopContext = createContext(null);
//function
const getDefaultCart = () => {
  // Retuen an array of zero with the length of the sum of the length of the PconsRODUCTS and PRODUCTS1 arrays
     const cart = [];
      for (let i = 0; i < PRODUCTS.length + PRODUCTS1.length; i++) {
        cart[i] = 0;
      }

      return cart
};


const shopContext = (props) => { useState(getDefaultCart());
  const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product)=> product.id ===Number(item)) ||   PRODUCTS1.find((product) =>product.id ===Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () =>{
    let totalProducts = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        totalProducts += cartItems[item];
      }
    }
    return totalProducts;
  };

  const addToCart = (productId) =>{
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1
    }));
  };

  const removeToCart = (productId) =>{
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1
    }));
  };

  const updateCartItemCount = (newAmount, productId) =>{
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount 
    }));
  };


  const clearCart = () =>{
    const updateCartItems = {};
    for (const productId in cartItems){
      updateCartItems[productId] = 0 ;
    }
    setCartItems(updateCartItems);
  };

  const resetCart = () =>{
setCartItems([]);
  };

  const [selectedProduct,setSelectedProduct] = useState(null);

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };

  const closedProductDetails = () => {
    setSelectedProduct(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closedProductDetails,
    selectedProduct,
  };
  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
    );
};

export default shopContext


