import React from "react";
import './features.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faMagnifyingGlass, faImage, faStore, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Features() {


    return (
        <section className="d-flex align-items-center" id="featured-services">
            <div className="container">
                <h2 className="mb-3">Features</h2>
                <div className="row align-items-center mx-auto justify-content-center">
                    <div className="col-xl-3 col-md-6 feature">
                        <div className="position-relative">
                            <div className="icon-corner"><FontAwesomeIcon icon={faArrowRight} size="xl" /></div>
                            <div className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" /></div>
                            <h4>Find Your Perfect<br></br>Pet</h4>
                            <p>We can find your perfect pet after you finish a quiz by recommending specific breeds</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 feature">
                        <div className="position-relative">
                            <div className="icon-corner"><FontAwesomeIcon icon={faArrowRight} size="xl" /></div>
                            <div className="icon"><FontAwesomeIcon icon={faImage} size="2xl" /></div>
                            <h4>Reverse Image<br></br>Search</h4>
                            <p>Upload an image of a cat or dog, and we'll tell you what breed it is!</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 feature">
                        <div className="position-relative">
                            <div className="icon-corner"><FontAwesomeIcon icon={faArrowRight} size="xl" /></div>
                            <div className="icon"><FontAwesomeIcon icon={faStore} size="2xl" /></div>
                            <h4>Pet Adoption Locator</h4>
                            <p>Find the nearest adoption center with optional filters to find your perfect friend</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 feature">
                        <div className="position-relative">
                            <div className="icon-corner"><FontAwesomeIcon icon={faArrowRight} size="xl" /></div>
                            <div className="icon"><FontAwesomeIcon icon={faBowlFood} size="2xl" /></div>
                            <h4>Food Recommendations</h4>
                            <p>We recommend foods specific to your furry friend, and list reasons why they're beneficial</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 feature">
                        <div className="position-relative">
                            <div className="icon-corner"><FontAwesomeIcon icon={faArrowRight} size="xl" /></div>
                            <div className="icon"><FontAwesomeIcon icon={faBowlFood} size="2xl" /></div>
                            <h4>Food Recommendations</h4>
                            <p>We recommend foods specific to your furry friend, and list reasons why they're beneficial</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
