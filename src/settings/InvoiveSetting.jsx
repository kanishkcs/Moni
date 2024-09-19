import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Link } from "react-router-dom";
import { imgdrop } from "../_components/Imagepath";
import SettingsSidebar from "../layouts/SettingsSidebar";
const InvoiceSetting = () => {
  return (
    <>
      <Header />
      <Sidebar />
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
                  <div className="content-page-header">
                    <h5>Invoice Settings</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Invoice Prefix</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Invoice Prefix"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Digital Signature Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Digital Signature Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="input-block mb-3">
                        <label>Invoice Logo</label>
                        <div className="input-block service-upload logo-upload mb-0">
                          <span>
                            <img src={imgdrop} alt="upload" />
                          </span>
                          <div className="drag-drop">
                            <h6 className="drop-browse align-center">
                              <span className="text-info me-1">
                                Click to Replace{" "}
                              </span>{" "}
                              or Drag and Drop
                            </h6>
                            <p className="text-muted">SVG, PNG, JPG </p>
                            <input type="file" multiple="" id="image_sign" />
                            <div id="frames" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="input-block mb-3">
                        <label>Digital Signature Image</label>
                        <div className="input-block service-upload logo-upload mb-0">
                          <span>
                            <img src={imgdrop} alt="upload" />
                          </span>
                          <div className="drag-drop">
                            <h6 className="drop-browse align-center">
                              <span className="text-info me-1">
                                Click to Replace{" "}
                              </span>{" "}
                              or Drag and Drop
                            </h6>
                            <p className="text-muted">SVG, PNG, JPG </p>
                            <input type="file" multiple="" id="image_sign2" />
                            <div id="frames2" />
                          </div>
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
  );
};
export default InvoiceSetting;
