import React from 'react';
import Style from './sass/style.module.scss';
const Newcollection = () => {
    return (
        <section>
            <div class="layout_padding collection_section">
                <div class={Style.container}>
                    <h1 class="new_text"><strong>New Collection</strong></h1>
                    <p class="consectetur_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <div class="collection_section_2">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="about-img">
                                    <button class="new_bt">New</button>
                                    <div class="shoes-img"><img src="images/shoes-img1.png" alt='shoes-img1.png'/></div>
                                    <p class="sport_text">Men Sports</p>
                                    <div class="dolar_text">$<strong /* style="color: #f12a47;" */>90</strong> </div>
                                    <div class="star_icon">
                                        <ul>
                                            <li><a href="/"><img src="images/star-icon.png" alt='star-icon'/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="seemore_bt">See More</button>
                            </div>
                            <div class="col-md-6">
                                <div class="about-img2">
                                    <div class="shoes-img2"><img src="images/shoes-img2.png" alt="shoesimg2"/></div>
                                    <p class="sport_text">Men Sports</p>
                                    <div class="dolar_text">$<strong /* style="color: #f12a47;" */>90</strong> </div>
                                    <div class="star_icon">
                                        <ul>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                            <li><a href="/"><img src="images/star-icon.png" alt="star-icon"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Newcollection;