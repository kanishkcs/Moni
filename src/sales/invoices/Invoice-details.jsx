import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { logo, signature } from "../../_components/Imagepath";
import { Link } from "react-router-dom";

const Invoicedetails = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <>
          {/* Page Wrapper */}
          <div className="page-wrapper ">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="card">
                <div className="card-body">
                  <div className="page-header">
                    <div className="content-invoice-header">
                      <h5>Invoice Details</h5>
                      <div className="list-btn"></div>
                    </div>
                  </div>
                  {/* /Page Header */}
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="invoice-card">
                        <div className="card-bod">
                          <div className="card-table">
                            <div className="card-bod">
                              {/* Invoice Logo */}
                              <div className="invoice-item invoice-item-one">
                                <div className="row align-items-center">
                                  <div className="col-md-6">
                                    <div className="invoice-logo">
                                      <img
                                        className="light-color-logo"
                                        src={logo}
                                        alt="logo"
                                      />
                                      <img
                                        src="assets/img/logo-full-white.png"
                                        className="dark-white-logo"
                                        alt="logo"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="invoice-info">
                                      <h1 className="text-warning">UNPAID</h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Invoice Logo */}
                              {/* Invoice Date */}
                              <div className="invoice-item invoice-item-date">
                                <div className="row">
                                  <div className="col-md-4">
                                    <p className="text-start invoice-details">
                                      Issue Date<span>: </span>
                                      <strong>13 Apr 2023</strong>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p className="text-start invoice-details">
                                      Due Date<span>: </span>
                                      <strong>03 Jun 2023</strong>
                                      <span className="text-danger">
                                        Due in 8 days
                                      </span>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p className="invoice-details">
                                      Invoice No<span>: </span>
                                      <strong>INV 00001</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* /Invoice Date */}
                              {/* Invoice To */}
                              <div className="invoice-item invoice-item-two">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="invoice-info mb-3">
                                      <strong className="customer-text-one">
                                        Invoiced To<span>:</span>
                                      </strong>
                                      <p className="invoice-details-two">
                                        John Williams
                                        <br />
                                        15 Hodges Mews, High Wycombe
                                        <br />
                                        HP12 3JL
                                        <br />
                                        United Kingdom
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="invoice-info invoice-info2 mb-3">
                                      <strong className="customer-text-one">
                                        Pay To<span>:</span>
                                      </strong>
                                      <p className="invoice-details-two">
                                        Walter Roberson
                                        <br />
                                        299 Star Trek Drive, Panama City,
                                        <br />
                                        Florida, 32405,
                                        <br />
                                        USA
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="invoice-info invoice-info2 mb-3">
                                      <strong className="customer-text-one">
                                        Payment Details<span>:</span>
                                      </strong>
                                      <p className="text-start invoice-details-two invoice-details mb-1">
                                        PayPal<span>: </span>
                                        <strong>examplepaypal.co</strong>
                                      </p>
                                      <p className="text-start invoice-details-two invoice-details mb-1">
                                        Account<span>: </span>
                                        <strong>examplepaypal.co</strong>
                                      </p>
                                      <p className="text-start invoice-details-t invoice-details">
                                        Payment Term<span>: </span>
                                        <strong>15 days</strong>
                                        <span className="text-danger">
                                          Due in 8 days
                                        </span>
                                      </p>
                                      <div className="pay-btn">
                                        <Link
                                          to="#"
                                          className="btn btn-primary mt-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#paynow_modal"
                                        >
                                          Pay Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Invoice To */}
                              {/* Invoice Item */}
                              <div className="invoice-item invoice-table-wrap">
                                <div className="invoice-table-head">
                                  <h6>Items:</h6>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="table-responsive">
                                      <table className="table table-center table-hover mb-0">
                                        <thead className="thead-light">
                                          <tr>
                                            <th>Product / Service</th>
                                            <th>Quantity</th>
                                            <th>Unit</th>
                                            <th>Rate</th>
                                            <th>Discount</th>
                                            <th>Tax</th>
                                            <th>Amount</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Nike Jordan</td>
                                            <td>1</td>
                                            <td>Pcs</td>
                                            <td>$1360.00</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>$1360.00</td>
                                          </tr>
                                          <tr>
                                            <td>Lobar Handy</td>
                                            <td>1</td>
                                            <td>Inch</td>
                                            <td>$155.00</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>$155.00</td>
                                          </tr>
                                          <tr>
                                            <td>Bold V3.2</td>
                                            <td>1</td>
                                            <td>Pcs</td>
                                            <td>$1055.00</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>$1055.00</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Invoice Item */}
                              {/* Terms & Conditions */}
                              <div className="terms-conditions">
                                <div className="row align-items-center justify-content-between">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="invoice-terms align-center">
                                      <span className="invoice-terms-icon bg-white-smoke me-3">
                                        <i className="fe fe-file-text" />
                                      </span>
                                      <div className="invocie-note">
                                        <h6>Terms &amp; Conditions</h6>
                                        <p className="mb-0">
                                          Authoritatively envisioneer business
                                          action items through parallel sources.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="invoice-terms align-center">
                                      <span className="invoice-terms-icon bg-white-smoke me-3">
                                        <i className="fe fe-file-minus" />
                                      </span>
                                      <div className="invocie-note">
                                        <h6>Note</h6>
                                        <p className="mb-0">
                                          This is computer generated receipt and
                                          does not require physical signature.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-5 col-md-6">
                                    <div className="invoice-total-card">
                                      <div className="invoice-total-box">
                                        <div className="invoice-total-inner">
                                          <p>
                                            Taxable <span>$360.00</span>
                                          </p>
                                          <p>
                                            Discount<span>$13.20</span>
                                          </p>
                                          <p>
                                            Vat <span>$0.00</span>
                                          </p>
                                        </div>
                                        <div className="invoice-total-footer">
                                          <h4>
                                            Total Amount <span>$347.80</span>
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="invoice-sign text-end">
                                <span className="d-block">Authorised Sign</span>
                                <img
                                  className="img-fluid d-inline-block light-color-logo"
                                  src={signature}
                                  alt="sign"
                                />
                                <img
                                  className="img-fluid d-inline-block dark-white-logo"
                                  src="assets/img/signature-white.png"
                                  alt="sign"
                                />
                              </div>
                              {/* /Terms & Conditions */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
          {/* Pay Now Modal */}
          <div
            className="modal custom-modal fade pay-modal"
            id="paynow_modal"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="modal-title">
                      Invoice <span>#INV 00001</span>
                    </h4>
                    <h5>
                      <span>Due Date : </span> 03 Jun 2023
                    </h5>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form action="#">
                  <div className="modal-body ">
                    <div className="row">
                      <div className="payment-heading">
                        <h5>Select a Payment Method</h5>
                      </div>
                      <div className="input-block mb-3 paynow-tab">
                        <ul
                          className="nav nav-pills d-flex row"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item col-sm-4" role="presentation">
                            <button
                              className="nav-link active cash"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Cash
                              <i className="fe fe-dollar-sign" />
                            </button>
                          </li>
                          <li className="nav-item col-sm-4" role="presentation">
                            <button
                              className="nav-link cheque"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Cheque
                              <i className="fe fe-file-text" />
                            </button>
                          </li>
                          <li className="nav-item col-sm-4" role="presentation">
                            <button
                              className="nav-link cheque"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              CreditCard
                              <i className="fe fe-file-text" />
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content pt-0" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="input-block mb-3">
                            <label>
                              Amount <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="input-block mb-3">
                            <label>
                              Amount <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div className="input-block mb-3">
                            <label>
                              Cheque Number{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Cheque Number"
                            />
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
                      pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Pay Now Modal */}
        </>
      </div>
    </>
  );
};

export default Invoicedetails;
