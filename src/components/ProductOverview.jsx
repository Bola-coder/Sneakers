import React, { useContext } from "react";
import Product from "./Products";
import UseProduct from "./UseProduct";
import { ProductContext } from "./context/ProductContext";
const ProductOverview = () => {
  const url2 = "https://fakestoreapi.com/products";
  let [products, loading, error] = UseProduct(url2);

  const [, , , setCart] = useContext(ProductContext);
  const filteredProducts = products?.filter(
    (prod) => prod.image.original !== ""
  );
  return (
    <div className="product-overview">
      <Product
        products={filteredProducts}
        loading={loading}
        error={error}
        setCart={setCart}
      />
    </div>
  );
};

export default ProductOverview;
