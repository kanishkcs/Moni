
import React, { useEffect, useState } from "react";
import TicketHead from "./ticketHead";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import AddVendor from "../../customers/vendors/addVendor";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

const Tickets = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [startDate, setDate] = useState(new Date())
  const [startDate1, setDate1] = useState(new Date())
  const [startDate2, setDate2] = useState(new Date())

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const handleChange = (date) => {
    setDate(date);
  };
  const handleChange1 = (date) => {
    setDate1(date);
  };
  const handleChange2 = (date) => {
    setDate2(date);
  };

  const priorityOptions = [
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
    { value: 'high', label: 'High' },
  ];

  const statusOptions = [
    { value: 'open', label: 'Open' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'pending', label: 'Pending' },
    { value: 'closed', label: 'Closed' },
  ];



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
                          <Link to="/tickets-list-resolved">Resolved</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-pending">Pending</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-closed" className='active'>Closed</Link>
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
                      <span className="badge badge-pill bg-success-light ms-3">
                        Paid
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
                    <span className="badge bg-warning-light text-warning-light ms-2">
                      Medium
                    </span>
                    <span className="badge badge-gray-outline ms-2">#4987</span>
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
                      <span className="badge bg-primary-light ms-3">
                        Overdue
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
                    <span className="badge bg-danger-light text-danger-light ms-2">
                      High
                    </span>
                    <span className="badge badge-gray-outline ms-2">#4987</span>
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
                      <span className="badge bg-warning-light text-warning-light ms-3">
                        Pending
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
                    <span className="badge bg-primary-light ms-2">Low</span>
                    <span className="badge badge-gray-outline ms-2">#4987</span>
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
                      <span className="badge bg-danger-light text-danger-light ms-3">
                        Cancelled
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
                    <span className="badge bg-warning-light text-warning-light ms-2">
                      Low
                    </span>
                    <span className="badge badge-gray-outline ms-2">#4987</span>
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

        <div
          className="modal custom-modal modal-lg fade"
          id="add_ticket"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Ticket</h4>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="input-block mb-3">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="input-block mb-3">
                      <label>Assigned Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Assigned Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="input-block mb-3">
                      <label>Assigned Date</label>
                      <div className="cal-icon cal-icon-info">
                        <DatePicker
                          selected={startDate}
                          onChange={handleChange}
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="input-block mb-3">
                      <label>Created Date</label>
                      <div className="cal-icon cal-icon-info">
                        <DatePicker
                          selected={startDate1}
                          onChange={handleChange1}
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="input-block mb-3">
                      <label>Due Date</label>
                      <div className="cal-icon cal-icon-info">
                        <DatePicker
                          selected={startDate2}
                          onChange={handleChange2}
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="input-block mb-3">
                      <label>Assignee Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Assignee Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="input-block mb-0">
                      <label>Priority</label>
                      <Select
                        options={priorityOptions}
                        placeholder="Select Priority"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="input-block mb-0">
                      <label>Status</label>
                      <Select
                        options={statusOptions}
                        placeholder="Select Status"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </a>
                <a
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Tickets;
