import React from "react";
import { Link } from "react-router-dom";
import { search } from "../../_components/Imagepath";
import PropTypes from "prop-types";

const ReportModal = ({ show, setShow }) => {
  ReportModal.propTypes = {
    show: PropTypes.any.isRequired, 
    setShow: PropTypes.func.isRequired,
  };
  return (
    <div className={`toggle-sidebar ${show ? "open-filter" : ""}`}>
      <div className="sidebar-layout-filter">
        <div className="sidebar-header">
          <h5>Filter</h5>
          <Link
            to="#"
            className="sidebar-closes"
            onClick={() => setShow(!show)}
          >
            <i className="fa-regular fa-circle-xmark" />
          </Link>
        </div>
        <div className="sidebar-body">
          <form action="#" autoComplete="off">
            {/* Customer */}
            <div className="accordion" id="accordionMain1">
              <div className="card-header-new" id="headingOne">
                <h6 className="filter-title">
                  <Link
                    to="#"
                    className="w-100"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Customer
                    <span className="float-end">
                      <i className="fa-solid fa-chevron-down" />
                    </span>
                  </Link>
                </h6>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample1"
              >
                <div className="card-body-chat">
                  <div className="row">
                    <div className="col-md-12">
                      <div id="checkBoxes1">
                        <div className="form-custom">
                          <input
                            type="text"
                            className="form-control"
                            id="member_search1"
                            placeholder="Search Customer"
                          />
                          <span>
                            <img src={search} alt="img" />
                          </span>
                        </div>
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Orn LLC
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Accent Technology
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Express Advertising
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Lexicon Technologies
                          </label>
                          {/* View All */}
                          <div className="view-content">
                            <div className="viewall-One">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Sumo Soft Limited
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Repair Group Co
                              </label>
                            </div>
                            <div className="view-all">
                              <Link to="#" className="viewall-button-One">
                                <span className="me-2">View All</span>
                                <span>
                                  <i className="fa fa-circle-chevron-down" />
                                </span>
                              </Link>
                            </div>
                          </div>
                          {/* /View All */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Customer */}
            {/* Category */}
            <div className="accordion" id="accordionMain4">
              <div className="card-header-new" id="headingFour">
                <h6 className="filter-title">
                  <Link
                    to="#"
                    className="w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Category
                    <span className="float-end">
                      <i className="fa-solid fa-chevron-down" />
                    </span>
                  </Link>
                </h6>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample4"
              >
                <div className="card-body-chat">
                  <div id="checkBoxes4">
                    <div className="selectBox-cont">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span className="checkmark" /> Advertising
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span className="checkmark" /> Food
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span className="checkmark" /> Marketing
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span className="checkmark" /> Repairs
                      </label>
                      {/* View All */}
                      <div className="view-content">
                        <div className="viewall-Two">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Software
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Stationary
                          </label>
                        </div>
                        <div className="view-all">
                          <Link to="#" className="viewall-button-Two">
                            <span className="me-2">View All</span>
                            <span>
                              <i className="fa fa-circle-chevron-down" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      {/* /View All */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Category */}
            {/* By Status */}
            <div className="accordion accordion-last" id="accordionMain3">
              <div className="card-header-new" id="headingThree">
                <h6 className="filter-title">
                  <Link
                    to="#"
                    className="w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Payment Status
                    <span className="float-end">
                      <i className="fa-solid fa-chevron-down" />
                    </span>
                  </Link>
                </h6>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample3"
              >
                <div className="card-body-chat">
                  <div id="checkBoxes2">
                    <div className="selectBox-cont">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Paid
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Pending
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /By Status */}
            <div className="filter-buttons">
              <button
                type="submit"
                className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary"
              >
                Apply
              </button>
              <button
                type="submit"
                className="d-inline-flex align-items-center justify-content-center btn w-100 btn-secondary"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
