import React from "react";
import "./../css/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import noImage from "./../images/no-image.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import {
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { db } from "./../firebase.js";

const Product = ({ products, loading, error, cart, setCart }) => {
  const { currentUser } = useAuth();
  const colRef = collection(db, "userData");
  // Function that adds new document to Cart.
  const addToCart = (id) => {
    if (currentUser) {
      getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((docu) => {
          // Check if the the id is the same as that of current user
          if (currentUser.uid === docu.data().userID) {
            const newProduct = products.filter((prod) => prod.id === id);
            if (newProduct) {
              // Getting a reference to the current document
              const docRef = doc(colRef, docu.id);
              updateDoc(docRef, {
                userCarts: arrayUnion(newProduct[0]),
              })
                .then(() => {
                  console.log("Cart Added successfully");
                  setCart(docu.data().userCarts);
                  console.log(docu.data().userCarts);
                })
                .catch((err) => console.log(err));
            }
          }
        });
      });
    }
  };
  // End of cart function

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
                    onClick={() => addToCart(prod.id)}
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
