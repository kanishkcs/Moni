import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { avatar14 } from "../_components/Imagepath";
import { Link } from "react-router-dom";


import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import LedgerModal from "../common/modal/ledgermodal";



const customersLedger = () => {
 
  return (
    <>
      <div>
        <Header />

        <Sidebar />
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="content-page-header">
                  <h5>Customer Ledger</h5>
                  <div className="list-btn">
                    <ul className="filter-list">
                      <li>
                        <a
                          className="btn btn-primary"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_ledger"
                        >
                          <i
                            className="fa fa-plus-circle me-2"
                            aria-hidden="true"
                          />
                          Create Ledger
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="card p-4 ledger-list">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="ledger-info mb-4">
                    <div className="d-flex align-items-center">
                      <a href="/profile" className="avatar me-2">
                        <img
                          className="avatar-img rounded-circle"
                          src={avatar14}
                          alt="User Image"
                        />
                      </a>
                      <h2>
                        <a href="/profile">John Smith</a>
                        <a
                          href="mailto:johnsmith@example.com"
                          className="d-block mail-to"
                        >
                          johnsmith@example.com
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="list-btn">
                    <ul className="filter-list">
                      <li>
                        <div className="closing-balance">
                          <span className="d-flex align-items-center">
                            <i className="fa fa-refresh me-2 text-danger-light" />
                            Closing Balance : $400
                          </span>
                        </div>
                      </li>
                      <li>
                        <div
                          className="dropdown dropdown-action"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Download"
                        >
                          <a
                            href="#"
                            className="btn-filters"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span>
                            <FeatherIcon icon="download" />
                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <ul className="d-block">
                              <li>
                                <a
                                  className="d-flex align-items-center download-item"
                                  href="#"
                                  download=""
                                >
                                  <i className="far fa-file-pdf me-2" />
                                  PDF
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-flex align-items-center download-item"
                                  href="#"
                                  download=""
                                >
                                  <i className="far fa-file-text me-2" />
                                  CVS
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          className="btn-filters"
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Print"
                        >
                          <span>
                            <FeatherIcon icon="printer" />
                          </span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Table */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card-table">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-stripped table-hover">
                            <thead className="thead-light">
                              <tr>
                                <th>Id #</th>
                                <th>Date</th>
                                <th>Mode</th>
                                <th>Amount</th>
                                <th>Closing Balance</th>
                                <th className="no-sort">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="ledger">
                                    PAYOUT -1 <span>Payment Out</span>
                                  </h2>
                                </td>
                                <td>13 Aug 2023</td>
                                <td>
                                  <span className="badge bg-success-light">
                                    Cash
                                  </span>
                                </td>
                                <td>
                                  <span className="text-danger-light">
                                    -$200
                                  </span>
                                </td>
                                <td>
                                  <span>$300</span>
                                </td>
                                <td className="text-start">
                                  <div className="dropdown dropdown-action">
                                    <a
                                      href="#"
                                      className=" btn-action-icon "
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_ledger"
                                          >
                                            <i className="far fa-edit me-2" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="far fa-trash-alt me-2" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="ledger">
                                    PAYOUT -2<span>Payment Out</span>
                                  </h2>
                                </td>
                                <td>16 Aug 2023</td>
                                <td>
                                  <span className="badge bg-success-light">
                                    Cash
                                  </span>
                                </td>
                                <td>
                                  <span className="text-danger-light">
                                    -$100
                                  </span>
                                </td>
                                <td>
                                  <span>$400</span>
                                </td>
                                <td className="text-start">
                                  <div className="dropdown dropdown-action">
                                    <a
                                      href="#"
                                      className=" btn-action-icon "
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_ledger"
                                          >
                                            <i className="far fa-edit me-2" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="far fa-trash-alt me-2" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="ledger">
                                    PAYIN -2<span>Payment In</span>
                                  </h2>
                                </td>
                                <td>14 Aug 2023</td>
                                <td>
                                  <span className="badge bg-success-light">
                                    Cash
                                  </span>
                                </td>
                                <td>
                                  <span className="text-success-light">
                                    +$200
                                  </span>
                                </td>
                                <td>
                                  <span>$500</span>
                                </td>
                                <td className="text-start">
                                  <div className="dropdown dropdown-action">
                                    <a
                                      href="#"
                                      className=" btn-action-icon "
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_ledger"
                                          >
                                            <i className="far fa-edit me-2" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="far fa-trash-alt me-2" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="ledger">
                                    PAYIN -1<span>Payment In</span>
                                  </h2>
                                </td>
                                <td>12 Aug 2023</td>
                                <td>
                                  <span className="badge bg-success-light">
                                    Cash
                                  </span>
                                </td>
                                <td>
                                  <span className="text-success-light">
                                    +$500
                                  </span>
                                </td>
                                <td>
                                  <span>$500</span>
                                </td>
                                <td className="text-start">
                                  <div className="dropdown dropdown-action">
                                    <a
                                      href="#"
                                      className=" btn-action-icon "
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_ledger"
                                          >
                                            <i className="far fa-edit me-2" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="far fa-trash-alt me-2" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={4}>
                                  <p>Closing Balance as on 17/10/2023</p>
                                  <span>Payment In</span>
                                </td>
                                <td>
                                  <span className="text-success fw-600">
                                    $3000.15
                                  </span>
                                </td>
                                <td colSpan={2}>
                                  <span className="text-primary fw-600">
                                    $500.24
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mt-4 float-end">
                            <Link to="#"
                              type="button"
                             
                              className="btn btn-success  me-2"
                            >
                              <i className="fa-solid fa-arrow-down me-2" />
                              Credit
                            </Link>
                            <Link to="#"
                              type="submit"
                             
                              className="btn btn-danger"
                            >
                              <i className="fa-solid fa-arrow-up me-2" />
                              Debit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Table */}
              </div>
             
            </div>
          </div>

          {/* /Page Wrapper */}
        </>
        <LedgerModal />
      </div>
    </>
  );
};

export default customersLedger;
