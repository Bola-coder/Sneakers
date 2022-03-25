import React from 'react';
import Style from './sass/style.module.scss';
const Landingpage = () => {
    return (
        <section className={Style.homesection}>
            <h3 className={Style.bannerText}>Checkout New Wares</h3>
            <h1 className={Style.mensText}><strong>We Have What You Like</strong></h1>
            
        </section>
    )
}
export default Landingpage;