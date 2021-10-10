import React, { useState } from "react";
import baner from '../img/baner.png';
import anom from '../img/anom.png';
import { useHistory } from "react-router-dom";

const RegisterAlumn = () => {
    const [Profile, setProfile] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        question: "",
        answer: "",
        knowledge: "",
        role: "",

    });
    const history = useHistory();
    const HandleChange = (e) => {
        setProfile({ ...Profile, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/Profile", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Profile.name,
                lastname: Profile.lastname,
                email: Profile.email,
                password: Profile.password,
                question: Profile.question,
                answer: Profile.answer,
                knowledge: Profile.knowledge,
                role: "student",
            })
        }).then(resp => {
            if (resp.status === 200) {
                history.push('/dash/')
                return resp.json();
            }
            else alert("There was a mistake")
        })
            .catch(error => {
                console.error("there was an error!!", error);
            })
    };
    return (
        <>
            <div className="col-md-12">
                <img src={baner} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="row">
                <div className="col-md-2 p-2">
                    <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive image" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" onChange={HandleChange} value={Profile.name} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="lastname" value={Profile.lastname} />
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={HandleChange} value={Profile.email} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Repeat Email" className="form-label">Repeat Email</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" onChange={HandleChange} value={Profile.password} />
                        </div>
                        <div className="mb-3">
                            <label for="Repeat Pass" className="form-label">Repeat Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="Repeat Email" className="form-label">Security Question</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="question" value={Profile.question} />
                        </div>
                        <div className="mb-3">
                            <label for="Answer" className="form-label">Answer</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="answer" value={Profile.answer} />
                        </div>
                        <div className="mb-3">
                            <label for="Repeat Email" className="form-label">Knowledge</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="knowledge" value={Profile.knowledge} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterAlumn;