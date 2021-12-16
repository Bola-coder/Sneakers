import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookMark from "./components/Bookmark";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ProductProvider } from "./components/context/ProductContext";
import AuthProvider from "./components/context/AuthContext";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <AuthProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookmark" element={<BookMark />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </ProductProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
