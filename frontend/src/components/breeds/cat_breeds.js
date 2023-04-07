import React, { useState, useEffect } from "react";
import CatsDataService from "../../services/cats";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./breeds.css"


function CatBreeds() {
    const [cats, setCats] = useState([]);
    const [searchBreed, setSearchBreed] = useState("");
    const [filters, setFilters] = useState({})
    let state = useLocation().state;

    useEffect(() => {
        if (state !== null) {
            retrieveQuizResults(state.quizAnswers)
        } else {
            retrieveCats();
        }

    }, [state]);
    const retrieveCats = () => {
        CatsDataService.getAll()
            .then(response => {
                console.log("getAll", response.data);
                setCats(response.data.cats);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveQuizResults = (answers, type) => {
        CatsDataService.getCatsByQuizResults(answers, type)
            .then(response => {
                console.log("getCatsByQuizResults", response.data);
                setFilters(response.data.filters)
                setCats(response.data.cats);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const onChangeSearchBreed = e => {
        const searchBreed = e.target.value;
        const clearSearch = document.getElementById("clear-search");
        if (searchBreed !== "") {
            clearSearch.style.display = "block";
        } else {
            clearSearch.style.display = "none";
        }
        setSearchBreed(searchBreed);
    };

    const handleKeyDownSearchBreed = e => {
        if (e.key === 'Enter') {
            const searchBreed = e.target.value;
            setSearchBreed(searchBreed);
            findByBreed();
        }
    };

    const onClearSearch = () => {
        document.getElementById("clear-search").style.display = "none";;
        setSearchBreed("");
    }

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

    const updateFilters = (e) => {
        let filter = e.target.closest(".btn-dark").textContent.split(" ")[0];
        let newFilters = filters;
        delete newFilters[filter];
        setFilters(newFilters)
        populateFilters(newFilters)
        CatsDataService.getCatsByFilters(newFilters)
            .then(response => {
                console.log("getCatsByFilters", response.data);
                setCats(response.data.cats);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const populateFilters = (filters) => {
        // object destructuring 
        const { first_time_owner, coat, energy, grooming, vocal, length } = filters;
        const filtersText = [
            first_time_owner ? "first_time_owner " : "",
            coat ? "coat " + coat : "",
            energy ? "energy " + energy : "",
            grooming ? "grooming " + grooming : "",
            vocal ? "vocal " + vocal : "",
            length ? "length " + length : "",
        ];

        const populated = filtersText.map((text, index) => {
            if (!text) {
                return "";
            }
            return (
                <div className="col filter-btn" key={index}>
                    <button type="button" className="btn btn-dark">{text}&nbsp;
                        <FontAwesomeIcon icon={faX} size="xs" onClick={e => updateFilters(e)} />
                    </button>
                </div>
            )
        });

        return populated;
    }

    return (
        <div className="page container mt-5">
            <h1 className="page-title">CAT BREEDS</h1>
            {/* Search by breed */}
            <div className="row mb-4">
                <div className="input-group col-lg-12 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by breed"
                        value={searchBreed}
                        onChange={onChangeSearchBreed}
                        onKeyDown={handleKeyDownSearchBreed}
                    />
                    <button type="button" className="btn bg-transparent" id="clear-search" style={{ marginLeft: "-38px", zIndex: 100, display: "none" }}>
                        <FontAwesomeIcon icon={faX} onClick={e => onClearSearch()} />
                    </button>
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
            {/* filters */}
            <div className="row mb-4">
                {filters ? populateFilters(filters) : <></>}
            </div>
            {!cats.length ?
                <div className="mt-5">
                    <img className="" id="not-found" src="/question-mark-cat.png" alt="cat not found" />
                    <h2>
                        <b>No results found</b>
                    </h2>
                </div> : ""}
            {/* cats results */}
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
