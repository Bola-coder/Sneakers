import React from "react";
import { Link } from "react-router-dom";
import "./../css/cart.css";

const Cart = () => {
  return (
    <section className="cart">
      <div className="cart-text">
        <h4>Your cart is empty</h4>
        <p>Browse our product to start shopping</p>
        <Link to="/">
          {" "}
          <button>Browse Product</button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
