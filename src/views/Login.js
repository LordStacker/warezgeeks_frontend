import React, { useState, useContext } from "react";
import '../styles/login.css';
import { Link, useHistory } from "react-router-dom";


const Login = () => {
    //const { store, actions } = useContext(Context);
    const [User, setUser] = useState({
        email: "",
        password: "",
    });
    const history = useHistory();
    const HandleChange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: User.email,
                password: User.password
            })
        })
            .then(resp => {
                if (resp.status === 200) {
                    history.push('/dash/')
                    return resp.json();
                }
                else alert("There was a mistake")
            })
            .catch(error => {
                console.error("there was an error!!", error);
            })

    }
    return <div className="container p-2">
        <div className="bodyshape mx-auto mt-auto">
            <h2>Login User</h2>
            <form className="row needs-validation mx-auto login-form" noValidate onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-10 mb-2 mx-auto">
                        <div className="input-group has-validation">
                            <input type="text" className="form-control" id="EmailLogin" placeholder="Email" name="email" onChange={HandleChange} value={User.email} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mb-2 mx-auto">
                        <input type="Password" className="form-control" placeholder="password" id="Password" name="password" onChange={HandleChange} value={User.password} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <button className="btn btn-primary rounded-pill" type="submit">Login</button>
                    </div>
                    <div className="col-md-6 mb-2">
                        <Link className="btn btn-primary rounded-pill" to="/register/">register</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <Link className="btn btn-primary rounded-pill " to="/">Forgot Password</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
}
export default Login;