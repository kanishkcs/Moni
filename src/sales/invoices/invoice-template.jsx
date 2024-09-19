 
import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import {
  Cashreceipt1,
  Cashreceipt2,
  Cashreceipt3,
  Cashreceipt4,
  // GeneralInvoice1,
  GeneralInvoice2,
  GeneralInvoice3,
  GeneralInvoice4,
  GeneralInvoice5,
  
} from "../../_components/Imagepath";
import { Link } from "react-router-dom";

const InvoiceTemplate = () => {
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
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="content-page-header">
                  <h5>Invoice Templates</h5>
                </div>
              </div>
              {/* /Page Header */}
              <div className="card mb-0">
                <div className="card-body pb-0">
                  <div className="invoice-card-title">
                    <h6>General Invoice</h6>
                  </div>
                  <div className="row">
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-betweens ">
                        <div className="blog-image">
                          <Link to="/invoice-one-a">
                            <img
                              className="img-fluid"
                              src={GeneralInvoice2}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/invoice-one-a">General Invoice 1</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                        <div className="blog-image">
                          <Link to="/invoice-two">
                            <img
                              className="img-fluid"
                              src={GeneralInvoice2}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/invoice-two">General Invoice 2</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                        <div className="blog-image">
                          <Link to="/invoice-three">
                            <img
                              className="img-fluid"
                              src={GeneralInvoice3}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/invoice-three">General Invoice 3</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                        <div className="blog-image">
                          <Link to="/invoice-four-a">
                            <img
                              className="img-fluid"
                              src={GeneralInvoice4}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/invoice-four-a">General Invoice 4</Link>
                        </div>
                      </div>
                    </div>
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                        <div className="blog-image">
                          <Link to="/invoice-five">
                            <img
                              className="img-fluid"
                              src={GeneralInvoice5}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/invoice-five">General Invoice 5</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* /Invoice List */}
                  </div>
                  <div className="row">
                    {/* /Invoice List */}
                    <div className="row">
                      <div className="invoice-card-title">
                        <h6>Receipt Invoice</h6>
                      </div>
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                          <div className="blog-image">
                            <Link to="/cashreceipt-1">
                              <img
                                className="img-fluid"
                                src={Cashreceipt1}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="/cashreceipt-1">Cash Receipt 1</Link>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                          <div className="blog-image">
                            <Link to="/cashreceipt-2">
                              <img
                                className="img-fluid"
                                src={Cashreceipt2}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="/cashreceipt-2">Cash Receipt 2</Link>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                          <div className="blog-image">
                            <Link to="/cashreceipt-3">
                              <img
                                className="img-fluid"
                                src={Cashreceipt3}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="/cashreceipt-3">Cash Receipt 3</Link>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                      {/* Invoice List */}
                      <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                        <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                          <div className="blog-image">
                            <Link to="/cashreceipt-4">
                              <img
                                className="img-fluid"
                                src={Cashreceipt4}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="invoice-content-title">
                            <Link to="/cashreceipt-4">Cash Receipt 4</Link>
                          </div>
                        </div>
                      </div>
                      {/* /Invoice List */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
        </>
      </div>
    </>
  );
};

export default InvoiceTemplate;
