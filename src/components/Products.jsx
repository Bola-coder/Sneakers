import React from "react";
import "./../css/product.css";
import noImage from "./../images/no-image.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import {
  collection,
  updateDoc,
  arrayUnion,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./../firebase.js";
// Importing loader commponent
import Loader from "./utilities/Loader";

const Product = ({ products, loading, error, cart, setCart }) => {
  const { currentUser } = useAuth();
  const colRef = collection(db, "userData");
  let cartItems = [];
  // Function that adds new document to Cart.

  const addToCart = (id) => {
    if (currentUser) {
      onSnapshot(colRef, (snapshot) => {
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
                  cartItems = [...docu.data().userCarts];
                  // setCart(docu.data().userCarts);
                  console.log(docu.data().userCarts);
                  setCart(cartItems)
                })

                .catch((err) => console.log(err));
            }
          }
        });
      });
    }
  };
  // End of cart function
  console.log(cartItems);
  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <Loader />
          <p className="loading-text">Loading Products... Please Wait.</p>
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
                <Link to={`/details/${prod.id}`}>
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
