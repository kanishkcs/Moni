import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
const UpdatePackage = () => {
  const [startDate, setDate] = useState(new Date());
  const [startDate1, setDate1] = useState(new Date());
  const [startDate2, setDate2] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  const handleChange1 = (date) => {
    setDate1(date);
  };
  const handleChange2 = (date) => {
    setDate2(date);
  };
  const planoptions = [
    { value: "All Plans", label: "All Plans" },
    { value: "Advanced", label: "Advanced" },
    { value: "Basic", label: "Basic" },
    { value: "Enterprise", label: "Enterprise" },
    { value: "Premium", label: "Premium" },
    { value: "Free", label: "Free" },
  ];
  const yearoptions = [
    { value: "Yearly", label: "Yearly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Lifetime", label: "Lifetime" },
  ];

  return (
    <div
      className="modal custom-modal custom-lg-modal fade p-20"
      id="change_pane"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header border-0">
            <div className="form-header modal-header-title text-start mb-0">
              <h4 className="mb-0">Update Package</h4>
            </div>
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form action="#">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="plane-basic-info plane-detail">
                    <h5>Current Plan Details</h5>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Company Name</h6>
                          <p>Hermann Groups</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Plan Name</h6>
                          <p>Enterprise</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Plan Type</h6>
                          <p>Yearly</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Price</h6>
                          <p>$200</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Register Date</h6>
                          <p>15 Jan 2024</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="basic-info-detail">
                          <h6>Expiring On</h6>
                          <p>15 Jan 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="plane-basic-info plane-detail">
                    <h5>Change Company Plan</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label>Plan Name</label>
                          <Select
                            className="select"
                            options={planoptions}
                            placeholder="Select Plan"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label>Plan Type</label>

                          <Select
                            className="select"
                            options={yearoptions}
                            placeholder="Select Plan Type"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="form-label">Amount </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="form-control-label">
                            Payment Date
                          </label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={startDate}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="form-control-label">
                            Next Payment Date
                          </label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={startDate1}
                              onChange={handleChange1}
                              className="form-control datetimepicker "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block mb-3">
                          <label className="form-control-label">
                            Expiring On
                          </label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={startDate2}
                              onChange={handleChange2}
                              className="form-control datetimepicker w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-back cancel-btn me-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePackage;
