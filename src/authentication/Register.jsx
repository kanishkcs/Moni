import React from "react";
import { Link } from "react-router-dom";
import { InvoiceLogo1 } from "../_components/Imagepath";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alphaNumericPattern, emailrgx } from "../assets/constant";
import PropTypes from "prop-types";

const schema = yup
  .object({
    name: yup
      .string()
      .matches(alphaNumericPattern, "please enther valid name")
      .required("Please enter your name"),
    email: yup
      .string()
      .matches(emailrgx, "Email is required")
      .required("Email is required")
      .trim(),
    password: yup
      .string()
      .min(6)
      .max(6)
      .required("Password is required")
      .trim(),

    confirmPassword: yup
      .string()
      .min(6)
      .max(6)
      .required("ConfirmPassword is required")
      .trim(),
  })
  .required();

const Register = (props) => {
  Register.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  const { history } = props;
  const inputValues = {
    email: "admin@dreamguys.co.in",
    password: "123456",
  };

  const { handleSubmit, setError, clearErrors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: inputValues,
  });

  const onSubmit = (data) => {
    if (data.password !== "123456") {
      setError("password", {
        message: "password is mismatch",
      });
    } else {
      clearErrors("password");
      history.push("login");
    }
  };

  return (
    <div className="main-wrapper  login-body">
      <div className="login-wrapper">
        <div className="container">
          <img
            className="img-fluid logo-dark mb-2"
            src={InvoiceLogo1}
            alt="Logo"
          />

          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Name</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Email Address</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">Password</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">
                      Confirm Password
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block mb-0">
                    <button className="btn btn-lg btn-block btn-primary w-100">
                      <Link to="/login">Register</Link>
                    </button>
                  </div>
                </form>
                {/* /Form */}

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                {/* Social Login */}
                <div className="social-login">
                  <span>Register with</span>
                  <Link to="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="google">
                    <i className="fab fa-google"></i>
                  </Link>
                </div>
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
