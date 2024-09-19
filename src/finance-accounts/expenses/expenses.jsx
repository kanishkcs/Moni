import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../../assets/jsons/expenses";
import FeatherIcon from "feather-icons-react";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import AddVendor from "../../customers/vendors/addVendor";
import { DropIcon, filterIcon } from "../../_components/Imagepath";
import Select from "react-select";

const Expenses = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);

  const options1 = [
    { value: "Select Payment Mode", label: "Select Payment Mode" },
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
  ];
  const options2 = [
    { value: "Select Payment Status", label: "Select Payment Status" },
    { value: "Paid", label: "Paid" },
    { value: "Pending", label: "Pending" },
    { value: "Cancelled", label: "Cancelled" },
  ];
  const options3 = [
    { value: "Select Payment Mode", label: "Select Payment Mode" },
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
  ];
  const options4 = [
    { value: "Select Payment Status", label: "Select Payment Status" },
    { value: "Paid", label: "Paid" },
    { value: "Pending", label: "Pending" },
    { value: "Cancelled", label: "Cancelled" },
  ];
  const datasource = Data?.Data;

  const columns = [
    {
      title: "#",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Expense ID",
      dataIndex: "ExpenseID",
      sorter: (a, b) => a.ExpenseID.length - b.ExpenseID.length,
    },
    {
      title: "Reference",
      dataIndex: "Reference",
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Attachment",
      dataIndex: "Attachment",
      render: (img,record) => (
        <>
          <h2 className="table-avatar">
            <img
              className="avatar-img rounded"
              width={30}
              height={30}
              src={record.Attachment}
              alt="User Image"
            />
          </h2>
        </>
      ),
      sorter: (a, b) => a.Attachment.length - b.Attachment.length,
    },
    {
      title: "Payment Mode",
      dataIndex: "Payment",
      sorter: (a, b) => a.Payment.length - b.Payment.length,
    },
    {
      title: "Notes",
      dataIndex: "Notes",
      sorter: (a, b) => a.Notes.length - b.Notes.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Paid" && (
            <span className="badge bg-success-light text-success-light">
              {text}
            </span>
          )}
          {text === "Pending" && (
            <span className="badge bg-warning-light text-warning-light">
              {text}
            </span>
          )}
          {text === "Cancelled" && (
            <span className="badge bg-danger-light">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <>
          <div className="d-flex align-items-center">
            <Link className=" btn-action-icon me-2" to="#" download="">
              {/* <i className="fe fe-download" /> */}
              <FeatherIcon icon="download" />
            </Link>
            <div className="dropdown dropdown-action">
              <Link
                to="#"
                className=" btn-action-icon "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <ul>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_expenses"
                    >
                      <i className="far fa-edit me-2" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="far fa-trash-alt me-2" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

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
                <h5>Expenses</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          <Tooltip title="Filter" placement="bottom">
                            <img src={filterIcon} alt="Filter" />
                          </Tooltip>
                        </span>
                        Filter{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <Tooltip title="Setting" placement="bottom">
                            <i className="fe fe-settings" />
                          </Tooltip>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_expenses"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Expenses
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body purchase">
                    <div className="table-responsive table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <div>
          {/* Add Expenses Modal */}
          <div
            className="modal custom-modal modal-lg fade"
            id="add_expenses"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="mb-0">Add Expenses</h4>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form action="#">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-body">
                          <div className="border-0 pb-0">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Expense ID</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Expense ID"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Reference</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Reference No"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Amount </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Payment Mode</label>
                                  <Select
                                    defaultValue={selectedOption1}
                                    onChange={setSelectedOption1}
                                    options={options1}
                                    placeholder="Select Payment Mode"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Expense Date </label>
                                  <input
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="Select Expense Date"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Payment Status</label>
                                  <Select
                                    defaultValue={selectedOption2}
                                    onChange={setSelectedOption2}
                                    options={options2}
                                    placeholder="Select Payment Status"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 description-box">
                                <div
                                  className="input-block mb-3"
                                  id="summernote_container"
                                >
                                  <label className="form-control-label">
                                    Description
                                  </label>
                                  <textarea
                                    className="summernote form-control"
                                    placeholder="Type your message"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="input-block">
                                  <label>Attachment</label>
                                  <div className="input-block service-upload mb-0">
                                    <span>
                                      <img
                                        src={DropIcon}
                                        alt="upload"
                                      />
                                    </span>
                                    <h6 className="drop-browse align-center">
                                      Drop your files here or
                                      <span className="text-primary ms-1">
                                        browse
                                      </span>
                                    </h6>
                                    <p className="text-muted">
                                      Maximum size: 50MB
                                    </p>
                                    <input
                                      type="file"
                                      multiple
                                      id="image_sign"
                                    />
                                    <div id="frames" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-back cancel-btn me-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-continue-btn"
                    >
                      Add Expenses
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Add Expenses Modal */}
          {/* Edit Expenses Modal */}
          <div
            className="modal custom-modal modal-lg fade"
            id="edit_expenses"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="mb-0">Edit Expenses</h4>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form action="#">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-body">
                          <div className="border-0 pb-0">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Expense ID</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Expense ID"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Reference</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Reference No"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Amount </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Payment Mode</label>
                                  <Select
                                    defaultValue={selectedOption3}
                                    onChange={setSelectedOption3}
                                    options={options3}
                                    placeholder="Select Payment Mode"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Expense Date </label>
                                  <input
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="Select Expense Date"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="input-block mb-3">
                                  <label>Payment Status</label>
                                  <Select
                                    defaultValue={selectedOption4}
                                    onChange={setSelectedOption4}
                                    options={options4}
                                    placeholder="Select Payment Status"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 description-box">
                                <div
                                  className="input-block mb-3"
                                  id="summernote_container2"
                                >
                                  <label className="form-control-label">
                                    Description
                                  </label>
                                  <textarea
                                    className="summernote form-control"
                                    placeholder="Type your message"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="input-block">
                                  <label>Attachment</label>
                                  <div className="input-block service-upload mb-0">
                                    <span>
                                      <img
                                        src={DropIcon}
                                        alt="upload"
                                      />
                                    </span>
                                    <h6 className="drop-browse align-center">
                                      Drop your files here or
                                      <span className="text-primary ms-1">
                                        browse
                                      </span>
                                    </h6>
                                    <p className="text-muted">
                                      Maximum size: 50MB
                                    </p>
                                    <input
                                      type="file"
                                      multiple
                                      id="image_sign2"
                                    />
                                    <div id="frames2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-back cancel-btn me-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-continue-btn"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Expenses Modal */}
          {/* Delete Items Modal */}
          <div
            className="modal custom-modal fade"
            id="delete_modal"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Delete Expenses</h3>
                    <p>Are you sure want to delete?</p>
                  </div>
                  <div className="modal-btn delete-action">
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="reset"
                          data-bs-dismiss="modal"
                          className="w-100 btn btn-primary paid-continue-btn"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          type="submit"
                          data-bs-dismiss="modal"
                          className="w-100 btn btn-primary paid-cancel-btn"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Delete Items Modal */}
        </div>
      </div>
    </>
  );
};
export default Expenses;
