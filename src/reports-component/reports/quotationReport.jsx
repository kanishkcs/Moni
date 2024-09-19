import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import ReportModal from "../../common/modal/reportModal";
import Breadcrumbs from "../../common/breadcrumb/breadCrumbs";
import { Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { Link } from "react-router-dom";
import QuotationData from "../../assets/jsons/quotationData";

const QuotationReport = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = QuotationData?.QuotationData;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Serial Number",
      dataIndex: "transactionId",
      sorter: (a, b) => a.transactionId.length - b.transactionId.length,
    },
    {
      title: "Date",
      dataIndex: "transactionDate",
      sorter: (a, b) => a.transactionDate.length - b.transactionDate.length,
    },
    {
      title: "Company Name",
      dataIndex: "image",
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
      sorter: (a, b) => a.record.image.length - b.record.image.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Due Date",
      dataIndex: "dueDate",
      sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Breadcrumbs
              title="Quotation Report"
              show={show}
              setShow={setShow}
            />
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

export default QuotationReport;
