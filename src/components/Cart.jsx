import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "./context/ProductContext";
import "./../css/cart.css";

const Cart = () => {
  const [, , cart] = useContext(ProductContext);
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
          <h3>Hello</h3>
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
