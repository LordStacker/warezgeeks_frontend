import React from "react";
import baner from '../img/baner.png';
import anom from '../img/anom.png';

const RegisterAlumn = () => {
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
                    <form>
                        <div className="mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Repeat Email" className="form-label">Repeat Email</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="Repeat Pass" className="form-label">Repeat Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="Security questions">Security Question</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Security Questions Select Here</option>
                                <option>Favorite fast food?</option>
                                <option>Childhood city?</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="Answer" className="form-label">Answer</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="Phone Number" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleFormControlSelect1">Knowledge</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Knowledge Select Here</option>
                                <option>Html</option>
                                <option>React</option>
                                <option>Css</option>
                                <option>Python</option>
                                <option>No experience</option>
                            </select>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" for="Agreement">Agree info</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterAlumn;