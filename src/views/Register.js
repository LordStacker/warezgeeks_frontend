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
    const history = useHistory();
    const HandleChange = (e) => {
        setprofile({ ...profile, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="col-md-12">
                <img src={banner} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="row">
                <div className="col-md-2 p-2">
                    <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive image" />
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
                            <label for="Last Name" className="form-label">username</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="username" value={profile.username} />
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={HandleChange} value={profile.email} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" onChange={HandleChange} value={profile.password} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">phone</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="phone" value={profile.phone} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">question</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="question" value={profile.question} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">answer</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="answer" value={profile.answer} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">knowledge</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="knowledge" value={profile.knowledge} />
                        </div>
                        <button type="submit" className="btn btn-primary rounded-pill">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;