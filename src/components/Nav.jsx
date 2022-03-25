import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
        <Link to="/landingpage">
          <h2>Sneakers</h2>
        </Link>
        <Link to="/landingpage">
          <p>Home page</p>
        </Link>
        <Link to="/">
          <p>Collections</p>
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
            <Link to="/landingpage">
              <p>Home page</p>
            </Link>
            <Link to="/">
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
        <Link to="/bookmark">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        {/* <img src={Avatar} alt="Avatar" /> */}
        {currentUser ? (
          currentUser.email
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
