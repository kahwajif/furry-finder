import React, { useState } from "react";
import './navBar.css';
import "bootstrap/js/src/collapse.js"; //required for collapse functionality to prevent mixing js scripts

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const hideNav = () => {
        let dropdown = document.getElementById('collapseExample')
        if (window.scrollY >= 60) {
            setNavbar(true);
            if (window.getComputedStyle(dropdown).display !== "none") {
                dropdown.classList.toggle('show')
            }
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', hideNav);

    return (
        <nav className={`navbar ${navbar ? "scrolled" : ""} navbar-expand-lg navbar-dark bg-dark fixed-top`}>
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>
                <a className="navbar-brand" href="/">
                    Pet-Finder.net
                </a>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">About</a>
                    </li>
                    <li className="nav-item dropdown text-nowrap">
                        <a className="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Features <FontAwesomeIcon icon={faChevronDown} size="sm" data-toggle="collapse" /></a>
                        <div className="collapse dropdown-menu text-center" id="collapseExample">
                            <a className="dropdown-item" href="/">Find Your Pet</a>
                            <a className="dropdown-item" href="/">Pet Store Locator</a>
                            <a className="dropdown-item" href="/">Reverse Image Search</a>
                            <a className="dropdown-item" href="/">Food Recommendations</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
