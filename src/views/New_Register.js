import React, { useState } from "react";
import banner from '../img/banner.png';
import anom from '../img/anom.png';
import { useHistory } from "react-router-dom";

const NewRegister = () => {



    return(
        <>
        <div className="col-md-12">
                <img src={banner} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="row">
                <div className="col-md-2 p-2">
                    <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive image" />
                </div>
                <div className="col-md-6">
                        <div className="mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="full_name" />
                        </div>
                        <div className="mb-3">
                            <label for="Last Name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"  name="last_name"  />
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label">Repeat Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password"   />
                        </div>
                        <div className="mb-3">
                            <label for="Pass" className="form-label">Repeat Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="password"   />
                        </div>
                        <div className="mb-3">
                            <label for="Phone" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleInputPhone1" aria-describedby="emailHelp" name="phone"   />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        
        
        
        
        
        
        
        
        </>
    )
}

export default NewRegister;