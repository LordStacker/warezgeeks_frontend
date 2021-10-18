import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login"
import Navbar from "./Navbar";
import Home from "../views/Home";
import injectContext from '../store/appContext';
import RegisterAlumn from "../views/Register_Alumn";
import NewRegister from "../views/New_Register";
import Dashboard from "../views/Dashboard";

const Layout = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register/">
            <RegisterAlumn/>
          </Route>
          <Route path="/newRegister/">
            <NewRegister/>
          </Route>
          <Route path="/dash/">
            <Dashboard/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
    </Router>
  );
};

export default injectContext(Layout);