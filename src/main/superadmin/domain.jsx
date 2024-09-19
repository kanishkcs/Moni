import React, { useState } from "react";
import DeleteModal from "../../common/modal/DeleteModal";
import {
  itemRender,
  onShowSizeChange,
} from "../../_components/paginationfunction";
import { Table, Tooltip } from "antd";
import { company_01, filterIcon } from "../../_components/Imagepath";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { Link } from "react-router-dom";
import domaindata from "../../assets/jsons/domaindata";
import DomainFilter from "./domainfilter";
const Domain = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const datasource = domaindata?.domaindata;
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },

    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/profile" className="avatar avatar-md me-2">
            <img
              className="avatar-img rounded-circle"
              src={record.img}
              alt="User Image"
            />
          </Link>
          <Link to="/profile">{record.Name}</Link>
        </h2>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Domain URL",
      dataIndex: "DomainURL",
      sorter: (a, b) => a.DomainURL.length - b.DomainURL.length,
    },
    {
      title: "Plan",
      dataIndex: "Plan",
      sorter: (a, b) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Registered On",
      dataIndex: "RegisteredOn",
      sorter: (a, b) => a.RegisteredOn.length - b.RegisteredOn.length,
    },

    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Approved" && (
            <span className="badge bg-success-light">
              <i className="fe fe-check me-1"></i>
              {text}
            </span>
          )}
          {text === "Pending" && (
            <span className="badge bg-orange-light">
              <i className="fe fe-clock me-1"></i>
              {text}
            </span>
          )}
          {text === "Rejected" && (
            <span className="badge bg-danger-light">
              <i className="fe fe-x me-1"></i>
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
          <div className="dropdown-menu dropdown-menu-end">
            <ul className="dropdown-ul">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#view_doamin"
                >
                  <i className="fe fe-eye me-2" />
                  Domain Detail
                </a>
              </li>
              <li className="delete-alt">
                <div>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="fe fe-trash-2 me-2" />
                    Delete
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  return (
    <div>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Domain List</h5>
                <div className="page-content">
                  <div className="list-btn">
                    <ul className="filter-list">
                      <li>
                        <a
                          className="btn-filters"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Refresh"
                        >
                          <span>
                            <i className="fe fe-refresh-ccw" />
                          </span>
                        </a>
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
                          Filter
                        </a>
                      </li>
                      <li>
                        <div
                          className="dropdown dropdown-action"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Download"
                        >
                          <a
                            href="#"
                            className="btn btn-filters"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="me-2">
                              <i className="fe fe-download" />
                            </span>
                            Export
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <ul className="d-block">
                              <li>
                                <a
                                  className="d-flex align-items-center download-item"
                                  href="#"
                                  download=""
                                >
                                  <i className="far fa-file-pdf me-2" />
                                  Export as PDF
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-flex align-items-center download-item"
                                  href="#"
                                  download=""
                                >
                                  <i className="far fa-file-text me-2" />
                                  Export as Excel
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          className="btn btn-filters"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Print"
                        >
                          <span className="me-2">
                            <i className="fe fe-printer" />
                          </span>{" "}
                          Print
                        </a>
                      </li>
                    </ul>
                  </div>
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
            {/* /Search Filter */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
                    <div className="table-responsive">
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
      </div>
      <DeleteModal />
      <DomainFilter setShow={setShow} show={show} />
      <div
        className="modal custom-modal custom-lg-modal fade p-20"
        id="view_doamin"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0">
              <div className="form-header modal-header-title text-start d-flex align-items-center mb-0">
                <h4 className="mb-0">Domain Details</h4>
                <span className="badge bg-info-light ms-3">Pending</span>
              </div>
              <button
                type="button"
                className="btn-close ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pb-0">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-field-item">
                    <div className="profile-picture company-detail-head">
                      <div className="upload-profile">
                        <div className="profile-img company-profile-img">
                          <img
                            id="view-company-img"
                            className="img-fluid me-0"
                            src={company_01}
                            alt="profile-img"
                          />
                        </div>
                        <div className="add-profile">
                          <h5>Hermann Groups</h5>
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-success d-inline-flex align-items-center me-2">
                          <i className="fe fe-check me-1" />
                          Approve
                        </span>
                        <span className="badge bg-danger d-inline-flex align-items-center">
                          <i className="fe fe-x me-1" />
                          Reject
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="plane-basic-info">
                    <h5>Basic Info</h5>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Account URL</h6>
                          <p>hru.example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="plane-basic-info plane-detail">
                    <h5>Plan Details</h5>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Plan Name</h6>
                          <p>Enterprise</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Plan Type</h6>
                          <p>Yearly</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Price</h6>
                          <p>$200</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Register Date</h6>
                          <p>15 Jan 2024</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Expiring On</h6>
                          <p>15 Jan 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
