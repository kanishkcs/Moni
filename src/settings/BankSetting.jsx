import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Link } from "react-router-dom";
import { Table } from "antd";
import Data from "../assets/jsons/bankDetails";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import SettingsSidebar from "../layouts/SettingsSidebar";
const BankSetting = () => {
  const datasource = Data?.Data;
  console.log(datasource);
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "BankName",
      dataIndex: "BankName",
      sorter: (a, b) => a.BankName.length - b.BankName.length,
    },
    {
      title: "AccountNumber",
      dataIndex: "AccountNumber",
      sorter: (a, b) => a.AccountNumber.length - b.AccountNumber.length,
    },
    {
      title: "IFSCCode",
      dataIndex: "IFSCCode",
      sorter: (a, b) => a.IFSCCode.length - b.IFSCCode.length,
    },

    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <>
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
                    <Link className="dropdown-item" to="/banksetting">
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
                  <li>
                    <Link className="dropdown-item" to="/banksetting">
                      <i className="far fa-eye me-2" />
                      View
                    </Link>
                  </li>
                  <li></li>
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
      <Header />
      <Sidebar />

      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <SettingsSidebar />
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-body w-100">
                  <div className="content-page-header p-0">
                    <h5>Bank Accounts</h5>
                    <div className="list-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#bank_details"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Bank
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card-table">
                        <div className="card-body">
                          <div className="table-responsive no-pagination">
                            <Table
                              className="table"
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
                              rowKey={(record) => record.id}
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
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Delete Items Modal */}
      <div className="modal custom-modal fade" id="delete_modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Account Details</h3>
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
      {/* Add Bank Details Modal */}
      <div className="modal custom-modal fade" id="bank_details" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <div className="form-header modal-header-title text-start mb-0">
                <h4 className="mb-0">Add Bank Details</h4>
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
                  <div className="input-block mb-3">
                    <label>
                      Bank Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Bank Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>
                      Account Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Account Number"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>
                      Account Holder Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Account Holder Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>
                      Branch Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Branch Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-0">
                    <label>
                      IFSC Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter IFSC COde"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                data-bs-dismiss="modal"
                className="btn btn-back cancel-btn me-2"
              >
                Cancel
              </Link>
              <Link
                to="#"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
              >
                Save
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Bank Details Modal */}
    </>
  );
};

export default BankSetting;
