import React from "react";
import './navBar.css';
import "bootstrap/js/src/collapse.js"; //required for collapse functionality to prevent mixing js scripts
import { Link, /*useLocation*/ } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    // const location = useLocation();
    // console.log(location.pathname + location.hash)
    // if (location.pathname + location.hash === "/#about") {

    // }

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top`} id="nav">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>
                <Link to={"/"} className="navbar-brand">Pet-Finder.net</Link>
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
                        <Link to={"/dog-breeds"} className="nav-link">Dog Breeds</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/cat-breeds"} className="nav-link">Cat Breeds</Link>
                    </li>
                    <li className="nav-item dropdown text-nowrap">
                        <a className="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Features <FontAwesomeIcon icon={faChevronDown} size="sm" data-toggle="collapse" /></a>
                        <div className="collapse dropdown-menu text-center" id="collapseExample">
                            <a href="/#choose-animal" className="dropdown-item">Find Your Pet</a>
                            <Link className="dropdown-item" to={"/"}>Pet Store Locator</Link>
                            <Link className="dropdown-item" to={"/"}>Reverse Image Search</Link>
                            <Link className="dropdown-item" to={"/"}>Food Recommendations</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="/#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contact"} className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;
