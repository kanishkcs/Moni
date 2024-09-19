 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../../assets/jsons/debitNotes";
import FeatherIcon from "feather-icons-react";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import AddVendor from "../../customers/vendors/addVendor";
import { filterIcon } from "../../_components/Imagepath";

const DebitNotes = () => {
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
      title: "Debit Notes ID",
      dataIndex: "DebitId",
      sorter: (a, b) => a.DebitId.length - b.DebitId.length,
    },
    {
      title: "Vendor",
      dataIndex: "Name",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">
              {record.Name} <span>{record.Phone}</span>
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Payment Mode",
      dataIndex: "Payment",
      sorter: (a, b) => a.Payment.length - b.Payment.length,
    },
    {
      title: "Created On",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
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
                href="#"
                className=" btn-action-icon "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v"></i>
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <ul>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/edit-purchase-return"
                    >
                      <i className="far fa-edit me-2"></i>Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="far fa-trash-alt me-2"></i>Delete
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/debit-notes">
                      <i className="far fa-eye me-2"></i>View
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/debit-notes">
                      <i className="fe fe-send me-2"></i>Send
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/debit-notes">
                      <i className="fe fe-copy me-2"></i>Clone
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
            <div>
              {/* Page Header */}
              <div className="page-header">
                <div className="content-page-header">
                  <h5>Purchase Returns / Debit Notes</h5>
                  <div className="list-btn">
                    <ul className="filter-list">
                      <li>
                        <Link
                          className="btn btn-filters w-auto popup-toggle"

                          onClick={() => setShow(!show)}
                        >
                          <span className="me-2">
                             <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                          </span>
                          Filter{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn-filters"
                          to="#"
                         
                        >
                          <span>
                          <Tooltip title="Settings" placement="bottom">
                            <i className="fe fe-settings" />
                            </Tooltip>
                          </span>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn btn-primary"
                          to="/add-purchase-return"
                        >
                          <i
                            className="fa fa-plus-circle me-2"
                            aria-hidden="true"
                          />
                          Add Purchase Returns / Debit Notes
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
              {/* /Search Filter */}
            </div>
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

        <div
          className="modal custom-modal fade"
          id="delete_modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Purchases</h3>
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
      </div>
    </>
  );
};

export default DebitNotes;
