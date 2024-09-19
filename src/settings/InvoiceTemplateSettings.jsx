import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Link } from "react-router-dom";
import {
  Cashreceipt1,
  Cashreceipt2,
  Cashreceipt4,
  GeneralInvoice2,
  GeneralInvoice3,
  GeneralInvoice4,
  GeneralInvoice5,
} from "../_components/Imagepath";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const InvoiceTemplateSettings = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="row">
        <div className="col-xl-3 col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="page-header">
                <div className="content-page-header">
                  <h5>Settings</h5>
                </div>
              </div>
              {/* Settings Menu */}
              <div className="widget settings-menu mb-0">
                <ul>
                  <li className="nav-item">
                    <Link to="/account-settings" className="nav-link ">
                      <i className="fe fe-user" /> <span>Account Settings</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/company-settings" className="nav-link">
                      <i className="fe fe-settings" />{" "}
                      <span>Company Settings</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/invoice-settings" className="nav-link  active">
                      <i className="fe fe-file" /> <span>Invoice Settings</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/invoice-templatesettings"
                      className="nav-link active"
                    >
                      <i className="fe fe-layers" />{" "}
                      <span>Invoice Templates</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/paymentmethod" className="nav-link">
                      <i className="fe fe-credit-card" />{" "}
                      <span>Payment Methods</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/banksetting" className="nav-link">
                      <i className="fe fe-aperture" />{" "}
                      <span>Bank Settings</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/tax-types" className="nav-link">
                      <i className="fe fe-file-text" /> <span>Tax Rates</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/email-settings" className="nav-link">
                      <i className="fe fe-mail" /> <span>Email Settings</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/preferences" className="nav-link">
                      <i className="fe fe-settings" />{" "}
                      <span>Preference Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /Settings Menu */}
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-md-8">
          <div className="w-100 pt-0">
            <div className="content-page-header">
              <h5>Invoice Templates</h5>
            </div>
            {/* All Invoice */}
            <div className="card invoices-tabs-card">
              <div className="invoice-template-tab invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <Link
                            id="invoice-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#invoice_tab"
                            type="button"
                            role="tab"
                            aria-controls="invoice_tab"
                            aria-selected="true"
                            to="#"
                            className="active"
                          >
                            Invoice
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            id="purchases-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#purchases_tab"
                            type="button"
                            role="tab"
                            aria-controls="purchases_tab"
                            aria-selected="true"
                            to="#"
                          >
                            Purchases
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            id="receipt-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#receipt_tab"
                            type="button"
                            role="tab"
                            aria-controls="receipt_tab"
                            aria-selected="true"
                            to="#"
                          >
                            Receipt
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane active"
                id="invoice_tab"
                role="tabpanel"
                aria-labelledby="invoice-tab"
                tabIndex={0}
              >
                <div className="card template-invoice-card">
                  <div className="card-body pb-0">
                    <div className="invoice-card-title">
                      <h6>Invoice</h6>
                    </div>
                    <div className="row">
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens active ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice2}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to={GeneralInvoice2}
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                            {/* </Link> */}
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 1</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice2}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="#"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 2</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice3}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice-three.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 3</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice4}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="#"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 4</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice5}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice - five.svg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 5</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="purchases_tab"
                role="tabpanel"
                aria-labelledby="purchases-tab"
                tabIndex={0}
              >
                <div className="card template-invoice-card">
                  <div className="card-body pb-0">
                    <div className="invoice-card-title">
                      <h6>Purchases</h6>
                    </div>
                    <div className="row">
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens active ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice2}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice-one.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 1</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice2}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice-two.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 2</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice3}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice-three.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 3</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice4}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice-four.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 4</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={GeneralInvoice5}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoice - five.svg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">General Invoice 5</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="receipt_tab"
                role="tabpanel"
                aria-labelledby="receipt-tab"
                tabIndex={0}
              >
                <div className="card template-invoice-card mb-0">
                  <div className="card-body pb-0">
                    <div className="invoice-card-title">
                      <h6>Receipt</h6>
                    </div>
                    <div className="row">
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens active">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={Cashreceipt1}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoices/recepit-one.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">Receipt Invoice 1</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={Cashreceipt2}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoices/recepit-two.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">Receipt Invoice 2</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={Cashreceipt4}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoices/recepit-three.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">Receipt Invoice 3</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog invoice-blog flex-fill  d-flex flex-wrap align-content-betweens  ">
                          <div className="blog-image">
                            <Link to="#" className="img-general">
                              <SlideshowLightbox>
                                <img
                                  className="img-fluid"
                                  src={Cashreceipt4}
                                  alt="Post Image"
                                />
                              </SlideshowLightbox>
                            </Link>
                            <Link
                              to="assets/img/invoices/recepit-four.jpg"
                              className="preview-invoice image-popup"
                            >
                              <i className="fa-regular fa-eye" />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="#">Receipt Invoice 4</Link>
                            <span
                              className="invoice-star"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title=""
                              data-bs-original-title="Make as default"
                            >
                              <i className="fa-regular fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /All Invoice */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceTemplateSettings;
