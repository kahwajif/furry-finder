import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (

        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <h4>Features</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">Find Your Pet</a></li>
                                    <li><a href="/">Pet Store Locator</a></li>
                                    <li><a href="/">Reverse Image Search</a></li>
                                    <li> <a href="/">Food Recommendations</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <h4>Pet Finder</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">Accessibility</a></li>
                                    <li><a href="/">Disclaimer</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-pad">
                                <h4>Contact Us</h4>
                                <ul className="list-unstyled">
                                    <li><a href="mailto:kahwajiferas@gmail.com">Email</a></li>
                                    <li><a href="/">Calendly</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>Follow Us</h4>
                            <ul className="social-network">
                                <li><a href="/" title="Discord"><FontAwesomeIcon icon={faDiscord} size="xl" /></a></li>
                                <li><a href="/" title="Twitter"><FontAwesomeIcon icon={faTwitter} size="xl" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 copy">
                            <p className="text-center">&copy;{new Date().getFullYear()} - Pet-Finder.net | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
