import React, { useState, useEffect } from "react";
import Style from "./sass/style.module.scss";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./Product";
const Landingpage = () => {
  const [value, setValue] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);

  // useEffect Hook
  useEffect(() => {
    document.title = "Sneakers";
    let text = "Lorem Ipsum has been the industry's standard dummy....";
    let index = 0;

    // Function to write text to the screen
    function writeTexts() {
      let newText = text.slice(0, index);
      setValue(newText);
      index++;
      if (index > text.length - 1) {
        index = 0;
        setValue("");
      }
    }

    // SetIntervals to control how the function is being called.
    setInterval(writeTexts, 200);
    setInterval(slideImages, 3000);

    // Cleanup Function
    return () => {
      clearInterval();
    };
  }, []);

  // Function to slideShow the images
  function slideImages() {
    setSlideIndex((prev) => prev + 1);
    if (slideIndex >= PRODUCTS.length - 1) {
      setSlideIndex(0);
    }
  }

  return (
    <section className={Style.homesection}>
      <div className={Style.hometext}>
        <h3 className={Style.bannerText}>
          Checkout Our New{" "}
          <span style={{ fontSize: "2rem" }}>
            {PRODUCTS[slideIndex]?.title}
          </span>
        </h3>
        <h1 className={Style.mensText}>
          <strong>We Have What You Need...</strong>
        </h1>
        <p id="lorem" className={`${Style.mobile}`}>
          {value}
        </p>
        <span>
          <Link to="/login">
            <button>Shop Now</button>
          </Link>
          <Link to="/collections">
            <button>See More</button>
          </Link>
        </span>
      </div>
      <img src={PRODUCTS[slideIndex]?.photo} alt="Product" />
    </section>
  );
};

export default Landingpage;
