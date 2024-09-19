import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { Link } from "react-router-dom";
const Dropdowns = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Dropdowns</h5>
            </div>
          </div>
          {/* /Page Header */}
          {/* Dropdowns */}
          <div className="card">
            <div className="card-body card-buttons">
              <h5 className="card-title">Dropdowns within Text</h5>
              <div className="dropdown">
                <Link
                  className="dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown{" "}
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </div>
              </div>
              <hr />
              <h5 className="card-title">Dropdowns within Buttons</h5>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-success dropdown-toggle me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-warning dropdown-toggle me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <hr />
              <h5 className="card-title">Split button dropdowns</h5>
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle dropdown-toggle-split me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-secondary">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle dropdown-toggle-split me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-info">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle dropdown-toggle-split me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-success">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-success dropdown-toggle dropdown-toggle-split me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-warning">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-warning dropdown-toggle dropdown-toggle-split me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-danger">
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle dropdown-toggle-split me-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Dropdowns */}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
