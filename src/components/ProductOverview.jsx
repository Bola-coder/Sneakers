import React, { useContext } from "react";
import Product from "./Products";
import UseProduct from "./UseProduct";
import { ProductContext } from "./context/ProductContext";
import { useAuth } from "./context/AuthContext";
import Logout from "./Logout";
const ProductOverview = () => {
  const url2 = "https://fakestoreapi.com/products";
  let [products, loading, error] = UseProduct(url2);

  const [, , cart, setCart] = useContext(ProductContext);
  const { currentUser } = useAuth();
  const filteredProducts = products?.filter(
    (prod) => prod.image.original !== ""
  );
  return (
    <div className="product-overview">
      <p>{currentUser?.email}</p>
      {currentUser ? <Logout /> : ""}
      <Product
        products={filteredProducts}
        loading={loading}
        error={error}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default ProductOverview;
