import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterIcon } from "../_components/Imagepath";
import Select from "react-select";
import SettingsSidebar from "../layouts/SettingsSidebar";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const CustomField = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [show, setShow] = useState(false);
  const planOptions = [
    { value: 1, label: "Companies" },
    { value: 2, label: "Ledger" },
    { value: 2, label: "Packages" },
  ];
  const pageOptions = [
    { value: 1, label: "Text" },
    { value: 2, label: "Text Area" },
    { value: 2, label: "Select" },
    { value: 2, label: "Phone Number" },
    { value: 2, label: "Email" },
  ];
  return (
    <div>
      <>
        <Header />
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* /Page Header */}
            <div className="row">
              <div className="col-xl-3 col-md-4">
                <SettingsSidebar />
              </div>
              <div className="col-xl-9 col-md-8">
                <div className="page-header">
                  <div className="content-page-header">
                    <h5>Custom Fields</h5>
                    <div className="page-content">
                      <div className="list-btn">
                        <ul className="filter-list">
                          <li>
                            <Link
                              to="#" 
                              className="btn btn-filters w-auto popup-toggle"
                              onClick={() => setShow(!show)}
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Filter"
                            >
                              <span className="me-2">
                                <img src={filterIcon} alt="filter" />
                              </span>
                              Filter{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="btn btn-primary"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_custom"
                            >
                              <i
                                className="fa-solid fa-plus"
                                aria-hidden="true"
                              />
                              Add New
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                {/* Table */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card-table">
                      <div className="card-body">
                        <div className="table-responsive">
                          <div className="companies-table filed">
                            <table className="table table-center table-hover datatable">
                              <thead className="thead-light">
                                <tr>
                                  <th>#</th>
                                  <th>Modules</th>
                                  <th>Label</th>
                                  <th>Type</th>
                                  <th>Default Value</th>
                                  <th>Required</th>
                                  <th className="no-sort">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Plan</td>
                                  <td>Name</td>
                                  <td>Text</td>
                                  <td>Enter Name</td>
                                  <td>Required</td>
                                  <td className="d-flex align-items-center">
                                    <Link
                                      className=" btn-action-icon me-2"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit"
                                    >
                                      <i className="fe fe-edit" />
                                    </Link>
                                    <Link
                                      className=" btn-action-icon"
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="fe fe-trash-2" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Companies</td>
                                  <td>Email</td>
                                  <td>Email</td>
                                  <td>Enter Email</td>
                                  <td>Required</td>
                                  <td className="d-flex align-items-center">
                                    <Link
                                      className=" btn-action-icon me-2"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit"
                                    >
                                      <i className="fe fe-edit" />
                                    </Link>
                                    <Link
                                      className=" btn-action-icon"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="fe fe-trash-2" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Ledger</td>
                                  <td>Phone</td>
                                  <td>Text</td>
                                  <td>Enter Phone</td>
                                  <td>Required</td>
                                  <td className="d-flex align-items-center">
                                    <Link
                                      className=" btn-action-icon me-2"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit"
                                    >
                                      <i className="fe fe-edit" />
                                    </Link>
                                    <Link
                                      className=" btn-action-icon"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="fe fe-trash-2" />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Packages</td>
                                  <td>Comments</td>
                                  <td>Textarea</td>
                                  <td>Enter Comments</td>
                                  <td>Required</td>
                                  <td className="d-flex align-items-center">
                                    <Link
                                      className=" btn-action-icon me-2"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit"
                                    >
                                      <i className="fe fe-edit" />
                                    </Link>
                                    <Link
                                      className=" btn-action-icon"
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="fe fe-trash-2" />
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Table */}
              </div>
            </div>
            {/* /Page Wrapper */}
            {/* Add Asset */}
            <div className="toggle-sidebar ">
              <div className="sidebar-layout-filter">
                <div className="sidebar-header">
                  <h5>Filter</h5>
                  <Link href="#" className="sidebar-closes">
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
                            href="#"
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
                                    placeholder="Search here"
                                  />
                                  <span>
                                    <img
                                      src="assets/img/icons/search.svg"
                                      alt="img"
                                    />
                                  </span>
                                </div>
                                <div className="selectBox-cont">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Brian Johnson
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Russell
                                    Copeland
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Greg Lynch
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> John Blair
                                  </label>
                                  {/* View All */}
                                  <div className="view-content">
                                    <div className="viewall-One">
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Barbara
                                        Moore
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Hendry
                                        Evan
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Richard
                                        Miles
                                      </label>
                                    </div>
                                    <div className="view-all">
                                      <Link
                                        href="#"
                                        className="viewall-button-One"
                                      >
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
                    {/* Select Date */}
                    <div className="accordion" id="accordionMain2">
                      <div className="card-header-new" id="headingTwo">
                        <h6 className="filter-title">
                          <Link
                            href="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Select Date
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="input-block mb-3">
                            <label className="form-control-label">From</label>
                            <div className="cal-icon">
                              <input
                                type="email"
                                className="form-control datetimepicker"
                                placeholder="DD-MM-YYYY"
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3">
                            <label className="form-control-label">To</label>
                            <div className="cal-icon">
                              <input
                                type="email"
                                className="form-control datetimepicker"
                                placeholder="DD-MM-YYYY"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Select Date */}
                    {/* By Status */}
                    <div
                      className="accordion accordion-last"
                      id="accordionMain3"
                    >
                      <div className="card-header-new" id="headingThree">
                        <h6 className="filter-title">
                          <Link
                            href="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            By Status
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
                                <span className="checkmark" /> All Invoices
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> Paid
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> Overdue
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> Draft
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> Recurring
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> Cancelled
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /By Status */}
                    <button
                      type="submit"
                      className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary"
                    >
                      <span>
                        <img
                          src="assets/img/icons/chart.svg"
                          className="me-2"
                          alt="Generate report"
                        />
                      </span>
                      Generate report
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/*/Add Asset */}
            {/* Add New Modal */}
            <div
              className="modal custom-modal fade"
              id="add_custom"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                  <div className="modal-header border-0 pb-0">
                    <div className="form-header modal-header-title text-start mb-0">
                      <h4 className="mb-0">Add New</h4>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body add">
                    <div className="addnew-modal">
                      <div className="row">
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Custom Fields For{" "}
                              <span className="text-danger">*</span>{" "}
                            </label>
                            <ul className="form-group">
                              <li>
                                <Select
                                  value={selectedPlan}
                                  onChange={(selectedOption) =>
                                    setSelectedPlan(selectedOption)
                                  }
                                  options={planOptions}
                                  placeholder="Plan"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Label <span className="text-danger">*</span>{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Label"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Default Value</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Value"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Input Type <span className="text-danger">*</span>{" "}
                            </label>
                            <ul className="form-group">
                              <li>
                                <Select
                                  value={selectedPage}
                                  onChange={(selectedOption) =>
                                    setSelectedPage(selectedOption)
                                  }
                                  options={pageOptions}
                                  placeholder="Plan"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-block add mb-3 row">
                      <div className="col-md-3">
                        <div className="checkbox">
                          <label className="mb-0 d-flex align-items-center">
                            <input type="checkbox" name="checkbox" /> Required
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="checkbox">
                          <label className="mb-0 d-flex align-items-center">
                            <input type="checkbox" name="checkbox" />
                            Disable
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <div className="two-factor content p-0">
                          <h6>Status</h6>
                        </div>
                        <div className="addnew-checkbox">
                          <div className="status-toggle">
                            <input
                              id="rating_1"
                              className="check"
                              type="checkbox"
                              defaultChecked=""
                            />
                            <label
                              htmlFor="rating_1"
                              className="checktoggle checkbox-bg factor"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer add">
                      <Link
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-back cancel-btn me-2"
                      >
                        Cancel
                      </Link>
                      <Link
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-continue-btn"
                      >
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add Vendor Modal */}
            {/* Edit Modal */}
            <div className="modal custom-modal fade" id="edit" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                  <div className="modal-header border-0 pb-0">
                    <div className="form-header modal-header-title text-start mb-0">
                      <h4 className="mb-0">Edit Custom Fields</h4>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body add">
                    <div className="addnew-modal">
                      <div className="row">
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Custom Fields For{" "}
                              <span className="text-danger">*</span>{" "}
                            </label>
                            <ul className="form-group">
                              <li>
                                <Select
                                  value={selectedPlan}
                                  onChange={(selectedOption) =>
                                    setSelectedPlan(selectedOption)
                                  }
                                  options={planOptions}
                                  placeholder="Plan"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Label <span className="text-danger">*</span>{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Label"
                              defaultValue="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Default Value</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Value"
                              defaultValue="Enter Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Input Type <span className="text-danger">*</span>{" "}
                            </label>
                            <ul className="form-group">
                              <li>
                                <Select
                                  value={selectedPage}
                                  onChange={(selectedOption) =>
                                    setSelectedPage(selectedOption)
                                  }
                                  options={pageOptions}
                                  placeholder="Plan"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-block add mb-3 row">
                      <div className="col-md-3">
                        <div className="checkbox">
                          <label className="mb-0 d-flex align-items-center">
                            <input
                              type="checkbox"
                              name="checkbox"
                              defaultChecked=""
                            />{" "}
                            Required
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="checkbox">
                          <label className="mb-0 d-flex align-items-center">
                            <input type="checkbox" name="checkbox" />
                            Disable
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <div className="two-factor content p-0">
                          <h6>Status</h6>
                        </div>
                        <div className="addnew-checkbox">
                          <div className="status-toggle">
                            <input
                              id="rating_1"
                              className="check"
                              type="checkbox"
                              defaultChecked=""
                            />
                            <label
                              htmlFor="rating_1"
                              className="checktoggle checkbox-bg factor"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer add">
                      <Link
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-back cancel-btn me-2"
                      >
                        Cancel
                      </Link>
                      <Link
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-continue-btn"
                      >
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Edit Modal */}
          </div>
        </div>
      </>
    </div>
  );
};

export default CustomField;
