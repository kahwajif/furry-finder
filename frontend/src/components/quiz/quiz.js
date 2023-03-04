import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { catQuestions } from "./questions";
import { dogQuestions } from "./questions";
import './quiz.css'

function Quiz() {
    // for some reason react displays the page in the middle of the screen
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

    const handleOptionClick = (e) => {
        const allElements = document.querySelectorAll('*');
        allElements.forEach((element) => {
            element.classList.remove('cat-title');
        });
        e.currentTarget.previousSibling.classList.add('cat-title');
    };

    const handleOptionChange = (e, optionText) => {
        let frontCard = document.getElementById("front");
        frontCard.classList.add("gelatine");
        setTimeout(() => {
            setOptionImage(questions[currentQuestion].options[e.target.value].image)
        }, 500);
        setTimeout(() => {
            frontCard.classList.remove("gelatine");
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
                    <input type="range" className="custom-range" value={optionValue} min="0" max={sliderLength} id="customRange" onChange={e => handleOptionChange(e, option.text)}></input>
                </div>
            );

    } else {
        optionsArray = questions[currentQuestion].options.map((option) => {
            return (
                <div className="col mt-4" key={option.text}>
                    <h4 className={`mb-3`}>{option.text}</h4>
                    <button className={`question-img ${option.style ? "button-color" : ""}`} onClick={e => handleOptionClick(e)}><img src={option.image} alt={option.alt} /></button>
                </div>

            );
        });
    }


    return (
        <>
            <div className="page container" style={{ marginTop: "250px" }}>
                <div className={`${dogStyling ? "dog-style" : "cat-style"} card d-flex my-auto`}>
                    <div className="card-body mt-3">
                        <span>Question {currentQuestion + 1}/{questions.length}</span>
                        <h5 className="card-title">{questions[currentQuestion].title}</h5>
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
