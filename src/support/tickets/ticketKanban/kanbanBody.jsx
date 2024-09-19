import React from "react";
import KanbanGridOne from "./kanbanGridOne";
import KanbanGridTwo from "./kanbanGridTwo";
import KanbanGridThree from "./kanbanGridThree";
import KanbanGridFour from "./kanbanGridFour";
import KanbanGridFive from "./kanbanGridFive";
import { img1, img2 } from "../../../_components/Imagepath";


const KanbanBody = () => {
  return (
    <>
      {/* Ticket Kanban */}
      <div className="row">
        <div className="col-sm-12">
          <div className="kanban-ticket-main d-flex">
            <ul className="kanban-ticket-list">
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Open</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      5
                    </span>
                  </div>
                  <a href="#">
                    <span>
                      <i className="fe fe-plus" />
                    </span>
                  </a>
                </div>
              </li>
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning-light text-warning-light">
                        Medium
                      </span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-success-light">Resolved</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Verify your email</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-light-gray text-secondary">
                          Closed
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-success-light">Resolved</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
            </ul>
            <ul className="kanban-ticket-list">
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">In Progress</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      8
                    </span>
                  </div>
                  <a href="#">
                    <span>
                      <i className="fe fe-plus" />
                    </span>
                  </a>
                </div>
              </li>
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Verify your email</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-warning-light text-warning-light">
                          Pending
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning-light text-warning-light">
                        Medium
                      </span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-light-gray text-secondary">
                          Closed
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-warning-light text-warning-light">
                          Pending
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
            </ul>
            <ul className="kanban-ticket-list">
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Hold</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      6
                    </span>
                  </div>
                  <a href="#">
                    <span>
                      <i className="fe fe-plus" />
                    </span>
                  </a>
                </div>
              </li>
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-light-gray text-secondary">
                          Closed
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Verify your email</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-warning-light text-warning-light">
                          Pending
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
            </ul>
            <ul className="kanban-ticket-list">
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Unassigned</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      5
                    </span>
                  </div>
                  <a href="#">
                    <span>
                      <i className="fe fe-plus" />
                    </span>
                  </a>
                </div>
              </li>
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge bg-light-gray text-secondary">
                          Closed
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Verify your email</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning-light text-warning-light">
                        Medium
                      </span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-success-light">Resolved</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
            </ul>
            <ul className="kanban-ticket-list">
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Solved</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      10
                    </span>
                  </div>
                  <a href="#">
                    <span>
                      <i className="fe fe-plus" />
                    </span>
                  </a>
                </div>
              </li>
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Verify your email</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning-light text-warning-light">
                        Medium
                      </span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-success-light">Resolved</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger-light">High</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Management</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-danger-light text-danger-light">
                          Open
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
              {/* list Grid */}
              <li className="kanban-ticket-grid">
                <div className="card-kanban">
                  <div className="kanban-box">
                    <div className="kanban-name d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary-light">Low</span>
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_ticket"
                          >
                            <i className="far fa-edit me-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-eye me-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="far fa-trash-alt me-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                    <h6>Support for theme</h6>
                    <div className="ticket-due d-flex">
                      <div className="ticket-due-id me-2">
                        <span className="badge badge-gray-outline">#4987</span>
                      </div>
                      <div className="ticket-due-status">
                        <span className="badge  bg-success-light">Resolved</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <ul className="kanban-ticket-img d-flex align-items-center">
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 1"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img1}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Member 2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={img2}
                              alt="img"
                            />
                          </a>
                        </li>
                        <li className="more-set">
                          <a href="#">
                            <span className="d-flex justify-content-center align-items-center">
                              <i className="fe fe-plus" />
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="progressset">
                        <p>
                          <span>
                            <i className="far fa-calendar me-2" />
                          </span>{" "}
                          Jan 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* /list Grid */}
            </ul>
            <KanbanGridOne />

              <KanbanGridTwo />

              <KanbanGridThree />

              <KanbanGridFour />

              <KanbanGridFive />
          </div>
        </div>
      </div>
      {/* /Ticket Kanban */}
    </>

  );
};

export default KanbanBody;
