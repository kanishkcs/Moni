import React from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
// import { Link } from "react-router-dom";
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import SettingsSidebar from '../layouts/SettingsSidebar';
import Select from "react-select";

const SaasSettings = () => {
    const Currency = [
        { value: "United States Dollar ( USD )", label: "United States Dollar ( USD )" },
        { value: "Euro (€)", label: "Euro (€)" },
        { value: "Japanese Yen (¥)", label: "Japanese Yen (¥))" },
    
      ];
  
    return(
        <>
        <Header/>
        <Sidebar/>
        <>
        
  <div className="page-wrapper">
  <div className="content container-fluid">
    {/* /Page Header */}
    <div className="row">
      <div className="col-xl-3 col-md-4">
   <SettingsSidebar />

      </div>
      <div className="col-xl-9 col-md-8">
  <div className="card">
    <div className="card-body w-100">
      <div className="content-page-header">
        <h5>SAAS Settings</h5>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="input-block mb-3">
              <label>Select Default Currency</label>
             
              <Select
                      className="select"
                      options={Currency}
                      placeholder="Select Currency"
                      defaultValue={"United States Dollar ( USD )"}
                    />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="input-block mb-3">
              <label>Days between initial warning and subscription ends</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="input-block mb-3">
              <label>Interval days between warnings</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="input-block mb-3">
              <label>Interval days between warnings</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="input-block mb-3">
              <label>Maximum Free Domain A Subscriber Can Create</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-12">
            <div className="payment-toggle">
              <h5 className="form-title">Email Verification</h5>
              <div className="status-toggle">
                <input
                  id="rating_1"
                  className="check"
                  type="checkbox"
                  defaultChecked=""
                />
                <label htmlFor="rating_1" className="checktoggle checkbox-bg">
                  checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="payment-toggle">
              <h5 className="form-title">
                Auto approve Domain creation request
              </h5>
              <div className="status-toggle">
                <input
                  id="rating_2"
                  className="check"
                  type="checkbox"
                  defaultChecked=""
                />
                <label htmlFor="rating_2" className="checktoggle checkbox-bg">
                  checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer p-0">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-back cancel-btn me-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
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

</>

        </>
    )
}
export default SaasSettings;