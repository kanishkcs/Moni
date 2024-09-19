import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import Data from "../../assets/jsons/category";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import AddVendor from "../../customers/vendors/addVendor";
import { DropIcon, filterIcon } from "../../_components/Imagepath";
import Select from "react-select";

const Category = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryOptions = [
    { id: 1, text: "None" },
    { id: 2, text: "Coupons" },
    { id: 3, text: "News" },
    { id: 4, text: "Plugins" },
    { id: 5, text: "Themes" },
    { id: 6, text: "Tutorial" },
  ];

  const formattedCategoryOptions = categoryOptions.map((option) => ({
    value: option.id,
    label: option.text,
  }));

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
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
      dataIndex: "Category",
      render: (img, record) => (
        <>
          <Link href className="product-list-item-img">
            <img src={record.img} alt="product-list" />
            <span>{record.Category}</span>
          </Link>
        </>
      ),
      sorter: (a, b) => a.Category.length - b.Category.length,
    },
    {
      title: "Total Products",
      dataIndex: "Total",
      sorter: (a, b) => a.Total.length - b.Total.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="d-flex align-items-center">
          <Link
            className=" btn-action-icon me-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit_category"
          >
            <i className="fe fe-edit"></i>
          </Link>
          <Link
            className=" btn-action-icon"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="fe fe-trash-2"></i>
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
              <div className="content-page-header ">
                <h5>Category </h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle me-2"
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

                    <li className="">
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-filters me-2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                          <Tooltip title="Download" placement="bottom">
                          <i className="fe fe-download" />
                        </Tooltip>
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="d-block">
                            <li>
                              <Link
                                className="d-flex align-items-center download-item"
                                to="#"
                                download=""
                              >
                                <i className="far fa-file-pdf me-2" />
                                PDF
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="d-flex align-items-center download-item"
                                to="#"
                                download=""
                              >
                                <i className="far fa-file-text me-2" />
                                CVS
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link className="btn-filters me-2" to="#">
                        <span>
                          {/*  <Tooltip title="Print" placement="bottom">
                            <i className="fe fe-printer" />
                          </Tooltip>
 */}
                          <FeatherIcon icon="printer" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_category"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Category
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
            {/* All Invoice */}
            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/product-list">Product</Link>
                        </li>
                        <li>
                          <Link to="/category" className="active">
                            Category
                          </Link>
                        </li>
                        <li>
                          <Link to="/units">Units</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /All Invoice */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className=" card-table">
                  <div className="card-body category">
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
                        rowKey={(record) => record.Id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <div
          className="modal custom-modal fade"
          id="add_category"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Category</h4>
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
                  <div className="col-md-12">
                    <div className="card-body">
                      <div className="form-group-item border-0 pb-0 mb-0">
                        <div className="row">
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Title"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3">
                              <label>Slug</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Slug"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3">
                              <label>Parent Category</label>
                              <Select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                options={formattedCategoryOptions}
                                placeholder="None"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3 mb-0 pb-0">
                              <label>Image</label>
                              <div className="input-block mb-3 service-upload mb-0">
                                <span>
                                  <img src={DropIcon} alt="upload" />
                                </span>
                                <h6 className="drop-browse align-center">
                                  Drop your files here or
                                  <span className="text-primary ms-1">
                                    browse
                                  </span>
                                </h6>
                                <p className="text-muted">Maximum size: 50MB</p>
                                <input
                                  type="file"
                                  multiple=""
                                  id="image_sign"
                                />
                                <div id="frames" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Add Category
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal custom-modal fade"
          id="edit_category"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit Category</h4>
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
                  <div className="col-md-12">
                    <div className="card-body">
                      <div className="form-group-item border-0 pb-0 mb-0">
                        <div className="row">
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Advertising"
                                placeholder="Enter Title"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3">
                              <label>Slug</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="advertising"
                                placeholder="Enter Slug"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3">
                              <label>Parent Category</label>
                              <Select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                options={formattedCategoryOptions}
                                placeholder="Select Category"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="input-block mb-3 mb-0 pb-0">
                              <label>Image</label>
                              <div className="input-block mb-3 service-upload mb-0">
                                <span>
                                  <img src={DropIcon} alt="upload" />
                                </span>
                                <h6 className="drop-browse align-center">
                                  Drop your files here or
                                  <span className="text-primary ms-1">
                                    browse
                                  </span>
                                </h6>
                                <p className="text-muted">Maximum size: 50MB</p>
                                <input
                                  type="file"
                                  multiple=""
                                  id="image_sign"
                                />
                                <div id="frames" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal custom-modal fade"
          id="delete_modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Category</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="reset"
                        data-bs-dismiss="modal"
                        className="w-100 btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="w-100 btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </button>
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

export default Category;
