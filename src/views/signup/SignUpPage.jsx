/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import  './scss/style.css';


class SignupPage extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r"/>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-user-plus auth-icon">r</i>
              </div>
              <h3 className="mb-4">Sign up</h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
               
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                

                <div className="input-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  />
                   
                </div>
                <button type="submit" className="btn btn-primary shadow-2 mb-4">
                  Sign up
                </button>
                <p className="mb-0 text-muted">
                  Allready have an account?{" "}
                  <a href="auth-signin.html"> Log in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
