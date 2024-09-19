import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Select from "react-select";
const options = [
  { value: "Choose Vendor", label: "Choose Vendor" },
  { value: "Vendor 1", label: "Vendor 1" },
  { value: "Vendor 2", label: "Vendor 2" },
  { value: "Vendor 3", label: "Vendor 3" },
];
const options2 = [
  { value: "Select Product", label: "Select Product" },
  { value: "Product 1", label: "Product 1" },
  { value: "Product 2", label: "Product 2" },
  { value: "Product 3", label: "Product 3" },
];
const options3 = [
  { value: "Percentage(%)", label: "Percentage(%)" },
  { value: "Fixed", label: "Fixed" },
];
const options4 = [
  { value: "No Tax", label: "No Tax" },
  { value: "IVA - (21%)", label: "IVA - (21%)" },
  { value: "IRPF - (-15%", label: "IRPF - (-15%" },
  { value: "PDV - (20%)", label: "PDV - (20%)" },
];
const options5 = [
  { value: "Select Bank", label: "Select Bank" },
  { value: "SBI", label: "SBI" },
  { value: "IOB", label: "IOB" },
  { value: "Canara", label: "Canara" },
];
const options6 = [
  { value: "N/A", label: "N/A" },
  { value: "5%", label: "5%" },
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
];

const AddPurchaseReturn = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);
  const [selectedOption6, setSelectedOption6] = useState(null);


  return (
    <div>
      {/* Page Wrapper */}
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="card mb-0">
              <div className="card-body">
                <div className="content-page-header">
                  <h5>Add Purchase Return / Debit Note</h5>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group-item border-0 mb-0">
                      <div className="row align-item-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Purchases Id</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Purchases Id"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Select Vendor</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={setSelectedOption}
                                  options={options}
                                  placeholder="Choose Vendor"
                                />
                              </li>
                              <li>
                                <Link
                                  className="btn btn-primary form-plus-btn"
                                  to="/add-customer"
                                >
                                  <i className="fas fa-plus-circle" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Purchases Order Date</label>
                            <input
                              type="text"
                              className="datetimepicker form-control"
                              placeholder="Select Date"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Due Date</label>
                            <input
                              type="text"
                              className="datetimepicker form-control"
                              placeholder="Select Date"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Reference No</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Reference Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label>Products</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select
                                  defaultValue={selectedOption2}
                                  onChange={setSelectedOption2}
                                  options={options2}
                                  placeholder="Select Product"
                                />
                              </li>
                              <li>
                                <Link
                                  className="btn btn-primary form-plus-btn"
                                  to="/add-product"
                                >
                                  <i className="fas fa-plus-circle" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                      placeholder="$1360.00"
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
                                defaultValue={selectedOption3}
                                onChange={setSelectedOption3}
                                options={options3}
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
                            defaultValue={selectedOption4}
                            onChange={setSelectedOption4}
                            options={options4}
                            placeholder="No Tax"
                          />
                        </div>
                      </div>
                      <div className="col-md-4" />
                    </div>
                    <div className="form-group-item border-0 p-0">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="row align-items-center">
                              <div className="col-md-8">
                                <div className="input-block mb-3">
                                  <label>Select Bank</label>
                                  <Select
                                    defaultValue={selectedOption5}
                                    onChange={setSelectedOption5}
                                    options={options5}
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
                            <div className="input-block notes-form-group-info mb-0">
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
                                      defaultChecked
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
                            <div className="input-block  mb-0">
                              <label>Signature Image</label>
                              <div className="input-block service-upload service-upload-info mb-0">
                                <span>
                                  <i className="fe fe-upload-cloud me-1" />
                                  Upload Signature
                                </span>
                                <input type="file" multiple id="image_sign" />
                                <div id="frames" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <Link
                        to="/debit-notes"
                        className="btn btn-primary cancel me-2"
                      >
                        Cancel
                      </Link>
                      <Link to="/debit-notes" className="btn btn-primary">
                        Save
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
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
                      <Select
                        defaultValue={selectedOption6}
                        onChange={setSelectedOption6}
                        options={options6}
                        placeholder="N/A"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Back
                </Link>
                <Link
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save
                </Link>
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
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Product / Services</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        href="#"
                        className="btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Items Modal */}
        {/* Add Bank Details Modal */}
        <div
          className="modal custom-modal fade"
          id="bank_details"
          role="dialog"
        >
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
                    <div className="input-block mb-3 mb-0">
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
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Back
                </Link>
                <Link
                  href="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Bank Details Modal */}
    </div>
  );
};

export default AddPurchaseReturn;
