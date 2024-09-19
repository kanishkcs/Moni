import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Select from "react-select";
import { DropIcon } from "../../_components/Imagepath";
import TextEditor from "./editor";

const AddProduct = () => {
  const options1 = [
    { value: "Select Units", label: "Select Units" },
    { value: "Pieces", label: "Pieces" },
    { value: "Box", label: "Box" },
    { value: "Kilograms", label: "Kilograms" },
  ];
  const options2 = [
    { value: "Select Discount Type", label: "Select Discount Type" },
    { value: "Percentage", label: "Percentage" },
    { value: "Fixed", label: "Fixed" },
  ];
  const options3 = [
    { value: "Percentage(%)", label: "Percentage(%)" },
    { value: "Fixed", label: "Fixed" },
  ];
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="card mb-0">
              <div className="card-body">
                <div className="page-header">
                  <div className="content-page-header">
                    <h5>Add Products / Services</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group-item">
                      <h5 className="form-title">Basic Details</h5>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Item Type<span className="text-danger"> *</span>
                            </label>
                            <div className="align-center">
                              <div className="form-control me-3">
                                <label className="custom_radio me-3 mb-0">
                                  <input
                                    type="radio"
                                    className="form-control"
                                    name="payment"
                                    defaultChecked
                                  />
                                  <span className="checkmark" /> Product
                                </label>
                              </div>
                              <div className="form-control">
                                <label className="custom_radio mb-0">
                                  <input type="radio" name="payment" />
                                  <span className="checkmark" /> Service
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Product Name{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Product Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3 add-products">
                            <label>
                              Product Code (SKU)
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Product Code"
                            />
                            <button type="submit" className="btn btn-primary">
                              Generate Code
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Category <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Category Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Selling Price{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Selling Price"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Purchase Price{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Purchase Prices"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>
                              Quantity <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter Quantity"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Units</label>
                            <Select
                              defaultValue={selectedOption1}
                              onChange={setSelectedOption1}
                              options={options1}
                              placeholder="Select Units"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Discount Type</label>
                            <Select
                              defaultValue={selectedOption2}
                              onChange={setSelectedOption2}
                              options={options2}
                              placeholder="Select Discount Type"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3 add-products">
                            <label>Generate Barcode</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Barcode Code"
                            />
                            <button type="submit" className="btn btn-primary">
                              Generate Code
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Alert Quantity </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter Alert Quantity"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="input-block mb-3">
                            <label>Tax</label>
                            <Select
                              defaultValue={selectedOption3}
                              onChange={setSelectedOption3}
                              options={options3}
                              placeholder="Percentage(%)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-item">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 description-box">
                          <div
                            className="input-block mb-3"
                            id="summernote_container"
                          >
                            <label className="form-control-label">
                              Product Descriptions
                            </label>
                            <TextEditor />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          <div className="input-block mb-3">
                            <label>Product Image</label>
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
                              <input type="file" multiple id="image_sign" />
                              <div id="frames" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form action="/product-list" className="text-end">
                      <button
                        type="reset"
                        className="btn btn-primary cancel me-2"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Add Item
                      </button>
                    </form>
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

export default AddProduct;
