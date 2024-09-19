/* eslint-disable */ 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Select from "react-select";

const EditExpenses = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [date, setDate] = useState(new Date());
  const [categoryOptions, setcategoryOptions] = useState([
    { id: 1, text: "Advertising" },
    { id: 2, text: "Marketing" },
    { id: 3, text: "Software" },
    { id: 4, text: "Travel" },
  ]);
  const formattedCategoryOptions = categoryOptions.map(option => ({
    value: option.id,
    label: option.text
  }));

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    // Additional logic if needed
  };
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("width-100"));
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };

  const formHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Expenses</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/expenses">Expenses</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Expenses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>Category:</label>
                            <Select
                              value={selectedCategory}
                              onChange={handleCategoryChange}
                              options={formattedCategoryOptions}
                              placeholder="Select Category"
                            />
                          </div>
                          <div className="input-block mb-3">
                            <label>Note:</label>
                            <textarea
                              rows="5"
                              cols="5"
                              className="form-control"
                              placeholder="Ut et est et autem quaerat. Dolores consequuntur ut "
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>Date:</label>
                            <div className="cal-icon">
                              <DatePicker
                                selected={date}
                                onChange={handleChange}
                                className="form-control datetimepicker"
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3">
                            <label>Customer:</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Karlene Chaidez"
                              onChange={formHandler}
                              disabled
                            />
                          </div>
                          <div className="input-block mb-3">
                            <label>Amount:</label>
                            <input
                              type="text"
                              className="form-control"
                              value="$75"
                              onChange={formHandler}
                            />
                          </div>
                          <div className="text-end mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onChange={formHandler}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
export default EditExpenses;
