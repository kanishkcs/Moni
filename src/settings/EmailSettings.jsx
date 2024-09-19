import React from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import SettingsSidebar from '../layouts/SettingsSidebar';
const EmailSettings = () => {
    return(
        <>
        <Header/>
        <Sidebar/>
        <>
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
                <h5>Email Settings</h5>
              </div>
              <div className="row">
                <h5 className="mail-title">mail Provider</h5>
                <div className="col-lg-6 col-12">
                  <div className="input-block mb-3">
                    <div className="mail-provider">
                      <h4>PHP Mail</h4>
                      <div className="mail-setting">
                      <Link
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#bank_details"
                        >
                          <i className="fe fe-settings">
                          <FeatherIcon icon="fe-settings"/>
                          </i>
                        </Link>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="input-block mb-3">
                    <div className="mail-provider">
                      <h4>SMTP</h4>
                      <div className="mail-setting">
                      <Link to="#">
                          <i className="fe fe-settings" />
                        </Link>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="input-block mb-3">
                    <label>Email From Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email From Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="input-block mb-3">
                    <label>Email From Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email From Address"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="input-block mb-3">
                    <label>Email Global Footer</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Global Footer"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="input-block mb-3">
                    <label>Send Test Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="btn-path text-end">
                  <Link
                      to="#"
                      className="btn btn-cancel bg-primary-light me-3"
                    >
                      Cancel
                    </Link>
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
  {/* /Page Wrapper */}
  {/* PHP Mail Modal */}
  <div className="modal custom-modal fade" id="bank_details" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header border-0 pb-0">
          <div className="form-header modal-header-title php-mail-modal text-start mb-0">
            <h4 className="mb-0">PHP Mail</h4>
            <div className="status-toggle">
              <input
                id="rating_3"
                className="check"
                type="checkbox"
                defaultChecked=""
              />
              <label htmlFor="rating_3" className="checktoggle checkbox-bg">
                checkbox
              </label>
            </div>
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
                <label>Email From Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="demo2"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="input-block mb-3">
                <label>Email Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="input-block mb-3">
                <label>Email From Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Smith"
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
  {/* /PHP Mail Modal */}
</>

        </>
    )
}
export default EmailSettings;