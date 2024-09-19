import React, { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

const PackageFilter = ({ show, setShow }) => {
  const [startDate, setDate] = useState(new Date());
  const [startDate1, setDate1] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };
  const handleChange1 = (date) => {
    setDate1(date);
  };
  return (
    <div className={`toggle-sidebar ${show ? "open-filter" : ""}`}>
      <div className="sidebar-layout-filter">
        <div className="sidebar-header">
          <h5>Filter</h5>
          <a href="#" className="sidebar-closes" onClick={() => setShow(!show)}>
            <i className="fa-regular fa-circle-xmark" />
          </a>
        </div>
        <div className="sidebar-body">
          <form action="#" autoComplete="off">
            {/* By Plane */}
            <div className="accordion" id="accordionMain3">
              <div className="card-header-new" id="headingThree">
                <h6 className="filter-title">
                  <a
                    href="#"
                    className="w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Plans
                    <span className="float-end">
                      <i className="fa-solid fa-chevron-down" />
                    </span>
                  </a>
                </h6>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample3"
              >
                <div className="card-body-chat">
                  <div id="checkBoxes2">
                    <div className="selectBox-cont">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> All Plans
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Advanced
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Basic
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Enterprise
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" />
                        Premium
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" />
                        Free
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /By Plane */}
            {/* By Plane */}
            <div className="accordion" id="accordionMain4">
              <div className="card-header-new" id="headingFour">
                <h6 className="filter-title">
                  <a
                    href="#"
                    className="w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Plans Type
                    <span className="float-end">
                      <i className="fa-solid fa-chevron-down" />
                    </span>
                  </a>
                </h6>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample4"
              >
                <div className="card-body-chat">
                  <div id="checkBoxes3">
                    <div className="selectBox-cont">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> All Plan Type
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Monthly
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" /> Weekly
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="bystatus" />
                        <span className="checkmark" />
                        Lifetime
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /By Plane */}
            {/* Select Date */}
            <div className="accordion accordion-last" id="accordionMain2">
              <div className="card-header-new" id="headingTwo">
                <h6 className="filter-title">
                  <a
                    href="#"
                    className="w-100 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Created Date
                    <span className="float-end">
                      <i className="fa-solid fa-chevron-down" />
                    </span>
                  </a>
                </h6>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample2"
              >
                <div className="card-body-chat">
                  <div className="input-block mb-3">
                    <label className="form-control-label">From</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        className="form-control datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="input-block mb-3">
                    <label className="form-control-label">To</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={startDate1}
                        onChange={handleChange1}
                        className="form-control datetimepicker"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Select Date */}
            <div className="filter-buttons">
              <button
                type="submit"
                className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary"
              >
                Apply
              </button>
              <button
                type="submit"
                className="d-inline-flex align-items-center justify-content-center btn w-100 btn-secondary"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
PackageFilter.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
export default PackageFilter;
