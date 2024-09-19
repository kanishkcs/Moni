import React,{useState,useEffect}from 'react'
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import FeatherIcon from "feather-icons-react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Table } from "antd";
import Data from "../../assets/jsons/editInvoice";

import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";



const AddPurchaseOrder = () => {
    const [menu, setMenu] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
  
    const toggleMobileMenu = () => {
      setMenu(!menu);
    };
  
    useEffect(() => {
      let elements = Array.from(
        document.getElementsByClassName("react-datepicker-wrapper")
      );
      elements.map((element) => element.classList.add("w-100"));
    }, []);
  
    const datasource = Data?.Data;
  
    const columns = [
      {
        title: "Product/Service",
        dataIndex: "Product",
        sorter: (a, b) => a.Product.length - b.Product.length,
      },
      {
        title: "Quantity",
        dataIndex: "Quantity",
        sorter: (a, b) => a.Quantity.length - b.Quantity.length,
      },
      {
        title: "Unit",
        dataIndex: "Unit",
        sorter: (a, b) => a.Unit.length - b.Unit.length,
      },
      {
        title: "Rate",
        dataIndex: "Rate",
        sorter: (a, b) => a.Rate.length - b.Rate.length,
      },
      {
        title: "Discount",
        dataIndex: "Discount",
        sorter: (a, b) => a.Discount.length - b.Discount.length,
      },
      {
        title: "Tax",
        dataIndex: "Tax",
        sorter: (a, b) => a.Tax.length - b.Tax.length,
      },
      {
        title: "Amount",
        dataIndex: "Amount",
        sorter: (a, b) => a.Amount.length - b.Amount.length,
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: () => (
          <>
            <div className="d-flex align-items-center">
              <Link
                to="#"
                className="btn-action-icon me-2"
                data-bs-toggle="modal"
                data-bs-target="#add_discount"
              >
                <span>
                  <FeatherIcon icon="edit" />
                </span>
              </Link>
              <Link
                to="#"
                className="btn-action-icon"
                data-bs-toggle="modal"
                data-bs-target="#delete_discount"
              >
                <span>
                  <FeatherIcon icon="trash-2" />
                </span>
              </Link>
            </div>
          </>
        ),
        sorter: (a, b) => a.Action.length - b.Action.length,
      },
    ];
  
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductOption, setSelectedProductOption] = useState(null);
    const [selectedTax, setSelectedTax] = useState(null);
    const [selectedBank, setSelectedBank] = useState(null);
    const [selectedPercentage, setSelectedPercentage] = useState(null);
  
    const productOptions = [
      { value: 1, label: "Choose Vendor" },
      { value: 2, label: "Vendor 1" },
      { value: 3, label: "Vendor 2" },
      { value: 4, label: "Vendor 3" },
    ];
    const productOptionOptions = [
      { value: 1, label: "Select Product" },
      { value: 2, label: "Product 1" },
      { value: 3, label: "Product 2" },
      { value: 4, label: "Product 3" },
    ];
    const percentageOptions = [
      { value: 1, label: "Percentage(%)" },
      { value: 2, label: "0%" },
    ];
    const taxOptions = [
      { value: 1, label: "No Tax" },
      { value: 2, label: "IVA-21%" },
      { value: 3, label: "IRPF-(-15%)" },
      { value: 4, label: "PDV-(20%)" },
    ];
    const bankOptions = [
      { value: 1, label: "SBI" },
      { value: 2, label: "IOB" },
      { value: 3, label: "Canara" },
    ]
  
  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />
      <Sidebar />

      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="card mb-0">
              <div className="card-body">
                <div className="content-page-header">
                  <h5>Add Purchases Order</h5>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group-item border-0 mb-0">
                      <div className="row align-item-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Purchases Id</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Purchases Id"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Select Vendor</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select
                                  value={selectedProduct}
                                  onChange={(selectedOption) =>
                                    setSelectedProduct(selectedOption)
                                  }
                                  options={productOptions}
                                  placeholder="Select Vendor"
                                />
                              </li>
                              <li>
                                <Link
                                  className="btn btn-primary form-plus-btn"
                                  to="/add-customer"
                                >
                                  <i className="fas fa-plus-circle" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Purchases Date</label>
                            <DatePicker
                              className="datetimepicker form-control"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            ></DatePicker>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Due Date</label>
                            <DatePicker
                              className="datetimepicker form-control"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            ></DatePicker>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Reference No</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Reference Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Supplier Invoice Serial No</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Supplier Invoice Serial No"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block mb-3">
                            <label>Products</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select
                                  value={selectedProductOption}
                                  onChange={(selectedOption) =>
                                    setSelectedProductOption(selectedOption)
                                  }
                                  options={productOptionOptions}
                                  placeholder="Select Product"
                                />
                              </li>
                              <li>
                                <Link
                                  className="btn btn-primary form-plus-btn"
                                  to="/add-product"
                                >
                                  <i className="fas fa-plus-circle" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-item">
                      <div className="card-table">
                        <div className="card-body">
                          <div className="table-responsive no-pagination">
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
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="input-block mb-3">
                              <label>Discount Type</label>
                              <Select
                                value={selectedPercentage}
                                onChange={(selectedOption) =>
                                  setSelectedPercentage(selectedOption)
                                }
                                options={percentageOptions}
                                placeholder="Percentage(%)"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="input-block mb-3">
                              <label>Discount(%)</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={10}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-block mb-3">
                          <label>Tax</label>
                          <Select
                            value={selectedTax}
                            onChange={(selectedOption) =>
                              setSelectedTax(selectedOption)
                            }
                            options={taxOptions}
                            placeholder="Select Tax"
                          />
                        </div>
                      </div>
                      <div className="col-md-4" />
                    </div>
                    <div className="form-group-item border-0 p-0">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="row align-items-center">
                              <div className="col-md-8">
                                <div className="input-block mb-3">
                                  <label>Select Bank</label>
                                  <Select
                                    value={selectedBank}
                                    onChange={(selectedOption) =>
                                      setSelectedBank(selectedOption)
                                    }
                                    options={bankOptions}
                                    placeholder="Select Bank"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-groups">
                                  <Link
                                    className="btn btn-primary"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#bank_details"
                                  >
                                    Add Bank
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="input-block mb-3 notes-form-group-info">
                              <label>Notes</label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Notes"
                                defaultValue={""}
                              />
                            </div>
                            <div className="input-block notes-form-group-info mb-0">
                              <label>Terms and Conditions</label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Terms and Conditions"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="invoice-total-box">
                              <div className="invoice-total-inner">
                                <p>
                                  Taxable Amount <span>$1360.00</span>
                                </p>
                                <p>
                                  Discount <span>$136.00</span>
                                </p>
                                <p>
                                  Vat <span>$0.00</span>
                                </p>
                                <div className="status-toggle justify-content-between">
                                  <div className="d-flex align-center">
                                    <p>Round Off </p>
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
                                  <span>$0.00</span>
                                </div>
                              </div>
                              <div className="invoice-total-footer">
                                <h4>
                                  Total Amount <span>$1224.00</span>
                                </h4>
                              </div>
                            </div>
                            <div className="input-block mb-3">
                              <label>Signature Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Signature Name"
                              />
                            </div>
                            <div className="input-block mb-0">
                              <label>Signature Image</label>
                              <div className="input-block service-upload service-upload-info mb-0">
                                <span>
                                  <i className="fe fe-upload-cloud me-1" />
                                  Upload Signature
                                </span>
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
                    <form action="/purchases" className="text-end">
                      <button
                        type="reset"
                        className="btn btn-primary cancel me-2"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
        <>
          {/* Add Tax & Discount Modal */}
          <div
            className="modal custom-modal fade"
            id="add_discount"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="mb-0">Add Tax &amp; Discount</h4>
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
                        <label>Rate</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder={120}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-3">
                        <label>Discount Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder={0}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-0">
                        <label>Tax</label>
                        <Select
                          value={selectedTax}
                          onChange={(selectedOption) =>
                            setSelectedTax(selectedOption)
                          }
                          options={taxOptions}
                          placeholder="Select Tax"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    href=""
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-cancel-btn me-2"
                  >
                    Back
                  </Link>
                  <Link
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-continue-btn"
                  >
                    Save
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Tax & Discount Modal */}
          {/* Delete Items Modal */}
          <div
            className="modal custom-modal fade"
            id="delete_discount"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Delete Product / Services</h3>
                    <p>Are you sure want to delete?</p>
                  </div>
                  <div className="modal-btn delete-action">
                    <div className="row">
                      <div className="col-6">
                        <Link
                          href="#"
                          className="btn btn-primary paid-continue-btn"
                        >
                          Delete
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          href="#"
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
          {/* /Delete Items Modal */}
          {/* Add Bank Details Modal */}
          <div
            className="modal custom-modal fade"
            id="bank_details"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="mb-0">Add Bank Details</h4>
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
                        <label>
                          Bank Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bank Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-3">
                        <label>
                          Account Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Account Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-3">
                        <label>
                          Branch Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Branch Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="input-block mb-0">
                        <label>
                          IFSC Code <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter IFSC COde"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-cancel-btn me-2"
                  >
                    Back
                  </Link>
                  <Link
                    href="#"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-continue-btn"
                  >
                    Save
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Bank Details Modal */}
        </>
      </>
    </div>
  )
}

export default AddPurchaseOrder
