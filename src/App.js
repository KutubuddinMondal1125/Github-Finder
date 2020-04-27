import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import "./App.css";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Link to="/">
              <Navbar title="Github Finder" icon="fa fa-github" />
            </Link>
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
