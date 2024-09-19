import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import "../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../assets/jsons/addPage";
import FeatherIcon from "feather-icons-react";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../customers/vendors/addVendor";
import { filterIcon } from "../_components/Imagepath";
import Select from "react-select";

const Pages = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const languageOptions = [
    { value: 'select', label: 'Select Language' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'english', label: 'English' },
  ];
  
  const handleLanguageChange = () => {
    
  }
  const datasource = Data?.Data;

  const columns = [
    {
      title: "#",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Pages",
      dataIndex: "Pages",
      sorter: (a, b) => a.Pages.length - b.Pages.length,
    },
    {
      title: "Pages Slug",
      dataIndex: "PagesSlug",
      sorter: (a, b) => a.PagesSlug.length - b.PagesSlug.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: () => (
        <div>
          <div className="status-toggle mt-3">
            <input
              id="rating_1"
              className="check"
              type="checkbox"
              defaultChecked="true"
            />
            <label htmlFor="rating_1" className="checktoggle checkbox-bg">
              checkbox
            </label>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
       
          <div className="d-flex align-items-center">
            <Link
              to="#"
              className="btn-action-icon me-2"
              data-bs-toggle="modal"
              data-bs-target="#pages_edit"
            >
              <span>
                <FeatherIcon icon="edit" />
              </span>
            </Link>
            <Link
              to="#"
              className="btn-action-icon"
              data-bs-toggle="modal"
              data-bs-target="#page_delete"
            >
              <span>
                <FeatherIcon icon="trash-2" />
              </span>
            </Link>
          </div>
       
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Pages list</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                           <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>        
                        </span>
                        Filter
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                        <Tooltip title="Setting" placement="bottom">
                          <FeatherIcon icon="settings" />
                          </Tooltip>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
										<Link className="btn btn-primary" to="#" data-bs-toggle="modal" data-bs-target="#add_page"><i className="fa fa-plus-circle me-2" aria-hidden="true"></i>Add Pages</Link>
									</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="card-table">
                  <div className="card-body addPage">
                    <div className="table-responsive table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />
        
        <>
  {/* Add Page */}
  <div className="modal custom-modal modal-lg fade" id="add_page" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header border-0 pb-0">
          <div className="form-header modal-header-title text-start mb-0">
            <h4 className="mb-0">Add Page</h4>
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
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-groups-item border-0 pb-0">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>
                            Slug{" "}
                            <span className="optional">
                              {" "}
                              (If you leave it empty, it will be generated
                              automatically.)
                            </span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Slug"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>
                            Description{" "}
                            <span className="optional"> (Meta Tag)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Description"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>
                            Keywords{" "}
                            <span className="optional"> (Meta Tag)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Keywords"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>Language</label>
                          <Select
                          className="select"
                          options={languageOptions}
                          onChange={handleLanguageChange}
                          placeholder="Select Language"
                        />
                    
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>Location</label>
                          <div>
                            <label className="custom_radio me-3">
                              <input
                                type="radio"
                                name="payment"
                                defaultChecked=""
                              />
                              <span className="checkmark" /> Top Menu
                            </label>
                            <label className="custom_radio">
                              <input type="radio" name="payment" />
                              <span className="checkmark" /> Quick Links
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>Visibility</label>
                          <div>
                            <label className="custom_radio me-3">
                              <input
                                type="radio"
                                name="payment"
                                defaultChecked=""
                              />
                              <span className="checkmark" /> Show
                            </label>
                            <label className="custom_radio">
                              <input type="radio" name="payment" />
                              <span className="checkmark" /> Hide
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-block" id="summernote_container">
                          <label className="form-control-label">
                            Description
                          </label>
                          <textarea
                            className="summernote form-control"
                            placeholder="Type your message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
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
              Add Page
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Page */}
</>

        <div className="modal custom-modal fade" id="pages_edit" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit Page</h4>
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
                      <label>Page Title(English)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="About Us"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Page Slug</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="about-us"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-0">
                      <label>Page Content(English)</label>
                      <textarea
                        rows={5}
                        cols={5}
                        className="form-control"
                        placeholder="about us page contents"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-back me-2"
                >
                  Back
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="modal custom-modal fade" id="page_delete" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Pages list</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="#"
                        className="btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to="#"
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
      </div>
    </>
  );
};

export default Pages;
