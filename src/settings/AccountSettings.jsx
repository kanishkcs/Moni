import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { img10 } from "../_components/Imagepath";
import DatePicker from "react-datepicker";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import SettingsSidebar from "../layouts/SettingsSidebar";
const AccountSettings = () => {
  const [startDate, setStartDate] = useState(new Date());
  const currencyOptions = [
    { id: 1, text: "Select Gender" },
    { id: 2, text: "Male" },
    { id: 3, text: "Female" },
  ];

  const formattedOptions = (options) =>
    options.map((option) => ({
      value: option.id,
      label: option.text,
    }));

  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <SettingsSidebar />
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-body w-100">
                  <div className="content-page-header">
                    <h5 className="setting-menu">Account Settings</h5>
                  </div>
                  <div className="row">
                    <div className="profile-picture">
                      <div className="upload-profile me-2">
                        <div className="profile-img">
                          <img
                            id="blah"
                            className="avatar"
                            src={img10}
                            alt="profile-img"
                          />
                        </div>
                      </div>
                      <div className="img-upload">
                        <label className="btn btn-primary">
                          Upload new picture <input type="file" />
                        </label>
                        <Link className="btn btn-remove">Delete</Link>
                        <p className="mt-1">
                          Logo Should be minimum 152 * 152 Supported File format
                          JPG,PNG,SVG
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-title">
                        <h5>General Information</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-0">
                        <label>Gender</label>
                        <Select
                          value={selectedGender}
                          onChange={(option) => setSelectedGender(option)}
                          options={formattedOptions(currencyOptions)}
                          placeholder="Select Gender"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Date of Birth</label>

                        <DatePicker
                          className="datetimepicker form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                        <FeatherIcon icon="calendar" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-title">
                        <h5>Address Information</h5>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-block mb-3">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Country"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your State"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Postal Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Postal Code"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="btn-path text-end">
                        <Link
                          to="#"
                          className="btn btn-cancel bg-primary-light me-3"
                        >
                          Cancel
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary"
                        >
                          Save Changes
                        </Link>
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
export default AccountSettings;
