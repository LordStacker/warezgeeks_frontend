import React from "react";
import banner from '../img/banner.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="row backgroundimg ">
                <div className="col-md-12">
                    <img src={banner} className="img-fluid" alt="Responsive img" style={{ width: "90rem"}} />
                </div>
            </div>
            <div className="jumbotron container">
                <h1 className="display-4 d-flex justify-content-center">Hola Geeks!</h1>
                <div className="lead d-flex justify-content-center"><p>En Warez Geeks encontraras informaicon que te ayudara en tu camino a la programacion 
                    asi como tambien tener la posibilidad de conectarte con mentores con otros Geeks como tu.</p></div>
                <hr className="my-4" />
                <div className="d-flex justify-content-center"><p>Ingresa o registrate como estudiante o tutor.</p></div>
                <div className="d-grid gap-2 d-md-flex justify-content-center">
                    <Link className="col-md-2 p-2 btn btn-primary btn-lg" to="/login" role="button">Ingresar</Link>
                    <Link className="col-md-2 p-2 btn btn-primary btn-lg" to="/newRegister" role="button">Registrarse</Link>
                </div>
            </div>
        </>
    )
}

export default Home;