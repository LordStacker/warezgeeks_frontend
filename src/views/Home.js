import React from "react";
import baner from '../img/baner.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <img src={baner} className="img-fluid" alt="Responsive image" />
                </div>
            </div>
            <h1>Hello and welcome to Warez Geeks</h1>
        </>
    )
}

export default Home;