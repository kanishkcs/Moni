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

const SassRegister = (props) => {
  const [eye, seteye] = useState(true);
  const [eye1, seteye1] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };
  const onEyeClick2 = () => {
    seteye1(!eye1);
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
                  Take control of your invoicing process. Sign up for a account
                  today.
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
                        <h3>Create an Account</h3>
                        <p>
                          Sign Up Instantly to get free trail for 14 days!!!
                        </p>
                      </div>
                      <div className="input-block mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
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
                        <label className="form-label">Domain Name</label>
                        <div className="url-text-box">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Domain Name"
                          />
                          <span className="url-text">kanakku.com</span>
                        </div>
                      </div>
                      <div className="input-block mb-3">
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company name"
                        />
                      </div>
                      <div className="d-flex saas-pass-box">
                        <div className="input-block mb-3">
                          <label className="form-control-label">Password</label>
                          <div className="pass-group">
                            <input
                
                              type={eye ? "password" : "text"}
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
                        <div className="input-block mb-3">
                          <label className="form-control-label">
                            Confirm Password
                          </label>
                          <div className="pass-group">
                            <input
                              type={eye1 ? "password" : "text"}
                              className="form-control pass-input-two"
                              placeholder="Confirm Password"
                            />
                            <span
                              onClick={onEyeClick2}
                              className={`fas toggle-password-two ${
                                eye1 ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-block mb-3">
                        <div className="form-check custom-checkbox mb-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="cb1"
                          />
                          <label
                            className="custom-control-label mb-0"
                            htmlFor="cb1"
                          >
                            I agree to Terms of Service and Privacy Policy.
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                    <div className="acc-in">
                      <p>
                        Already have an account?{" "}
                        <Link to="/saas-login"> Sign IN</Link>
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
export default SassRegister;
