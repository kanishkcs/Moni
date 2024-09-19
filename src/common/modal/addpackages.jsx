import React from "react";
import Select from "react-select";
import { company_add_img, price_02 } from "../../_components/Imagepath";
import PropTypes from 'prop-types'

const AddPackages = ({editMode}) => {
  const options = [
    { value: "monthly", label: "monthly" },
    { value: "yearly", label: "yearly" },
    { value: "free-trail", label: "free-trail" },
  ];
  const planposition = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  const Currency = [
    { value: "USD", label: "USD" },
    { value: "$", label: "$" },

  ];
  const discount = [
    { value: "Fixed", label: "Fixed" },
    { value: "Percentage", label: "Percentage" },
  ];

  return (
    <div
      className="modal custom-modal fade p-20"
      id="add_newpackage"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header border-0">
            <div className="form-header modal-header-title text-start mb-0">
              <h4 className="mb-0">
              {editMode ? "Edit Package" : "Add New"} 
 
                </h4>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form action="#">
            <div className="modal-body">
              <h5 className="form-title">Plan Image</h5>
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-picture">
                    <div className="upload-profile">
                      <div className="profile-img company-profile-img">
                        <img
                          id="company-img"
                          className="img-fluid me-0"
                          src={editMode? price_02 :company_add_img}
                          alt="profile-img"
                        />
                      </div>
                      <div className="add-profile">
                        <h5>Upload a New Photo</h5>
                        <span>Profile-pic.jpg</span>
                      </div>
                    </div>
                    <div className="img-upload">
                      <label className="btn btn-upload">
                        Upload <input type="file" />
                      </label>
                      <a className="btn btn-remove">Remove</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <h5 className="form-title mb-3">Plan Info</h5>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="input-block mb-3">
                    <label>Plan Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Plan Name"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="input-block mb-3">
                    <label>Plan Type</label>
                    <Select
                      className="select"
                      options={options}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="input-block mb-3">
                    <label>Plan Position</label>
                    <Select
                      className="select"
                      options={planposition}
                      placeholder="Select Plan Position"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="input-block mb-3">
                    <label>Plan Currency</label>
                    <Select
                      className="select"
                      options={Currency}
                      placeholder="Select Plan Currency"
                    />
                  
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="input-block mb-3">
                    <label className="d-flex justify-content-between">
                      <span>Price</span>
                      <span className="text-primary">
                        <i className="fa-solid fa-circle-exclamation me-2" />
                        Set 0 for free
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Package Price"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <div className="input-block mb-3">
                    <label>Discount Type</label>
                    <Select
                      className="select"
                      options={discount}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <div className="input-block mb-3">
                    <label>Discount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Discount"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="input-block mb-3">
                    <label>Limitations Invoices</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={0}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="input-block mb-3">
                    <label>Max Customers</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={0}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="input-block mb-3">
                    <label>Product</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={0}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="input-block mb-3">
                    <label>Supplier</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={0}
                    />
                  </div>
                </div>
              </div>
              <h6>Plan Modules</h6>
              <div className="input-block mb-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Invoices
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Payments
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Payment Summary
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />
                        Vendors
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Estimates
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Quotations
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Memberships
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />
                        Customers
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Recurring Invoices
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Delivery Challans
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Products
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />
                        Vendors
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Expenses
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Reports
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />{" "}
                        Inventory
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          name="checkbox"
                          defaultChecked=""
                        />
                        Signature
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <h6 className="mb-0">Access Trial</h6>
                <div className="status-toggle">
                  <input
                    id="access-trail-2"
                    className="check"
                    type="checkbox"
                    defaultChecked=""
                  />
                  <label
                    htmlFor="access-trail-2"
                    className="checktoggle checkbox-bg"
                  >
                    checkbox
                  </label>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-8">
                  <div className="input-block mb-3">
                    <label>Trial Days</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder={0}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-0">Is Recommended</h6>
                    <div className="status-toggle">
                      <input
                        id="recommended"
                        className="check"
                        type="checkbox"
                      />
                      <label
                        htmlFor="recommended"
                        className="checktoggle checkbox-bg"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label>Description</label>
                    <textarea
                      rows={3}
                      cols={5}
                      className="form-control"
                      placeholder="Enter Description"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <h6 className="mb-0">Status</h6>
                <div className="status-toggle">
                  <input id="status" className="check" type="checkbox" />
                  <label htmlFor="status" className="checktoggle checkbox-bg">
                    checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-back cancel-btn me-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
AddPackages.propTypes ={
    editMode: PropTypes.bool.isRequired,};
export default AddPackages;
