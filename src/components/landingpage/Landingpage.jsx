import React from 'react';
import Style from './sass/style.module.scss';
import shirt from './img/shirt.png'
import { Link } from "react-router-dom";
const Landingpage = () => {
    let lorem = document.getElementById("lorem");
    let text = "Lorem Ipsum has been the industry's standard dummy....";
    let index = 0;
    /*  const writeText = () => {
         lorem.innerHTML = text.slice(0, index);
         index++;
         if (index > text.length - 0) {
             index = 0;
         }
     } *//* 
    setInterval(writeText, 150) */
    /*   window.addEventListener('load', function () {
          writeText()
      }) */

    return (
        <section className={Style.homesection}>
            <div className={Style.hometext}>
                <h3 className={Style.bannerText}>Checkout Our New Wares.</h3>
                <h1 className={Style.mensText}><strong>We  Might Have What You Like..</strong></h1>
                <p id='lorem' className={`${Style.mobile}`} /* onLoad={writeText} */>Lorem Ipsum has been the industry's standard dummy....</p>
                <span>
                    <Link to='/'>
                    <button>Buy Now</button>
                    </Link>
                    <Link to='/'>
                        <button>
                            See More
                        </button>
                    </Link>
                </span>
            </div>
            <img alt='shirt' src={shirt} />
        </section>
    )
}
export default Landingpage;