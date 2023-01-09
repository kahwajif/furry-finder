import React, { useState, useEffect } from "react";
import './quiz.css';

function Quiz() {
    //add CSS to #choose-animal H4s
    const [boxDogTitle, setBoxDogTitle] = useState(false);
    const [boxCatTitle, setBoxCatTitle] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Pet Finder Home`;
        if (window.innerWidth <= 760) {
            setBoxDogTitle(true);
            setBoxCatTitle(true);
        }
    }, []);

    const titleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = e.target.attributes.getNamedItem("id").value;
        // we need the IDs of the images too because child elements hovered will make e === null
        if (e.type === 'mouseover') {
            if (id === "dogBox" || id === "dog_silhouette") {
                setBoxDogTitle(true);
            } else {
                setBoxCatTitle(true);
            }
        } else {//onMouseLeave
            if (id === "dogBox" || id === "dog_silhouette") {
                setBoxDogTitle(false);
            } else { //catBox
                setBoxCatTitle(false);
            }
        }
    }

    return (
        <section className="d-flex align-items-center" id="choose-animal">
            <div className="container">
                <h2>
                    Take the Quiz!
                </h2>
                <p>
                    Start by choosing a dog or cat
                </p>
                <div className="row">
                    <div className="col col-sm-12 col-xl-6 col-md-6">
                        <h4 className={`${boxDogTitle ? 'box-title' : ''} mt-3`} >Adopt a dog!</h4>
                        <a href="/">
                            <div className="box" id="dogBox" onMouseOver={e => titleToggle(e)} onMouseLeave={e => titleToggle(e)}>
                                <img className="box_animal" id="dog_silhouette" src="/dog_silhouette.png" alt="choose dog" />
                            </div>
                        </a>
                    </div>
                    <div className="col col-sm-12 col-xl-6 col-md-6">
                        <h4 className={`${boxCatTitle ? 'box-title' : ''} mt-3`} >Adopt a cat!</h4>
                        <a href="/">
                            <div className="box" id="catBox" onMouseOver={e => titleToggle(e)} onMouseLeave={e => titleToggle(e)}>
                                <img className="box_animal" id="cat_silhouette" src="/cat_silhouette.png" alt="choose cat" />
                            </div>
                        </a>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Quiz;
