import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { data } from "jquery";
import '../styles/card.css';


const CardDocumentation = (props) => {
    const { store, actions } = useContext(Context);
    //{`/detail/document/${props.data.url.match(/\d/g)}`}
    return (
        <>
            <div className="row mt-5">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.data.title}</h5>
                            <p className="card-text">
                                Concept: {props.data.intro}
                            </p>
                            <Link to={"/documentation/" + props.data.id + "/detail"} className="btn btn-primary">More info here!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDocumentation;