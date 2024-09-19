import React, { useEffect,useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { company_01, company_02, company_03, company_04, company_05, dashboard_card_img, dashboard_card_img1, dashboard_card_img2, dashboard_card_img3, dashboard_card_img4, dashboard_plane_icon } from "../../_components/Imagepath";
import ApexCharts from "apexcharts";
import { Link } from "react-router-dom";

const Superdashbord = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    // Earnings Chart
    var earningsOptions = {
      series: [
        {
          name: "Earnings",
          data: [40, 38, 50, 85, 55, 45, 60, 40, 43, 30, 65, 50],
        },
      ],
      chart: {
        type: "bar",
        height: 250,
      },
      plotOptions: {
        bar: {
        //   borderRadius: 50,
        //   borderRadiusApplication: "around",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#7539FF"],
      xaxis: {
        type: "category",
        group: {
          style: {
            fontSize: "7px",
            fontWeight: 700,
          },
          groups: [
            { title: "2019", cols: 4 },
            { title: "2020", cols: 4 },
          ],
        },
      },
    };

    var earningsChart = new ApexCharts(
      document.querySelector("#earnings-chart"),
      earningsOptions
    );
    earningsChart.render();

    // Companies Flow Chart
    var companiesFlowOptions = {
      series: [
        {
          name: "Companies",
          data: [25, 40, 30, 55, 25, 35, 25, 50, 20],
        },
      ],
      chart: {
        height: 273,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      colors: ["#FF9F43"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      },
      yaxis: {
        min: 10,
        max: 60,
        tickAmount: 5,
        labels: {
          formatter: (val) => {
            return val / 1 + "K";
          },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
    };

    var companiesFlowChart = new ApexCharts(
      document.querySelector("#companies_flow"),
      companiesFlowOptions
    );
    companiesFlowChart.render();

    // Plane Chart
    var planeChartOptions = {
      series: [
        {
          data: [400, 325, 312, 294, 254, 252],
        },
      ],
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FFEFDD", "#EADDFF", "#DDF3FF", "#FFECEC", "#E1FFED", "#E0E0E0"],
      // eslint-disable-next-line no-dupe-keys
      dataLabels: {
        enabled: true,
        textAnchor: "end",
        margin: 10,
        style: {
          colors: ["#1D1D1D"],
        },
        formatter: function (val, opt) {
          return (
            opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          );
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 0,
        colors: ["#1D1D1D"],
      },
      xaxis: {
        categories: [
          "Sales : $6,100,00",
          "Sales : $5,100,00",
          "Sales : $4,200,00",
          "Sales : $3,400,00",
          "Sales : $3,400,00",
          "Sales : $400,00",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    };

    var planeChart = new ApexCharts(
      document.querySelector("#plane-chart"),
      planeChartOptions
    );
    planeChart.render();
  }, []);

  return (
    <div>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid pb-0">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Dashboard</h5>
              </div>
            </div>
            {/* /Page Header */}
            <div className="super-admin-dashboard">
              <div className="row">
                <div className="col-xl-5 d-flex">
                  <div className="dash-user-card w-100">
                    <h4>
                      <i className="fe fe-sun" />
                      Good Morning, John
                    </h4>
                    <p>14 New Companies Subscribed Today</p>
                    <div className="dash-btns">
                      <Link to="/companies" className="btn view-company-btn">
                        View Companies
                      </Link>
                      <Link to="/packages" className="btn view-package-btn">
                        All Packages
                      </Link>
                    </div>
                    <div className="dash-img">
                      <img src={dashboard_card_img} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 d-flex p-0">
                  <div className="row dash-company-row w-100 m-0">
                    <div className="col-lg-3 col-sm-6 d-flex">
                      <div className="company-detail-card w-100">
                        <div className="company-icon">
                          <img
                            src={dashboard_card_img1}
                            alt=""
                          />
                        </div>
                        <div className="dash-comapny-info">
                          <h6>Total Companies</h6>
                          <h5>987</h5>
                          <p>
                            <span>
                              14% <i className="fe fe-chevrons-up" />
                            </span>
                            Last month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex">
                      <div className="company-detail-card bg-info-light w-100">
                        <div className="company-icon">
                          <img
                            src={dashboard_card_img2}
                            alt=""
                          />
                        </div>
                        <div className="dash-comapny-info">
                          <h6>Active Companies</h6>
                          <h5>154</h5>
                          <p>
                            <span>
                              1% <i className="fe fe-chevrons-up" />
                            </span>
                            Last month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex">
                      <div className="company-detail-card bg-pink-light w-100">
                        <div className="company-icon">
                          <img
                            src={dashboard_card_img3}
                            alt=""
                          />
                        </div>
                        <div className="dash-comapny-info">
                          <h6>Inactive Company</h6>
                          <h5>2</h5>
                          <p>
                            <span>
                              2% <i className="fe fe-chevrons-up" />
                            </span>
                            Last month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex">
                      <div className="company-detail-card bg-success-light w-100">
                        <div className="company-icon">
                          <img
                            src={dashboard_card_img4}
                            alt=""
                          />
                        </div>
                        <div className="dash-comapny-info">
                          <h6>Total Active Plans</h6>
                          <h5>6</h5>
                          <p>
                            <span>
                              6% <i className="fe fe-chevrons-up" />
                            </span>
                            Last month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="row align-center">
                        <div className="col">
                          <h5 className="card-title">
                            Latest Registered Companies
                          </h5>
                        </div>
                        <div className="col-auto">
                          <Link
                            to="/companies"
                            className="btn-right btn btn-sm btn-outline-primary"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-stripped table-hover">
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_01}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Hermann Groups{" "}
                                    <span className="plane-type">
                                      Basic (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>24 Feb 2024</td>
                              <td className="text-end">
                                <Link
                                  to="/companies"
                                  className="view-companies btn"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_02}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Skiles LLC{" "}
                                    <span className="plane-type">
                                      Enterprise (Yearly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>23 Feb 2024</td>
                              <td className="text-end">
                                <Link
                                  to="/companies"
                                  className="view-companies btn"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_03}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Kerluke Group{" "}
                                    <span className="plane-type">
                                      Advanced (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>22 Feb 2024</td>
                              <td className="text-end">
                                <Link
                                  to="/companies"
                                  className="view-companies btn"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_04}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Schowalter Group{" "}
                                    <span className="plane-type">
                                      Basic (Yearly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>21 Feb 2024</td>
                              <td className="text-end">
                                <Link
                                  to="/companies"
                                  className="view-companies btn"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_05}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Accentric Global{" "}
                                    <span className="plane-type">
                                      Basic (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>20 Feb 2024</td>
                              <td className="text-end">
                                <Link
                                  to="/companies"
                                  className="view-companies btn"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Earnings </h5>
                        <div className="d-flex align-center">
                          <span className="earning-income-text">
                            <i />
                            Income
                          </span>
                          <div className="dropdown main">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              2024
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  2023
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  2022
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  2021
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div id="earnings-chart" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-flex">
                  <div className="card super-admin-dash-card flex-fill">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Most Ordered Plan</h5>
                        <div className="dropdown main">
                          <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            This Month
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                Today
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Week
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Year
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="dash-plane-list">
                        <div className="plane-info">
                          <span className="icon-plane">
                            <img
                              src={dashboard_plane_icon}
                              alt=""
                            />
                          </span>
                          <div className="plane-name">
                            Enterprise <span>(Monthly)</span>{" "}
                            <h6>Total Order : 201</h6>
                          </div>
                        </div>
                        <span className="plane-rate">$549.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-flex">
                  <div className="card super-admin-dash-card flex-fill">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Top Company with Plan</h5>
                        <div className="dropdown main">
                          <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Today
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton3"
                          >
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Month
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Week
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Year
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="dash-plane-list">
                        <div className="plane-info">
                          <span className="icon-company">
                            <img
                              src={company_01}
                              alt=""
                            />
                          </span>
                          <span className="name-company">Hermann Groups</span>
                        </div>
                        <span className="plane-rate">10 Plans</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-flex">
                  <div className="card super-admin-dash-card flex-fill">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Most Domains</h5>
                        <div className="dropdown main">
                          <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton4"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            This Week
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton4"
                          >
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Month
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                Today
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                This Year
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="dash-plane-list">
                        <div className="plane-info">
                          <span className="icon-company">
                            <img
                              src={company_04}
                              alt=""
                            />
                          </span>
                          <div className="plane-name">
                            <span>Schowalter Group</span>{" "}
                            <h6>sk.example.com</h6>
                          </div>
                        </div>
                        <span className="plane-rate">150 Users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="row align-center">
                        <div className="col">
                          <h5 className="card-title">Recent Invoices</h5>
                        </div>
                        <div className="col-auto">
                          <Link
                            to="/invoices"
                            className="btn-right btn btn-sm btn-outline-primary"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-stripped table-hover">
                          <tbody>
                            <tr>
                              <td>
                                <Link
                                  to="/invoice-details"
                                  className="invoice-link dash-incoice-table"
                                >
                                  #INV12454
                                </Link>
                                <span className="dash-incoice-date">
                                  15 Feb 2024
                                </span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_01}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">Hermann Groups</Link>
                                </h2>
                              </td>
                              <td>
                                Basic <br />{" "}
                                <span className="plane-type">(Monthly)</span>
                              </td>
                              <td>
                                <span className="badge bg-success-light d-inline-flex align-items-center">
                                  <i className="fe fe-check me-1" />
                                  Paid
                                </span>
                              </td>
                              <td className="text-end">
                                <Link
                                  to="/invoice-subscription"
                                  className="invoice-detail"
                                >
                                  <i className="fe fe-file-text" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  to="/invoice-details"
                                  className="invoice-link dash-incoice-table"
                                >
                                  #INV45445
                                </Link>
                                <span className="dash-incoice-date">
                                  14 Feb 2024
                                </span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_02}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">Skiles LLC</Link>
                                </h2>
                              </td>
                              <td>
                                Enterprise <br />{" "}
                                <span className="plane-type">(Yearly)</span>
                              </td>
                              <td>
                                <span className="badge bg-danger-light d-inline-flex align-items-center">
                                  <i className="fe fe-x me-1" />
                                  Unpaid
                                </span>
                              </td>
                              <td className="text-end">
                                <Link
                                  to="/invoice-subscription"
                                  className="invoice-detail"
                                >
                                  <i className="fe fe-file-text" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  to="/invoice-details"
                                  className="invoice-link dash-incoice-table"
                                >
                                  #INV78444
                                </Link>
                                <span className="dash-incoice-date">
                                  13 Feb 2024
                                </span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_03}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">Kerluke Group</Link>
                                </h2>
                              </td>
                              <td>
                                Advanced <br />{" "}
                                <span className="plane-type">(Monthly)</span>
                              </td>
                              <td>
                                <span className="badge bg-success-light d-inline-flex align-items-center">
                                  <i className="fe fe-check me-1" />
                                  Paid
                                </span>
                              </td>
                              <td className="text-end">
                                <Link
                                  to="/invoice-subscription"
                                  className="invoice-detail"
                                >
                                  <i className="fe fe-file-text" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  to="/invoice-details"
                                  className="invoice-link dash-incoice-table"
                                >
                                  #INV31454
                                </Link>
                                <span className="dash-incoice-date">
                                  12 Feb 2024
                                </span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_04}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">Schowalter Group</Link>
                                </h2>
                              </td>
                              <td>
                                Basic <br />{" "}
                                <span className="plane-type">(Yearly)</span>
                              </td>
                              <td>
                                <span className="badge bg-success-light d-inline-flex align-items-center">
                                  <i className="fe fe-check me-1" />
                                  Paid
                                </span>
                              </td>
                              <td className="text-end">
                                <Link
                                  to="/invoice-subscription"
                                  className="invoice-detail"
                                >
                                  <i className="fe fe-file-text" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  to="/invoice-details"
                                  className="invoice-link dash-incoice-table"
                                >
                                  #INV74878
                                </Link>
                                <span className="dash-incoice-date">
                                  11 Feb 2024
                                </span>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_05}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">Accentric Global</Link>
                                </h2>
                              </td>
                              <td>
                                Basic <br />{" "}
                                <span className="plane-type">(Monthly)</span>
                              </td>
                              <td>
                                <span className="badge bg-success-light d-inline-flex align-items-center">
                                  <i className="fe fe-check me-1" />
                                  Paid
                                </span>
                              </td>
                              <td className="text-end">
                                <Link
                                  to="/invoice-subscription"
                                  className="invoice-detail"
                                >
                                  <i className="fe fe-file-text" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="row align-center">
                        <div className="col">
                          <h5 className="card-title">Top Plans</h5>
                        </div>
                        <div className="col-auto">
                          <Link
                            to="/packages"
                            className="btn-right btn btn-sm btn-outline-primary"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div id="plane-chart" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="row align-center">
                        <div className="col">
                          <h5 className="card-title">Recent Plan Expired</h5>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-stripped table-hover">
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_01}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Hermann Groups{" "}
                                    <span className="plane-type">
                                      Basic (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="expired-date">
                                Expired On <br />
                                24 Feb 2024
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_02}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Skiles LLC{" "}
                                    <span className="plane-type">
                                      Enterprise (Yearly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="expired-date">
                                Expired On <br />
                                24 Feb 2024
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_03}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Kerluke Group{" "}
                                    <span className="plane-type">
                                      Advanced (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="expired-date">
                                Expired On <br />
                                24 Feb 2024
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_04}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Schowalter Group{" "}
                                    <span className="plane-type">
                                      Basic (Yearly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="expired-date">
                                Expired On <br />
                                24 Feb 2024
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_05}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Accentric Global{" "}
                                    <span className="plane-type">
                                      Basic (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="expired-date">
                                Expired On <br />
                                24 Feb 2024
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Companies Registered </h5>
                        <div className="dropdown main">
                          <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton5"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            2024
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton5"
                          >
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                2023
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                2022
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item"
                              >
                                2021
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div id="companies_flow" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 d-flex">
                  <div className="card super-admin-dash-card">
                    <div className="card-header">
                      <div className="row align-center">
                        <div className="col">
                          <h5 className="card-title">Recent Domain</h5>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-stripped table-hover">
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_01}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Hermann Groups{" "}
                                    <span className="plane-type">
                                      Basic (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-end">
                                <div className="active-inactive-btn">
                                  <Link to="#" className="active-domain">
                                    <i className="fe fe-check" />
                                  </Link>
                                  <Link to="#" className="inactive-domain">
                                    <i className="fe fe-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_02}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Skiles LLC{" "}
                                    <span className="plane-type">
                                      Enterprise (Yearly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-end">
                                <div className="active-inactive-btn">
                                  <Link to="#" className="active-domain">
                                    <i className="fe fe-check" />
                                  </Link>
                                  <Link to="#" className="inactive-domain">
                                    <i className="fe fe-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_03}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Kerluke Group{" "}
                                    <span className="plane-type">
                                      Advanced (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-end">
                                <div className="active-inactive-btn">
                                  <Link to="#" className="active-domain">
                                    <i className="fe fe-check" />
                                  </Link>
                                  <Link to="#" className="inactive-domain">
                                    <i className="fe fe-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_04}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Schowalter Group{" "}
                                    <span className="plane-type">
                                      Basic (Yearly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-end">
                                <div className="active-inactive-btn">
                                  <Link to="#" className="active-domain">
                                    <i className="fe fe-check" />
                                  </Link>
                                  <Link to="#" className="inactive-domain">
                                    <i className="fe fe-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="company-avatar avatar-md me-2 companies company-icon"
                                  >
                                    <img
                                      className="avatar-img rounded-circle company"
                                      src={company_05}
                                      alt="Company Image"
                                    />
                                  </Link>
                                  <Link to="/companies">
                                    Accentric Global{" "}
                                    <span className="plane-type">
                                      Basic (Monthly)
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-end">
                                <div className="active-inactive-btn">
                                  <Link to="#" className="active-domain">
                                    <i className="fe fe-check" />
                                  </Link>
                                  <Link to="#" className="inactive-domain">
                                    <i className="fe fe-x" />
                                  </Link>
                                </div>
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
  );
};

export default Superdashbord;
