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
                            Looking to adopt?
                        </h2>
                        <p className="my-3">
                            Welcome to our pet website! We understand that finding the perfect pet can be overwhelming.
                            That's why we created a quiz to help you find the best dog or cat for you.
                            Our website also has helpful articles on pet care, training, and nutrition.
                            Let us help you find your furry companion today!
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
