import React, { useState, useEffect } from "react";
import CatsDataService from "../../services/cats";
import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandDots } from "@fortawesome/free-solid-svg-icons";
import "./breeds.css"

// Suitable for: Single people, families?? add to database
function CatBreeds() {
    const [cats, setCats] = useState([]);
    const [searchBreed, setSearchBreed] = useState("");

    var state = useLocation().state;

    useEffect(() => {
        if (state !== null) {
            retrieveQuizResults(state.quizAnswers, state.animalType)
        } else {
            retrieveCats();
        }

    }, [state]);

    const retrieveCats = () => {
        CatsDataService.getAll()
            .then(response => {
                console.log(response.data);
                setCats(response.data.cats);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveQuizResults = (answers, type) => {
        CatsDataService.getQuizResults(answers, type)
            .then(response => {
                console.log(response.data);
                setCats(response.data.cats);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const onChangeSearchBreed = e => {
        const searchBreed = e.target.value;
        setSearchBreed(searchBreed);
    };

    const find = (query, by) => {
        CatsDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setCats(response.data.cats);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByBreed = () => {
        find(searchBreed, "breed");
    };

    return (
        <div className="page container mt-5">
            <h1 className="pt-3">CAT BREEDS</h1>
            <div className="row mb-4">
                <div className="input-group col-lg-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by breed"
                        value={searchBreed}
                        onChange={onChangeSearchBreed}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByBreed}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                {cats.map((cat, index) => {
                    // const legendIcons = `${cat.characteristics.hypoallergenic ? (<FontAwesomeIcon icon={faHandDots} />) : ""} ${cat.characteristics.kid_friendly ? "bruh" : ""}`;
                    return (

                        <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={index}>
                            <Link to={"/"}>
                                <div className="card text-white card-has-bg click-col" style={{ backgroundImage: `url(/cats/${cat.image ? cat.image : "Mocha-cropped.png"})` }}>
                                    <img className="card-img d-none" src={`/cats/${cat.image !== "" ? cat.image : "Mocha-cropped.png"}`} alt={cat.breed} />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            {/* <h5 className="card-meta mb-0">{legendIcons}</h5> */}
                                            <h5 className="card-title mt-0">{cat.breed}</h5>
                                            <p className="card-text">
                                                {/* <strong>Coat: </strong>{cat.coat}<br /> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    );
                })}


            </div>
        </div>
    );
}

export default CatBreeds;
