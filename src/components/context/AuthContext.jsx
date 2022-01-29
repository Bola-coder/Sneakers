import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
        const colRef = collection(db, "userData");

        // Getting all the user in the database and checking if the user exist already
        // getDocs(colRef).then((snapshot) => {
        //   console.log(snapshot);
        //   snapshot.docs.forEach((doc) => {
        //     console.log(doc);
        //   });
        // });
        // const docRef = doc(db, "userData", user);
        // getDoc(docRef).then((docSnap) => {
        //   if (docSnap.exists()) {
        //     console.log("Document:" + docSnap.data());
        //   } else {
        //     console.log("No document found");
        //   }
        // });

        // Adding the user to the database
        addDoc(colRef, {
          email: user.email,
          name: user.displayName,
          uid: user.uid,
        })
          .then(console.log("Document sent successfully"))
          .catch((err) => console.log(err.message));
      }
    });

    return () => unsuscribe;
  }, []);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
