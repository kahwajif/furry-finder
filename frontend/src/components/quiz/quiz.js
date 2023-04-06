import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { catQuestions } from "./questions";
import { dogQuestions } from "./questions";
import './catQuiz.css'
import './dogQuiz.css'

//change illustration for cat sizes. Instead of making the cat taller, make em longer horizonally
function Quiz() {
    useLayoutEffect(() => {
        scrollIntoView()
    }, [])

    //quiz animal styling depending on animal type
    const dogStyling = useParams().animal === "dog" ? true : false;

    const questions = dogStyling ? dogQuestions : catQuestions;
    const animalLink = dogStyling ? "dog-breeds" : "cat-breeds";
    //quiz buttons
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [backBtnVisible, setbackBtnVisible] = useState(false);

    //option user clicked/answered
    const [optionValue, setOptionValue] = useState(0);

    //State for next/submit button. If on last question, Submit button becomes a link
    const [nextOrSubmitValue, setNextOrSubmitValue] = useState(0);
    //answers
    const [quizAnswers, setQuizAnswers] = useState([
        { question: 0, answer: null },
        { question: 1, answer: null },
        { question: 2, answer: null },
        { question: 3, answer: null },
        { question: 4, answer: null },
        { question: 5, answer: null },
    ]);

    const scrollIntoView = () => {
        window.scrollTo(0, 0)
    }

    //handle next and back buttons
    const handleNextClick = (e) => {
        const btnClicked = document.getElementsByClassName("btn-clicked");
        if (!btnClicked.length) {
            alert("NO BUTTON CLICKED")
        } else {
            //save answers
            let updatedAnswers = [...quizAnswers]
            updatedAnswers[currentQuestion].answer = optionValue;
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
                //change next button JSX
                if (nextQuestion === questions.length - 1) {
                    setNextOrSubmitValue(1);
                }
                setCurrentQuestion(nextQuestion);
                setOptionValue(quizAnswers[nextQuestion].answer !== null ? quizAnswers[nextQuestion].answer : 0);
                //scroll to top of question
                scrollIntoView();
            }
        }

    };

    const handleBackClick = (e) => {

        const nextQuestion = currentQuestion - 1;
        //back button visibility
        if (nextQuestion === 0) {
            setbackBtnVisible(false);
        } else {
            setbackBtnVisible(true);
        }

        //back button logic
        if (nextQuestion > -1) {
            //change next button JSX
            setNextOrSubmitValue(0);

            setOptionValue(quizAnswers[nextQuestion].answer);
            setCurrentQuestion(nextQuestion);
            //scroll to top of question
            scrollIntoView();
        } else {
            //show results
        }

    };

    const handleOptionClick = (e, index) => {

        const allElements = document.querySelectorAll('*');
        allElements.forEach((element) => {
            element.classList.remove('btn-clicked');
        });
        e.currentTarget.classList.add('btn-clicked');
        setOptionValue(index);
    };

    const optionsArray = questions[currentQuestion].options.map((option, index) => {
        return (
            <div className="col-12 mt-4 d-flex justify-content-center" key={option.alt}>
                {/* make it more abstract to work with both cats and dogs */}
                <button className={`options-button btn-animate ${quizAnswers[currentQuestion].answer === index ? "btn-clicked" : ""}`} onClick={e => handleOptionClick(e, index)}>
                    {option.text}
                </button>
            </div>
        );
    });

    const nextOrSubmit = nextOrSubmitValue === 0 ?
        (<button className="btn btn-outline" onClick={(e) => handleNextClick(e)}>Next</button>) :
        (<Link to={'/' + animalLink} state={{ quizAnswers: quizAnswers, animalType: animalLink }}> <button className="btn btn-outline" onClick={(e) => handleNextClick(e)}>Submit</button></Link>)

    return (
        <>
            <div className="page container" style={{ marginTop: "75px" }}>
                <div className={`${dogStyling ? "dog-style" : "cat-style"} card`} id="quiz-card">
                    <div className="card-body mt-3">
                        <div className="text-left ml-4">
                            <span>Question</span>
                            <h3 className="card-title">{currentQuestion + 1}/{questions.length}</h3>
                        </div>
                        <h2 className="card-title">{questions[currentQuestion].title}</h2>
                        <p className="card-text">{questions[currentQuestion].description}</p>
                        <img className={`quiz-image`} src={questions[currentQuestion].options[optionValue].image} alt={questions[currentQuestion].options[optionValue].alt} />
                        <div className="row">{optionsArray}</div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            {backBtnVisible &&
                                <div className="col">
                                    <button className="btn btn-outline" onClick={(e) => handleBackClick(e)}>Back</button>
                                </div>}
                            <div className="col">

                                {nextOrSubmit}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;
