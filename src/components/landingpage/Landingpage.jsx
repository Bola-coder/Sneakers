import React, { useState, useEffect } from "react";
import Style from "./sass/style.module.scss";
// import shirt from "./img/shirt.png";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./Product";
const Landingpage = () => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.title = "Sneakers";
    let text = "Lorem Ipsum has been the industry's standard dummy....";
    let index = 0;

    function writeTexts() {
      // lorem.innerHTML = text.slice(0, index);
      let newText = text.slice(0, index);
      setValue(newText);
      index++;
      if (index > text.length - 1) {
        index = 0;
        setValue("");
      }
    }
    function slideImages() {
      if (index >= PRODUCTS.length) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    }
    setInterval(writeTexts, 200);
    setInterval(slideImages, 3000);

    // Cleanup Function
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <section className={Style.homesection}>
      <div className={Style.hometext}>
        <h3 className={Style.bannerText}>
          Checkout Our New <h2>{PRODUCTS[index].title}</h2>
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
      <img src={PRODUCTS[index].photo} alt="Product" />
    </section>
  );
};

export default Landingpage;
