import React from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Table } from "antd";
import Data from "../assets/jsons/taxRates";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
const TaxTypes = () => {
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
      title: "TaxRate",
      dataIndex: "TaxRate",
      sorter: (a, b) => a.TaxRate.length - b.TaxRate.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      sorter: (a, b) => a.Status.length - b.Status.length,
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
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            {/* /Page Header */}
            <div className="row">
              <div className="col-xl-3 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="page-header">
                      <div className="content-page-header">
                        <h5>Settings</h5>
                      </div>
                    </div>
                    {/* Settings Menu */}
                    <div className="widget settings-menu mb-0">
                      <ul>
                        <li className="nav-item">
                          <Link to="/account-settings" className="nav-link ">
                            <i className="fe fe-user" />{" "}
                            <span>Account Settings</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/company-settings" className="nav-link">
                            <i className="fe fe-settings" />{" "}
                            <span>Company Settings</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/invoice-settings" className="nav-link  ">
                            <i className="fe fe-file" />{" "}
                            <span>Invoice Settings</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/invoice-templatesettings"
                            className="nav-link "
                          >
                            <i className="fe fe-layers" />{" "}
                            <span>Invoice Templates</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/paymentmethod" className="nav-link">
                            <i className="fe fe-credit-card" />{" "}
                            <span>Payment Methods</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/banksetting" className="nav-link">
                            <i className="fe fe-aperture" />{" "}
                            <span>Bank Settings</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/tax-types" className="nav-link active">
                            <i className="fe fe-file-text" />{" "}
                            <span>Tax Rates</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/email-settings" className="nav-link">
                            <i className="fe fe-mail" />{" "}
                            <span>Email Settings</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/preferences" className="nav-link">
                            <i className="fe fe-settings" />{" "}
                            <span>Preference Settings</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Settings Menu */}
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-md-8">
                <div className="card">
                  <div className="card-body w-100">
                    <div className="content-page-header p-0">
                      <h5>Tax Rates</h5>
                      <div className="list-btn">
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#add_discount"
                        >
                          <i
                            className="fa fa-plus-circle me-2"
                            aria-hidden="true"
                          />
                          Add Tax
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
                              <div className="col-lg-12">
                                <div className="btn-path text-end">
                                  <Link
                                    to="#"
                                    className="btn btn-cancel bg-primary-light me-3"
                                  >
                                    Cancel
                                  </Link>
                                  S
                                  <Link to="#" className="btn btn-primary">
                                    Save Changes
                                  </Link>
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
          </div>
        </div>
        {/* /Page Wrapper */}
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
        {/* Add Tax & Discount Modal */}
        <div
          className="modal custom-modal fade"
          id="add_discount"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Tax</h4>
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
                      <label>Tax Name</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Tax Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Tax Rates</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Tax Rates"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Type</label>
                      <select className="select">
                        <option>Select Type</option>
                        <option>Percentage</option>
                        <option>Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div className="payment-toggle">
                    <h5 className="form-title">Status</h5>
                    <div className="status-toggle">
                      <input
                        id="rating_7"
                        className="check"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        htmlFor="rating_7"
                        className="checktoggle checkbox-bg"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer add-tax-btns">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn add-btn-cancel-btn"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary add-tax-save-btn"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Tax & Discount Modal */}
      </>
    </>
  );
};
export default TaxTypes;
