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
import PurchaseData from "../../assets/jsons/purchaseReportData";

const PurchaseReport = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = PurchaseData?.PurchaseData;
  console.log(datasource);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Product",
      dataIndex: "product",
      render: (text, record) => (
        <>
          {/* <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-md me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.image}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">{record.product}</Link>
          </h2> */}
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-md me-2 companies">
              <img
                className="avatar-img sales-rep text-start"
                src={record.image}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">{record.product}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.image.length - b.image.length,
    },
    {
      title: "Purchase Amount",
      dataIndex: "price",
      sorter: (a, b) => a.price.length - b.price.length,
    },
    {
      title: "Purchase Qty",
      dataIndex: "quantitySold",
      sorter: (a, b) => a.quantitySold.length - b.quantitySold.length,
    },
    {
      title: "Instock Qty",
      dataIndex: "quantityAvailable",
      sorter: (a, b) => a.quantityAvailable.length - b.quantityAvailable.length,
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
              title="Purchase Report"
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

export default PurchaseReport;
