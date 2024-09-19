/* eslint-disable */
import React from "react";
import { Link, withRouter } from "react-router-dom";

const SettingsSidebar = (props) => {
  let pathName = props.location.pathname;
  return (
    <div className="card">
      <div className="card-body">
        <div className="widget settings-menu">
          <ul>
            <li className="nav-item">
              <Link
                to="/settings"
                className={`${
                  "/settings" === pathName
                    ? "active nav-link"
                    : "nav-link"
                }`}
              >
                <i className="far fa-user"></i> <span>Account Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/company-settings"
                className={`${
                  "/company-settings" === pathName
                    ? "active nav-link"
                    : "nav-link"
                }`}
              >
                <i className="fas fa-cog"></i> <span>Company Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/invoice-settings"
                className={`${
                  "/invoice-settings" === pathName
                    ? "active nav-link"
                    : "nav-link"
                }`}
              >
                <i className="far fa-check-square"></i>{" "}
                <span>Invoive Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/invoice-templatesettings"
                className={`${
                  "/invoice-templatesettings" === pathName
                    ? "active nav-link"
                    : "nav-link"
                }`}
              >
                <i className="far fa-list-alt"></i>{" "}
                <span>Invoice Templates</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/paymentmethod"
                className={`${
                  "/paymentmethod" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="far fa-bell"></i> <span>Payment Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/banksetting"
                className={`${
                  "/banksetting" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fas fa-unlock-alt"></i> <span>Bank Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tax-rates"
                className={`${
                  "/tax-rates" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-file-text"></i> <span>Tax Rates</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/plan-pilling"
                className={`${
                  "/plan-pilling" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-credit-card"></i>{" "}
                <span>Plan & Billing</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/two-factor"
                className={`${
                  "/two-factor" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-aperture"></i> <span>Two Factor</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/custom-field"
                className={`${
                  "/custom-field" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-file-text"></i> <span>Custom Fields</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/email-settings"
                className={`${
                  "/email-settings" === pathName
                    ? "active nav-link"
                    : "nav-link"
                }`}
              >
                <i className="fe fe-mail"></i> <span>Email Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/preferences"
                className={`${
                  "/preferences" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fas fa-cog"></i> <span>Preference Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/emailtemplates"
                className={`${
                  "/emailtemplates" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-airplay"></i> <span>Email Templates</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/seosettings"
                className={`${
                  "/seosettings" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-send"></i> <span>SEO Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sasssettings"
                className={`${
                  "/sasssettings" === pathName ? "active nav-link" : "nav-link"
                }`}
              >
                <i className="fe fe-target"></i> <span>SaaS Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SettingsSidebar);
