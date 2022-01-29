import React, { useContext } from "react";
import Product from "./Products";
import UseProduct from "./UseProduct";
import { ProductContext } from "./context/ProductContext";
import { useAuth } from "./context/AuthContext";
import Logout from "./Logout";
const ProductOverview = () => {
  // const url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=30";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
  //     "x-rapidapi-key": "b0bf6d5508msheccb2b6372bd15bp11b75bjsn2e1a3899fd44",
  //   },
  // };
  // let [products, loading, error] = UseProduct(url, options);
  const url2 = "https://fakestoreapi.com/products";
  let [products, loading, error] = UseProduct(url2);

  const [, , bookmarked, setBookmarked] = useContext(ProductContext);
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
        bookmarked={bookmarked}
        setBookmarked={setBookmarked}
      />
    </div>
  );
};

export default ProductOverview;
