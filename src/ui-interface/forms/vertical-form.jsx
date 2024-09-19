import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Select from "react-select";

const VerticalForm = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const stateOptions = [
    { id: 1, text: "Select State" },
    { id: 2, text: "California" },
    { id: 3, text: "Texas" },
    { id: 4, text: "Florida" },
  ];
  const countryOptions = [
    { id: 1, text: "USA" },
    { id: 2, text: "France" },
    { id: 3, text: "India" },
    { id: 4, text: "Spain" },
  ];

  const formattedStateOptions = stateOptions.map((option) => ({
    value: option.id,
    label: option.text,
  }));

  const formattedCountryOptions = countryOptions.map((option) => ({
    value: option.id,
    label: option.text,
  }));

  const handleStateChange = (selectedState) => {
    setSelectedState(selectedState);
  };

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        {/* Page wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Vertical Form</h5>
              </div>
            </div>
            {/* /Page Header */}

            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Basic Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="input-block mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Email Address</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          autoComplete="off"
                          className="form-control"
                        />
                      </div>
                      <div className="input-block mb-3">
                        <label>Repeat Password</label>
                        <input
                          type="password"
                          autoComplete="off"
                          className="form-control"
                        />
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Address Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="input-block mb-3">
                        <label>Address Line 1</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Address Line 2</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>State</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Country</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block mb-3">
                        <label>Postal Code</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Two Column Vertical Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <h5 className="card-title">Personal Information</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>First Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Blood Group</label>
                          </div>
                          <div className="input-block mb-3">
                            <label className="d-block">Gender:</label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender_male"
                                value="option1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gender_male"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender_female"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gender_female"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>Username</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Email</label>
                            <input type="text" className="form-control" />
                          </div>

                          <div className="input-block mb-3">
                            <label>Password</label>
                            <input
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                          <div className="input-block mb-3">
                            <label>Repeat Password</label>
                            <input
                              type="text"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title">Postal Address</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>Address Line 1</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Address Line 2</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>State</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block mb-3">
                            <label>City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Country</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Postal Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Two Column Vertical Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="card-title">Personal details</h5>
                          <div className="input-block mb-3">
                            <label>Name:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-3">
                            <label>Password:</label>
                            <input
                              type="password"
                              autoComplete="off"
                              className="form-control"
                            />
                          </div>
                          <Select
                            className="w-100"
                            value={selectedState}
                            onChange={handleStateChange}
                            options={formattedStateOptions}
                            placeholder="Select State"
                          />
                          <div className="input-block mb-3">
                            <label>Your Message:</label>
                            <textarea
                              rows="5"
                              cols="5"
                              className="form-control"
                              placeholder="Enter message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h5 className="card-title">Personal details</h5>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>First Name:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>Last Name:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>Email:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>Phone:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-block mb-3">
                                <label>Address line:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>Country:</label>
                                <Select
                                  value={selectedCountry}
                                  onChange={handleCountryChange}
                                  options={formattedCountryOptions}
                                  placeholder="Select Country"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>State/Province:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>ZIP code:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>City:</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page wrapper */}
        </div>
      </div>
    </>
  );
};
export default VerticalForm;
