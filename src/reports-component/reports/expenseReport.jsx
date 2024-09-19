import React, { useState } from "react";

import { Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { Link } from "react-router-dom";
// import ExpenseData from "../assets/jsons/expenseReportData";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Breadcrumbs from "../../common/breadcrumb/breadCrumbs";
import ReportModal from "../../common/modal/reportModal";
import ExpenseData from "../../assets/jsons/expenseReportData";

const ExpenseReport = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = ExpenseData?.ExpenseData;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Company Name",
      dataIndex: "company",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-md me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.image}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">
              {record.company} <span>{record.email}</span>
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Payment Status",
      dataIndex: "status",
      sorter: (a, b) => a.Balance.length - b.Balance.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.Invoice.length - b.Invoice.length,
    },
    {
      title: "Created By",
      dataIndex: "date",
      sorter: (a, b) => a.Created.length - b.Created.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Breadcrumbs title="Expense Report" show={show} setShow={setShow} />
            <ReportModal setShow={setShow} show={show} />
            <div className="row">
              <div className="col-sm-12">
                <div className="card customers">
                  <div className="card-body">
                    <div className="table-responsive table-hover">
                      <Table
                        className="table"
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
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseReport;
