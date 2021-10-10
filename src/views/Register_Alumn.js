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
                <div className="col-md-3 p-2">
                    <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive image" />
                </div>
                <div className="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="Name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="Last Name" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="Email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="Repeat Email" class="form-label">Repeat Email</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="Pass" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="Repeat Pass" class="form-label">Repeat Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="Security questions">Security Question</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Favorite fast food?</option>
                                <option>Childhood city?</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="Answer" class="form-label">Answer</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="Phone Number" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlSelect1">Knowledge</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Select Here!</option>
                                <option>Html</option>
                                <option>React</option>
                                <option>Css</option>
                                <option>Python</option>
                                <option>No experience</option>
                            </select>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterAlumn;