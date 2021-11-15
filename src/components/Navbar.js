import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const logOut = () => {
    localStorage.clear()
    actions.logOut()
    history.push("/")
  }
  console.log(store.user)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Warez Geeks</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                store.isAuth ?
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/documentation">Documentación</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/contact">Contáctanos</Link>
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
                      <Link className="nav-link active" aria-current="page" to="/contact">Contáctanos</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/documentation">Documentación</Link>
                    </li>
                  </>
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar