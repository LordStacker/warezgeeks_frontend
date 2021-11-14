import React, { useState, useContext } from "react";
import banner from '../img/banner.png';
import anom from '../img/anom.png';
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


const Register = () => {
    const { store, actions } = useContext(Context);
    const [profile, setprofile] = useState({
        full_name: "",
        last_name: "",
        email: "",
        password: "",
        knowledge: "",
        phone: "",
        question: "",
        answer: "",
        username: ""
    });
    const [checked, setChecked] = React.useState(false);
    const history = useHistory();
    const HandleChange = (e) => {
        setprofile({ ...profile, [e.target.name]: e.target.value });
        setChecked(!checked)
    }

    return (
        <>
            <div className="col-md-12">
                <img src={banner} className="img-fluid" alt="Responsive img" />
            </div>
            <div className="row">
                <div className="col-md-2 p-2">
                    <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive img" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={(e) => actions.onSubmitRegister(e, profile, history)}>
                        <div className="mb-3">
                            <label for="Name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="full_name" onChange={HandleChange} value={profile.full_name} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="last_name" value={profile.last_name} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="username" value={profile.username} />
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                onChange={HandleChange}
                                value={profile.email} />
                            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con terceros.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" onChange={HandleChange} value={profile.password} />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="phone" value={profile.phone} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Pregunta secreta</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="question" value={profile.question} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Respuesta</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="answer" value={profile.answer} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="estudiante" />
                            <label className="form-check-label">Quiero registrarme como Estudiante</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="profesor"
                                checked={!checked}
                                onChange={HandleChange} />
                            <label className="form-check-label">Quiero registrarme como Profesor</label>
                            <br />
                        </div>
                        <div className="form-label">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    </div>
                                    <input
                                        type="knowledge"
                                        className="form-control"
                                        name="knowledge"
                                        placeholder="Conocimientos (solo habilitado para profesor)"
                                        required="required"
                                        id="knowledge"
                                        disabled={checked} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success rounded-pill">Enviar</button>
            </div>
        </>
    )
}

export default Register;