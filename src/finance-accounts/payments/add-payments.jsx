 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Select from "react-select";

const AddPayment = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [date, setDate] = useState(new Date());
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const customerOptions = [
    { id: 1, text: 'Select Customer' },
    { id: 2, text: 'Brian Johnson' },
    { id: 3, text: 'Marie Canales' },
    { id: 4, text: 'Barbara Moore' },
    { id: 5, text: 'Greg Lynch' },
    { id: 6, text: 'Karlene Chaidez' },
  ];

  const invoiceOptions = [
    { id: 'Afganistan', text: 'List Empty' },
    // Add your invoice options here if needed
  ];

  const paymentOptions = [
    { id: 'payment', text: 'Select Payment mode' },
    { id: 'Afganistan', text: 'Cash' },
    { id: 'Albania', text: 'Credit' },
    { id: 'Algeria', text: 'Cheque' },
  ];

  const formattedOptions = options =>
    options.map(option => ({
      value: option.id,
      label: option.text,
    }));

  const handleCustomerChange = selectedCustomer => {
    setSelectedCustomer(selectedCustomer);
  };

  const handleInvoiceChange = selectedInvoice => {
    setSelectedInvoice(selectedInvoice);
  };

  const handlePaymentChange = selectedPayment => {
    setSelectedPayment(selectedPayment);
  };

  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("width-100"));
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Payments</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/payments">Payments</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Payments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>Date:</label>
                            <div className="cal-icon">
                              <DatePicker
                                selected={date}
                                onChange={handleChange}
                                className="form-control datetimepicker"
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3">
                            <label>Customer:</label>
                            <Select
                              className="w-100"
                              value={selectedCustomer}
                              onChange={handleCustomerChange}
                              options={formattedOptions(customerOptions)}
                              placeholder="Select Customer"
                            />
                          </div>
                          <div className="input-block mb-3">
                            <label>Address:</label>
                            <textarea
                              rows="5"
                              cols="5"
                              className="form-control"
                              placeholder="Enter Address"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>Amount:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Payment Number:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Invoice:</label>
                            <Select
                              className="w-100"
                              value={selectedInvoice}
                              onChange={handleInvoiceChange}
                              options={formattedOptions(invoiceOptions)}
                              placeholder="Select Invoice"
                            />

                          </div>
                          <div className="input-block mb-3">
                            <label>Payment Mode:</label>
                            <Select
                              className="w-100"
                              value={selectedPayment}
                              onChange={handlePaymentChange}
                              options={formattedOptions(paymentOptions)}
                              placeholder="Select Payment Mode"
                            />
                          </div>
                          <div className="text-end mt-4">
                            <button type="submit" className="btn btn-primary">
                              Add Payments
                            </button>
                          </div>
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
export default AddPayment;
