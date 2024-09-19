/* eslint-disable */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InvoiceLogo1,
  sass_login,
  sass_login_bg1,
  sass_login_bg2,
  sass_login_bg3,
  sass_login_bg4,
  sass_login_logo,
} from "../_components/Imagepath";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { emailrgx } from "../assets/constant";

const SassLogin = (props) => {
  const [eye, seteye] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };

  return (
    <>
      <div className="main-wrapper">
        {/* Sign In */}
        <div className="row gx-0">
          {/* Banner Content */}
          <div className="col-lg-6">
            <div className="authentication-wrapper">
              <div className="authentication-content">
                <h1>
                  Access to our dashboard, Please login to continue your
                  session!
                </h1>
                <p>Effortless Invoice Management for Your Business</p>
              </div>
              <div className="authen-img">
                <img src={sass_login} alt="" />
              </div>
              <div className="login-bg-img">
                <img
                  src={sass_login_bg1}
                  className="img-fluid vector-bg-one"
                  alt="Img"
                />
                <img
                  src={sass_login_bg2}
                  className="img-fluid vector-bg-two"
                  alt="Img"
                />
                <img
                  src={sass_login_bg3}
                  className="img-fluid vector-bg-three"
                  alt="Img"
                />
                <img
                  src={sass_login_bg4}
                  className="img-fluid vector-bg-four"
                  alt="Img"
                />
              </div>
            </div>
          </div>
          {/* /Banner Content */}
          {/* login Content */}
          <div className="col-lg-6">
            <div className="saas-login-wrapper p-0">
              <div className="login-content">
                <form>
                  <div className="login-userset">
                    <div className="login-logo">
                      <img src={sass_login_logo} alt="img" />
                    </div>
                    <div className="login-card">
                      <div className="login-heading">
                        <h3>Sign in to your account</h3>
                        <p>Welcome back, user</p>
                      </div>
                      <div className="input-block mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div className="input-block mb-3">
                        <label className="form-control-label">Password</label>
                        <div className="pass-group">
                          <input
                            type="password"
                            className="form-control pass-input"
                            placeholder="Password"
                          />
                          <span
                            onClick={onEyeClick}
                            className={`fas toggle-password ${
                              eye ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-0">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-check custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="cb1"
                              />
                              <label
                                className="custom-control-label mb-0"
                                htmlFor="cb1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 text-sm-end mb-3">
                            <a
                              className="forgot-link"
                              href="/forgot-password"
                            >
                              Forgot Your Password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                    <div className="acc-in">
                      <p>
                        Don’t have an account?{" "}
                        <Link to="/saas-register">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Login Content */}
        </div>
        {/* /Sign In */}
      </div>
    </>
  );
};
export default SassLogin;
