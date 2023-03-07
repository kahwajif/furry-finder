import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { catQuestions } from "./questions";
import { dogQuestions } from "./questions";
import './quiz.css'

function Quiz() {
    useLayoutEffect(() => {
        //auto scroll to top of question card
        const element = document.getElementById('nav');
        const navHeight = document.getElementById('quiz-card');
        element.scrollIntoView(true);
        var scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY - navHeight);
        }
    })

    //quiz animal styling
    const dogStyling = useParams().animal === "dog" ? true : false;

    // for shedding, if they dont want any hair for cats, maybe show the censored cat/blurred out

    const questions = dogStyling ? dogQuestions : catQuestions;

    //quiz buttons
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [backBtnVisible, setbackBtnVisible] = useState(false);

    //range option value
    const [optionValue, setOptionValue] = useState(0);
    const [optionImage, setOptionImage] = useState(questions[currentQuestion].options[0].image);

    //handle next and back buttons
    const handleNextClick = () => {

        const nextQuestion = currentQuestion + 1;
        setOptionImage(questions[nextQuestion].options[0].image)
        setOptionValue(0)
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            //show results
        }

    };

    const handleBackClick = () => {

        const nextQuestion = currentQuestion - 1;
        setOptionImage(questions[nextQuestion].options[0].image)
        setOptionValue(0)
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }

        if (nextQuestion > -1) {
            setCurrentQuestion(nextQuestion);
        } else {
            //show results
        }

    };
    //for option question
    const handleOptionClick = (e) => {
        const allElements = document.querySelectorAll('*');
        if (!dogStyling) {
            allElements.forEach((element) => {
                element.classList.remove('cat-title');
                element.classList.remove('cat-border');
            });
            e.currentTarget.previousSibling.classList.add('cat-title');
            e.currentTarget.firstChild.classList.add('cat-border');
        } else {
            allElements.forEach((element) => {
                element.classList.remove('dog-title');
                element.classList.remove('dog-border');
            });
            e.currentTarget.previousSibling.classList.add('dog-title');
            e.currentTarget.classList.add('dog-border');
        }

    };
    //for range question
    const handleOptionChange = (e, optionText) => {
        let frontCard = document.getElementById("front");
        frontCard.classList.add("gelatin");
        setTimeout(() => {
            setOptionImage(questions[currentQuestion].options[e.target.value].image)
        }, 500);
        setTimeout(() => {
            frontCard.classList.remove("gelatin");
        }, 1000);
        setOptionValue(e.target.value);
    };

    //maybe a measure tape with a cat standing on two feet for "sizes"
    var optionsArray = [];
    // create and style the options
    if (questions[currentQuestion].optionsType === "slider") {
        let sliderLength = questions[currentQuestion].options.length - 1;
        let option = questions[currentQuestion].options[optionValue];

        optionsArray =
            (
                <div className="col mt-4">
                    <div className="col-card">
                        <h4 className="form-label">{option.text}</h4>
                        <div className="card-side" id="front">
                            <img id={option.text} className={`range-image ${dogStyling ? "dog-range-img" : "cat-range-img"}`} src={optionImage} alt={option.alt} />
                        </div>
                    </div>
                    <br></br>
                    <input type="range" className="range" value={optionValue} min="0" max={sliderLength} id="customRange" onChange={e => handleOptionChange(e, option.text)}></input>
                </div>
            );

    } else {
        optionsArray = questions[currentQuestion].options.map((option) => {
            return (
                <div className="col-sm mt-4" key={option.text}>
                    <h4 className={`mb-3`}>{option.text}</h4>
                    {/* make it more abstract to work with both cats and dogs */}
                    <button className={`question-img ${option.style ? "button-color" : ""}`} onClick={e => handleOptionClick(e)}><img src={option.image} alt={option.alt} /></button>
                </div>

            );
        });
    }


    return (
        <>
            <div className="page container" style={{ marginTop: "150px" }}>
                <div className={`${dogStyling ? "dog-style" : "cat-style"} card`} id="quiz-card">
                    <div className="card-body mt-3">
                        <div className="text-left ml-4">
                            <span>Question</span>
                            <h3 className="card-title">{currentQuestion + 1}/{questions.length}</h3>
                        </div>
                        <h2 className="card-title">{questions[currentQuestion].title}</h2>
                        <p className="card-text">{questions[currentQuestion].description}</p>
                        <div className="row">{optionsArray}</div>
                        <br></br>
                        <br></br>
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
