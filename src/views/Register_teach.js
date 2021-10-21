import React, { useState } from "react";
import banner from '../img/banner.png';
import anom from '../img/anom.png';
import { useHistory } from "react-router-dom";

const RegisterTeacher = () => {
    const [Profile, setProfile] = useState({
        full_name: "",
        last_name: "",
        email: "",
        password: "",
        knowledge: ""

    });
    const history = useHistory();
    const HandleChange = (e) => {
        setProfile({ ...Profile, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/profile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                full_name: Profile.full_name,
                last_name: Profile.last_name,
                email: Profile.email,
                password: Profile.password,
                knowledge: Profile.knowledge,
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
                <img src={banner} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="row">
                <div className="col-md-2 p-2">
                    <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive image" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="full_name" onChange={HandleChange} value={Profile.full_name} />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={HandleChange} name="last_name" value={Profile.last_name} />
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={HandleChange} value={Profile.email} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" onChange={HandleChange} value={Profile.password} />
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Knowledge</label>
                            <input type="knowledge" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password" onChange={HandleChange} value={Profile.password} />
                        </div>
                        <div className="mb-3">
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    User Type
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li><a className="dropdown-item" href="#">Alumn</a></li>
                                    <li><a className="dropdown-item" href="#">Teacher</a></li>
                                </ul>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterTeacher;