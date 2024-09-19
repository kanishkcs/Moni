import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import subscribtiondata from "../../assets/jsons/subscribtiondata";
import { Table, Tooltip } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../_components/paginationfunction";
import { Link } from "react-router-dom";
import { filterIcon } from "../../_components/Imagepath";
import DeleteModal from "../../common/modal/DeleteModal";
import SubscriptionFilter from "./subscriptionfilter";

const Subscription = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const datasource = subscribtiondata?.subscribtiondata;

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
      title: "Subscriber",
      dataIndex: "Subscriber",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/profile" className="avatar avatar-md me-2">
            <img
              className="avatar-img rounded-circle"
              src={record.img}
              alt="User Image"
            />
          </Link>
          <Link to="/profile">{record.Subscriber}</Link>
        </h2>
      ),
      sorter: (a, b) => a.Subscriber.length - b.Subscriber.length,
    },

    {
      title: "Plan",
      dataIndex: "Plan",
      sorter: (a, b) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Billing Cycle",
      dataIndex: "BillingCycle",
      sorter: (a, b) => a.BillingCycle.length - b.BillingCycle.length,
    },
    {
      title: "Payment Gateway",
      dataIndex: "PaymentGateway",
      sorter: (a, b) => a.PaymentGateway.length - b.PaymentGateway.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Registered On",
      dataIndex: "RegisteredOn",
      sorter: (a, b) => a.RegisteredOn.length - b.RegisteredOn.length,
    },
    {
      title: "Expiring On",
      dataIndex: "ExpiringOn",
      sorter: (a, b) => a.ExpiringOn.length - b.ExpiringOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Paid" && (
            <span className="badge bg-success-light">
              <i className="fe fe-check me-1"></i>{text}
            </span>
          )}
          {text === "Unpaid" && (
            <span className="badge bg-danger-light">
              <i className="fe fe-x me-1"></i>{text}
            </span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Invoice",
      dataIndex: "Invoice",
      render: () => (
        <Link to="/invoice-subscription" className="invoice-detail">
          <i className="fe fe-file-text"></i>
        </Link>
      ),
      sorter: (a, b) => a.Invoice.length - b.Invoice.length,
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
                  <Link className="dropdown-item" to="#">
                    <i className="fe fe-download me-2" />
                    Download
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
          <div className="content container-fluid">
            <div className="subscription-plane-head">
              <ul>
                <li>
                  <Link to="/packages">Subscription Plans</Link>
                </li>
                <li>
                  <Link to="/subscription" className="active">
                    Subscribers List
                  </Link>
                </li>
              </ul>
            </div>
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Subscriber List</h5>
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
                          className="btn btn-filters w-auto popup-toggle"
                          onClick={() => setShow(!show)}
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
            <div className="super-admin-list-head">
              <div className="row">
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item subscription-list total-transaction">
                        <div className="grid-head-icon">
                          <i className="fe fe-shield" />
                        </div>
                        <div className="grid-info">
                          <span>Total Transaction</span>
                          <h4>$6,565,60</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item subscription-list total-subscriber">
                        <div className="grid-head-icon">
                          <i className="fe fe-users" />
                        </div>
                        <div className="grid-info">
                          <span>Total Subscribers</span>
                          <h4>945</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item subscription-list active-subscriber">
                        <div className="grid-head-icon">
                          <i className="fe fe-user-check" />
                        </div>
                        <div className="grid-info">
                          <span>Active Subscriber</span>
                          <h4>944</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="grid-info-item subscription-list expired-subscriber">
                        <div className="grid-head-icon">
                          <i className="fe fe-user-x" />
                        </div>
                        <div className="grid-info">
                          <span>Expired</span>
                          <h4>1</h4>
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
                    <div className="table-responsive">
                      <div className="companies-table">
                        <Table
                          pagination={{
                            total: datasource.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,

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
      </div>
      <DeleteModal />
      <SubscriptionFilter setShow={setShow} show={show} />
    </div>
  );
};

export default Subscription;
