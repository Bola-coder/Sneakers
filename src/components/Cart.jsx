import React, { useContext, useEfect, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase.js";

import "./../css/cart.css";

const Cart = () => {
  const [, , cart, setCart] = useContext(ProductContext);
  console.log(cart);
  const colRef = collection(db, "userData");

  // Working on this fnction currently
  function fillCarts() {
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setCart((prev) => [doc.data().userCarts, ...prev]);
      });
    });
  }

  useEffect(() => {
    fillCarts();
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
