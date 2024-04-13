// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';




const nav = () => {
  return (

    
   <div>
 <header id="site-header" class="fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg stroke">
                <h1>
                    <a class="navbar-brand" href="index.html">
                        Foodi<span>e</span> Blog<i class="fas fa-utensils"></i>
                    </a>
                </h1>
              
                <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mx-lg-auto">
                        <li class="nav-item">
                        <Link to="/Home">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/about">About</Link>
                        </li>
                        <li class="nav-item active">
                        <Link to="/Contact">contact</Link>
                        </li>
                    </ul>
                </div>
             
                <div class="search-right ml-lg-3">
                    <div class="search-container">
                        <form action="/search" method="get">
                            <input class="search expandright" id="searchright" type="search" name="q"
                                placeholder="Search"/>
                            <label class="button searchbutton" for="searchright"><i class="fas fa-search"></i></label>
                        </form>
                    </div>
                </div>
              
                <div class="cont-ser-position">
                    <nav class="navigation">
                        <div class="theme-switch-wrapper">
                            <label class="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div class="mode-container">
                                    <i class="gg-sun"></i>
                                    <i class="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
             
            </nav>
        </div>
    </header>


   </div>
  );
};

export default nav;
