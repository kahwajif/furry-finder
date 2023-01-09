import React from "react";
import './banner.css';

function Banner() {

    return (
        <section className="d-flex align-items-center" id="first-section" >
            <div className="container">
                {/* <img id="footprints" src="/footsteps.jpg" alt="dog and cat" /> */}
                <div className="row">
                    <div className="col-xl-6 col-md-12 my-auto text-left">
                        <h2>
                            Looking for a new furry friend?
                        </h2>
                        <p className="my-3">
                            Look no further! Our website will find the perfect match for your lifestyle and home.
                            Take the quiz, and you'll find the <span>purr-fect</span> or <span> paw-some</span> companion for your family.
                        </p>
                        <div className="mt-3 d-flex justify-content-center">
                            <a href="#choose-animal" className="btn-grad">Take the quiz!</a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <img className="banner" src="/dog_cat.png" alt="dog and cat" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
