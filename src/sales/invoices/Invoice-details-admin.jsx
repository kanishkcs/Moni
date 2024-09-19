import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { Link } from "react-router-dom";
import { Logo, signature } from "../../_components/Imagepath";
import Select from "react-select";

const InvoiceDetailsAdmin = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [menu, setMenu] = useState(false);

  const paymentOptions = [
    { id: 2, text: "Paid" },
    { id: 3, text: "Unpaid" },
    { id: 4, text: "Partially paid" },
    { id: 5, text: "Overdue" },
    { id: 6, text: "Cancelled" },
    { id: 7, text: "Refunded" },
    { id: 8, text: "Draft" },
  ];

  const formattedPaymentOptions = (paymentOptions) =>
    paymentOptions.map((option) => ({
      value: option.id,
      label: option.text,
    }));

  const handlePaymentChange = (selectedPayment) => {
    setSelectedPayment(selectedPayment);
    // Additional logic if needed
  };

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
            {/* Page Header */}
            <div className="card">
              <div className="card-body">
                <div className="page-header">
                  <div className="content-invoice-header">
                    <h5>Invoice Details</h5>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="cards">
                      <div className="card-bod">
                        <div className="card-table">
                          <div className="card-bod">
                            {/* Invoice Logo */}
                            <div className="invoice-item invoice-item-one">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <div className="invoice-logo">
                                    <img src={Logo} alt="logo" />
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
                                <div className="col-md-6">
                                  <p className="text-start invoice-details">
                                    Issue Date<span>: </span>
                                    <strong>13 Apr 2023</strong>
                                  </p>
                                </div>
                                <div className="col-md-6">
                                  <p className="text-start invoice-details">
                                    Due Date<span>: </span>
                                    <strong>03 Jun 2023</strong>
                                    <span className="text-danger">
                                      Due in 8 days
                                    </span>
                                  </p>
                                </div>
                                {/* <div class="col-md-4">
																<p class="invoice-details">
																	Invoice No<span>: </span><strong>INV 00001</strong> 
																</p>
															</div> */}
                              </div>
                            </div>
                            {/* /Invoice Date */}
                            {/* Invoice To */}
                            <div className="invoice-item invoice-item-two">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="invoice-info">
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
                                <div className="col-md-6">
                                  <div className="invoice-info invoice-info2">
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
                                          <td>Lorem ipsum dolor sit amet</td>
                                          <td>1</td>
                                          <td>Pcs</td>
                                          <td>$120.00</td>
                                          <td>0</td>
                                          <td>0</td>
                                          <td>$120.00</td>
                                        </tr>
                                        <tr>
                                          <td>Lorem ipsum dolor sit amet</td>
                                          <td>1</td>
                                          <td>Pcs</td>
                                          <td>$210.00</td>
                                          <td>0</td>
                                          <td>0</td>
                                          <td>$210.00</td>
                                        </tr>
                                        <tr>
                                          <td>Lorem ipsum dolor sit amet</td>
                                          <td>1</td>
                                          <td>Pcs</td>
                                          <td>$310.00</td>
                                          <td>0</td>
                                          <td>0</td>
                                          <td>$310.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /Invoice Item */}
                            <div className="col-lg-12 col-md-12">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card timeline-card">
                      <div className="card-body">
                        <div className="input-block mb-3">
                          <label>Status</label>
                          <Select
                            value={selectedPayment}
                            onChange={handlePaymentChange}
                            options={formattedPaymentOptions(paymentOptions)}
                            placeholder="Paid"
                          />
                        </div>
                        <div className="invoice-info invoice-info2 admin-invoice invoice-item mb-4">
                          <strong className="customer-text-one">
                            Payment Details<span>:</span>
                          </strong>
                          <p className="text-start invoice-details-two invoice-details mb-2">
                            PayPal :<strong>examplepaypal.co</strong>
                          </p>
                          <p className="text-start invoice-details-two invoice-details mb-2">
                            Account :<strong>examplepaypal.co</strong>
                          </p>
                          <p className="text-start invoice-details-two invoice-details">
                            Payment Term :
                          </p>
                          <div className="due-date">
                            <strong>15 days</strong>
                            <span className="text-danger">Due in 8 days</span>
                          </div>
                        </div>
                        <strong className="customer-text-one">
                          Timeline<span>:</span>
                        </strong>
                        <ul className="activity-feed">
                          <li className="feed-item timeline-item">
                            <span className="feed-text timeline-user">
                              <Link to="/profile">John Smith</Link> Created
                              Invoice
                            </span>
                            <div className="invoice-date">
                              <span className="start-date">07 April 2023</span>
                              <span>07 April 2023</span>
                            </div>
                          </li>
                          <li className="feed-item timeline-item">
                            <span className="feed-text timeline-user">
                              <Link to="/profile">John Smith</Link> Created
                              Invoice
                            </span>
                            <div className="invoice-date">
                              <span className="start-date">07 April 2023</span>
                              <span>07 April 2023</span>
                            </div>
                          </li>
                          <li className="feed-item timeline-item">
                            <span className="feed-text timeline-user">
                              <Link to="/profile">John Smith</Link> Created
                              Invoice
                            </span>
                            <div className="invoice-date">
                              <span className="start-date">07 April 2023</span>
                              <span>07 April 2023</span>
                            </div>
                          </li>
                          <li className="feed-item timeline-item">
                            <span className="feed-text timeline-user">
                              <Link to="/profile">John Smith</Link> Created
                              Invoice
                            </span>
                            <div className="invoice-date">
                              <span className="start-date">07 April 2023</span>
                              <span>07 April 2023</span>
                            </div>
                          </li>
                          <li className="feed-item timeline-item">
                            <span className="feed-text timeline-user">
                              <Link to="/profile">John Smith</Link> Created
                              Invoice
                            </span>
                            <div className="invoice-date">
                              <span className="start-date">07 April 2023</span>
                              <span>07 April 2023</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="terms-conditions">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-lg-6 col-md-6">
                        <div className="invoice-terms align-center justify-content-start">
                          <span className="invoice-terms-icon bg-white-smoke me-3">
                            <i className="fe fe-file-text" />
                          </span>
                          <div className="invocie-note">
                            <h6>Terms &amp; Conditions</h6>
                            <p className="mb-0">
                              Authoritatively envisioneer business action items
                              through parallel sources.
                            </p>
                          </div>
                        </div>
                        <div className="invoice-terms align-center justify-content-start">
                          <span className="invoice-terms-icon bg-white-smoke me-3">
                            <i className="fe fe-file-minus" />
                          </span>
                          <div className="invocie-note">
                            <h6>Note</h6>
                            <p className="mb-0">
                              This is computer generated receipt and does not
                              require physical signature.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-sign text-end col-lg-6">
                        <span className="d-block">Authorised Sign</span>
                        <img
                          className="img-fluid d-inline-block"
                          src={signature}
                          alt="sign"
                        />
                      </div>
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

export default InvoiceDetailsAdmin;
