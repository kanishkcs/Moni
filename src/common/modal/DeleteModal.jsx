import React from 'react'

const DeleteModal = () => {
    return (
        <div
        className="modal custom-modal fade modal-delete"
        id="delete_modal"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <div className="delete-modal-icon">
                  <span>
                    <i className="fe fe-check-circle" />
                  </span>
                </div>
                <h3>Are You Sure?</h3>
                <p>You want delete company</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="modal-footer justify-content-center p-0">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary paid-continue-btn me-2"
                  >
                    Yes, Delete
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-back cancel-btn"
                  >
                    No, Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    )
}

export default DeleteModal
