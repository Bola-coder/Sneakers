import React, { useEffect, useState } from 'react';
import Style from './sass/style.module.scss';
import Images from './img/Images';
import { Link } from "react-router-dom";
import { PRODUCTS } from './Product';
const Landingpage = () => {
    const [active, setActive] = useState(0)
    const showProducts = (index) => {
        setActive(index)
    }
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
        console.log(lorem)
    }
    )
    const ProductsTitles = ({ product, index, active, showProducts }) => <i onLoad={() => showProducts(index)} key={product.index}>{product.title}</i>
    const ProductsPhotos = ({ product, index, active, showProducts }) => <img key={product.photo} alt='shirt' src={product.photo} />
    return (
        <section className={Style.homesection}>
            <div className={Style.hometext}>
                <h3 className={Style.bannerText}>Checkout Our New {PRODUCTS.map((product, index) => <ProductsTitles {...{ product, index, active, showProducts }} />)}.</h3>
                <h1 className={Style.mensText}><strong>We  Might Have What You Like..</strong></h1>
                <p id='lorem' className={`${Style.mobile}`}>  </p>
                <span>
                    <Link to='/login'><button>Shop Now</button></Link>
                    <Link to='/collections'><button>See More</button></Link>
                </span>
            </div>
            {
                PRODUCTS.map((product,index)  => <ProductsPhotos {...{product, index, active, showProducts}}/>)
            }
        </section>
    )


}
export default Landingpage;