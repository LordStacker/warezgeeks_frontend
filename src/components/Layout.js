import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../views/Login"
import Navbar from "./Navbar";
import Home from "../views/Home";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import TeacherAvailability from "../views/Teacher_Availability";
import Documentation from "./Documentation";
import PrivateRoute from "./Privateroute";
import JumbotronDocs from "./JumbotronDocs";


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
          <Register />
        </Route>
        <PrivateRoute path="/dash" component={() => <Dashboard />} />
        <Route path="/Login">
          <Login />
        </Route>
        <PrivateRoute path="/teacher/availability" component={() => <TeacherAvailability />} />
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/documentation/:id/detail" component={() => <JumbotronDocs />}>
          <JumbotronDocs />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>

        <Route render={() => <h1>Not found</h1>}></Route>
      </Switch>
    </Router>
  );
};

export default Layout;