
import React, { useEffect, useState } from "react";
import TicketHead from "./ticketHead";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import AddVendor from "../../customers/vendors/addVendor";
import { Link } from "react-router-dom";

import AddTicket from "../../common/modal/addticket";

const TicketsResolved = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);



  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content tickets container-fluid">
            <TicketHead setShow={setShow} show={show} />

            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/tickets-kanban">
                            All
                          </Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-open">Open</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-resolved" className='active'>Resolved</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-pending">Pending</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-closed">Closed</Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comments">
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">
                        Support for theme
                      </h6>
                      <span className="badge  bg-success-light ms-3">
                        Resolved
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">

                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                  <div className="describe-btn">
                    <span className="badge bg-warning-light text-warning-light me-2">
                      Medium
                    </span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal ms-2 me-2">

                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">
                        Verify your email
                      </h6>
                      <span className="badge  bg-success-light ms-3">
                        Resolved
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">

                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                  <div className="describe-btn">
                    <span className="badge bg-danger-light text-danger-light me-2">
                      High
                    </span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal ms-2 me-2">

                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">
                        Calling for help
                      </h6>
                      <span className="badge  bg-success-light ms-3">
                        Resolved
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">

                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                  <div className="describe-btn">
                    <span className="badge bg-primary-light me-2">Low</span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal ms-2 me-2">

                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">Management</h6>
                      <span className="badge  bg-success-light ms-3">
                        Resolved
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">

                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                  <div className="describe-btn">
                    <span className="badge bg-warning-light text-warning-light me-2">
                      Low
                    </span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal ms-2 me-2">

                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
            </div>
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <AddTicket />
      </div>
    </>
  );
};

export default TicketsResolved;
