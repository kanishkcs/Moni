import React from "react";
import { Link } from "react-router-dom";
import { basicPlan, enterPrice,  } from "../_components/Imagepath";
import SettingsSidebar from "../layouts/SettingsSidebar";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlanBilling = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <>
        {/* Page Wrapper */}
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
                      <h5 className="setting-menu">Plan &amp; Billing</h5>
                    </div>
                    <Slider {...settings} className="plan-billing-slider">
                      <div className="slick-carousel-item">
                        <div className="packages card active">
                          <div className="package-header d-sm-flex justify-content-between">
                            <div className="d-sm-flex">
                              <span className="icon-frame d-flex align-items-center justify-content-center">
                                <img src={basicPlan} alt="img" />
                              </span>
                              <div className="">
                                <h5>
                                  <Link to="#">Basic</Link>
                                </h5>
                                <p>36 days remaining</p>
                                <Link to="#" className="cancel-subscription">
                                  Cancel Subscription
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h5>$49.99</h5>
                              <p>Monthly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slick-carousel-item">
                        <div className="packages card">
                          <div className="package-header d-md-flex justify-content-between">
                            <div className="d-md-flex">
                              <span className="icon-frame d-flex align-items-center justify-content-center">
                                <img
                                  src={enterPrice}
                                  alt="img"
                                />
                              </span>
                              <div className="">
                                <h5>
                                  <a href="#">ENTERPRISES</a>
                                </h5>
                                <p>365 days remaining</p>
                                <a href="#">Upgrade</a>
                              </div>
                            </div>
                            <div>
                              <h5>$199.99</h5>
                              <p>Yearly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slick-carousel-item">
                        <div className="packages card active">
                          <div className="package-header d-sm-flex justify-content-between">
                            <div className="d-sm-flex">
                              <span className="icon-frame d-flex align-items-center justify-content-center">
                                <img src={basicPlan} alt="img" />
                              </span>
                              <div className="">
                                <h5>
                                  <Link to="#">Basic</Link>
                                </h5>
                                <p>36 days remaining</p>
                                <Link to="#" className="cancel-subscription">
                                  Cancel Subscription
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h5>$49.99</h5>
                              <p>Monthly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slick-carousel-item">
                        <div className="packages card">
                          <div className="package-header d-md-flex justify-content-between">
                            <div className="d-md-flex">
                              <span className="icon-frame d-flex align-items-center justify-content-center">
                                <img
                                  src={enterPrice}
                                  alt="img"
                                />
                              </span>
                              <div className="">
                                <h5>
                                  <a href="#">ENTERPRISES</a>
                                </h5>
                                <p>365 days remaining</p>
                                <a href="#">Upgrade</a>
                              </div>
                            </div>
                            <div>
                              <h5>$199.99</h5>
                              <p>Yearly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slick-carousel-item">
                        <div className="packages card active">
                          <div className="package-header d-sm-flex justify-content-between">
                            <div className="d-sm-flex">
                              <span className="icon-frame d-flex align-items-center justify-content-center">
                                <img src={basicPlan} alt="img" />
                              </span>
                              <div className="">
                                <h5>
                                  <Link to="#">Basic</Link>
                                </h5>
                                <p>36 days remaining</p>
                                <Link to="#" className="cancel-subscription">
                                  Cancel Subscription
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h5>$49.99</h5>
                              <p>Monthly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add more items as needed */}
                    </Slider>
                    {/* Search Filter */}
                    <div className="row">
                      <div className="col-sm-12">
                        <div className=" card-table">
                          <div className="card-body">
                            <div className="table-responsive table-plan-billing">
                              <table className="table table-center table-hover datatable">
                                <thead className="thead-light">
                                  <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                    <th>Download</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>13 Aug 2023</td>
                                    <td>
                                      ENTERPRISE
                                      <p>lifetime</p>
                                    </td>
                                    <td>$199.99</td>
                                    <td>
                                      <Link
                                        className=" btn-action-icon me-2"
                                        to="#"
                                        download=""
                                      >
                                        <i className="fe fe-download" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>13 Aug 2023</td>
                                    <td>
                                      FREE TRAIL
                                      <p>monthly</p>
                                    </td>
                                    <td>$0.00</td>
                                    <td>
                                      <Link
                                        className=" btn-action-icon me-2"
                                        to="#"
                                        download=""
                                      >
                                        <i className="fe fe-download" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>13 Aug 2023</td>
                                    <td>
                                      Basic
                                      <p>Yearly</p>
                                    </td>
                                    <td>$49.99</td>
                                    <td>
                                      <Link
                                        className=" btn-action-icon me-2"
                                        to="#"
                                        download="#"
                                      >
                                        <i className="fe fe-download" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>13 Aug 2023</td>
                                    <td>
                                      ENTERPRISE
                                      <p>lifetime</p>
                                    </td>
                                    <td>$199.99</td>
                                    <td>
                                      <Link
                                        className=" btn-action-icon me-2"
                                        to="#"
                                        download=""
                                      >
                                        <i className="fe fe-download" />
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
        </div>
        {/* /Page Wrapper */}
      </>
    </div>
  );
};

export default PlanBilling;
