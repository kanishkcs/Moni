import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker";

const AddTicket = () => {
    const [startDate, setDate] = useState(new Date())
    const [startDate1, setDate1] = useState(new Date())
    const [startDate2, setDate2] = useState(new Date())

    const handleChange = (date) => {
        setDate(date);
    };
    const handleChange1 = (date) => {
        setDate1(date);
    };
    const handleChange2 = (date) => {
        setDate2(date);
    };

    const priorityOptions = [
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' },
        { value: 'high', label: 'High' },
    ];

    const statusOptions = [
        { value: 'open', label: 'Open' },
        { value: 'resolved', label: 'Resolved' },
        { value: 'pending', label: 'Pending' },
        { value: 'closed', label: 'Closed' },
    ];

    return (
        <div
            className="modal custom-modal modal-lg fade"
            id="add_ticket"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                    <div className="modal-header border-0 pb-0">
                        <div className="form-header modal-header-title text-start mb-0">
                            <h4 className="mb-0">Add Ticket</h4>
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
                            <div className="col-lg-4 col-md-12">
                                <div className="input-block mb-3">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Subject"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="input-block mb-3">
                                    <label>Assigned Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Assigned Name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="input-block mb-3">
                                    <label>Assigned Date</label>
                                    <div className="cal-icon cal-icon-info">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleChange}
                                            className="form-control datetimepicker"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="input-block mb-3">
                                    <label>Created Date</label>
                                    <div className="cal-icon cal-icon-info">
                                        <DatePicker
                                            selected={startDate1}
                                            onChange={handleChange1}
                                            className="form-control datetimepicker"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="input-block mb-3">
                                    <label>Due Date</label>
                                    <div className="cal-icon cal-icon-info">
                                        <DatePicker
                                            selected={startDate2}
                                            onChange={handleChange2}
                                            className="form-control datetimepicker"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="input-block mb-3">
                                    <label>Assignee Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Assignee Name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="input-block mb-0">
                                    <label>Priority</label>
                                    <Select
                                        options={priorityOptions}
                                        placeholder="Select Priority"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="input-block mb-0">
                                    <label>Status</label>
                                    <Select
                                        options={statusOptions}
                                        placeholder="Select Status"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a
                            href="#"
                            data-bs-dismiss="modal"
                            className="btn btn-primary paid-cancel-btn me-2"
                        >
                            Cancel
                        </a>
                        <a
                            href="#"
                            data-bs-dismiss="modal"
                            className="btn btn-primary paid-continue-btn"
                        >
                            Save
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTicket
