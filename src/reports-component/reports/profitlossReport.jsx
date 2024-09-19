import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import ReportModal from "../../common/modal/reportModal";
import Breadcrumbs from "../../common/breadcrumb/breadCrumbs";
import { DatePicker } from "antd";
import Select from "react-select";

const ProfitLossList = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
  const [selectedOptionThree, setSelectedOptionThree] = useState(null);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const options = [{ value: "1", label: "This Year" }];
  const optionsTwo = [{ value: "1", label: "Month" }];
  const optionsThree = [{ value: "1", label: "Accural" }];

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSelectChangeTwo = (selectedOptionTwo) => {
    setSelectedOptionTwo(selectedOptionTwo);
  };

  const handleSelectChangeThree = (selectedOptionThree) => {
    setSelectedOptionThree(selectedOptionThree);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Breadcrumbs title="Profit & Loss" show={show} setShow={setShow} />
            <ReportModal setShow={setShow} show={show} />
            <div className="profit-menu">
              <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="input-block mb-3">
                    <label>Period</label>
                    <ul className="form-group">
                      <li>
                        {/* <select className="select ">
                          <option>This Year</option>
                        </select> */}
                        <Select
                          value={selectedOption}
                          options={options}
                          onChange={handleSelectChange}
                          placeholder="This year"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="input-block mb-3">
                    <label>From</label>
                    <div>
                      <DatePicker onChange={handleDateChange} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="input-block mb-3">
                    <label>To</label>
                    <div>
                      <DatePicker onChange={handleDateChange} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 ">
                  <div className="input-block mb-3">
                    <label>Display Columns by</label>
                    <ul className="form-group">
                      <li>
                        <Select
                          value={selectedOptionTwo}
                          options={optionsTwo}
                          onChange={handleSelectChangeTwo}
                          placeholder="Month"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="input-block mb-3">
                    <label>Accounting Method</label>
                    <ul className="form-group">
                      <li>
                        <Select
                          value={selectedOptionThree}
                          options={optionsThree}
                          onChange={handleSelectChangeThree}
                          placeholder="Accural"
                          className="select"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <a className="btn btn-primary loss" href="#">
                    Run
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <div className="table-profit-loss">
                        <table className="table table-center ">
                          <thead className="thead-light loss">
                            <tr>
                              <th>Info</th>
                              <th>Jan 2023</th>
                              <th>Feb 2023</th>
                              <th>Mar 2023</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="profit space" colSpan={5}>
                                <table className="table table-center profit">
                                  <thead className="profitloss-heading">
                                    <tr>
                                      <th
                                        className="table-profit-head"
                                        colSpan={5}
                                      >
                                        Income
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="proft-head">
                                      <td>Stripe Sales</td>
                                      <td>$3,06,386.00</td>
                                      <td>$2,61,738.00</td>
                                      <td>$2,82,463.00</td>
                                      <td>$8,50,587.00</td>
                                    </tr>
                                  </tbody>
                                  <tbody>
                                    <tr className="profitloss-bg">
                                      <td>
                                        <h6>Total Income</h6>
                                      </td>
                                      <td>
                                        <h6>$3,06,386.00</h6>
                                      </td>
                                      <td>
                                        <h6>$2,61,738.00</h6>
                                      </td>
                                      <td>
                                        <h6>$2,82,463.00</h6>
                                      </td>
                                      <td>
                                        <h6>$8,50,587.00</h6>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td className="loss-space" colSpan={5}>
                                <table className="table table-center profit">
                                  <thead className="profitloss-heading">
                                    <tr>
                                      <th
                                        className="table-profit-head"
                                        colSpan={5}
                                      >
                                        Expenses
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Exchange Gain or Losses</td>
                                      <td>$0.00</td>
                                      <td>$0.00</td>
                                      <td>$0.00</td>
                                      <td>$0.00</td>
                                    </tr>
                                    <tr className="proft-head">
                                      <td>Stripe Fees</td>
                                      <td>$2,81,687.00</td>
                                      <td>$3,73,518.00</td>
                                      <td>$2,17,936.00</td>
                                      <td>$8,73,141.00</td>
                                    </tr>
                                  </tbody>
                                  <tbody>
                                    <tr className="profitloss-bg">
                                      <td>
                                        <h6>Total Expense</h6>
                                      </td>
                                      <td>
                                        <h6>$2,58,136.00</h6>
                                      </td>
                                      <td>
                                        <h6>$1,38,471.00</h6>
                                      </td>
                                      <td>
                                        <h6>$2,61,682.00</h6>
                                      </td>
                                      <td>
                                        <h6>$6,58,289.00</h6>
                                      </td>
                                    </tr>
                                    <tr className="profitloss-bg">
                                      <td>
                                        <h6>Net Income</h6>
                                      </td>
                                      <td>
                                        <h6>$2,69,276.00</h6>
                                      </td>
                                      <td>
                                        <h6>$2,75,638.00</h6>
                                      </td>
                                      <td>
                                        <h6>$2,51,629.00</h6>
                                      </td>
                                      <td>
                                        <h6>$7,96,543.00</h6>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default ProfitLossList;
