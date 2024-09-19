import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import companiesdata from "../../assets/json/companies.js";
import { Table, Tooltip } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../_components/paginationfunction";
import { Link } from "react-router-dom";
import DeleteModal from "../../common/modal/DeleteModal.jsx";
import { filterIcon } from "../../_components/Imagepath.jsx";
import Filter from "./filter.jsx";
import Addcompany from "./addcompany.jsx";
import UpdatePackage from "./updatepackage.jsx";
import CompanyDetails from "./companydetails.jsx";
import Editcompany from "./editcompany.jsx";

const Companies = () => {
  const datasource = companiesdata?.companiesdata;

  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  
  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleaddClick = () => {
    setEditMode(false);
  };
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
          <Link to="/profile">
            {record.Name} <span>{record.email}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Account URL",
      dataIndex: "accounturl",
      sorter: (a, b) => a.accounturl.length - b.accounturl.length,
    },
    {
      title: "Plan",
      dataIndex: "Plan",
      sorter: (a, b) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Change Plan",
      dataIndex: "ChangePlan",
      render: (text) => (
        <a href="#" data-bs-toggle="modal" data-bs-target="#change_pane">
          <span className="badge bg-purple">{text}</span>
        </a>
      ),
      sorter: (a, b) => a.ChangePlan.length - b.ChangePlan.length,
    },
    {
      title: "Created Date",
      dataIndex: "createdOn",
      sorter: (a, b) => a.createdOn.length - b.createdOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Unsubscribed" && (
            <span className="bg-subscribe">{text}</span>
          )}
          {text === "Inactive" && (
            <span className="badge bg-danger-light ">
              <i className="fe fe-x me-1"></i>{text}
            </span>
          )}
          {text === "Active" && (
            <span className="badge  bg-success-light">
              <i className="fe fe-check me-1"></i>{text}
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
        <div className="table-invoice d-flex align-items-center">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className=" btn-action-icon "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <ul>
                <li>
                <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#view_companies"><i className="far fa-eye me-2"></i>View Company</Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={handleEditClick}
                    data-bs-toggle="modal"
                    data-bs-target="#add_companies"
                  >
                    <i className="fe fe-edit me-2" />
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
                <li>
                  <Link className="dropdown-item" to="/customer-details">
                    <i className="fa-solid fa-plus me-2" />
                    Add Plan
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/deactive-customers">
                    <i className="fa-solid fa-xmark me-2" />
                    Cancel Plan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/deactive-customers">
                    <i className="far fa-eye me-2" />
                    Subscribtion Log
                  </Link>
                </li>
              </ul>
            </div>
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
                <h5>Companies</h5>
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
                      {/* <li>
                        <a
                          className="btn btn-filters w-auto popup-toggle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Filter"
                        >
                          <span className="me-2">
                            <img src={filterIcon} alt="filter" />
                          </span>
                          Filter
                        </a>
                      </li> */}
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
                      <li>
                        <a
                          className="btn btn-primary"
                          href="#"
                          onClick={handleaddClick}
                          data-bs-toggle="modal"
                          data-bs-target="#add_companies"
                        >
                          <i
                            className="fa fa-plus-circle me-2"
                            aria-hidden="true"
                          />
                          Add Company
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* /Page Header */}
            <div className="super-admin-list-head">
              <div className="row">
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item total-items">
                        <div className="grid-info">
                          <span>Total Companies</span>
                          <h4>987</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-life-buoy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item active-items">
                        <div className="grid-info">
                          <span>Active Companies</span>
                          <h4>154</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-check-square" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item inactive-items">
                        <div className="grid-info">
                          <span>Inactive Company</span>
                          <h4>2</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-x-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item location-info">
                        <div className="grid-info">
                          <span>Company Locations</span>
                          <h4>200</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-map-pin" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      <DeleteModal />
      <Filter setShow={setShow} show={show} />
      <Addcompany editMode={editMode}/>
      <UpdatePackage />
      <CompanyDetails />
      <Editcompany />
    </div>
  );
};

export default Companies;
