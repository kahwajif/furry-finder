import React from "react";
import './breeds.css';
function DogBreeds() {
    return (
        <div className="page container mt-5">
            <h4>DOG BREEDS</h4>
            <div className="card mt-5" style={{ width: "18rem" }}>
                <img className="card-img-top" src="/logo192.png" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default DogBreeds;
