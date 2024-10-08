import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import {  Table, Tooltip } from "antd";
import Data from "../../assets/jsons/countries";
import FeatherIcon from "feather-icons-react";

import Select from "react-select";
import { filterIcon } from "../../_components/Imagepath";
import { itemRender, onShowSizeChange } from "../../_components/paginationfunction";
import AddVendor from "../../customers/vendors/addVendor";

const Cities = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const countryOptions = [
    { id: 1, text: 'Select Country Name' },
    { id: 2, text: 'Country Name 1' },
    { id: 3, text: 'Country Name 2' },
    { id: 4, text: 'Country Name 3' },
  ];

  const stateOptions = [
    { id: 1, text: 'Select State Name' },
    { id: 2, text: 'State Name 1' },
    { id: 3, text: 'State Name 2' },
    { id: 4, text: 'State Name 3' },
  ];

  const formattedOptions = options =>
    options.map(option => ({
      value: option.id,
      label: option.text,
    }));

  const handleCountryChange = selectedCountry => {
    setSelectedCountry(selectedCountry);
    // Additional logic if needed
  };

  const handleStateChange = selectedState => {
    setSelectedState(selectedState);
    // Additional logic if needed
  };


  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = Data?.Data;

  const columns = [
    {
      title: "#",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Country Name",
      dataIndex: "Name",
      render: (record, text) => (
       
          <div>
            <h2>
              <img
                className="avatar-img rounded me-2"
                width={30}
                height={30}
                src={text.img}
                alt="User Image"
              />
            </h2>
            {text.Name}
          </div>
        
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "State Name",
      dataIndex: "StateName",
      sorter: (a, b) => a.StateName.length - b.StateName.length,
    },
    {
      title: "City Name",
      dataIndex: "CityName",
      sorter: (a, b) => a.CityName.length - b.CityName.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div>
          <Link
            className=" btn-action-icon me-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit_cities"
          >
            {/* <i className="fe fe-edit" /> */}
            <FeatherIcon icon="edit" />
          </Link>
          <Link
            className=" btn-action-icon"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            {/* <i className="fe fe-trash-2" /> */}
            <FeatherIcon icon="trash-2" />
          </Link>
        </div>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header ">
                <h5>Countries</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                           <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>        
                        </span>
                        Filter{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          {/* <i className="fe fe-settings" /> */}
                          <FeatherIcon icon="settings" />
                        </span>{" "}
                      </Link>
                    </li>
                  
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_cities"
                      >
                       
                        <FeatherIcon icon="plus-circle" className="me-2" />
                        Add City
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
                  <div className="card-body countries">
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

        <AddVendor setShow={setShow} show={show} />

        <div className="modal custom-modal fade" id="add_cities" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add City</h4>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Country Name</label>
                      <Select className="w-100"

                        value={selectedCountry}
                        onChange={handleCountryChange}
                        options={formattedOptions(countryOptions)}
                        placeholder="Select Country Name"
                      />

                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>State Name</label>
                      <Select className="w-100"

                        value={selectedState}
                        onChange={handleStateChange}
                        options={formattedOptions(stateOptions)}
                        placeholder="Select State Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-0">
                      <label>City Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Add Cities
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="modal custom-modal fade" id="edit_cities" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit City</h4>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>Country Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="American Samoa"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-3">
                      <label>State Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Swains Island"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="input-block mb-0">
                      <label>City Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Gandzasar"
                        placeholder="Enter Reference Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Update
                </Link>
              </div>
            </div>
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
                  <h3>Delete City</h3>
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
      </div>
    </>
  );
};

export default Cities;
