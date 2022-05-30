import React, { useState, createContext} from "react";
import { useAuth } from ".//AuthContext";
import {
  collection,
  updateDoc,
  arrayUnion,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./../../firebase.js";

export const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const { currentUser } = useAuth();
  const colRef = collection(db, "userData"); // Getting reference to the useData collection on firebase

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
                  setCart([...docu.data().userCarts]);
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
    <ProductContext.Provider
      value={[products, setProducts, cart, setCart, addToCart]}>
      {props.children}
    </ProductContext.Provider>
  );
};
