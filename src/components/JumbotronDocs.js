import { useEffect, useContext } from "react";
import React from 'react';
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const JumbotronDocs = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDocumentationById(params.id);
    }, [])
    return (
        <>
            <div className="container pt-5">
                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="fst-italic">{!!store.document && store.document.info}</h1>
                        <Link to="/documentation">Go back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JumbotronDocs;