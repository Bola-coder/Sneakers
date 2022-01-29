import React from "react";
import "./../css/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import noImage from "./../images/no-image.jpg";
import { Link } from "react-router-dom";

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
        <p className="loading-error">Loading Sneakers... Please Wait.</p>
      ) : (
        ""
      )}
      {error ? <p className="loading-error">{error}</p> : ""}
      <div className="products">
        {products
          ? products.map((prod) => (
              <div className="product" key={prod.id}>
                <div className="bookmark-icon">
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => handleBookmarks(prod.id)}
                  />
                </div>

                <img
                  src={prod.image ? prod.image : noImage}
                  alt={prod.name}
                  width="250px"
                />
                <Link to={`/details/${prod.id}`}>
                  <p>
                    {prod.title.length < 40
                      ? prod.title
                      : `${prod.title.slice(0, 40)}...`}
                  </p>
                </Link>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Product;
