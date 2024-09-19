import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";

const LedgerModal = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);
  return (
    <>
      {/* Add Ledger Modal */}
      <div className="modal custom-modal fade" id="add_ledger" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <div className="form-header modal-header-title text-start mb-0">
                <h4 className="mb-0">Add Ledger</h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Amount"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Date</label>
                    <div className="cal-icon cal-icon-info">
                      <DatePicker
                        className="datetimepicker form-control"
                        placeholder="Select Date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      ></DatePicker>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Reference</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Reference Number"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block d-inline-flex align-center mb-0">
                    <label className="me-5 mb-0">Mode</label>
                    <div>
                      <label className="custom_radio me-3 mb-0">
                        <input type="radio" name="payment" defaultChecked="" />
                        <span className="checkmark" /> Credit
                      </label>
                      <label className="custom_radio mb-0">
                        <input type="radio" name="payment" />
                        <span className="checkmark" /> Debit
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#"
                data-bs-dismiss="modal"
                className="btn btn-back cancel-btn me-2"
              >
                Cancel
              </a>
              <a
                href="#"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Ledger Modal */}
      {/* Edit Ledger Modal */}
      <div className="modal custom-modal fade" id="edit_ledger" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <div className="form-header modal-header-title text-start mb-0">
                <h4 className="mb-0">Edit Ledger</h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$400"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Date</label>
                    <div className="cal-icon cal-icon-info">
                    <DatePicker
                        className="datetimepicker form-control"
                        placeholder="Select Date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      ></DatePicker>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Reference</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="#25689825"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block d-inline-flex align-center mb-0">
                    <label className="me-5 mb-0">Mode</label>
                    <div>
                      <label className="custom_radio me-3 mb-0">
                        <input type="radio" name="payment" defaultChecked="" />
                        <span className="checkmark" /> Credit
                      </label>
                      <label className="custom_radio mb-0">
                        <input type="radio" name="payment" />
                        <span className="checkmark" /> Debit
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#"
                data-bs-dismiss="modal"
                className="btn btn-back cancel-btn me-2"
              >
                Cancel
              </a>
              <a
                href="#"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Ledger Modal */}
      {/* Delete Items Modal */}
      <div className="modal custom-modal fade" id="delete_modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Ledger</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <button
                      type="reset"
                      data-bs-dismiss="modal"
                      className="w-100 btn btn-primary paid-continue-btn"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="w-100 btn btn-primary paid-cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Items Modal */}
    </>
  );
};

export default LedgerModal;
