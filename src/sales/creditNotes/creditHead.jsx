import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { filterIcon } from "../../_components/Imagepath";
import { Tooltip } from "antd";
import PropTypes from "prop-types";

const CreditHead = ({ show, setShow }) => {
  CreditHead.propTypes = {
    show: PropTypes.any.isRequired,
    setShow: PropTypes.func.isRequired,
  };
  return (
    <>
      <div className="page-header">
        <div className="content-page-header">
          <h5>Credit Notes</h5>
          <div className="list-btn">
            <ul className="filter-list">
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
                  Filter
                </Link>
              </li>
              <li>
                <Link className="btn-filters" to="#">
                  <span>
                  <Tooltip title="Settings" placement="bottom">
                    <FeatherIcon icon="settings" />
                    </Tooltip>
                  </span>
                </Link>
              </li>

              <li>
                <Link className="btn btn-primary" to="/add-credit-notes">
                  <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                  Credit Notes
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
    </>
  );
};

export default CreditHead;
