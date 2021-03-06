import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import Loader from "./utilities/Loader";
import noImage from "./../images/no-image.jpg";
import "./../css/product.css";

const Product = ({ products, loading, error, setCart }) => {
  // Getting the addToCart function from the ProductContext.
  const [ , , , , addToCart ] = useContext(ProductContext);

  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <Loader />
          {/* <p className="loading-text">Loading Products... Please Wait.</p> */}
        </div>
      ) : (
        ""
      )}
      {error ? <p className="load-error">{error}</p> : ""}
      <div className="products">
        {products
          ? products.map((prod) => (
              <div className="product" key={prod.id}>
                <img
                  src={prod.image ? prod.image : noImage}
                  alt={prod.name}
                  width="250px"
                />
                <Link to={`/products/${prod.id}`}>
                  <p>
                    {prod.title.length < 40
                      ? prod.title
                      : `${prod.title.slice(0, 40)}...`}
                  </p>
                </Link>
                <button onClick={() => addToCart(prod.id)}>
                  Add to Carts{" "}
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Product;
