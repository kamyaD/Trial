import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "../views/index";
<<<<<<< HEAD
import SignUpPage from "../views/signup";
=======
import SignupPage from "../views/signup";
>>>>>>> f57ddecc6b2dc5bdf6ecafcf016c540af6683e7a

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={IndexPage} />
<<<<<<< HEAD
      <Route exact path="/signup" component={SignUpPage} />
=======
      <Route exact path="/signup" component={SignupPage} />
>>>>>>> f57ddecc6b2dc5bdf6ecafcf016c540af6683e7a
    </Switch>
  </Router>
);
