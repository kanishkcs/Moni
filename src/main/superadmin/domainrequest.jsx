import React, { useState } from 'react'
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { filterIcon } from '../../_components/Imagepath';
import { Link } from 'react-router-dom'
import domainrequestdata from '../../assets/jsons/domain-request'
import { Table, Tooltip } from 'antd';
import { itemRender, onShowSizeChange } from '../../_components/paginationfunction';
import DeleteModal from '../../common/modal/DeleteModal';
const DomainRequest = () => {
    const [menu, setMenu] = useState(false);

    const datasource = domainrequestdata?.domainrequestdata
    const toggleMobileMenu = () => {
        setMenu(!menu);
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            sorter: (a, b) => a.id.length - b.id.length,
        },

        {
            title: "Customer",
            dataIndex: "Customer",
            sorter: (a, b) => a.Customer.length - b.Customer.length,
        },
        {
            title: "Domain",
            dataIndex: "Domain",
            sorter: (a, b) => a.Domain.length - b.Domain.length,
        },
        {
            title: "No of Employees",
            dataIndex: "noofemployee",
            sorter: (a, b) => a.noofemployee.length - b.noofemployee.length,
        },
        {
            title: "Package",
            dataIndex: "Package",
            sorter: (a, b) => a.Package.length - b.Package.length,
        },

        {
            title: "CreatedOn",
            dataIndex: "CreatedOn",
            sorter: (a, b) => a.CreatedOn.length - b.CreatedOn.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text) => (
                <div>
                    {text === "Rejected" && (
                        <span className="bg-inactive">{text}</span>
                    )}
                    {text === "Approved" && (
                        <span className="badge bg-success-light">{text}</span>
                    )}

                </div>
            ),
            sorter: (a, b) => a.Status.length - b.Status.length,
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: () => (
                    <div className="table-invoice d-flex align-items-center">

                        <div className="dropdown dropdown-action">
                            <Link
                                to="#"
                                className=" btn-action-icon "
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            <i className="far fa-edit me-2" />
                                            Subscribe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                        >
                                            <i className="far fa-trash-alt me-2" />
                                            Delete
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
            ),
            sorter: (a, b) => a.Action.length - b.Action.length,
        },
    ];

    return (
        <div>
            <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
                <Header onMenuClick={() => toggleMobileMenu()} />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="content-page-header">
                                <h5>Domain Request</h5>
                                <div className="list-btn">
                                    <ul className="filter-list">
                                        <li>
                                            <Link to="#"
                                                className="btn btn-filters w-auto popup-toggle me-2"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="bottom"
                                                data-bs-original-title="Filter"
                                            >
                                                <span className="me-2">
                                                     <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                                                </span>
                                                Filter
                                            </Link>
                                        </li>
                                        <li>
                                            <div
                                                className="dropdown dropdown-action me-2"
                                               
                                            >
                                                <Link
                                                    to="#"
                                                    className="btn-filters"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span>
                                                    <Tooltip title="Download" placement="bottom">
                                                    <i className="fe fe-download" />
                                                  </Tooltip>
                                                    </span>
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end me-2">
                                                    <ul className="d-block">
                                                        <li>
                                                            <Link
                                                                className="d-flex align-items-center download-item"
                                                                to="#"
                                                                download=""
                                                            >
                                                                <i className="far fa-file-pdf me-2" />
                                                                PDF
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="d-flex align-items-center download-item"
                                                                to="#"
                                                                download=""
                                                            >
                                                                <i className="far fa-file-text me-2" />
                                                                CVS
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                className="btn-filters"
                                                to="#"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="bottom"
                                                title="Print"
                                            >
                                                <span>
                                                     <Tooltip title="Print" placement="bottom">
                            <i className="fe fe-printer" />
                          </Tooltip>

                                                </span>{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        {/* Search Filter */}
                        <div id="filter_inputs" className="card filter-card">
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="input-block mb-3">
                                            <label>Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="input-block mb-3">
                                            <label>Email</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="input-block mb-3">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Search Filter */}
                        {/* Table */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-table">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table
                                                pagination={{
                                                    total: datasource.length,
                                                    showTotal: (total, range) =>
                                                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                    // showSizeChanger: true,
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
                        {/* /Table */}
                    </div>
                </div>
            </div>
            <DeleteModal />
        </div>
    )
}

export default DomainRequest