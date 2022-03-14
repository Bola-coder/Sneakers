import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { collection, addDoc, getDocs } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      // let allData = [];
      if (user) {
        setCurrentUser(user);
        console.log(user);
        // const colRef = collection(db, "userData");

        // // Getting all the document (users) in the database
        // getDocs(colRef).then((snapshot) => {
        //   snapshot.docs.forEach((doc) => {
        //     allData.push(...doc.data())
        //   });
        // });

        // // Checking if allData is not empty
        // if(allData.length > 0){
        //   // Checking if user doesn't exist yet and oushing user to firebase if user doesn't exist.
        //   allData.forEach(data => {
        //     if(data.uid == user.uid){

        //     }
        //   })
        // }
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
