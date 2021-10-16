import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login"
import Navbar from "./Navbar";
import Home from "../views/Home";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import TeacherAvailability from "../views/TeacherAvailability";


const Layout = () => {
  //<Route path="/teacher/availability">
           // <TeacherAvailability/>
         // </Route>

  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register/">
            <Register/>
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

export default Layout;