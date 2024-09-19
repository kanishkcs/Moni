import React from 'react'
import { twofactor } from '../_components/Imagepath';
import SettingsSidebar from '../layouts/SettingsSidebar';
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';

const TwoFactor = () => {
  return (
    <div>
      <>
      <Header />
        <Sidebar />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="col-xl-3 col-md-4">
        <SettingsSidebar />
        </div>
        <div className="col-xl-9 col-md-8">
          <div className="card">
            <div className="card-body two-factor w-100">
              <div className="content-page-header factor">
                <h5 className="setting-menu">
                  Two-Factor Authentication Options
                </h5>
              </div>
              <div className="row">
                <div className="col-sm-9">
                  <div className="two-factor content p-0">
                    <h5>Text Message</h5>
                    <p>Use your mobile phone to receive security PIN.</p>
                  </div>
                </div>
                <div className="col-sm-3 text-end">
                  <div className="factor-checkbox">
                    <div className="status-toggle">
                      <input
                        id="rating_1"
                        className="check"
                        type="checkbox"
                        defaultChecked=""
                      />
                      <label
                        htmlFor="rating_1"
                        className="checktoggle checkbox-bg factor"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="two-factor icon">
                <h5>
                  <img src={twofactor} alt="Icon" />{" "}
                  Enabled, AUG 16, 2023
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </div>
  )
}

export default TwoFactor
