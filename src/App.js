import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookMark from "./components/Bookmark";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ProductProvider } from "./components/ProductContext";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <ProductProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/bookmark" element={<BookMark />} />
          </Routes>
        </ProductProvider>
      </div>
    </Router>
  );
}

export default App;
