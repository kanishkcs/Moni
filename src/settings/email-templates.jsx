import React from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
// import { Link } from "react-router-dom";
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import SettingsSidebar from '../layouts/SettingsSidebar';
import TextEditor from '../inventory/products/editor';
const EmailTemplates = () => {
    return(
        <>
        <Header/>
        <Sidebar/>
        <>
        
  <div className="page-wrapper">
  <div className="content container-fluid">
    {/* /Page Header */}
    <div className="row">
      <div className="col-xl-3 col-md-4">
   <SettingsSidebar />

      </div>
      <div className="col-xl-9 col-md-8">
        <div className="page-header">
          <div className="content-page-header">
            <h5>Email Templates</h5>
            <div className="page-content">
              <div className="list-btn">
                <ul className="filter-list">
                  <li>
                    <a
                      className="btn btn-primary"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#add_custom"
                    >
                      <i
                        className="fa fa-plus-circle me-2"
                        aria-hidden="true"
                      />
                      Add Template
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="email-template-card">
          <div className="row">
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Email Verification</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Welcome Email</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Feature Announcement</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Plan Announcement</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Engagement/Usage Reminder</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Feedback Request</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Plan Renewal Reminder</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Plan Expired</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="card">
                <div className="card-body">
                  <h5>Policy Update Notice</h5>
                  <div className="d-flex package-edit">
                    <a
                      className="btn-action-icon me-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_email"
                    >
                      <i className="fe fe-edit" />
                    </a>
                    <a
                      className="btn-action-icon"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="fe fe-trash-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
    {/* Add New Modal */}
    <div
      className="modal custom-modal custom-lg-modal fade"
      id="add_custom"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <div className="form-header modal-header-title text-start mb-0">
              <h4 className="mb-0">Add Email Template</h4>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body add">
            <div className="addnew-modal">
              <form action="#">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="input-block mb-3">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="input-block mb-3">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 description-box">
                    <div className="input-block mb-3">
                      <label className="form-control-label">
                        Template Content
                      </label>
                      <TextEditor />
                    </div>
                  </div>
                </div>
              </form>
              <div className="modal-footer p-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Vendor Modal */}
    {/* Edit Modal */}
    <div
      className="modal custom-modal  custom-lg-modal fade"
      id="edit_email"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <div className="form-header modal-header-title text-start mb-0">
              <h4 className="mb-0">Edit Email Template</h4>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body add">
            <div className="addnew-modal">
              <form action="#">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="input-block mb-3">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                        defaultValue="Welcome Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="input-block mb-3">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject"
                        defaultValue="Welcome [Username]"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 description-box">
                    <div className="input-block mb-3">
                      <label className="form-control-label">
                        Template Content
                      </label>
                      <TextEditor />
                    </div>
                  </div>
                </div>
              </form>
              <div className="modal-footer p-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Modal */}
    {/* Delete Items Modal */}
    <div
      className="modal custom-modal fade modal-delete"
      id="delete_modal"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <div className="delete-modal-icon">
                <span>
                  <i className="fe fe-check-circle" />
                </span>
              </div>
              <h3>Are You Sure?</h3>
              <p>You want delete email template</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="modal-footer justify-content-center p-0">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn me-2"
                >
                  Yes, Delete
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-back cancel-btn"
                >
                  No, Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Delete Items Modal */}
  </div>
</div>

</>

        </>
    )
}
export default EmailTemplates;