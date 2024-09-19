import React from "react";
import { company_01 } from "../../_components/Imagepath";

import PropTypes from 'prop-types'
const CompanyDetails = () => {


  return (
    <div
    className="modal custom-modal custom-lg-modal fade p-20"
    id="view_companies"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header border-0">
          <div className="form-header modal-header-title text-start mb-0">
            <h4 className="mb-0">Company Details</h4>
          </div>
          <div className="d-flex details-edit-link">
            <a
              href="#"
            
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#edit_companies"
            >
              <i className="fe fe-edit me-2" />
              Edit Company
            </a>
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="modal-body pb-0">
          <div className="row">
            <div className="col-md-12">
              <div className="form-field-item">
                <div className="profile-picture company-detail-head">
                  <div className="upload-profile">
                    <div className="profile-img company-profile-img">
                      <img
                        id="view-company-img"
                        className="img-fluid me-0"
                        src={company_01}
                        alt="profile-img"
                      />
                    </div>
                    <div className="add-profile">
                      <h5>Hermann Groups</h5>
                      <span>Hermllrich@example.com</span>
                    </div>
                  </div>
                  <span className="badge bg-success-light d-inline-flex align-items-center">
                    <i className="fe fe-check me-1" />
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="plane-basic-info">
                <h5>Basic Info</h5>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Account URL</h6>
                      <p>hru.example.com</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Phone Number</h6>
                      <p>+1 15541 54544</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Website</h6>
                      <p>www.example.com</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Company Address</h6>
                      <p>
                        22 Junior Avenue <br />
                        Duluth, GA 30097
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Currency</h6>
                      <p>United Stated Dollar (USD)</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Language</h6>
                      <p>English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="plane-basic-info plane-detail">
                <h5>Plan Details</h5>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Plan Name</h6>
                      <p>Enterprise</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Plan Type</h6>
                      <p>Yearly</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Price</h6>
                      <p>$200</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Register Date</h6>
                      <p>15 Jan 2024</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="basic-info-detail">
                      <h6>Expiring On</h6>
                      <p>15 Jan 2025</p>
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
  
  );
};
CompanyDetails.propTypes ={
    handleEditClick: PropTypes.bool.isRequired,
    onClose: PropTypes.func};

export default CompanyDetails;
