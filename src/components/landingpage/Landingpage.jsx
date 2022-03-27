<<<<<<< HEAD
import React,{useState, useEffect} from 'react';
import Style from './sass/style.module.scss';
import shirt from './img/shirt.png'
import { Link } from "react-router-dom";
const Landingpage = () => {
    useEffect(() => { document.title='Signup'})
    let lorem = document.getElementById("lorem");
    let text = "Lorem Ipsum has been the industry's standard dummy....";
    let index = 0;
    const [writeText, setwriteText] = useState(false)

    function writeTexts(){
        lorem.innerHTML = text.slice(0, index);
        index++;
        if (index > text.length - 0) {
            index = 0;
        }
    }
    setInterval(writeTexts, 150)
    window.addEventListener('load', function () {
        writeTexts()
        setwriteText(true)
    })
    console.log(lorem)

    return (
        <section className={Style.homesection}>
            <div className={Style.hometext}>
                <h3 className={Style.bannerText}>Checkout Our New Wares.</h3>
                <h1 className={Style.mensText}><strong>We  Might Have What You Like..</strong></h1>
                <p id='lorem' className={`${Style.mobile}`}>  </p>
                <span> 
                    <Link to='/'><button>Buy Now</button></Link>
                    <Link to='/'><button>See More</button></Link>
                </span>
            </div>
            <img alt='shirt' src={shirt} />
        </section>
    )
    

}
export default Landingpage;
=======
import React from "react";
import Style from "./sass/style.module.scss";
import shirt from "./img/shirt.png";
const Landingpage = () => {
  // let lorem = document.getElementById("lorem");
  // let text = "Lorem Ipsum has been the industry's standard dummy....";
  // let index = 0;
  // const writeText = () => {
  //     lorem.innerHTML = text.slice(0, index);
  //     index++;
  //     if (index > text.length - 0) {
  //         index = 0;
  //     }
  // }
  // setInterval(writeText, 150)
  /*   window.addEventListener('load', function () {
        writeText()
    }) */

  return (
    <section className={Style.homesection}>
      <div className={Style.hometext}>
        <h1 className={Style.mensText}>
          <strong>We Have What You Need.</strong>
        </h1>
        <h3 className={Style.bannerText}>Checkout Our New Wares.</h3>
        {/* <p id='lorem' onLoad={writeText}/> */}
      </div>
      <img alt="shirt" src={shirt} />
    </section>
  );
};
export default Landingpage;
>>>>>>> origin
