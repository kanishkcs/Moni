import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Data from "../assets/jsons/inventory";
import "../_components/antd.css";
import { Table, Tooltip } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../customers/vendors/addVendor";
import Select from "react-select";
import { filterIcon } from "../_components/Imagepath";

const Inventory = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [selectedUnit, setSelectedUnit] = useState(null);

  const units = [
    { id: 1, text: "Pieces" },
    { id: 2, text: "Inches" },
    { id: 3, text: "Kilograms" },
    { id: 4, text: "Inches" },
    { id: 5, text: "Box" },
  ];
  const formattedUnitOptions = units.map((unit) => ({
    value: unit.id,
    label: unit.text,
  }));

  const handleUnitChange = (selectedOption) => {
    setSelectedUnit(selectedOption);
    // Additional logic if needed
  };

  const datasource = Data?.Data;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "sNo",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Item",
      dataIndex: "item",
      sorter: (a, b) => a.Item.length - b.Item.length,
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.Code.length - b.Code.length,
    },
    {
      title: "Units",
      dataIndex: "units",
      sorter: (a, b) => a.Units.length - b.Units.length,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.Quantity.length - b.Quantity.length,
    },
    {
      title: "Selling Price",
      dataIndex: "sales",
      sorter: (a, b) => a.Sales.length - b.Sales.length,
    },
    {
      title: "Purchase Price",
      dataIndex: "purchase",
      sorter: (a, b) => a.Purchase.length - b.Purchase.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="d-flex">
          <Link
            to="/inventory"
            className="btn btn-greys bg-history-light me-2"
          >
            <i className="far fa-eye me-1" /> History
          </Link>
          <Link
            href="#"
            className="btn btn-greys bg-success-light me-2"
            data-bs-toggle="modal"
            data-bs-target="#stock_in"
          >
            <i className="fa fa-plus-circle me-1" /> Stock in
          </Link>
          <Link
            href="#"
            className="btn btn-greys bg-danger-light me-2"
            data-bs-toggle="modal"
            data-bs-target="#stock_out"
          >
            <i className="fa fa-plus-circle me-1" /> Stock out
          </Link>
          <div className="dropdown dropdown-action">
            <Link
              href="#"
              className=" btn-action-icon "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <ul>
                <li>
                  <Link
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_inventory"
                  >
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_stock"
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

        <div className="page-wrapper custom-class-td">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header ">
                <h5>Inventory</h5>
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
                      <div className="dropdown dropdown-action me-3">
                        <Link
                          to="#"
                          className="btn-filters"
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
                    <li className="">
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-filters"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <Tooltip title="Print" placement="bottom">
                              <i className="fe fe-printer" />
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
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className=" card-table">
                  <div className="card-body">
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
            {/* /Table */}
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <div className="modal custom-modal fade" id="stock_in" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Stock in</h4>
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
                      <label>Name</label>
                      <input
                        type="text"
                        className="bg-white-smoke form-control"
                        placeholder="SEO Service"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="input-block mb-3">
                      <label>Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="input-block mb-0">
                      <label>Units</label>
                      <Select
                        value={selectedUnit}
                        onChange={handleUnitChange}
                        options={formattedUnitOptions}
                        placeholder="Select Unit"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-block mb-0">
                      <label>Notes</label>
                      <textarea
                        rows={3}
                        cols={3}
                        className="form-control"
                        placeholder="Enter Notes"
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
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Add Quantity
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="modal custom-modal fade" id="stock_out" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Remove Stock</h4>
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
                      <label>Name</label>
                      <input
                        type="text"
                        className="bg-white-smoke form-control"
                        placeholder="SEO Service"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="input-block mb-3">
                      <label>Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="input-block mb-0">
                      <label>Units</label>
                      <Select
                        value={selectedUnit}
                        onChange={handleUnitChange}
                        options={formattedUnitOptions}
                        placeholder="Select Unit"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-block mb-0">
                      <label>Notes</label>
                      <textarea
                        rows={3}
                        cols={3}
                        className="form-control"
                        placeholder="Enter Notes"
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
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Remove Quantity
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal custom-modal fade"
          id="edit_inventory"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit Inventory</h4>
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
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Lorem ipsum dolor sit"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Code</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="P125389"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Units</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Box"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Quantity</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={3}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Sales Price</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="$155.00"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Purchase Price</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="$150.00"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-0">
                      <label>Status</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Stock in"
                      />
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
          id="delete_stock"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Inventory</h3>
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

export default Inventory;
