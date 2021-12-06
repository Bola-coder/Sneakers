import React, { useContext } from "react";
import Product from "./Products";
import UseProduct from "./UseProduct";
import { ProductContext } from "./ProductContext";
const ProductOverview = () => {
  const url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
      "x-rapidapi-key": "b0bf6d5508msheccb2b6372bd15bp11b75bjsn2e1a3899fd44",
    },
  };
  let [products, loading, error] = UseProduct(url, options);
  const [, , bookmarked, setBookmarked] = useContext(ProductContext);
  return (
    <div className="product-overview">
      <Product
        products={products}
        loading={loading}
        error={error}
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
    </div>
  );
};

export default ProductOverview;
