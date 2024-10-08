import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
const Sweetalerts = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Sweetalerts</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              {/* Basic Examples */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Examples</h4>
                </div>
                <div className="card-body card-buttons">
                  <p>
                    SweetAlert automatically centers itself on the page and
                    looks great no matter if you are using a desktop computer,
                    mobile or tablet. It is even highly customizable, as you can
                    see below!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    id="basic-alert"
                  >
                    Basic
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    id="with-title"
                  >
                    With Title
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    id="footer-alert"
                  >
                    With Footer
                  </button>
                </div>
              </div>
              {/* /Basic Examples */}
              {/* Position */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Position</h4>
                </div>
                <div className="card-body card-buttons">
                  <p>
                    You can specify position of your alert with{" "}
                    <code>
                      position : {"{"} top-start | top-end | bottom-start |
                      bottom-end {"}"}
                    </code>{" "}
                    in js.
                  </p>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    id="position-top-start"
                  >
                    Top Start
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    id="position-top-end"
                  >
                    Top End
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    id="position-bottom-start"
                  >
                    Bottom Starts
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1"
                    id="position-bottom-end"
                  >
                    Bottom End
                  </button>
                </div>
              </div>
              {/* \Position */}
              {/* Types */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Types</h4>
                </div>
                <div className="card-body card-buttons">
                  <p>
                    The type of the modal. SweetAlert comes with 4 built-in
                    types which will show a corresponding icon animation:
                    &quot;warning&quot;, &quot;error&quot;, &quot;success&quot; and &quot;info&quot;. You can also set
                    it as &quot;input&quot; to get a prompt modal. It can either be put in
                    the object under the key &quot;icon&quot; or passed as the third
                    parameter of the function.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    id="type-success"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info mr-1 mb-1 me-1"
                    id="type-info"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning mr-1 mb-1 me-1"
                    id="type-warning"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger mr-1 mb-1"
                    id="type-error"
                  >
                    Error
                  </button>
                </div>
              </div>
              {/* \Types */}
              {/* Options */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Options</h4>
                </div>
                <div className="card-body card-buttons">
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    id="auto-close"
                  >
                    Auto Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    id="outside-click"
                  >
                    Click Outside
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1"
                    id="prompt-function"
                  >
                    Question
                  </button>
                </div>
              </div>
              {/* \Options */}
              {/* Confirm Options */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Confirm Options</h4>
                </div>
                <div className="card-body card-buttons">
                  <h5>Confirm Button Text</h5>
                  <p>
                    Use <code>confirmButtonText: &quot;Your text here!&quot;</code> option
                    to change the text of the &quot;Confirm&quot; button.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary mb-3"
                    id="confirm-text"
                  >
                    Confirm Text
                  </button>
                  <h5>Confirm Button Color</h5>
                  <p>
                    Use{" "}
                    <code>
                      confirmButtonClass: &quot;btn btn-{"{"}colorName{"}"}&quot;
                    </code>{" "}
                    option to change the color of the &quot;Confirm&quot; button.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary mb-0"
                    id="confirm-color"
                  >
                    Confirm Button Color
                  </button>
                </div>
              </div>
              {/* \Confirm Options */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sweetalerts;
