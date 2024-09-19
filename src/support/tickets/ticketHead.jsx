import React from "react";
import { Sort, filterIcon } from "../../_components/Imagepath";
import { Recepit } from "../../_components/Imagepath";
import { TransactionMinus } from "../../_components/Imagepath";
import { ArchiveBook } from "../../_components/Imagepath";
import { Clipboard } from "../../_components/Imagepath";
import { MessageEdit } from "../../_components/Imagepath";
import { Rotate } from "../../_components/Imagepath";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import PropTypes from 'prop-types';

const TicketHead = ({ show, setShow }) => {
  TicketHead.propTypes = {
    show: PropTypes.any.isRequired, 
    setShow: PropTypes.func.isRequired,
  };
  return (
    <>
      <div className="page-header">
        <div className="content-page-header">
          <h5>Tickets</h5>
          <div className="list-btn">
            <ul className="filter-list">
              <li>
                <div className="short-filter">
                  <img className="me-2" src={Sort} alt="Sort by select" />
                  <div className="sort-by">
                    <select className="sort">
                      <option>Sort by: Date</option>
                      <option>Sort by: Date 1</option>
                      <option>Sort by: Date 2</option>
                    </select>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="btn btn-filters w-auto popup-toggle"
                  onClick={() => setShow(!show)}
                >
                  <span className="me-2">
                     <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                  </span>
                  Filter{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-primary"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add_ticket"
                >
                  <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                  New Tickets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="filter_inputs" className="card filter-card">
        <div className="card-body pb-0">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="input-block mb-3">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block mb-3">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block mb-3">
                <label>Phone</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
          <div className="card inovices-card">
            <div className="card-body">
              <div className="dash-widget-header mb-0">
                <span className="inovices-widget-icon rounded-circle bg-info-light">
                  <img src={Recepit} alt="" />
                </span>
                <div className="dash-count">
                  <div className="dash-title">Total Tickets</div>
                  <div className="dash-counts">
                    <p className="mb-0">$298</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
          <div className="card inovices-card">
            <div className="card-body">
              <div className="dash-widget-header mb-0">
                <span className="inovices-widget-icon rounded-circle bg-primary-light">
                  <img src={TransactionMinus} alt="" />
                </span>
                <div className="dash-count">
                  <div className="dash-title">Completed</div>
                  <div className="dash-counts">
                    <p className="mb-0">$325,215</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
          <div className="card inovices-card">
            <div className="card-body">
              <div className="dash-widget-header mb-0">
                <span className="inovices-widget-icon rounded-circle bg-warning-light">
                  <img src={ArchiveBook} alt="" />
                </span>
                <div className="dash-count">
                  <div className="dash-title">In Progress</div>
                  <div className="dash-counts">
                    <p className="mb-0">$7825</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
          <div className="card inovices-card">
            <div className="card-body">
              <div className="dash-widget-header mb-0">
                <span className="inovices-widget-icon rounded-circle bg-primary-light">
                  <img src={Clipboard} alt="" />
                </span>
                <div className="dash-count">
                  <div className="dash-title">Unassigned</div>
                  <div className="dash-counts">
                    <p className="mb-0">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
          <div className="card inovices-card">
            <div className="card-body">
              <div className="dash-widget-header mb-0">
                <span className="inovices-widget-icon rounded-circle bg-green-light">
                  <img src={MessageEdit} alt="" />
                </span>
                <div className="dash-count">
                  <div className="dash-title">New</div>
                  <div className="dash-counts">
                    <p className="mb-0">$125,586</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
          <div className="card inovices-card">
            <div className="card-body">
              <div className="dash-widget-header mb-0">
                <span className="inovices-widget-icon rounded-circle bg-danger-light">
                  <img src={Rotate} alt="" />
                </span>
                <div className="dash-count">
                  <div className="dash-title">Hold Tickets</div>
                  <div className="dash-counts">
                    <p className="mb-0">$86,892</p>
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

export default TicketHead;
