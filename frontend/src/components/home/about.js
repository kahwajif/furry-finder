import React from "react";
import './about.css';

function About() {
    return (
        <section className="d-flex align-items-center" id="about" >
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
    );
}

export default About;
