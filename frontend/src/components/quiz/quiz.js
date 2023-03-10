import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { catQuestions } from "./questions";
import { dogQuestions } from "./questions";
import './catQuiz.css'
import './dogQuiz.css'

//import the styling conditionally,and adjust the style class names below. 
function Quiz() {
    useLayoutEffect(() => {
        //auto scroll to top of question card
        // const navHeight = document.getElementById('nav');
        const element = document.getElementById('quiz-card');
        element.scrollIntoView({ behavior: 'smooth' });
    }, [])

    //quiz animal styling depending on animal type
    const dogStyling = useParams().animal === "dog" ? true : false;

    const questions = dogStyling ? dogQuestions : catQuestions;

    //quiz buttons
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [backBtnVisible, setbackBtnVisible] = useState(false);

    //range option value
    const [optionRangeValue, setOptionRangeValue] = useState(0);
    const [optionCardValue, setOptionCardValue] = useState(0);
    const [optionRangeImage, setOptionRangeImage] = useState(questions[currentQuestion].options[0].image);

    //answers
    const [quizAnswers, setQuizAnswers] = useState([
        { question: 0, answer: null },
        { question: 1, answer: null },
        { question: 2, answer: null },
        { question: 3, answer: null },
        { question: 4, answer: null },
    ]);
    // console.log("quizAnswers: ", quizAnswers)

    //handle next and back buttons
    const handleNextClick = () => {
        //save answers
        let updatedAnswers = [...quizAnswers]
        updatedAnswers[currentQuestion].answer = questions[currentQuestion].optionsType ? optionRangeValue : optionCardValue;
        setQuizAnswers(updatedAnswers);

        const nextQuestion = currentQuestion + 1;

        //back button visibility
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }

        //next question logic
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setOptionRangeImage(questions[nextQuestion].options[0].image)
            setOptionRangeValue(0)

            //scroll to top of question
            const element = document.getElementById('quiz-card');
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            //show results
            console.log("DONE!")
            console.log(quizAnswers)
        }
    };

    const handleBackClick = () => {

        const nextQuestion = currentQuestion - 1;
        //back button visibility
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }

        //back button logic
        if (nextQuestion > -1) {
            //set range image to match the saved answer
            setOptionRangeImage(questions[nextQuestion].optionsType ? questions[nextQuestion].options[quizAnswers[nextQuestion].answer].image : questions[nextQuestion].options[0].image)
            //set range option to saved answer
            if (questions[nextQuestion].optionsType) {
                setOptionRangeValue(quizAnswers[nextQuestion].answer);
            } else {
                setOptionCardValue(quizAnswers[nextQuestion].answer)
            }


            setCurrentQuestion(nextQuestion);
            //scroll to top of question
            const element = document.getElementById('quiz-card');
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            //show results
        }

    };

    //for option question
    const handleOptionCardClick = (e, index) => {

        const allElements = document.querySelectorAll('*');

        allElements.forEach((element) => {
            element.classList.remove('title');
            element.classList.remove('border');
        });
        e.currentTarget.previousSibling.classList.add('title');
        e.currentTarget.firstChild.classList.add('border');

        setOptionCardValue(index);
    };
    //for range question
    const handleOptionRangeChange = (e, optionText) => {
        let frontCard = document.getElementById("front");
        frontCard.classList.add("gelatin");
        setTimeout(() => {
            setOptionRangeImage(questions[currentQuestion].options[e.target.value].image)
        }, 500);
        setTimeout(() => {
            frontCard.classList.remove("gelatin");
        }, 1000);
        setOptionRangeValue(parseInt(e.target.value));
    };

    var optionsArray = [];
    // create and style the options
    //range question
    if (questions[currentQuestion].optionsType === "slider") {
        let sliderLength = questions[currentQuestion].options.length - 1;
        let option = questions[currentQuestion].options[optionRangeValue];

        optionsArray =
            (
                <div className="col mt-4">
                    <div className="col-card">
                        <h4 className={`form-label`}>{option.text}</h4>
                        <div className="card-side" id="front">
                            <img id={option.text} className={`range-image`} src={optionRangeImage} alt={option.alt} />
                        </div>
                    </div>
                    <br></br>
                    <input type="range" className="range" value={optionRangeValue} min="0" max={sliderLength} id="customRange" onChange={e => handleOptionRangeChange(e, option.text)}></input>
                </div>
            );

    } else {//card option question
        optionsArray = questions[currentQuestion].options.map((option, index) => {
            return (
                <div className="col-sm mt-4" key={option.text}>
                    <h4 className={`mb-3 ${quizAnswers[currentQuestion].answer === index ? "title" : ""}`}>{option.text}</h4>
                    {/* make it more abstract to work with both cats and dogs */}
                    <button className={`question-img ${option.style ? "button-color" : ""}`} onClick={e => handleOptionCardClick(e, index)}>
                        <img className={`${quizAnswers[currentQuestion].answer === index ? "border" : ""}`} src={option.image} alt={option.alt} />
                    </button>
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
