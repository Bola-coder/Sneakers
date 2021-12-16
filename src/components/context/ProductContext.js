import React, { useState, createContext } from "react";

export const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  return (
    <ProductContext.Provider
      value={[products, setProducts, bookmarked, setBookmarked]}>
      {props.children}
    </ProductContext.Provider>
  );
};
