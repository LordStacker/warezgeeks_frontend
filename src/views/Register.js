import React, { useState, useContext } from "react";
import banner from '../img/banner.png';
import anom from '../img/anom.png';
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Select from 'react-select';


const Register = () => {
    const { store, actions } = useContext(Context);
    const [profile, setprofile] = useState({
        full_name: "",
        last_name: "",
        email: "",
        password: "",
        knowledge: [],
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

    const optionKnowledge = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'Bootstrap', label: 'Bootstrap'},
        { value: 'React', label: 'React'},
        { value: 'JavaScript', label: 'JavaScript'},
        { value: 'Python', label: 'Python'}
    ]

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
                            <label for="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="full_name" onChange={HandleChange} value={profile.full_name} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="last_name" value={profile.last_name} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Username</label>
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
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" onChange={HandleChange} value={profile.password} />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="phone" value={profile.phone} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Question</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="question" value={profile.question} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Answer</label>
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
                            <p></p>
                        </div>
                        <div className="dropdown">
                            <button 
                            className="btn btn-success dropdown-toggle rounded-pill"
                            type="button" 
                            id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                            onChange={HandleChange}
                            name="knowledge"
                            checked={!checked}
                            disabled={checked}
                            value={profile.knowledge}
                            >
                                Knowledge
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Python</a></li>
                                <li><a className="dropdown-item" href="#">Java Script</a></li>
                                <li><a className="dropdown-item" href="#">React</a></li>
                            </ul>
                        <p></p>

                        </div>
                        <label htmlFor="knowledge">Conocimientos</label>
                        <Select
                            isMulti
                            className="basic-multi-select"
                            id="knowledge"
                            name="knowledge"
                            placeholder="Seleccione"
                            options={optionKnowledge}
                            onChange={(e) => setprofile("knowledge", e)}
                            checked={!checked}
                            disabled={checked}
                            value={profile.knowledge}
                        />


                        <button type="submit" className="btn btn-success rounded-pill">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;