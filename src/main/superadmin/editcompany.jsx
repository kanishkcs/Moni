import React, { useState } from "react";
import { company_01,  } from "../../_components/Imagepath";
import Select from 'react-select'

const Editcompany = () => {
    const [eye, seteye] = useState(true);
    const [eye1, seteye1] = useState(true);
  
    const onEyeClick = () => {
      seteye(!eye);
    };
    const onEyeClick2 = () => {
      seteye1(!eye1);
    };
  const options = [
    { value: "monthly", label: "monthly" },
    { value: "yearly", label: "yearly" },
    { value: "Lifetime", label: "Lifetime" },
  ];
  const planoptions = [
    { value: "All Plans", label: "All Plans" },
    { value: "Advanced", label: "Advanced" },
    { value: "Basic", label: "Basic" },
    { value: "Enterprise", label: "Enterprise" },
    { value: "Premium", label: "Premium" },
    { value: "Free", label: "Free" },
  ];
  const currencyOptions = [
    { value: "₹", label: "₹" },
    { value: "$", label: "$" },
    { value: "£", label: "£" },
    { value: "€", label: "€" },
  ];

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Spanish", label: "Spanish" },
    { value: "German", label: "German" },
  ];

  return (
    <div
      className="modal custom-modal custom-lg-modal fade p-20"
      id="edit_companies"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header border-0">
            <div className="form-header modal-header-title text-start mb-0">
              <h4 className="mb-0">
             Edit Company
                </h4>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-field-item">
                    <h5 className="form-title">Company Profile</h5>
                    <div className="profile-picture">
                      <div className="upload-profile">
                        <div className="profile-img company-profile-img">
                          <img
                            id="company-img"
                            className="img-fluid me-0"
                            src={company_01}
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
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="form-label">Name </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="form-label">Email Address </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="form-label">Account Url </label>
                    <div className="url-text-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Account URL"
                      />
                      <span className="url-text">kanakku.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="mb-2">Phone Number</label>
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="form-label">Website </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Website"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group modal-password-field">
                    <input
                
                type={eye ? "password" : "text"}
                className="form-control pass-input"
                placeholder="Password"
              />

                    <span
                            onClick={onEyeClick}
                            className={`fas toggle-password ${
                              eye ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="form-control-label">
                      Confirm Password
                    </label>
                    <div className="pass-group modal-password-field">
                    <input
                              type={eye1 ? "password" : "text"}
                              className="form-control pass-input-two"
                              placeholder="Confirm Password"
                            />
                            <span
                              onClick={onEyeClick2}
                              className={`fas toggle-password-two ${
                                eye1 ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="form-label">Company Address </label>
                    <textarea
                      type="text"
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label>Plan Name</label>

                    <Select
                      className="select"
                      options={planoptions}
                      placeholder="Select Plan"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label>Plan Type</label>
                    <Select
                      className="select"
                      options={options}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label>Select Currency</label>

                    <Select
                      className="select"
                      options={currencyOptions}
                      placeholder="Select Currency"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label>Select Language</label>

                    <Select
                      className="select"
                      options={languageOptions}
                      placeholder="Select Language"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-center mb-3">
                    <h6 className="mb-0">Status</h6>
                    <div className="status-toggle">
                      <input
                        id="access-trail"
                        className="check"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        htmlFor="access-trail"
                        className="checktoggle checkbox-bg"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
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
                Add New
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Editcompany;
