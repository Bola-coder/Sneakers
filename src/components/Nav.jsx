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
        <Link to="/">Collections</Link>
        <Link to="/development">Men</Link>
        <Link to="/development">Women</Link>
        {/* <Link to="/development">
          About
        </Link> */}
        <Link to="/development">Contact</Link>
      </div>
      <div className="mobile-menu">
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={onHamburgerClick} />
          <Link to="/">
            <h2>Sneakers</h2>
          </Link>
        </div>
        {showMenu ? (
          <div className="mobile-content" onClick={onHamburgerClick}>
            <FontAwesomeIcon icon={faTimes} onClick={onHamburgerClick} />
            <Link to="/">
              <p>Collections</p>
            </Link>
            <Link to="/development">
              {" "}
              <p>Men</p>{" "}
            </Link>
            <Link to="/development">
              <p>Women</p>
            </Link>
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
