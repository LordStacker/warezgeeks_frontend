import React from "react";
import '../styles/login.css';
const Login = () => {
    return <div className="container">
        <div className="bodyshape mx-auto mt-auto">
            <form className="row needs-validation mx-auto login-form" noValidate>
                <div className="row">
                    <div className="col-md-10 mb-2 mx-auto">
                        <label className="form-label">Email</label>
                        <div className="input-group has-validation">
                            <input type="text" className="form-control" id="EmailLogin" placeholder="Email" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mb-2 mx-auto">
                        <label className="form-label">Password</label>
                        <input type="Password" className="form-control" placeholder="password" id="Password" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <button className="btn btn-primary" >Forgot Password</button>
                    </div>    
                </div>
            </form>
        </div>
    </div>
}
export default Login;