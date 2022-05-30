import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../css/productDetails.css";
import Loader from "./utilities/Loader";
const ProductDetails = () => {
  let { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchProduct(url);
  }, [url]);

  const fetchProduct = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to load products");
        console.log(err);
      });
  };
  return (
    <main>
      {error ? <p className="loading-error">{error}</p> : ""}
      {loading ? <Loader /> : ""}
      {product ? (
        <div className="product-details">
          <div className="left">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button> Add to Cart</button>
          </div>
          <div className="right">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default ProductDetails;
