import React, { useState, useRef } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./../css/login.css";

const Login = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="login">
        <h1 className="login__text">Log In</h1>
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

          <button type="submit" disabled={loading}>
            Log In
          </button>
        </form>
        <h4 className="login__link-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </h4>
      </div>
    </>
  );
};

export default Login;
