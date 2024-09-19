import React, { useState } from "react";
import PropTypes from 'prop-types'
import { search } from "../../_components/Imagepath";
import DatePicker from "react-datepicker";
const SubscriptionFilter = ( {show, setShow }) => {
    const [startDate, setDate] = useState(new Date())
    const [startDate1, setDate1] = useState(new Date())
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
      {/* Customer */}
      <div className="accordion" id="accordionMain1">
        <div className="card-header-new" id="headingOne">
          <h6 className="filter-title">
            <a
              href="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Subscriber
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </a>
          </h6>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample1"
        >
          <div className="card-body-chat">
            <div className="row">
              <div className="col-md-12">
                <div id="checkBoxes">
                  <div className="form-custom">
                    <input
                      type="text"
                      className="form-control  member-search-dropdown"
                      id="member_search"
                      placeholder="Search Subscriber"
                    />
                    <span>
                      <img src={search} alt="img" />
                    </span>
                  </div>
                  <div className="selectBox-cont search-dropdown-item">
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Hermann Groups
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Skiles LLC
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Kerluke Group
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" />
                      Schowalter Group
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Accentric Global
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Dexter Matrix
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Emporis Technologies
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" />
                      High Tech Lead
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" /> Beacon Softwares
                    </label>
                    <label className="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span className="checkmark" />
                      Global tech
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Customer */}
      {/* By Package */}
      <div className="accordion" id="accordionMain4">
        <div className="card-header-new" id="headingFive">
          <h6 className="filter-title">
            <a
              href="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Plans
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </a>
          </h6>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample3"
        >
          <div className="card-body-chat">
            <div id="checkBoxes2">
              <div className="selectBox-cont">
                <label className="custom_check w-100">
                  <input type="checkbox" name="bypackage" />
                  <span className="checkmark" /> All Plans
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bypackage" />
                  <span className="checkmark" /> Advanced
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bypackage" />
                  <span className="checkmark" /> Basic
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bypackage" />
                  <span className="checkmark" /> Enterprise
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bypackage" />
                  <span className="checkmark" /> Premium
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bypackage" />
                  <span className="checkmark" /> Free
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /By Package */}
      {/* By Status */}
      <div className="accordion" id="accordionMain3">
        <div className="card-header-new" id="headingThree">
          <h6 className="filter-title">
            <a
              href="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Plans Type
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
                  <span className="checkmark" />
                  Weekly
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bystatus" />
                  <span className="checkmark" /> Lifetime
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /By Status */}
      {/* Payment Gateway */}
      <div className="accordion" id="accordionMain5">
        <div className="card-header-new" id="headingfive">
          <h6 className="filter-title">
            <a
              href="#"
              className="w-100"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="true"
              aria-controls="collapsefive"
            >
              Payment Gateway
              <span className="float-end">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </a>
          </h6>
        </div>
        <div
          id="collapsefive"
          className="collapse"
          aria-labelledby="headingfive"
          data-bs-parent="#accordionExample5"
        >
          <div className="card-body-chat">
            <div id="checkBoxes4">
              <div className="selectBox-cont">
                <label className="custom_check w-100">
                  <input type="checkbox" name="bystatus" />
                  <span className="checkmark" /> All
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bystatus" />
                  <span className="checkmark" /> Paypal
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bystatus" />
                  <span className="checkmark" />
                  Credit Card
                </label>
                <label className="custom_check w-100">
                  <input type="checkbox" name="bystatus" />
                  <span className="checkmark" /> Debit Card
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment Gateway */}
      {/* Select Date */}
      <div className="accordion accordion-last" id="accordionMain2">
        <div className="card-header-new" id="headingTwo">
          <h6 className="filter-title">
            <a
              href="#"
              className="w-100"
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
SubscriptionFilter.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
  };
export default SubscriptionFilter;
