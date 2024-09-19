import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../../assets/jsons/rolesPermission";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { Sort, filterIcon } from "../../_components/Imagepath";
import AddVendor from "../../customers/vendors/addVendor";
import Select from "react-select";

const RolesPermission = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const options1 = [
    { value: "Sort by: Date", label: "Sort by: Date" },
    { value: "Sort by: Date 1", label: "Sort by: Date 1" },
    { value: "Sort by: Date 2", label: "Sort by: Date 2" }
  ];
  const [selectedOption1, setSelectedOption1] = useState(null);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = Data?.Data;
  console.log(datasource);

  const columns = [
    {
      title: "ID",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Role Name",
      dataIndex: "Role",
      sorter: (a, b) => a.Role.length - b.Role.length,
    },
    {
      title: "Created On",
      dataIndex: "Created",
      sorter: (a, b) => a.Created.length - b.Created.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="btn btn-greys me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_role"
          >
            <i className="fa fa-edit me-1" /> Edit Role
          </Link>
          <Link to="/permission" className="btn btn-greys me-2">
            <i className="fa fa-shield me-1" /> Permissions
          </Link>
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
                <h5>Roles &amp; Permission</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <div className="short-filter">
                        <img className="me-2" src={Sort} alt="Sort by select" />
                        <div className="sort-by">
                          <Select
                            defaultValue={selectedOption1}
                            onChange={setSelectedOption1}
                            options={options1}
                            placeholder="Sort by: Date"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          {/* <i className="fe fe-filter" /> */}
                           <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                        </span>
                        Filter
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_role"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Roles
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body rolesPermission">
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

        <div className="modal custom-modal fade" id="add_role" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Role</h4>
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
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-0">
                      <label>
                        Role Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Role Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Close
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Role Modal */}
        <div className="modal custom-modal fade" id="edit_role" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit Role</h4>
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
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-0">
                        <label>
                          Role Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Admin"
                          placeholder="Enter Role Name"
                        />
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
                    Close
                  </button>
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-continue-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Role Modal */}
      </div>
    </>
  );
};

export default RolesPermission;
