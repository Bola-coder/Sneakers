import React, { useEffect } from 'react';
import Style from './sass/style.module.scss';
import { Link } from "react-router-dom";
import { PRODUCTS } from './Product';
const Landingpage = () => {
    const ProductsTitles = ({ product, index, }) => <i key={index}>{product.title}</i>
    const ProductsPhotos = ({ product, index, }) => <img key={index} alt={product.title} src={product.photo} />
    useEffect(() => {
        document.title = 'Sneakers'
        let lorem = document.getElementById("lorem");
        let text = "Lorem Ipsum has been the industry's standard dummy....";
        let index = 0;
        const showProducts = (n, slideIndex) => {
            var i;
            if (n > ProductsPhotos.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = ProductsPhotos.length
            }
            for (i = 0; i < ProductsPhotos.length; i++) {
                ProductsPhotos[i].style.display = "none";
            }

            ProductsPhotos[slideIndex - 1].style.display = "block";
        }



        function writeTexts() {
            lorem.innerHTML = text.slice(0, index);
            index++;
            if (index > text.length - 0) {
                index = 0;
            }
        }
        setInterval(writeTexts, 150)
        setInterval(showProducts, 150)
        window.addEventListener('load', function () {
            writeTexts()
            showProducts();
        })
    }
    )
    /* 
    const [active, setActive] = useState(0)
    */
    /* const showProducts = (index) => {
        setActive(index)
        setOpen(0)
    } */









    return (
        <section className={Style.homesection}>
            <div className={Style.hometext}>
                <h3 className={Style.bannerText}>Checkout Our New {PRODUCTS.map((product, index) => <ProductsTitles key={index} {...{ product, index, /* showProducts */ }} />)}.</h3>
                <h1 className={Style.mensText}><strong>We  Might Have What You Like..</strong></h1>
                <p id='lorem' className={`${Style.mobile}`}>  </p>
                <span>
                    <Link to='/login'><button>Shop Now</button></Link>
                    <Link to='/collections'><button>See More</button></Link>
                </span>
            </div>
            {
                PRODUCTS.map((product, index) => <ProductsPhotos key={index} {...{ product, index,   /* showProducts */ }} />)
            }
        </section>
    )

}
export default Landingpage;