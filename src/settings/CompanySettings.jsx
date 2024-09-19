import React from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import { Link} from "react-router-dom";
import { settingslogo, settingslogo1 } from '../_components/Imagepath';
import SettingsSidebar from '../layouts/SettingsSidebar';
const CompanySettings = () =>{

    return(
        <>
        <Header/>
        <Sidebar/>
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-md-4">
            <SettingsSidebar/>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card company-settings-new">
                <div className="card-body w-100">
                  <div className="content-page-header">
                    <h5>Company Settings</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Company Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Company Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Address Line 1</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address Line 1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Address Line 2</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address Line 2"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Country"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Pincode"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="input-block mb-3">
                        <label>Site Logo</label>
                        <div className="input-block service-upload logo-upload mb-0">
                          <div className="drag-drop">
                            <h6 className="drop-browse align-center">
                              <span className="text-info me-1">Click To Replace</span>{" "}
                              or Drag and Drop
                            </h6>
                            <p className="text-muted">
                              SVG, PNG, JPG (Max 800*400px)
                            </p>
                            <input type="file" multiple="" />
                          </div>
                          <span className="sites-logo">
                            <img src={settingslogo1} alt="upload" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="input-block mb-4">
                        <label>Favicon</label>
                        <div className="input-block service-upload logo-upload mb-0">
                          <div className="drag-drop">
                            <h6 className="drop-browse align-center">
                              <span className="text-info me-1">
                                Click To Replace{" "}
                              </span>{" "}
                              or Drag and Drop
                            </h6>
                            <p className="text-muted">SVG, PNG, JPG (Max 35*35px)</p>
                            <input type="file" multiple="" />
                          </div>
                          <span className="sites-logo">
                            <img src={settingslogo} alt="upload" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="input-block mb-4">
                        <label>Company icon</label>
                        <div className="input-block service-upload logo-upload mb-0">
                          <div className="drag-drop">
                            <h6 className="drop-browse align-center">
                              <span className="text-info me-1">
                                Click To Replace{" "}
                              </span>{" "}
                              or Drag and Drop
                            </h6>
                            <p className="text-muted">
                              SVG, PNG, JPG (Max 800*400px)
                            </p>
                            <input type="file" multiple="" />
                          </div>
                          <span className="sites-logo">
                            <img src={settingslogo} alt="upload" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="btn-path text-end">
                        <Link
                          to="to"
                          className="btn btn-cancel bg-primary-light me-3"
                        >
                          Cancel
                        </Link>
                        <Link to="to" className="btn btn-primary">
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
    </>
    )
}
export default CompanySettings;