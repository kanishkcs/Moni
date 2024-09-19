import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Link } from "react-router-dom";
import Select from "react-select";
import SettingsSidebar from "../layouts/SettingsSidebar";

const Preferences = () => {
  const currencyOptions = [
    { id: 1, text: "Select Currency" },
    { id: 2, text: "USD - US Dollar" },
    { id: 3, text: "GBP - British Pound" },
    { id: 4, text: "EUR - Euro" },
    { id: 5, text: "INR - Indian Rupee" },
    { id: 6, text: "AUD - Australian Dollar" },
  ];

  const languageOptions = [
    { id: 1, text: "Select Language" },
    { id: 2, text: "English" },
    { id: 3, text: "French" },
    { id: 4, text: "German" },
    { id: 5, text: "Italian" },
    { id: 6, text: "Spanish" },
  ];

  const timeOptions = [
    { id: 1, text: "Select Time Zone" },
    { id: 2, text: "(UTC+09:00) Tokyo" },
    { id: 3, text: "(UTC+11:00) INR" },
  ];

  const dateOptions = [
    { id: 1, text: "Select Date Format" },
    { id: 2, text: "2020 Nov 09" },
    { id: 3, text: "09 Nov 2020" },
    { id: 4, text: "09/11/2020" },
  ];

  const timeFormatOptions = [
    { id: 1, text: "Select Time Format" },
    { id: 2, text: "10:00 AM - 11:00 AM" },
    { id: 3, text: "12:00 PM - 02:00 PM" },
  ];

  const yearOptions = [
    { id: 1, text: "Select Financial Year" },
    { id: 2, text: "january-december" },
    { id: 3, text: "february-january" },
    { id: 4, text: "march-february" },
  ];

  const formattedOptions = (options) =>
    options.map((option) => ({
      value: option.id,
      label: option.text,
    }));

  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeFormat, setSelectedTimeFormat] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <SettingsSidebar />
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-body w-100">
                  <div className="content-page-header">
                    <h5>Preference Settings</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>Currency</label>
                        <Select
                          value={selectedCurrency}
                          onChange={(option) => setSelectedCurrency(option)}
                          options={formattedOptions(currencyOptions)}
                          placeholder="Select Currency"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-block mb-3">
                        <label>language</label>
                        <Select
                          value={selectedLanguage}
                          onChange={(option) => setSelectedLanguage(option)}
                          options={formattedOptions(languageOptions)}
                          placeholder="Select Language"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="input-block mb-3">
                        <label>Time Zone</label>
                        <Select
                          value={selectedTime}
                          onChange={(option) => setSelectedTime(option)}
                          options={formattedOptions(timeOptions)}
                          placeholder="Select Time Zone"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="input-block mb-3">
                        <label>Date Format</label>
                        <Select
                          value={selectedDate}
                          onChange={(option) => setSelectedDate(option)}
                          options={formattedOptions(dateOptions)}
                          placeholder="Select Date Format"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="input-block mb-3">
                        <label>Time Format</label>
                        <Select
                          value={selectedTimeFormat}
                          onChange={(option) => setSelectedTimeFormat(option)}
                          options={formattedOptions(timeFormatOptions)}
                          placeholder="Select Time Format"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="input-block mb-3">
                        <label>Financial Year </label>
                        <Select
                          value={selectedYear}
                          onChange={(option) => setSelectedYear(option)}
                          options={formattedOptions(yearOptions)}
                          placeholder="Select Financial Year"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="btn-path text-end">
                        <Link
                          to="to"
                          className="btn btn-cancel bg-primary-light me-3"
                        >
                          Cancel
                        </Link>
                        <Link to="to" className="btn btn-primary">
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
export default Preferences;
