/* eslint-disable */ 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { avatar14, img10 } from "../_components/Imagepath";
import Select from 'react-select';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EditCustomer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  function handleInputChange(telNumber, selectedCountry) {
    console.log(
      "input changed. number: ",
      telNumber,
      "selected country: ",
      selectedCountry
    );
  }

  // Use declaratively within another react components render method
  // var ReactTelInput = require('react-telephone-input');

  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [currencyOptions, setcurrencyOptions] = useState([
    { id: 1, text: "Select Currency" },
    { id: 2, text: "US dollar" },
    { id: 3, text: "Euro" },
    { id: 4, text: "Pound sterling" },
  ]);
  const formattedCurrencyOptions = currencyOptions.map(option => ({
    value: option.text,
    label: option.text,
  }));
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleProductChange = (selectedOption) => {
    setSelectedCurrency(selectedOption);
  };
  const productOptions = [
    { value: 1, label: "Select Currency" },
    { value: 2, label: "US dollar" },
    { value: 2, label: "Euro" },
    { value: 2, label: "Pound sterling" },
   
  ];
  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="card mb-0">
              <div className="card-body">
                {/* Page Header */}
                <div className="page-header">
                  <div className="content-page-header">
                    <h5>Edit Customers</h5>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-md-12">
                    <form action="#">
                      <div className="">
                        <div className="form-group-item">
                          <h5 className="form-title">Basic Details</h5>
                          <div className="profile-picture">
                            <div className="upload-profile">
                              <div className="profile-img">
                                <img
                                  id="blah"
                                  className="avatar"
                                  src={avatar14}
                                  alt=""
                                />
                              </div>
                              <div className="add-profile">
                                <h5>Upload a New Photo</h5>
                                <span>Profile-pic.jpg</span>
                              </div>
                            </div>
                            <div className="img-upload">
                              <label className="btn btn-primary">
                                Upload <input type="file" />
                              </label>
                              <Link to="#" className="btn btn-remove">
                                Remove
                              </Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="John Smith"
                                  placeholder="Enter Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  defaultValue="john@example.com"
                                  placeholder="Enter Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Phone</label>
                                <PhoneInput
                                  country={"in"} // Default country code (Optional)
                                  value={phoneNumber}
                                  onChange={handleChange}
                                />

                                {/* <ReactTelephoneInput
                            className="form-control mail-icon2"
                              defaultCountry="in"
                              flagsImagepath="/path/to/images/flags.png"
                              onChange={handleInputChange}
                              onBlur={handleInputBlur}
                            /> */}
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Currency</label>
                                <Select
                                  value={selectedProduct}
                                  onChange={(selectedOption) =>
                                    setSelectedProduct(selectedOption)
                                  }
                                  options={productOptions}
                                  placeholder="Select Currency"
                                  
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Website</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="www.example.com"
                                  placeholder="Enter Website Address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Notes</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  defaultValue="Lorem Ipsum is simply dummy"
                                  placeholder="Enter Your Notes"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group-item">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="billing-btn mb-2">
                                <h5 className="form-title">Billing Address</h5>
                              </div>
                              <div className="input-block mb-3">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="John Smith"
                                  placeholder="Enter Name"
                                />
                              </div>
                              <div className="input-block mb-3">
                                <label>Address Line 1</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="4581 Sunny Glen Lane"
                                  placeholder="Enter Address 1"
                                />
                              </div>
                              <div className="input-block mb-3">
                                <label>Address Line 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Cleveland, OH 44106"
                                  placeholder="Enter Address 1"
                                />
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-12">
                                  <div className="input-block mb-3">
                                    <label>Country</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="Australia"
                                      placeholder="Country"
                                    />
                                  </div>
                                  <div className="input-block mb-3">
                                    <label>City</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="Melbourne"
                                      placeholder="City"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                  <div className="input-block mb-3">
                                    <label>State</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="Victoria"
                                      placeholder="State"
                                    />
                                  </div>
                                  <div className="input-block mb-3">
                                    <label>Pincode</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue={3000}
                                      placeholder="Pincode"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="billing-btn">
                                <h5 className="form-title mb-0">
                                  Shipping Address
                                </h5>
                                <Link to="#" className="btn btn-primary">
                                  Copy from Billing
                                </Link>
                              </div>
                              <div className="input-block mb-3">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="John Smith"
                                  placeholder="Enter Name"
                                />
                              </div>
                              <div className="input-block mb-3">
                                <label>Address Line 1</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="4581 Sunny Glen Lane"
                                  placeholder="Enter Address 1"
                                />
                              </div>
                              <div className="input-block mb-3">
                                <label>Address Line 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Cleveland, OH 44106"
                                  placeholder="Enter Address 1"
                                />
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-12">
                                  <div className="input-block mb-3">
                                    <label>Country</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="Australia"
                                      placeholder="Country"
                                    />
                                  </div>
                                  <div className="input-block mb-3">
                                    <label>City</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="Melbourne"
                                      placeholder="City"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                  <div className="input-block mb-3">
                                    <label>State</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="Victoria "
                                      placeholder="State"
                                    />
                                  </div>
                                  <div className="input-block mb-3">
                                    <label>Pincode</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue={3000}
                                      placeholder="Pincode"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group-customer customer-additional-form">
                          <div className="row">
                            <h5 className="form-title">Bank Details</h5>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Bank Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Bank Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Branch</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Branch Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Account Holder Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Account Holder Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                              <div className="input-block mb-3">
                                <label>Account Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Account Number"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                              <div className="input-block mb-3">
                                <label>IFSC</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter IFSC Code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="add-customer-btns text-end">
                          <Link
                            to="#"
                            type="reset"
                            className="btn customer-btn-cancel"
                          >
                            Cancel
                          </Link>
                          <Link
                            to="/customers"
                            type="submit"
                            className="btn customer-btn-save"
                          >
                            Save Changes
                          </Link>
                        </div>
                      </div>
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
export default EditCustomer;
