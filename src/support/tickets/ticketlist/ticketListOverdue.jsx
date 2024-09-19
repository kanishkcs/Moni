import React, { useEffect, useState } from "react";
import TicketHead from "../ticketHead";
import Data from "../../../assets/jsons/ticketList";
import "../../../_components/antd.css";
import {
  onShowSizeChange,
  itemRender,
} from "../../../_components/paginationfunction";
import { Link } from "react-router-dom";
import AddVendor from "../../../customers/vendors/addVendor";
import Header from "../../../layouts/Header";
import Sidebar from "../../../layouts/Sidebar";
import { Table } from "antd";
import AddTicket from "../../../common/modal/addticket";

const TicketListOverdue = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);

  

  const datasource = Data?.Data;
  console.log(datasource);

  const columns = [
    {
      title: "Ticket ID",
      dataIndex: "Ticket",
      sorter: (a, b) => a.Ticket.length - b.Ticket.length,
    },
    {
      title: "Subject",
      dataIndex: "Subject",
      sorter: (a, b) => a.Subject.length - b.Subject.length,
    },
    {
      title: "Assigned",
      dataIndex: "Assigned",
      render: (record) => (
        <h2 className="table-avatar">
          <span className="avatar avatar-sm ms-2">
            <img
              className="avatar-img rounded-circle"
              src={record.Img}
              alt="User Image"
            />
          </span>
          <span>{record.Assigned}</span>
        </h2>
      ),
      sorter: (a, b) => a.Assigned.length - b.Assigned.length,
    },
    {
      title: "Assigned Date",
      dataIndex: "AssignedDate",
      sorter: (a, b) => a.AssignedDate.length - b.AssignedDate.length,
    },
    {
      title: "Created On",
      dataIndex: "CreatedOn",
      sorter: (a, b) => a.CreatedOn.length - b.CreatedOn.length,
    },
    {
      title: "Due Date",
      dataIndex: "DueDate",
      sorter: (a, b) => a.DueDate.length - b.DueDate.length,
    },
    {
      title: "Assignee",
      dataIndex: "Assignee",
      render: (record, text) => (
        <>
          <h2 className="table-avatar">
            <Link to="#" className="avatar avatar-sm ms-2">
              <img
                className="avatar-img rounded-circle"
                src={text.img}
                alt="User Image"
              />
            </Link>
            <Link to="#">
              {text.Assignee} <span>{text.Phone}</span>
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Assignee.length - b.Assignee.length,
    },
    {
      title: "Last Reply",
      dataIndex: "LastReply",
      sorter: (a, b) => a.LastReply.length - b.LastReply.length,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      render: (text) => (
        <div>
          {text === "Medium" && (
            <span className="badge bg-warning-light text-warning-light">
              {text}
            </span>
          )}
          {text === "Low" && (
            <span className="badge bg-primary-light">{text}</span>
          )}
          {text === "High" && (
            <span className="badge bg-danger-light">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Priority.length - b.Priority.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <span className="badge bg-success-light text-success-light">
          {text}
        </span>
      ),
      sorter: (a, b) => a.StatusOverdue.length - b.StatusOverdue.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div className="dropdown dropdown-action">
          <Link
            to="#"
            className=" btn-action-icon "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="far fa-edit ms-2" />
                  Edit
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="far fa-trash-alt ms-2" />
                  Delete
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="far fa-eye ms-2" />
                  View
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="far fa-bell ms-2" />
                  Active
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  <i className="far fa-bell-slash ms-2" />
                  Deactivate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <TicketHead setShow={setShow} show={show} />

            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/tickets-list">All</Link>
                        </li>
                        <li>
                          <Link to="/tickets-open">Open</Link>
                        </li>
                        <li>
                          <Link to="/tickets-resolved" className="active">
                            Resolved
                          </Link>
                        </li>
                        <li>
                          <Link to="/tickets-pending">Pending</Link>
                        </li>
                        <li>
                          <Link to="/tickets-closed">Closed</Link>
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
                    <div className="table-responsive table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <AddTicket />
      </div>
    </>
  );
};

export default TicketListOverdue;
