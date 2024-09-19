import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import SettingsSidebar from "../layouts/SettingsSidebar";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const TaxRates = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productOptions = [
    { value: 1, label: "Percentage" },
    { value: 2, label: "Fixed" },
  ];
  return (
    <div>
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
              <SettingsSidebar/>
              </div>
              <div className="col-xl-9 col-md-8">
                <div className="card">
                  <div className="card-body w-100">
                    <div className="content-page-header p-0">
                      <h5>Tax Rates</h5>
                      <div className="list-btn">
                        <Link
                          href="#"
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
                              <table className="table table-center table-hover datatable">
                                <thead className="thead-light">
                                  <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Tax Rate</th>
                                    <th>Status </th>
                                    <th className="no-sort">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <h2 className="tax-name">VAT@10%</h2>
                                    </td>
                                    <td>10.00</td>
                                    <td>
                                      <div className="status-toggle">
                                        <input
                                          id="rating_1"
                                          className="check"
                                          type="checkbox"
                                          defaultChecked=""
                                        />
                                        <label
                                          htmlFor="rating_1"
                                          className="checktoggle checkbox-bg"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="dropdown dropdown-action">
                                        <Link
                                          href="#"
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
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                to="#"
                                              >
                                                <i className="far fa-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>
                                      <h2 className="tax-name">GST@10</h2>
                                    </td>
                                    <td>10.00</td>
                                    <td>
                                      <div className="status-toggle">
                                        <input
                                          id="rating_2"
                                          className="check"
                                          type="checkbox"
                                          defaultChecked=""
                                        />
                                        <label
                                          htmlFor="rating_2"
                                          className="checktoggle checkbox-bg"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="dropdown dropdown-action">
                                        <Link
                                          href="#"
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
                                                href="#"
                                              >
                                                <i className="far fa-edit me-2" />
                                                Edit
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                              >
                                                <i className="far fa-trash-alt me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                <i className="far fa-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>
                                      <h2 className="tax-name">VAT@5%</h2>
                                    </td>
                                    <td>5.00</td>
                                    <td>
                                      <div className="status-toggle">
                                        <input
                                          id="rating_3"
                                          className="check"
                                          type="checkbox"
                                          defaultChecked=""
                                        />
                                        <label
                                          htmlFor="rating_3"
                                          className="checktoggle checkbox-bg"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="dropdown dropdown-action">
                                        <Link
                                          href="#"
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
                                                href="#"
                                              >
                                                <i className="far fa-edit me-2" />
                                                Edit
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                              >
                                                <i className="far fa-trash-alt me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                <i className="far fa-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>
                                      <h2 className="tax-name">GST@5</h2>
                                    </td>
                                    <td>5.00</td>
                                    <td>
                                      <div className="status-toggle">
                                        <input
                                          id="rating_4"
                                          className="check"
                                          type="checkbox"
                                          defaultChecked=""
                                        />
                                        <label
                                          htmlFor="rating_4"
                                          className="checktoggle checkbox-bg"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="dropdown dropdown-action">
                                        <Link
                                          href="#"
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
                                                href="#"
                                              >
                                                <i className="far fa-edit me-2" />
                                                Edit
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                              >
                                                <i className="far fa-trash-alt me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                <i className="far fa-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>
                                      <h2 className="tax-name">VAT@15%</h2>
                                    </td>
                                    <td>15.00</td>
                                    <td>
                                      <div className="status-toggle">
                                        <input
                                          id="rating_5"
                                          className="check"
                                          type="checkbox"
                                          defaultChecked=""
                                        />
                                        <label
                                          htmlFor="rating_5"
                                          className="checktoggle checkbox-bg"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="dropdown dropdown-action">
                                        <Link
                                          href="#"
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
                                                href="#"
                                              >
                                                <i className="far fa-edit me-2" />
                                                Edit
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                              >
                                                <i className="far fa-trash-alt me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                <i className="far fa-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>
                                      <h2 className="tax-name">GST@15</h2>
                                    </td>
                                    <td>15.00</td>
                                    <td>
                                      <div className="status-toggle">
                                        <input
                                          id="rating_6"
                                          className="check"
                                          type="checkbox"
                                          defaultChecked=""
                                        />
                                        <label
                                          htmlFor="rating_6"
                                          className="checktoggle checkbox-bg"
                                        >
                                          checkbox
                                        </label>
                                      </div>
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="dropdown dropdown-action">
                                        <Link
                                          href="#"
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
                                                href="#"
                                              >
                                                <i className="far fa-edit me-2" />
                                                Edit
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                              >
                                                <i className="far fa-trash-alt me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                <i className="far fa-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="col-lg-12">
                                <div className="btn-path text-end">
                                  <Link
                                    href="#"
                                    className="btn btn-cancel bg-primary-light me-3"
                                  >
                                    Cancel
                                  </Link>
                                  <Link
                                    href="#"
                                    className="btn btn-primary"
                                  >
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

                      <Select
                        value={selectedProduct}
                        onChange={(selectedOption) =>
                          setSelectedProduct(selectedOption)
                        }
                        options={productOptions}
                        placeholder="Select Type"
                      />
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
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn add-btn-cancel-btn"
                >
                  Cancel
                </Link>
                <Link
                  href="#"
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
    </div>
  );
};

export default TaxRates;
