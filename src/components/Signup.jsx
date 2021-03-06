import React, { useState, useRef } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "./../firebase.js";
import "./../css/signup.css";
const Signup = () => {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      let result = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      // Add new user to firestore databse
      const colRef = collection(db, "userData");
      addDoc(colRef, {
        userEmail: result.user.email,
        userID: result.user.uid,
        userCarts: [],
      });

      console.log(result);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="signup">
        <h1 className="signup__text">Sign Up</h1>
        {error ? <p>{error}</p> : ""}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required ref={emailRef} />
          <label htmlFor="passowrd">Passowrd:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            ref={passwordRef}
          />
          <label htmlFor="password-confirm">Confirm Password:</label>
          <input
            type="password"
            name="password-confirm"
            id="password-confirm"
            required
            ref={passwordConfirmRef}
          />
          <button type="submit" disabled={loading}>
            Sign Up
          </button>
        </form>
        <h4 className="signup__link-text">
          Already have an account?<Link to="/login">Log In</Link>
        </h4>
      </div>
    </>
  );
};

export default Signup;
