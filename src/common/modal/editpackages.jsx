import React from 'react'

const EditPackages = () => {
    return (
        <>
            {/* Edit Vendor Modal */}
            <div className="modal custom-modal fade" id="edit_package" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <div className="form-header modal-header-title text-start mb-0">
                                <h4 className="mb-0">Edit Package</h4>
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
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="John Smith"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="input-block mb-3">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="john@example.com"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="input-block mb-3">
                                        <label>Mobile</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="989-438-3131"
                                            placeholder="Enter Mobile Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="input-block mb-3">
                                        <label>Message</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Lorem ipsum dolor"
                                            placeholder="message"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="input-block mb-0">
                                        <label>Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="15 Dec 2023, 04:35 PM"
                                            placeholder="message"
                                        />
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
                                Update
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit Vendor Modal */}
        </>

    )
}

export default EditPackages
