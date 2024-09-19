import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { Link } from "react-router-dom";
import planlistdata from "../../assets/json/planlist.js";

import {
  filterIcon,
//   price_01,
//   price_02,
//   price_03,
//   price_04,
} from "../../_components/Imagepath";
import AddPackages from "../../common/modal/addpackages";
import DeleteModal from "../../common/modal/DeleteModal";
import {Table, Tooltip } from "antd";
import PackageFilter from "./packagefilter";
import {
    itemRender,
    onShowSizeChange,
  } from "../../_components/paginationfunction";
const PackagesList = () => {
    const datasource = planlistdata?.planlistdata;

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
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Plan Name",
      dataIndex: "PlanName",
      render: (text, record) => (
        <h2 className="table-avatar">
         
          <Link to="/profile">
            {record.PlanName} 
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.PlanName.length - b.PlanName.length,
    },
    {
      title: "Plan Type",
      dataIndex: "PlanType",
      sorter: (a, b) => a.PlanType.length - b.PlanType.length,
    },
    
    {
      title: "Price",
      dataIndex: "Price",
      sorter: (a, b) => a.Price.length - b.Plan.Price,
    },
    {
      title: "Users",
      dataIndex: "Users",
      sorter: (a, b) => a.Users.length - b.Users.Price,
    },
    {
      title: "Suppliers",
      dataIndex: "Suppliers",
      sorter: (a, b) => a.Suppliers.length - b.Suppliers.Price,
    },
    {
      title: "Products",
      dataIndex: "Products",
      sorter: (a, b) => a.Products.length - b.Products.length,
    },
    {
      title: "Invoice",
      dataIndex: "Invoice",
      sorter: (a, b) => a.Invoice.length - b.Invoice.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      sorter: (a, b) => a.CreatedDate.length - b.CreatedDate.length,
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
                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={handleEditClick}
                    data-bs-toggle="modal"
                    data-bs-target="#add_newpackage"
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
          <div className="content container-fluid pb-0">
            <div className="subscription-plane-head">
              <ul>
                <li>
                  <Link to="/packages" className="active">
                    Subscription Plans
                  </Link>
                </li>
                <li>
                  <Link to="/subscription">Subscribers List</Link>
                </li>
              </ul>
            </div>
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Plans List</h5>
                <div className="page-content">
                  <div className="list-btn">
                    <ul className="filter-list">
                      <li>
                        <Link
                          className="btn-filters"
                          to="/packages"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Grid-View"
                        >
                          <span>
                            <i className="fe fe-grid" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn-filters active"
                          to="/plans-list"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="List-View"
                        >
                          <span>
                            <i className="fe fe-list" />
                          </span>
                        </Link>
                      </li>
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
                      <Link
                          to="#"
                          className="btn btn-filters w-auto popup-toggle me-2"
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
                          data-bs-target="#add_newpackage"
                        >
                          <i
                            className="fa fa-plus-circle me-2"
                            aria-hidden="true"
                          />
                          Add Plan
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
                      <div className="grid-info-item total-plane">
                        <div className="grid-info">
                          <span>Total Plan</span>
                          <h4>07</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-package" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item active-plane">
                        <div className="grid-info">
                          <span>Active Plans</span>
                          <h4>07</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-list" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item inactive-plane">
                        <div className="grid-info">
                          <span>Inactive Plans</span>
                          <h4>0</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-pause-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item total-type">
                        <div className="grid-info">
                          <span>No of Plan Types</span>
                          <h4>04</h4>
                        </div>
                        <div className="grid-head-icon">
                          <i className="fe fe-pocket" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
  <div className="col-sm-12">
    <div className="card-table">
      <div className="card-body">
        <div className="table-responsive no-pagination">
          <div className="companies-table">
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

        {/* /Page Wrapper */}
      </div>
      <AddPackages editMode={editMode}/>
  
      <DeleteModal />
      <PackageFilter setShow={setShow} show={show} />
    </div>
  );
};

export default PackagesList;
