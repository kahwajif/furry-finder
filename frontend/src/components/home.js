import React from "react";
import './home.css';
import Features from "./home/features";
import About from "./home/about";
import Quiz from "./home/quiz";
import Banner from "./home/banner";
function Home() {
    return (
        <div className="page">
            <Banner />
            <Features />
            <Quiz />
            <About />
        </div>
    );
}

export default Home;
