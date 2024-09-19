
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KanbanBody from "./kanbanBody";
import {
  ArchiveBook,
  Clipboard,
  MessageEdit,
  Recepit,
  Rotate,
  Sort,
  TransactionMinus,
  filterIcon,
} from "../../../_components/Imagepath";
import Header from "../../../layouts/Header";
import Sidebar from "../../../layouts/Sidebar";
import DatePicker from "react-datepicker";
import Select from "react-select";
import AddVendor from "../../../customers/vendors/addVendor";
import { Tooltip } from "antd";

const TicketKanban = () => {

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
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Tickets</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <div className="short-filter">
                        <img className="me-2" src={Sort} alt="Sort by select" />
                        <div className="sort-by">
                          <select className="sort">
                            <option>Sort by: Date</option>
                            <option>Sort by: Date 1</option>
                            <option>Sort by: Date 2</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        onClick={() => setShow(!show)}
                        className="btn btn-filters w-auto popup-toggle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Filter"
                      >
                        <span className="me-2">
                           <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                        </span>
                        Filter{" "}
                      </a>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_ticket"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        New Tickets
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div id="filter_inputs" className="card filter-card">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-info-light">
                        <img src={Recepit} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Total Tickets</div>
                        <div className="dash-counts">
                          <p className="mb-0">$298</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-primary-light">
                        <img src={TransactionMinus} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Completed</div>
                        <div className="dash-counts">
                          <p className="mb-0">$325,215</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-warning-light">
                        <img src={ArchiveBook} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">In Progress</div>
                        <div className="dash-counts">
                          <p className="mb-0">$7825</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-primary-light">
                        <img src={Clipboard} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Unassigned</div>
                        <div className="dash-counts">
                          <p className="mb-0">100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-green-light">
                        <img src={MessageEdit} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">New</div>
                        <div className="dash-counts">
                          <p className="mb-0">$125,586</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-danger-light">
                        <img src={Rotate} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Hold Tickets</div>
                        <div className="dash-counts">
                          <p className="mb-0">$86,892</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/tickets-kanban" className="active">
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
                          <Link to="/tickets-list-closed">Closed</Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <KanbanBody />
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

export default TicketKanban;
