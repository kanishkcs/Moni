import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select from "react-select";
import SettingsSidebar from "../layouts/SettingsSidebar";
const PaymentMethod = () => {
  const currencyOptions = [
    { id: 1, text: "Select PayPal Mode" },
    { id: 2, text: "Debit Card" },
    { id: 3, text: "Credit Card" },
  ];

  const formattedOptions = (options) =>
    options.map((option) => ({
      value: option.id,
      label: option.text,
    }));

  const [selectedCurrency, setSelectedCurrency] = useState(null);

  return (
    <>
      <Header />
      <Sidebar />
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
                    <h5>Payment Settings</h5>
                  </div>
                  <div className="form-group-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="payment-toggle">
                          <h5 className="form-title">Strip</h5>
                          <div className="status-toggle">
                            <input
                              id="rating_1"
                              className="check"
                              type="checkbox"
                              defaultChecked="true"
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
                      <div className="col-lg-6 col-12">
                        <div className="input-block mb-3">
                          <label>Stripe Key</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Stripe Key"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-block mb-3">
                          <label>Stripe Secret</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Stripe Secret"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="payment-toggle">
                          <h5 className="form-title">Paypal</h5>
                          <div className="status-toggle">
                            <input
                              id="rating_2"
                              className="check"
                              type="checkbox"
                              defaultChecked="true"
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
                      <div className="col-lg-4 col-12">
                        <div className="input-block mb-3">
                          <label>Paypal Client Id</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Paypal Client Id"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="input-block mb-3">
                          <label>Paypal Secret</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Paypal Secret"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="input-block mb-3">
                          <label>Paypal Mode</label>
                          <Select
                            value={selectedCurrency}
                            onChange={(option) => setSelectedCurrency(option)}
                            options={formattedOptions(currencyOptions)}
                            placeholder="Select PayPal Mode"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group-item border-0 p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="payment-toggle">
                          <h5 className="form-title">Razorpay</h5>
                          <div className="status-toggle">
                            <input
                              id="rating_3"
                              className="check"
                              type="checkbox"
                              defaultChecked="true"
                            />
                            <label
                              htmlFor="rating_3"
                              className="checktoggle checkbox-bg"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-block mb-0">
                          <label>Razorpay Key Id</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Razorpay Key Id"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-block mb-0">
                          <label>Razorpay Secret</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Razorpay Secret"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-path text-end">
                      <a
                        href="#"
                        className="btn btn-cancel bg-primary-light me-3"
                      >
                        Cancel
                      </a>
                      <a href="#" className="btn btn-primary">
                        Save Changes
                      </a>
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
export default PaymentMethod;
