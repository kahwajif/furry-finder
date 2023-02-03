import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { catQuestions } from "./questions";
import { dogQuestions } from "./questions";
import './quiz.css'

function Quiz() {
    // for some reason react displays the page in the middle of the screen
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    //quiz animal styling
    const dogStyling = useParams().animal === "dog" ? true : false;

    // for shedding, if they dont want any hair for cats, maybe show the censored cat/blurred out

    const questions = dogStyling ? dogQuestions : catQuestions;

    //quiz buttons
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [backBtnVisible, setbackBtnVisible] = useState(false);


    const handleNextClick = () => {

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            //setShowScore(true);
            //show results
        }
    };

    const handleBackClick = () => {

        const nextQuestion = currentQuestion - 1;
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }

        if (nextQuestion > -1) {
            setCurrentQuestion(nextQuestion);
        } else {
            //setShowScore(true);
            //show results
        }
    };

    return (
        <>
            <div className="page container" style={{ marginTop: "250px" }}>
                <div className={`${dogStyling ? "dog-style" : "cat-style"} card d-flex my-auto`}>
                    <div className="card-body mt-5">
                        <span>Question {currentQuestion + 1}/{questions.length}</span>
                        <h5 className="card-title">{questions[currentQuestion].title}</h5>
                        <p className="card-text">{questions[currentQuestion].description}</p>
                        <div className="row">
                            {backBtnVisible &&
                                <div className="col">
                                    <button className="btn btn-outline" onClick={() => handleBackClick()}>Back</button>
                                </div>}
                            <div className="col">
                                <button className="btn btn-outline" onClick={() => handleNextClick()}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;
