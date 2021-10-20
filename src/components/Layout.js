import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login"
import Navbar from "./Navbar";
import Home from "../views/Home";
<<<<<<< HEAD
import injectContext from '../store/appContext';
import RegisterAlumn from "../views/Register_Alumn";
import NewRegister from "../views/New_Register";
=======
import Register from "../views/Register";
>>>>>>> cee83706ee6f286fbdf05db53d8943d18ff633e7
import Dashboard from "../views/Dashboard";
import TeacherAvailability from "../views/TeacherAvailability";


const Layout = () => {
  //<Route path="/teacher/availability">
  // <TeacherAvailability/>
  // </Route>

  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
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
=======
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register/">
          <Register />
        </Route>
        <Route path="/dash/">
          <Dashboard />
        </Route>
        <Route path="/teacher/availability">
          <TeacherAvailability />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route render={() => <h1>Not found</h1>}></Route>
      </Switch>
>>>>>>> cee83706ee6f286fbdf05db53d8943d18ff633e7
    </Router>
  );
};

export default Layout;