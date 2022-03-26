import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import BookMark from "./components/Bookmark";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ProductProvider } from "./components/context/ProductContext";
import AuthProvider from "./components/context/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
// import PrivateRoute from "./components/privateRoute";
import Error404 from "./components/Error404";
import ProductDetails from "./components/ProductDetails";
import Landingpage from "./components/landingpage/Landingpage"

function App() {
  return (
    <Router>
      <div className="app">
        <AuthProvider>
          <Nav />
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              {/* <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }

              />
              */}
              <Route path="/collections" element={<Home/>}></Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/details/:id" element={<ProductDetails />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </ProductProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
