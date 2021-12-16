import React from "react";
import "./../css/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import noImage from "./../images/no-image.jpg";

const Product = ({ products, loading, error, bookmarked, setBookmarked }) => {
  const handleBookmarks = (id) => {
    const newProduct = products.filter((prod) => id === prod.id);
    console.log(products);
    console.log(newProduct[0]);
    if (!bookmarked.includes(newProduct[0])) {
      setBookmarked((prev) => [...prev, newProduct[0]]);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <p className="loading-error">Loading Sneakers... Just a secs</p>
      ) : null}
      {error ? { error } : ""}
      <div className="products">
        {products
          ? products.map((prod) => (
              <div className="product" key={prod.id}>
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => handleBookmarks(prod.id)}
                />
                <img
                  src={prod.image.original ? prod.image.original : noImage}
                  alt={prod.name}
                  width="250px"
                />
                <p>{prod.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Product;
