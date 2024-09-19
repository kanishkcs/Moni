import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import Data from "../../assets/jsons/productList";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { filterIcon } from "../../_components/Imagepath";

const ProductList = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = Data?.Data;

  const columns = [
    {
      title: "ID",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Item",
      dataIndex: "Item",
      sorter: (a, b) => a.Item.length - b.Item.length,
      render: (img, record) => (
        <>
          <Link to="/profile" className="avatar avatar-md me-2 companies">
            <img
              className="avatar-img sales-rep"
              src={record.img}
              alt="User Image"
            />
          </Link>
          <Link to="/profile">{record.Item}</Link>
        </>
      ),
    },
    {
      title: "Code",
      dataIndex: "Code",
      sorter: (a, b) => a.Code.length - b.Code.length,
    },
    {
      title: "Category",
      dataIndex: "Category",
      sorter: (a, b) => a.Category.length - b.Category.length,
    },
    {
      title: "Units",
      dataIndex: "Units",
      sorter: (a, b) => a.Units.length - b.Units.length,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      sorter: (a, b) => a.Quantity.length - b.Quantity.length,
    },
    {
      title: "Sales Price",
      dataIndex: "Sales",
      sorter: (a, b) => a.Sales.length - b.Sales.length,
    },
    {
      title: "Purchase Price",
      dataIndex: "Purchase",
      sorter: (a, b) => a.Purchase.length - b.Purchase.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="d-flex align-items-center">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className=" btn-action-icon "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <ul>
                <li>
                  <Link className="dropdown-item" to="/edit-product">
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                  >
                    <i className="far fa-trash-alt me-2" />
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
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
                <h5>Products / Services</h5>
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
                          </Tooltip>{" "}
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
                       <Tooltip title="Print" placement="bottom">
                            <i className="fe fe-printer" />
                          </Tooltip>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-import me-2" to="#">
                        <span>
                          {/* <i className="fe fe-inbox me-2" />  */}
                          <FeatherIcon icon="inbox" className="me-2" />
                          Import
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-primary" to="/add-product">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Product
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
                          <Link to="/product-list" className="active">
                            Product
                          </Link>
                        </li>
                        <li>
                          <Link to="/category">Category</Link>
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
                  <div className="card-body">
                    <div className="table-responsive">
										<div className="companies-table">
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
            </div>
            {/* /Table */}
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
                  <h3>Delete Products / Services</h3>
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

export default ProductList;
