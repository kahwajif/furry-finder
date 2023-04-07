import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatsDataService from "../../services/cats";
import "./animal_profile.css";

function AnimalProfile() {
    //without the initial state, page will be riddled with undefined variables.
    const initialCatState = {
        breed: "",
        description: "",
        image: "",
        size: { length: [], weight: "" },
        origin: "",
        coat: "",
        life_span: ""
    };
    const [cat, setCat] = useState(initialCatState);

    const paramsId = useParams().id;

    const getCat = id => {
        CatsDataService.get(id)
            .then(response => {
                setCat(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getCat(paramsId);
    }, [paramsId]);
    return (
        <div className="page container mt-5">
            {cat ? (
                <div className="profile">
                    <div className="profile-body">
                        <img className="profile-main-image " src={`/cats/${cat.image !== undefined ? cat.image : "Mocha-cropped.png"}`} alt={cat.breed} />
                        <h1 className="profile-title mt-3">{cat.breed}</h1>
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2 mt-3">
                                <b className="profile-stat-title">Origin</b>
                                <br></br>
                                {cat.origin}
                            </div>
                            <div className="col-md-auto mt-3">
                                <hr className="borderTop"></hr>
                                <div className="borderLeft"></div>
                                <div className="borderRight"></div>

                                <b className="profile-stat-title">Life Span</b>
                                <br></br>
                                {cat.life_span}
                                <hr className="borderBottom"></hr>
                            </div>
                            <div className="col col-lg-2 mt-3">
                                <b className="profile-stat-title">Weight</b>
                                <br></br>
                                {cat.size.weight}
                            </div>
                        </div>
                        <p className="profile-text">{cat.description}</p>
                    </div>
                </div>
            ) : (
                <div className="mt-5">
                    <img className="" id="not-found" src="/question-mark-cat.png" alt="cat not found" />
                    <h2>
                        <b>No results found</b>
                    </h2>
                </div>
            )}
        </div>
    );
}

export default AnimalProfile;
