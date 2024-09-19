import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../../assets/jsons/user";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { avatar10, filterIcon } from "../../_components/Imagepath";
import AddVendor from "../../customers/vendors/addVendor";
import Select from "react-select";

const Users = () => {
  const options1 = [
    { value: "Select Role", label: "Select Role" },
    { value: "Role 1", label: "Role 1" },
    { value: "Role 2", label: "Role 2" },
  ];
  const options2 = [
    { value: "Select Status", label: "Select Status" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const options3 = [
    { value: "Select Role", label: "Select Role" },
    { value: "Role 1", label: "Role 1" },
    { value: "Role 2", label: "Role 2" },
  ];
  const options4 = [
    { value: "Select Status", label: "Select Status" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);

  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = Data?.Data;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "User Name",
      dataIndex: "Name",
      render: (img, record) => (
        <div>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">
              {record.Name} <span>{record.Email}</span>
            </Link>
          </h2>
        </div>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Mobile Number",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Role",
      dataIndex: "Role",
      sorter: (a, b) => a.Role.length - b.Role.length,
    },
    {
      title: "Last Activity",
      dataIndex: "Activity",
      render: (text) => (
        <div>
          {text === "Online" && (
            <span className="badge badge-pill bg-success-light">{text}</span>
          )}
          {text === "2 days ago" && (
            <span className="badge badge-pill bg-ash-gray text-gray-light">
              {text}
            </span>
          )}
          {text === "1 hour ago" && (
            <span className="badge badge-pill bg-ash-gray text-gray-light">
              {text}
            </span>
          )}
          {text === "10 mins ago" && (
            <span className="badge badge-pill bg-ash-gray text-gray-light">
              {text}
            </span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Activity.length - b.Activity.length,
    },
    {
      title: "Created On",
      dataIndex: "Created",
      sorter: (a, b) => a.Created.length - b.Created.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Active" && (
            <span className="badge badge-pill bg-success-light">{text}</span>
          )}
          {text === "Restricted" && (
            <span className="badge badge-pill bg-ash-gray text-gray-light">
              {text}
            </span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className=" btn-action-icon "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_user"
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_modal"
                >
                  <i className="far fa-trash-alt me-2" />
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
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
              <div className="content-page-header ">
                <h5>Users</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                        </span>
                        Filter
                      </Link>
                    </li>

                    <li>
                      <a
                        className="btn btn-primary"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_user"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add user
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
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
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        {/* Edit User */}
        <div
          className="modal custom-modal modal-lg fade"
          id="edit_user"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit User</h4>
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
                        <div className="form-groups-item">
                          <h5 className="form-title">Profile Picture</h5>
                          <div className="profile-picture">
                            <div className="upload-profile">
                              <div className="profile-img">
                                <img
                                  id="blah2"
                                  className="avatar"
                                  src={avatar10}
                                  alt="profile-img"
                                />
                              </div>
                              <div className="add-profile">
                                <h5>Upload a New Photo</h5>
                                <span>Profile-pic.jpg</span>
                              </div>
                            </div>
                            <div className="img-upload">
                              <label className="btn btn-primary">
                                Upload <input type="file" />
                              </label>
                              <a className="btn btn-remove">Remove</a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  defaultValue="John"
                                  className="form-control"
                                  placeholder="Enter First Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Smith"
                                  placeholder="Enter Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="John Smith"
                                  placeholder="Enter User Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  defaultValue="john@example.com"
                                  placeholder="Enter Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Phone Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="+1 989-438-3131"
                                  placeholder="Enter Phone Number"
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Role</label>
                                <Select
                                  defaultValue={selectedOption1}
                                  onChange={setSelectedOption1}
                                  options={options1}
                                  placeholder="Select Role"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="pass-group" id="passwordInput1">
                                <div className="input-block">
                                  <label>Password</label>
                                  <input
                                    type="password"
                                    className="form-control pass-input"
                                    defaultValue={12345678}
                                    placeholder
                                  />
                                  <span className="toggle-password feather-eye" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="pass-group" id="passwordInput4">
                                <div className="input-block">
                                  <label>Confirm Password</label>
                                  <input
                                    type="password"
                                    className="form-control pass-input"
                                    defaultValue={12345678}
                                    placeholder
                                  />
                                  <span className="toggle-password feather-eye" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block ">
                                <label>Status</label>
                                <Select
                                  defaultValue={selectedOption2}
                                  onChange={setSelectedOption2}
                                  options={options2}
                                  placeholder="Select Status"
                                />
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
                    className="btn btn-primary paid-cancel-btn me-2"
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
        {/* /Edit User */}
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
                  <h3>Delete Users</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a href="#" className="btn btn-primary paid-continue-btn">
                        Delete
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Items Modal */}
        {/* Add User */}
        <div
          className="modal custom-modal modal-lg fade"
          id="add_user"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add User</h4>
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
                        <div className="form-groups-item">
                          <h5 className="form-title">Profile Picture</h5>
                          <div className="profile-picture">
                            <div className="upload-profile">
                              <div className="profile-img">
                                <img
                                  id="blah"
                                  className="avatar"
                                  src={avatar10}
                                  alt="profile-img"
                                />
                              </div>
                              <div className="add-profile">
                                <h5>Upload a New Photo</h5>
                                <span>Profile-pic.jpg</span>
                              </div>
                            </div>
                            <div className="img-upload">
                              <a className="btn btn-primary me-2">Upload</a>
                              <a className="btn btn-remove">Remove</a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter First Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter User Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Phone Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Role</label>
                                <Select
                                  defaultValue={selectedOption3}
                                  onChange={setSelectedOption3}
                                  options={options3}
                                  placeholder="Select Role"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="pass-group" id={3}>
                                <div className="input-block">
                                  <label>Password</label>
                                  <input
                                    type="password"
                                    className="form-control pass-input"
                                    placeholder
                                  />
                                  <span className="toggle-password feather-eye" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="pass-group" id="passwordInput2">
                                <div className="input-block">
                                  <label>Confirm Password</label>
                                  <input
                                    type="password"
                                    className="form-control pass-input"
                                    placeholder
                                  />
                                  <span className="toggle-password feather-eye" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block ">
                                <label>Status</label>
                                <Select
                                  defaultValue={selectedOption4}
                                  onChange={setSelectedOption4}
                                  options={options4}
                                  placeholder="Select Status"
                                />
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
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add User */}
      </div>
    </>
  );
};

export default Users;
