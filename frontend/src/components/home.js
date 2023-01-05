import React, { useState } from "react";
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faMagnifyingGlass, faImage, faStore } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [title, showTitle] = useState(false);
    const displayTitle = (e) => {
        const id = e.target.attributes.getNamedItem("id").value;
        if (id == "dogBox") {
            //show titles
        } else { //catBox

        }
    }

    return (
        <div >
            {/* top */}
            <section className="d-flex align-items-center" id="first-section" >
                <div className="container">
                    <div className="row">
                        <div className="col my-auto mr-5 text-left">
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
                        <div className="col">
                            <img className="banner" src="/dog_cat.png" alt="dog and cat" />
                        </div>
                    </div>
                </div>
            </section>
            {/* middle--features*/}
            <section className="d-flex align-items-center" id="featured-services">
                <div className="container">
                    <h2 className="mb-3">Features</h2>
                    <div className="row align-items-center mx-auto">
                        <div className="col-xl-3 col-md-6 feature">
                            <div className=" position-relative">
                                <div className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" /></div>
                                <h4>Find Your Perfect Pet</h4>
                                <p>We can find your perfect pet after you finish a quiz by recommending specific breeds</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 feature">
                            <div className=" position-relative">
                                <div className="icon"><FontAwesomeIcon icon={faImage} size="2xl" /></div>
                                <h4>Reverse Image Search</h4>
                                <p>Upload an image of a cat or dog, and we'll tell you what breed it is!</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 feature">
                            <div className=" position-relative">
                                <div className="icon"><FontAwesomeIcon icon={faStore} size="2xl" /></div>
                                <h4>Pet Store Locator</h4>
                                <p>Find your nearest furry companion</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 feature">
                            <div className=" position-relative">
                                <div className="icon"><FontAwesomeIcon icon={faBowlFood} size="2xl" /></div>
                                <h4>Food Recommendations</h4>
                                <p>We recommend foods specific to your furry friend, and list reasons why they're beneficial</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Choose animal */}
            <section className="d-flex align-items-center" id="choose-animal">
                <div className="container">
                    <h2>
                        Let's Get Started
                    </h2>
                    <p>
                        Choose your animal
                    </p>
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <h4>Adopt a Puppy!</h4>
                            <div className="box" id="dogBox" onMouseOver={displayTitle}>
                                <img className="box_animal" src="/dog_silhouette.png" alt="choose dog" />
                            </div>

                        </div>
                        <div className="col-xl-6 col-md-6">

                            <h4>Adopt a kitten!</h4>
                            <div className="box" id="catBox">
                                <img className="box_animal" src="/cat_silhouette.png" alt="choose cat" />
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            {/* About */}
            < section className="d-flex align-items-center" id="about" >
                <div className="container">
                    <h2>
                        About
                    </h2>
                    <p>
                        Welcome to Perfect Pet Finder! We are a website dedicated to helping families find the perfect pet for their home. We understand that each family
                        is unique and has different needs and preferences when it comes to finding the right pet. That's why we have created a comprehensive quiz that
                        allows you to customize your search based on your family's individual needs and preferences.
                        <br></br><br></br>
                        Our search tool takes into account factors such as size, energy level, grooming needs, and more. We also provide detailed information about each breed
                        so you can make an informed decision. We also provide helpful tips and advice on how to care for your pet, as well as resources such as food recommendations
                        for your pet.
                        <br></br><br></br>
                        At Perfect Pet Finder, we believe that every family deserves to find the perfect pet for their home. We are committed to helping you find the perfect pet
                        for your family and providing you with the resources and information you need to make the best decision. Thank you for choosing Perfect Pet Finder!

                    </p>
                </div>
            </section >
            {/* Footer? */}
        </div >
    );
}

export default Home;
