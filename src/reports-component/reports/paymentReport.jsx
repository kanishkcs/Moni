import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import ReportModal from "../../common/modal/reportModal";
import { Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { Link } from "react-router-dom";
import PaymentData from "../../assets/jsons/paymentreportData";
import Breadcrumbs from "../../common/breadcrumb/breadCrumbs";

const PaymentReport = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = PaymentData?.PaymentData;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Company",
      dataIndex: "name",
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
              {record.name} <span>{record.email}</span>
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Payment Received",
      dataIndex: "totalRevenue",
      sorter: (a, b) => a.totalRevenue.length - b.totalRevenue.length,
    },
    {
      title: "Payment Sent",
      dataIndex: "expenses",
      sorter: (a, b) => a.expenses.length - b.expenses.length,
    },
    {
      title: "Net Payment",
      dataIndex: "profit",
      sorter: (a, b) => a.profit.length - b.profit.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Breadcrumbs title="Payment Report" show={show} setShow={setShow} />
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

export default PaymentReport;
