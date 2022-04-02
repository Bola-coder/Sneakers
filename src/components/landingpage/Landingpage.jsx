import React, { useEffect, useState } from 'react';
import Style from './sass/style.module.scss';
import { Link } from "react-router-dom";
import { PRODUCTS } from './Product';
const Landingpage = () => {
    useEffect(() => {
        document.title = 'Sneakers'
        let lorem = document.getElementById("lorem");
        let text = "Lorem Ipsum has been the industry's standard dummy....";
        let index = 0;
        function writeTexts() {
            lorem.innerHTML = text.slice(0, index);
            index++;
            if (index > text.length - 0) {
                index = 0;
            }
        }
        setInterval(writeTexts, 150)
        window.addEventListener('load', function () {
            writeTexts()
        })
    }
    )
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(0)
   const plusSlides = () => {
        clearInterval(myTimer);
        if (n < 0){
          showSlides(slideIndex -= 1);
        } else {
         showSlides(slideIndex += 1); 
        }
        if (n === -1){
          myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
        } else {
          myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
        }
    }
    const showProducts = (index) => {
        setActive(index)
        setOpen(0)
    }
   
    const ProductsTitles = ({ product, index, active, open, showProducts }) => <i onLoad={() => showProducts()} key={product.index}>{product.title}</i>
    const ProductsPhotos = ({ product, index, active, open, showProducts }) => <img onLoad={() => showProducts()} key={product.photo} alt='shirt' src={product.photo} />
    return (
        <section className={Style.homesection}>
            <div className={Style.hometext}>
                <h3 className={Style.bannerText}>Checkout Our New {PRODUCTS.map((product, index) => <ProductsTitles key={product.index} {...{ product, index, active, showProducts }} />)}.</h3>
                <h1 className={Style.mensText}><strong>We  Might Have What You Like..</strong></h1>
                <p id='lorem' className={`${Style.mobile}`}>  </p>
                <span>
                    <Link to='/login'><button>Shop Now</button></Link>
                    <Link to='/collections'><button>See More</button></Link>
                </span>
            </div>
            {
                PRODUCTS.map((product, index) => <ProductsPhotos key={product.index} {...{ product, index, active, showProducts }} />)
            }
        </section>
    )


}
export default Landingpage;