import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import CardDocumentation from './CardDocumentation';

const Documentation = () => {
    //using flux
    const { store, actions } = useContext(Context);
    //States
    useEffect(() => {
        actions.getDocumentation();
    }, [])
//document instead of documents
    return (
        <>
            <div className="row">
                <h1 className="neonText">Documentation</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-3 pt-2 mb-3">
                    {store.Documents.map((Document, i) => <div className="col-md-3"><CardDocumentation data={Document} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM01QOS1X1N5Q0l7x4-aMrpcpGXNXegxanuZ53eL6fZRX2IQ8ILTyV_Uy4eRpbKrzrpg&usqp=CAU" /></div>)}
                </div>
            </div>
        </>
    );
}

export default Documentation;