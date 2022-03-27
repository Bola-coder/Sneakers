import React, { useState, createContext } from "react";

export const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value={[products, setProducts, cart, setCart]}>
      {props.children}
    </ProductContext.Provider>
  );
};
