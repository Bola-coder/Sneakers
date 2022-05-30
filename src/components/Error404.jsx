import React from "react";
import { Link } from "react-router-dom";
import "./../css/error404.css";
const Error404 = () => {
  return (
    <div className="error404">
      <div className="error404-content">
        <h2>
          Sorry, The page you requested cannot be found. You think you're lost?
        </h2>
        <Link to="/">
          <button>Go back to homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
