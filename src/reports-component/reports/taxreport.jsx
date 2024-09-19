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
import TaxReportData from "../../assets/jsons/taxreportData";
import { Link } from "react-router-dom";

const TaxReport = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = TaxReportData?.TaxReportData;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },

    {
      title: "Supplier",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Ref No",
      dataIndex: "invoice",
      sorter: (a, b) => a.invoice.length - b.invoice.length,
    },
    {
      title: "Total Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
    },

    {
      title: "Discount",
      dataIndex: "itemsSold",
      sorter: (a, b) => a.itemsSold.length - b.itemsSold.length,
    },
    {
      title: "Tax Amount",
      dataIndex: "averagePrice",
      sorter: (a, b) => a.averagePrice.length - b.averagePrice.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Breadcrumbs title="Tax Report" show={show} setShow={setShow} />
            <ul className="mb-3 d-flex align-items-center">
              <li>
                <Link to="/tax-report" className="btn btn-primary tax active">
                  Purchase Tax Report
                </Link>
              </li>
              <li>
                <Link to="/tax-report" className="btn btn-primary tax">
                  SalesTax Report
                </Link>
              </li>
            </ul>

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

export default TaxReport;
