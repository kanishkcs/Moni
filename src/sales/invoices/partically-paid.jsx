 
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Table } from "antd";
import { onShowSizeChange,itemRender } from "../../_components/paginationfunction";
import Data from "../../assets/jsons/partiallypaid";
import InvoiceHead from "./invoice-head";
const ParticallyPaid = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [show, setShow] = useState(false);
   
    const datasource = Data?.Data;
    console.log(datasource);   

    const columns = [
        {
          title: "id",
          dataIndex: "id",
          render: (img,record) => (
            <Link to="/invoice-details" className="invoice-link">
              {record.Invoice}
            </Link>
          ),
          sorter: (a, b) => a.id.length - b.id.length,
        },
    
        {
          title: "Category",
          dataIndex: "Category",
          sorter: (a, b) => a.Category.length - b.Category.length,
        },
        {
          title: " Created",
          dataIndex: "Name",
        sorter: (a, b) => a. Created.length - b. Created.length,
        },
        {
          title: "Invoice To",
          dataIndex: "Name",
          render: (img,record) => (
            <h2 className="table-avatar">
              <Link to="/profile" className="avatar avatar-sm me-2">
                <img
                  className="avatar-img rounded-circle"
                  src={record.img}
                  alt="User Image"
                />
              </Link>
              <Link to="/profile">
                {record.Name} <span>{record.email}</span>
              </Link>
            </h2>
          ),
          sorter: (a, b) => a.Name.length - b.Name.length,
        },
        
        {
          title: "email",
          dataIndex: "email",
          sorter: (a, b) => a.email.length - b.email.length,
        },
        {
          title: "Total",
          dataIndex: "Total",
          sorter: (a, b) => a.Total.length - b.Total.length,
        },
        {
          title: "Paid",
          dataIndex: "Paid",
          sorter: (a, b) => a.Paid.length - b.Paid.length,
        },
        {
          title: "Payment",
          dataIndex: "Payment",
          sorter: (a, b) => a.Payment.length - b.Payment.length,
        },
        {
          title: "Balance",
          dataIndex: "Balance",
          sorter: (a, b) => a.Balance.length - b.Balance.length,
        },
         {
           title: "Status",
           dataIndex: "Status",
           render: (text) => (
             <span className="badge bg-primary-light">{text}</span>
           ),
           sorter: (a, b) => a.Status.length - b.Status.length,
         },
        {
          title: "Action",
          dataIndex: "Action",
          render: () => (
            <>
              <div className="text-end">
                <div className="dropdown dropdown-action">
                  <Link
                    to="#"
                    className="btn-action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item" to="/edit-invoice">
                      <i className="far fa-edit me-2" />
                      Edit
                    </Link>
                    <Link className="dropdown-item" to="/invoice-details">
                      <i className="far fa-eye me-2" />
                      View
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    >
                      <i className="far fa-trash-alt me-2" />
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ),
          sorter: (a, b) => a.Action.length - b.Action.length,
        },
      ];
      const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
return(
    <>
    <Header/>
    <Sidebar/>
   

    <div className="page-wrapper">
      <div className="content container-fluid">
      <InvoiceHead setShow={setShow} show={show} />
        <div className="card invoices-tabs-card">
          <div className="invoices-main-tabs">
            <div className="row align-items-center">
              <div className="col-lg-12">
              <div className="invoices-tabs">
                  <ul>
                    <li>
                      <Link to="/invoice-list">All </Link>
                    </li>
                    <li>
                      <Link to="/invoice-paid" >
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="/invoice-overdue" >Overdue</Link>
                    </li>
                    <li>
                      <Link to="/invoice-cancelled">Cancelled</Link>
                    </li>
                    <li>
                      <Link to="/invoice-particallypaid" className="active">
                        Partically Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="/invoice-unpaid">Unpaid</Link>
                    </li>

                    <li>
                      <Link to="/invoice-refund">Refunded</Link>
                    </li>
                    <li>
                      <Link to="/invoice-draft">Draft</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card-table">
              <div className="card-body invoiceList">
                <div className="table-responsive table-hover">
                <Table
                pagination={{
                  total: datasource.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  // showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={datasource}
                rowKey={(record) => record.id}
              />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Table */}
      </div>
    </div>


    <div
      className="modal custom-modal fade"
      id="delete_modal"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Invoice</h3>
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
    </>
)
}
export default ParticallyPaid