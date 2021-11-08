import React from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles/logout.css';

const Navbar = () => {
  const history = useHistory();
  const logOut = () => {
    localStorage.clear()
    history.push("/")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Warez Geeks</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              localStorage.getItem("isAuth") ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/dash/">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/documentation">Documentacion</Link>
                  </li>
                  <li className="nav-item logout">
                    <button className="btn btn-primary rounded-pill" onClick={logOut}>Log out</button>
                  </li>
                  
                </>

                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/documentation">Documentacion</Link>
                  </li>
                </>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar