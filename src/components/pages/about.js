import React from 'react'
import Side from "../nav";

function about() {
  return (
    <div>
           <Side />
           <section class="inner-banner py-5">
        <div class="w3l-breadcrumb py-lg-5">
            <div class="container pt-sm-5 pt-4 pb-sm-4">
                <h4 class="inner-text-title font-weight-bold pt-5">About Us</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span>About</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="about-section py-5">
        <div class="container py-md-5 py-4">
            <img src="/images/about.jpg" alt="" class="img-fluid radius-image"/>
            <div class="row mt-sm-5 mt-4">
                <div class="col-lg-6 about-left-inner pr-lg-5">
                    <h3 class="title-style">Feel the extraordinary love with our dishes. We have millions of flavors.
                    </h3>
                </div>
                <div class="col-lg-6 about-right-inner mt-lg-0 mt-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p class="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="w3_stats pb-5" id="stats">
        <div class="container pb-md-5 pb-4">
            <div class="w3-stats">
                <div class="row text-center">
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter">
                            <div class="timer count-title count-number" data-to="36" data-speed="1500"></div>
                            <p class="count-text">Years Experience</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                        <div class="counter">
                            <div class="timer count-title count-number" data-to="2780" data-speed="1500"></div>
                            <p class="count-text">Completed Projects</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                        <div class="counter">
                            <div class="timer count-title count-number" data-to="3600" data-speed="1500"></div>
                            <p class="count-text">Happy Customers</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                        <div class="counter border-right-0">
                            <div class="timer count-title count-number" data-to="26" data-speed="1500"></div>
                            <p class="count-text">Honors and Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w3l-feature-8">
        <div class="features-main py-5">
            <div class="container py-md-5 py-4">
                <div class="row text-center">
                    <div class="col-lg-3 col-sm-6 feature-body">
                        <div class="feature-icon">
                            <i class="fas fa-pizza-slice"></i>
                        </div>
                        <div class="feature-info">
                            <h3 class="feature-title mb-3"><a href="#featured">Good Food</a></h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                            </p>
                            <a href="#featured" class="feature-link">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 feature-body mt-sm-0 mt-5">
                        <div class="feature-icon">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div class="feature-info">
                            <h3 class="feature-title mb-3"><a href="#featured">Healthy Food</a></h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                            </p>
                            <a href="#featured" class="feature-link">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 feature-body mt-lg-0 mt-5">
                        <div class="feature-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <div class="feature-info">
                            <h3 class="feature-title mb-3"><a href="#featured">Best Chef's</a></h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                            </p>
                            <a href="#featured" class="feature-link">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 feature-body mt-lg-0 mt-5">
                        <div class="feature-icon">
                            <i class="fas fa-hand-holding-usd"></i>
                        </div>
                        <div class="feature-info">
                            <h3 class="feature-title mb-3"><a href="#featured">Best Price</a></h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                            </p>
                            <a href="#featured" class="feature-link">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="image-with-content pt-5">
        <div class="container pt-md-5 pt-4">
            <div class="row align-items-center">
                <div class="col-lg-6 content-sec-1">
                    <h3 class="title-style mb-3">Story behind this food blog</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit
                        doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit
                        accus antium dolor emque lauda ntium.
                    </p>
                    <a class="btn btn-style mt-4" href="#blog">Let's Know More</a>
                </div>
                <div class="col-lg-6 pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <img src="/images/banner-b2.jpg" alt="" class="img-fluid radius-image"/>
                </div>
            </div>
            <div class="row align-items-center mt-5">
                <div class="col-lg-6 pr-lg-5 mt-lg-0 mt-sm-5 mt-4 order-lg-1 order-2">
                    <img src="/images/banner-b1.jpg" alt="" class="img-fluid radius-image"/>
                </div>
                <div class="col-lg-6 content-sec-1 order-lg-2 order-1">
                    <h3 class="title-style mb-3">Cooking is about passion</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit
                        doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit
                        accus antium dolor emque lauda ntium.
                    </p>
                    <a class="btn btn-style mt-4" href="#blog">Let's Know More</a>
                </div>
            </div>
        </div>
    </section>
    <section class="w3l-team section py-5" id="team">
        <div class="container py-md-5 py-4">
            <h3 class="title-style text-center mb-lg-5 mb-4">Our Amazing Chef's</h3>
            <div class="row">
                <div class="section_content teamy-team">
                    <div class="col-lg-3 col-6">
                        <div class="teamy teamy_style1 teamy_mask-circle">
                            <div class="teamy_layout">
                                <div class="teamy_preview">
                                    <img src="/images/team1.jpg" class="radius-image img-fluid w-100"
                                        alt="The demo photo"/>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#facebook" class="social"> <i class="fab fa-facebook-f"></i> </a>
                                        <a href="#twitter" class="social"> <i class="fab fa-twitter"></i> </a>
                                        <a href="#instagram" class="social"> <i class="fab fa-instagram"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="teamy_content">
                                <a href="#url" class="teamy_name">Suzan Lois</a>
                                <span class="teamy_post">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="teamy teamy_style1 teamy_mask-circle">
                            <div class="teamy_layout">
                                <div class="teamy_preview">
                                    <img src="/images/team2.jpg" class="radius-image img-fluid w-100"
                                        alt="The demo photo"/>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#facebook" class="social"> <i class="fab fa-facebook-f"></i> </a>
                                        <a href="#twitter" class="social"> <i class="fab fa-twitter"></i> </a>
                                        <a href="#instagram" class="social"> <i class="fab fa-instagram"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="teamy_content">
                                <a href="#url" class="teamy_name">Dora Clan</a>
                                <span class="teamy_post">Chef</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mt-lg-0 mt-5">
                        <div class="teamy teamy_style1 teamy_mask-circle">
                            <div class="teamy_layout">
                                <div class="teamy_preview">
                                    <img src="/images/team3.jpg" class="radius-image img-fluid w-100"
                                        alt="The demo photo"/>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#facebook" class="social"> <i class="fab fa-facebook-f"></i> </a>
                                        <a href="#twitter" class="social"> <i class="fab fa-twitter"></i> </a>
                                        <a href="#instagram" class="social"> <i class="fab fa-instagram"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="teamy_content">
                                <a href="#url" class="teamy_name">Rana Pate</a>
                                <span class="teamy_post">Master Chef</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mt-lg-0 mt-5">
                        <div class="teamy teamy_style1 teamy_mask-circle">
                            <div class="teamy_layout">
                                <div class="teamy_preview">
                                    <img src="/images/team4.jpg" class="radius-image img-fluid w-100"
                                        alt="The demo photo"/>
                                </div>
                                <div class="teamy_back">
                                    <div class="teamy_back-inner">
                                        <a href="#facebook" class="social"> <i class="fab fa-facebook-f"></i> </a>
                                        <a href="#twitter" class="social"> <i class="fab fa-twitter"></i> </a>
                                        <a href="#instagram" class="social"> <i class="fab fa-instagram"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="teamy_content">
                                <a href="#url" class="teamy_name">Rose Alha</a>
                                <span class="teamy_post">Chef</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w3l-clients-1 py-5" id="testimonials">
        <div class="cusrtomer-layout py-lg-5">
            <div class="container py-md-5 py-4">
                <div class="text-center mb-lg-5 mb-4">
                    <h3 class="title-style text-white">
                        What our Customers say's
                    </h3>
                </div>
                <div class="testimonial-row">
                    <div id="owl-demo2" class="owl-two owl-carousel owl-theme mb-md-3 mb-sm-5 mb-4">
                        <div class="item">
                            <div class="testimonial-content">
                                <div class="row testimonial align-items-center">
                                    <div class="col-md-3 testi-des">
                                        <a href="#url" class="testi-img">
                                            <img src="/images/testi1.jpg" alt="" class="radius-image img-fluid"/>
                                        </a>
                                        <div class="peopl align-self">
                                            <h3>Dennis wilson</h3>
                                            <p class="identity">Customer </p>
                                        </div>
                                    </div>
                                    <div class="col-md-9 pl-lg-5 mt-md-0 mt-4 text-left testi-cont">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita
                                                beatae
                                                laudantium Quas minima sunt natus tempore, maiores aliquid modi felis
                                                sequi optio lacinia id ipsum non velit, culpa.
                                                voluptate rem ullam dolore nisi est quasi, doloribus tempora.
                                                est elit. Non quae, fugiat ad libero justo sed amet.</q>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonial-content">
                                <div class="row testimonial align-items-center">
                                    <div class="col-md-3 testi-des">
                                        <a href="#url" class="testi-img">
                                            <img src="/images/testi2.jpg" alt="" class="radius-image img-fluid"/>
                                        </a>
                                        <div class="peopl align-self">
                                            <h3>Dennis wilson</h3>
                                            <p class="identity">Customer </p>
                                        </div>
                                    </div>
                                    <div class="col-md-9 pl-lg-5 mt-md-0 mt-4 text-left testi-cont">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita
                                                beatae
                                                laudantium Quas minima sunt natus tempore, maiores aliquid modi felis
                                                sequi optio lacinia id ipsum non velit, culpa.
                                                voluptate rem ullam dolore nisi est quasi, doloribus tempora.
                                                est elit. Non quae, fugiat ad libero justo sed amet.</q>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonial-content">
                                <div class="row testimonial align-items-center">
                                    <div class="col-md-3 testi-des">
                                        <a href="#url" class="testi-img">
                                            <img src="/images/testi3.jpg" alt="" class="radius-image img-fluid"/>
                                        </a>
                                        <div class="peopl align-self">
                                            <h3>Dennis wilson</h3>
                                            <p class="identity">Customer </p>
                                        </div>
                                    </div>
                                    <div class="col-md-9 pl-lg-5 mt-md-0 mt-4 text-left testi-cont">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita
                                                beatae
                                                laudantium Quas minima sunt natus tempore, maiores aliquid modi felis
                                                sequi optio lacinia id ipsum non velit, culpa.
                                                voluptate rem ullam dolore nisi est quasi, doloribus tempora.
                                                est elit. Non quae, fugiat ad libero justo sed amet.</q>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer />
    </div>
  )
}

export default about
