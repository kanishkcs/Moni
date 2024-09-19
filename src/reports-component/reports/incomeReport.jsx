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
import Breadcrumbs from "../../common/breadcrumb/breadCrumbs";
import IncomeData from "../../assets/jsons/incomeData";

const IncomeReport = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = IncomeData?.IncomeData;
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
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Income Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Breadcrumbs title="Income Report" show={show} setShow={setShow} />
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

export default IncomeReport;
