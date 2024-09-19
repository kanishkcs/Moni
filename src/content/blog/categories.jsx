import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../../assets/jsons/categories";
import FeatherIcon from "feather-icons-react";

import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import {
  itemRender,
  onShowSizeChange,
} from "../../_components/paginationfunction";
import AddVendor from "../../customers/vendors/addVendor";
import { filterIcon } from "../../_components/Imagepath";

const Categories = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = Data?.Data;

  const columns = [
    {
      title: "#",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Category Name",
      dataIndex: "Name",
      render: (text, record) => (
        <div>
          <div>
            <h2>
              <img
                className="avatar-img rounded me-2"
                width={30}
                height={30}
                src={record.CategoryImg}
                alt="User Image"
              />
            </h2>
            {record.Name}
          </div>
        </div>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Added By",
      dataIndex: "Added",
      render: (text, record) => (
        <div>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">{record.Added}</Link>
          </h2>
        </div>
      ),
      sorter: (a, b) => a.Added.length - b.Added.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: () => (
        <div>
          <div className="status-toggle mt-4">
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
        <div>
          <div className="d-flex align-items-center">
            <Link className=" btn-action-icon me-2" to="#" download="">
              {/* <i className="fe fe-edit" /> */}
              <FeatherIcon icon="edit" />
            </Link>
            <Link className=" btn-action-icon" to="#" download="">
              {/* <i className="fe fe-trash-2" /> */}
              <FeatherIcon icon="trash-2" />
            </Link>
          </div>
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
              <div className="content-page-header ">
                <h5>Categories</h5>
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
                          <FeatherIcon icon="settings" />
                        </span>{" "}
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="btn btn-primary"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#blog-categories"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        ></i>
                        Add Categories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div id="filter_inputs" className="card filter-card">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Search Filter */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className=" card-table">
                  <div className="card-body Categories">
                    <div className="table-responsive table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
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
            {/* /Table */}
          </div>
        </div>
        <div
          className="modal modal-lg custom-modal fade"
          id="blog-categories"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title  text-start mb-0">
                  <h4 className="mb-0 ">Add Category</h4>
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
                  <div className="form-groups-item border-0 pb-0">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Category Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Category Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Slug<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Slug"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Description (Meta Tag)
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            placeholder="Enter Tags"
                            name="services"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block">
                          <label>
                            Keywords (Meta Tag)
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            placeholder="Enter Tags"
                            name="services"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block">
                          <label>
                            Order<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Order"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block status-grid">
                          <label>Status</label>
                          <div className="status-toggle">
                            <input
                              id="rating_9"
                              className="check"
                              type="checkbox"
                              defaultChecked
                            />
                            <label
                              htmlFor="rating_9"
                              className="checktoggle checkbox-bg "
                            />
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
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* modal */}
        <div
          className="modal custom-modal fade bank-details"
          id="edit-blog-categories"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <div className="form-header text-start mb-0">
                  <h4 className="mb-0 text-dark fw-bold">Edit Category</h4>
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
                  <div className="bank-inner-details">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Category Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Expenses"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Slug<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Offer"
                          />
                          <small className="form-text text-muted">
                            {" "}
                            (If you leave it empty, it will be generated
                            automatically.)
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Description (Meta Tag)
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            placeholder="Enter Tags"
                            name="services"
                            defaultValue="Expenses "
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Keywords (Meta Tag)
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            placeholder="Enter Tags"
                            name="services"
                            defaultValue="Expenses "
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="input-block mb-3">
                          <label>
                            Order<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={3}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3">
                        <label>Status</label>
                        <div className="status-toggle">
                          <input
                            id="rating_10"
                            className="check"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            htmlFor="rating_10"
                            className="checktoggle checkbox-bg "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer blog-categories-btn">
                  <div className="bank-details-btn ">
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary me-2"
                    >
                      Add Category
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade contentmodal"
          id="deleteModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content doctor-profile">
              <div className="modal-header pb-0 border-bottom-0  justify-content-end">
                <button
                  type="button"
                  className="close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="feather-x-circle" />
                </button>
              </div>
              <div className="modal-body">
                <div className="delete-wrap text-center">
                  <div className="del-icon">
                    <i className="feather-x-circle" />
                  </div>
                  <h2>Sure you want to delete</h2>
                  <div className="submit-section">
                    <Link
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-success me-2"
                    >
                      Yes
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      No
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />
      </div>
    </>
  );
};

export default Categories;
