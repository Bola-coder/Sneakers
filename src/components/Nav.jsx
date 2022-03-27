import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";

// import Avatar from "../images/image-avatar.png";
import "./../css/Nav.css";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser } = useAuth();
  const onHamburgerClick = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <nav>
      <div className="menu">
        <Link to="/">
          <h2>Sneakers</h2>
        </Link>
<<<<<<< HEAD
        <Link to="/landingpage">
          Home
        </Link>
        <Link to="/">
          Collections
=======
        {/* <Link to="/">Home</Link> */}
        <Link to="/collections">
          <p>Collections</p>
>>>>>>> origin
        </Link>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="mobile-menu">
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={onHamburgerClick} />
          <Link to="/">
            <h2>Sneakers</h2>
          </Link>
        </div>
        {showMenu ? (
          <div className="mobile-content">
            <FontAwesomeIcon icon={faTimes} onClick={onHamburgerClick} />
            {/* <Link to="/">
              <p>Home</p>
            </Link> */}
            <Link to="/collections">
              <p>Collections</p>
            </Link>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        ) : null}
      </div>
      <div className="profile">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartPlus} />
        </Link>
        {/* <img src={Avatar} alt="Avatar" /> */}
        {currentUser ? (
          <div className="current">
            <p>{currentUser.email}</p>
            <Logout />
          </div>
        ) : (
          <div className="links">
            <Link to="/signup">
              <button>SignUp</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
