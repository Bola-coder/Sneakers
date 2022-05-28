import React, { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase.js";
import { useAuth } from "./context/AuthContext";
import "./../css/cart.css";

const Cart = () => {
  const [, , cart, setCart] = useContext(ProductContext);
  console.log(cart);
  const colRef = collection(db, "userData");
  const { currentUser } = useAuth();

  // Using useCallback to memoize the function.
  const fillCarts = useCallback(() => {
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        //Checking if a user is logged in and getting data for that user
        if (currentUser && currentUser.uid === doc.data().userID) {
          setCart(doc.data().userCarts);
        }
      });
    });
  }, [colRef, currentUser, setCart]);
  // End of fill cart function.

  // Creating a useEffect to run the fillCarts function once when the cart page is loaded.
  useEffect(() => {
    fillCarts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cart);

  return (
    <section className="carts">
      {cart?.length === 0 ? (
        <div className="cart-text">
          <h4>Your cart is empty</h4>
          <p>Browse our product to start shopping</p>
          <Link to="/">
            {" "}
            <button>Browse Product</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          {cart?.map((prod) => (
            <div className="cart" key={prod.id}>
              <h3>{prod.category}</h3>
              <p>{prod.title}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Cart;
