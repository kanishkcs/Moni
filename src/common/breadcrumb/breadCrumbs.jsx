/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { filterIcon } from "../../_components/Imagepath";

const Breadcrumbs = ({ title, show, setShow }) => {
  const location = useLocation();

  let addButton = null;

  const toggleShow = () => {
    setShow(!show);
  };

  if (location.pathname === "/payment-report") {
    addButton = (
      <div className="page-header">
        <div className="content-page-header ">
          <h5>{title}</h5>
          <div className="list-btn">
            <ul className="filter-list">
              <li>
                <Link
                  to="#"
                  className="btn btn-filters w-auto popup-toggle me-2"
                  onClick={toggleShow}
                >
                  <span className="me-2">
                    {/* <FeatherIcon icon="filter" /> */}
                    <img src={filterIcon} />
                  </span>
                  Filter{" "}
                </Link>
              </li>

              <li className="">
                <div className="dropdown dropdown-action">
                  <Link
                    to="#"
                    className="btn-filters me-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>
                      <FeatherIcon icon="download" />
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <ul className="d-block">
                      <li>
                        <Link
                          className="d-flex align-items-center download-item"
                          to="#"
                          download=""
                        >
                          <i className="far fa-file-pdf me-2" />
                          PDF
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="d-flex align-items-center download-item"
                          to="#"
                          download=""
                        >
                          <i className="far fa-file-text me-2" />
                          CVS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link className="btn-filters" to="#">
                  <span>
                    <FeatherIcon icon="printer" />
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    addButton = (
      <div className="page-header">
        <div className="content-page-header ">
          <h5>{title}</h5>
          <div className="list-btn">
            <ul className="filter-list">
              <li>
                <Link
                  to="#"
                  className="btn btn-filters w-auto popup-toggle me-2"
                  onClick={toggleShow}
                >
                  <span className="me-2">
                    {/* <FeatherIcon icon="filter" /> */}
                    <img src={filterIcon} />
                  </span>
                  Filter{" "}
                </Link>
              </li>

              <li className="">
                <div className="dropdown dropdown-action">
                  <Link
                    to="#"
                    className="btn-filters me-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>
                      <FeatherIcon icon="download" />
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <ul className="d-block">
                      <li>
                        <Link
                          className="d-flex align-items-center download-item"
                          to="#"
                          download=""
                        >
                          <i className="far fa-file-pdf me-2" />
                          PDF
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="d-flex align-items-center download-item"
                          to="#"
                          download=""
                        >
                          <i className="far fa-file-text me-2" />
                          CVS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link className="btn-filters" to="#">
                  <span>
                    <FeatherIcon icon="printer" />
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  console.log("Breadcrumb", { show });
  return (
    <>
      <div className="page-header">{addButton}</div>
    </>
  );
};

export default Breadcrumbs;
