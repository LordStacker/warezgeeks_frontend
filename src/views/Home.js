import React, { useContext } from "react";
import banner from '../img/banner.png';
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
const Home = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="row backgroundimg ">
                <div className="col-md-12">
                    <img src={banner} style={{ width: "90rem" }} className="img-fluid" alt="Responsive img" style={{ width: "90rem" }} />
                </div>
            </div>
            <div className="jumbotron container">
                <h1 className="display-4 d-flex justify-content-center">!Hola Geeks!</h1>
                <div className="lead d-flex justify-content-center"><p>En Warez Geeks encontraras informacion que te ayudara en tu camino a la programacion
                    asi como tambien tener la posibilidad de conectarte con mentores con otros Geeks como tu.</p></div>
                <hr className="my-4" />
                {
                    store.isAuth ?
                        <>
                            <div className="d-flex justify-content-center"><p>Bienvenido
                                <h2>{store.user.full_name}</h2> 
                                te estabamos esperando.</p>
                            </div>
                            <div className="d-flex justify-content-center"><p>Hora de iniciar haz click aqui </p></div>
                            <div className="d-flex justify-content-center" >
                                <button className="col-md-2 p-2 btn btn-secondary btn-lg" onClick={() => {
                                    if (store.user.role == "2") {
                                        history.push("/teacher/availability")
                                    }
                                    else (history.push("/student/view"))
                                }}>Comencemos</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="d-flex justify-content-center"><p>Ingresa o registrate como estudiante o tutor.</p></div>
                            <div className="d-grid gap-2 d-md-flex justify-content-center">
                                <Link className="col-md-2 p-2 btn btn-primary btn-lg" to="/login" role="button">Ingresar</Link>
                                <Link className="col-md-2 p-2 btn btn-primary btn-lg" to="/register/" role="button">Registrarse</Link>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default Home;