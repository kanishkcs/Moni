import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Data from "../../assets/jsons/editInvoice";
import "../../_components/antd.css";
import DatePicker from "react-datepicker";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";

const EditInvoice = () => {
  const [menu, setMenu] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [selectedPercentage, setSelectedPercentage] = useState(null);
  const [selectedTax, setSelectedTax] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const product = [
    { id: 1, text: "Choose Customer" },
    { id: 2, text: "Customer 1" },
    { id: 3, text: "Customer 2" },
    { id: 4, text: "Customer 3" },
  ];
  const products = [
    { id: 1, text: "Select Product" },
    { id: 2, text: "Product 1" },
    { id: 3, text: "Product 2" },
    { id: 4, text: "Product 3" },
  ];

  const status = [
    { id: 1, text: "Choose a Status" },
    { id: 2, text: "Unpaid" },
    { id: 3, text: "Partially paid" },
    { id: 4, text: "Paid" },
    { id: 4, text: "Overdue" },
    { id: 4, text: "Cancelled" },
    { id: 4, text: "Refunded" },
    { id: 4, text: "Draft" },
  ];
  const percentage = [
    { id: 1, text: "Percentage(%)" },
    { id: 2, text: "0%" },
    { id: 3, text: "5%" },
    { id: 4, text: "10%" },
    { id: 5, text: "15%" },
  ];

  const tax = [
    { id: 1, text: "N/A" },
    { id: 2, text: "5%" },
    { id: 3, text: "10%" },
    { id: 4, text: "15%" },
  ];

  const bank = [
    { id: 1, text: "Select Bank" },
    { id: 2, text: "SBI" },
    { id: 3, text: "IOB" },
    { id: 4, text: "Canara" },
  ];
  const formattedOptions = (options) =>
    options.map((option) => ({
      value: option.id,
      label: option.text,
    }));
  const handleProductChange = (selectedOption) => {
    setSelectedProduct(selectedOption);
    // Additional logic if needed
  };
  const handleProductsChange = (selectedOption) => {
    setSelectedProducts(selectedOption);
    // Additional logic if needed
  };
  const handleStatusChange = (selectedOption) => {
    setSelectedStatus(selectedOption);
    // Additional logic if needed
  };
  const handlePercentageChange = (selectedOption) => {
    setSelectedPercentage(selectedOption);
    // Additional logic if needed
  };

  const handleTaxChange = (selectedOption) => {
    setSelectedTax(selectedOption);
    // Additional logic if needed
  };
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);

  const datasource = Data?.Data;
  console.log(datasource);

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        {/* <!-- Page Wrapper --> */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="card mb-0">
              <div className="card-body">
                <div className="page-header">
                  <div className="content-page-header">
                    <h5>Edit Invoice</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group-item border-0 mb-0">
                      <div className="row align-item-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Invoice Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Invoice Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Customer Name</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select
                                  value={selectedProduct}
                                  onChange={handleProductChange}
                                  options={formattedOptions(product)}
                                  placeholder="Choose Customer"
                                />
                              </li>
                              <li>
                                <Link
                                  className="btn btn-primary form-plus-btn"
                                  to="/add-customer"
                                >
                                  <FeatherIcon icon="plus-circle" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Invoice Date</label>
                            <div className="cal-icon cal-icon-info">
                              <DatePicker
                                className="datetimepicker form-control"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              ></DatePicker>
                              {/* <FeatherIcon icon="calendar"/> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Due Date</label>
                            <div className="cal-icon cal-icon-info">
                              <DatePicker
                                className="datetimepicker form-control"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              ></DatePicker>
                            </div>
                          </div>
                        </div>
                        <>
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="input-block mb-3">
                              <label>Status</label>
                              <Select
                                value={selectedStatus}
                                onChange={handleStatusChange}
                                options={formattedOptions(status)}
                                placeholder="Choose a Status"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="input-block mb-3">
                              <label>Reference Number</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Reference Number"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="d-flex justify-content-between flex-wrap">
                              <div className="input-block mb-3 recurring-tab">
                                <label>Recurring</label>
                                <ul
                                  className="nav nav-pills d-flex"
                                  id="pills-tab"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link active yes"
                                      id="pills-home-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#pills-home"
                                      type="button"
                                      role="tab"
                                      aria-controls="pills-home"
                                      aria-selected="true"
                                    >
                                      Yes
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link no"
                                      id="pills-profile-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#pills-profile"
                                      type="button"
                                      role="tab"
                                      aria-controls="pills-profile"
                                      aria-selected="false"
                                    >
                                      No
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="tab-content pt-0"
                                id="pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="pills-home"
                                  role="tabpanel"
                                  aria-labelledby="pills-home-tab"
                                >
                                  <div className="input-block mb-3">
                                    <label>Recurring cycle</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Month"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-profile"
                                  role="tabpanel"
                                  aria-labelledby="pills-profile-tab"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="input-block mb-3">
                              <label>Products</label>
                              <ul className="form-group-plus css-equal-heights">
                                <li>
                                  <Select
                                    value={selectedProducts}
                                    onChange={handleProductsChange}
                                    options={formattedOptions(products)}
                                    placeholder="Select Product"
                                  />
                                </li>
                                <li>
                                  <Link
                                    className="btn btn-primary form-plus-btn"
                                    to="/add-product"
                                  >
                                    <i className="fe fe-plus-circle" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                    <>
                      <div className="form-group-item">
                        <div className="card-table">
                          <div className="card-body">
                            <div className="table-responsive no-pagination">
                              <table className="table table-center table-hover datatable">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Product / Service</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Rate</th>
                                    <th>Discount</th>
                                    <th>Tax</th>
                                    <th>Amount</th>
                                    <th className="no-sort">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Nike Jordan</td>
                                    <td>
                                      <input
                                        type="number"
                                        className="form-control"
                                        defaultValue={0}
                                      />
                                    </td>
                                    <td>Pcs</td>
                                    <td>
                                      <input
                                        type="number"
                                        className="form-control"
                                        defaultValue={120}
                                      />
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>$1360.00</td>
                                    <td className="d-flex align-items-center">
                                      <Link
                                        href="#"
                                        className="btn-action-icon me-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_discount"
                                      >
                                        <span>
                                          <i className="fe fe-edit" />
                                        </span>
                                      </Link>
                                      <Link
                                        href="#"
                                        className="btn-action-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_discount"
                                      >
                                        <span>
                                          <i className="fe fe-trash-2" />
                                        </span>
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-lg-7">
                              <div className="input-block mb-3">
                                <label>Discount Type</label>
                                <Select
                                  value={selectedPercentage}
                                  onChange={handlePercentageChange}
                                  options={formattedOptions(percentage)}
                                  placeholder="Percentage(%)"
                                />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="input-block mb-3">
                                <label>Discount(%)</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={10}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-block mb-3">
                            <label>Tax</label>
                            <Select
                              value={selectedTax}
                              onChange={handleTaxChange}
                              options={formattedOptions(tax)}
                              placeholder="Choose Tax"
                            />
                          </div>
                        </div>
                        <div className="col-md-4" />
                      </div>
                    </>
                    <div className="form-group-item border-0 p-0">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="row align-items-center">
                              <div className="col-md-8">
                                <div className="input-block mb-3">
                                  <label>Select Bank</label>
                                  <Select
                                    value={selectedProduct}
                                    onChange={handleProductChange}
                                    options={formattedOptions(bank)}
                                    placeholder="Select Bank"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-groups">
                                  <Link
                                    className="btn btn-primary"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#bank_details"
                                  >
                                    Add Bank
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="input-block mb-3 notes-form-group-info">
                              <label>Notes</label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Notes"
                                defaultValue={""}
                              />
                            </div>
                            <div className="input-block mb-3 notes-form-group-info mb-0">
                              <label>Terms and Conditions</label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Terms and Conditions"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="invoice-total-box">
                              <div className="invoice-total-inner">
                                <p>
                                  Taxable Amount <span>$1360.00</span>
                                </p>
                                <p>
                                  Discount <span>$136.00</span>
                                </p>
                                <p>
                                  Vat <span>$0.00</span>
                                </p>
                                <div className="status-toggle justify-content-between">
                                  <div className="d-flex align-center">
                                    <p>Round Off </p>
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
                                  <span>$0.00</span>
                                </div>
                              </div>
                              <div className="invoice-total-footer">
                                <h4>
                                  Total Amount <span>$1224.00</span>
                                </h4>
                              </div>
                            </div>
                            <div className="input-block mb-3">
                              <label>Signature Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Signature Name"
                              />
                            </div>
                            <div className="input-block mb-0">
                              <label>Signature Image</label>
                              <div className="input-block mb-3 service-upload service-upload-info mb-0">
                                <span>
                                  <i className="fe fe-upload-cloud me-1" />
                                  Upload Signature
                                </span>
                                <input
                                  type="file"
                                  multiple=""
                                  id="image_sign"
                                />
                                <div id="frames" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form
                      action="/invoices"
                      className="add-customer-btns text-end"
                    >
                      <button
                        type="reset"
                        className="btn btn-primary cancel me-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="reset"
                        className="btn btn-primary cancel me-2"
                      >
                        Save
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save &amp; Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
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
                    <h4 className="mb-0">Add Tax &amp; Discount</h4>
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
                        <label>Rate</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder={120}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-3">
                        <label>Discount Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder={0}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-0">
                        <label>Tax</label>
                        <label>Tax</label>
                      <Select
                        value={selectedTax}
                        onChange={handleTaxChange}
                        options={formattedOptions(tax)}
                        placeholder="Choose Tax"
                      />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer add-tax-btns">
                  <a
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn add-btn-cancel-btn"
                  >
                    Cancel
                  </a>
                  <a
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary add-tax-save-btn"
                  >
                    Update
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Tax & Discount Modal */}
          {/* Delete Items Modal */}
          <div
            className="modal custom-modal fade"
            id="delete_discount"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header border-0 justify-content-center pb-0">
                  <div className="form-header modal-header-title text-center mb-0">
                    <h4 className="mb-2">Delete Product / Services</h4>
                    <p>Are you sure want to delete?</p>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="modal-btn delete-action">
                    <div className="row">
                      <div className="col-6">
                        <a
                          href="#"
                          data-bs-dismiss="modal"
                          className="btn btn-primary paid-continue-btn"
                        >
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
          {/* Edit Bank Details Modal */}
          <div
            className="modal custom-modal fade"
            id="bank_details"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="mb-0">Edit Bank Details</h4>
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
                  <a
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-cancel-btn me-2"
                  >
                    Back
                  </a>
                  <a
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-continue-btn"
                  >
                    Update
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Edit Bank Details Modal */}
        </>
      </div>
    </>
  );
};
export default EditInvoice;
