import React, { useState } from "react";
import {
  boxed,
  close,
  compact,
  dark,
  detached,
  horizontal,
  sidebar_icon2,
  small_hover,
  two_col,
  vertical,
} from "../_components/Imagepath";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const StickySidebar = () => {
  const [layoutStyle, setLayoutStyle] = useState(
    localStorage.getItem("layout")
  );

  const [layoutColor, setlayoutColor] = useState(
    localStorage.getItem("colorschema")
  );

  const [layoutWidths, setLayoutwidths] = useState(
    localStorage.getItem("layoutpos")
  );

  const [layoutSize, setLayoutSize] = useState(
    localStorage.getItem("layoutSized")
  );

  const [layoutView, setLayoutView] = useState(
    localStorage.getItem("layoutStyling")
  );

  const [layoutTopbar, setLayoutTopbar] = useState(
    localStorage.getItem("topbartheme")
  );

  const [layoutSidebar, setLayoutSidebar] = useState(
    localStorage.getItem("layoutSidebarStyle")
  );

  const Vertical = () => {
    localStorage.setItem("layout", "vertical");
    const VeriticalLayout = document.querySelector("html");
    VeriticalLayout.setAttribute("data-layout", "vertical");
  };

  const Horizon = () => {
    localStorage.setItem("layout", "horizontal");
    const Themes = document.querySelector("html");
    Themes.setAttribute("data-layout", "horizontal");
  };

  const BlueThemes = () => {
    localStorage.setItem("colorschema", "blue");
    const BluesThemes = document.querySelector("html");
    BluesThemes.setAttribute("data-layout-mode", "blue", "data-topbar", "blue");
    BluesThemes.setAttribute("data-topbar", "blue");
  };

  const DarkThemes = () => {
    localStorage.setItem("colorschema", "dark");
    const DarksThemes = document.querySelector("html");
    DarksThemes.setAttribute("data-layout-mode", "dark");
    DarksThemes.setAttribute("data-topbar", "dark");
  };
  const LightThemes = () => {
    localStorage.setItem("colorschema", "light");
    const LightsThemes = document.querySelector("html");
    LightsThemes.setAttribute("data-layout-mode", "light");
    LightsThemes.setAttribute("data-topbar", "light");
  };

  const Fluid = () => {
    localStorage.setItem("layoutpos", "fluid");
    const FluidThemes = document.querySelector("html");
    FluidThemes.setAttribute("data-layout-width", "fluid");
    FluidThemes.setAttribute("data-sidebar-size", "lg");
  };
  const BoxThemes = () => {
    localStorage.setItem("layoutpos", "boxed");
    const BoxsThemes = document.querySelector("html");
    BoxsThemes.setAttribute("data-layout-width", "boxed");
    BoxsThemes.setAttribute("data-sidebar-size", "sm-hover");
  };
  const Default = () => {
    localStorage.setItem("layoutSized", "lg");
    const DefaultThemes = document.querySelector("html");
    DefaultThemes.setAttribute("data-sidebar-size", "lg");
  };
  const Compact = () => {
    localStorage.setItem("layoutSized", "md");
    const CompactThemes = document.querySelector("html");
    CompactThemes.setAttribute("data-sidebar-size", "md");
  };

  const DefaultStyle = () => {
    localStorage.setItem("layoutStyling", "default");
    const DefaultStylesThemes = document.querySelector("html");
    DefaultStylesThemes.setAttribute("data-layout-style", "default");
  };
  const DetachedStyle = () => {
    localStorage.setItem("layoutStyling", "detached");
    const DetachedStylesThemes = document.querySelector("html");
    DetachedStylesThemes.setAttribute("data-layout-style", "detached");
  };

  const LightBarThemes = () => {
    localStorage.setItem("topbartheme", "light");
    const LightBarsThemes = document.querySelector("html");
    LightBarsThemes.setAttribute("data-topbar", "light");
    LightBarsThemes.setAttribute("data-sidebar", "dark");
  };
  const DarkBarThemes = () => {
    localStorage.setItem("topbartheme", "dark");
    const DarkBarsThemes = document.querySelector("html");
    DarkBarsThemes.setAttribute("data-topbar", "dark");
    DarkBarsThemes.setAttribute("data-sidebar", "light");
  };

  const LightStyle = () => {
    localStorage.setItem("layoutSidebarStyle", "light");
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-sidebar", "light");
    }
  };
  const DarkStyle = () => {
    localStorage.setItem("layoutSidebarStyle", "dark");
    const DarkStylesThemes = document.querySelector("html");
    DarkStylesThemes.setAttribute("data-sidebar", "dark");
  };

  const resetFunctions = () => {
    localStorage.setItem("colorschema", "light");
    localStorage.setItem("layout", "vertical");
    const VeriticalLayout = document.querySelector("html");
    VeriticalLayout.setAttribute("data-layout", "vertical");

    const FluidThemes = document.querySelector("html");
    FluidThemes.setAttribute("data-layout-width", "fluid");
    FluidThemes.setAttribute("data-sidebar-size", "lg");

    localStorage.setItem("topbartheme", "light");
    const LightBarsThemes = document.querySelector("html");
    LightBarsThemes.setAttribute("data-topbar", "light");
    LightBarsThemes.setAttribute("data-sidebar", "light");

    localStorage.setItem("colorschema", "light");
    const LightsThemes = document.querySelector("html");
    LightsThemes.setAttribute("data-layout-mode", "light");
    LightsThemes.setAttribute("data-topbar", "light");

    localStorage.setItem("layoutStyling", "default");
    const DefaultStylesThemes = document.querySelector("html");
    DefaultStylesThemes.setAttribute("data-layout-style", "default");

    setLayoutStyle("vertical");
    setlayoutColor("light");
    setLayoutwidths("fluid");
    setLayoutTopbar("light");
    setLayoutSize("lg");
    setLayoutView("default");
    localStorage.setItem("colorschema", "light");
    localStorage.setItem("layout", "vertical");
    localStorage.setItem("layoutwidth", "fixed");
    localStorage.setItem("layoutpos", "fluid");
    localStorage.setItem("topbartheme", "light");
    localStorage.setItem("layoutSized", "lg");
    localStorage.setItem("layoutStyling", "default");
    localStorage.setItem("layoutSidebarStyle", "light");
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="settings-icon">
        <span
          data-bs-toggle="offcanvas"
          data-bs-target="#theme-settings-offcanvas"
          aria-controls="theme-settings-offcanvas"
        >
          <img src={sidebar_icon2} className="feather-five" alt="layout" />
        </span>
      </div>
      <div
        className="offcanvas offcanvas-end border-0 "
        tabIndex={-1}
        id="theme-settings-offcanvas"
      >
        <div className="sidebar-headerset">
          <div className="sidebar-headersets">
            <h2>Customizer</h2>
            <h3>Customize your overview Page layout</h3>
          </div>
          <div className="sidebar-headerclose">
            <a data-bs-dismiss="offcanvas" aria-label="Close">
              <img src={close} alt="img" />
            </a>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <div data-simplebar className="h-100">
            <div className="settings-mains">
              <div className="layout-head">
                <h5>Layout</h5>
                <h6>Choose your layout</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      id="customizer-layout01"
                      name="data-layout"
                      type="radio"
                      defaultValue="vertical"
                      className="form-check-input"
                      checked={layoutStyle === "vertical" ? true : false}
                      onChange={() => setLayoutStyle("vertical")}
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="customizer-layout01"
                    >
                      <img src={vertical} alt="img" onClick={Vertical} />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Vertical</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      id="customizer-layout02"
                      name="data-layout"
                      type="radio"
                      defaultValue="horizontal"
                      className="form-check-input"
                      checked={layoutStyle === "horizontal" ? true : false}
                      onChange={() => setLayoutStyle("horizontal")}
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="customizer-layout02"
                    >
                      <img src={horizontal} alt="img" onClick={Horizon} />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                </div>
                <div className="col-4 d-none">
                  <div className="form-check card-radio p-0">
                    <input
                      id="customizer-layout03"
                      name="data-layout"
                      type="radio"
                      defaultValue="twocolumn"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="customizer-layout03"
                    >
                      <img src={two_col} alt="img" />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Two Column</h5>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between pt-3">
                <div className="layout-head mb-0">
                  <h5>RTL Mode</h5>
                  <h6>Change Language Direction.</h6>
                </div>
                <div className="active-switch">
                  <div className="status-toggle">
                    <input id="rtl" className="check" type="checkbox" />
                    <label htmlFor="rtl" className="checktoggle checkbox-bg">
                      checkbox
                    </label>
                  </div>
                </div>
              </div>
              <div className="layout-head pt-3">
                <h5>Color Scheme</h5>
                <h6>Choose Light or Dark Scheme.</h6>
              </div>
              <div className="colorscheme-cardradio">
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio blue  p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-blue"
                        defaultValue="blue"
                        checked={layoutColor === "blue" ? true : false}
                        onChange={() => setlayoutColor("blue")}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="layout-mode-blue"
                      >
                        <img src={vertical} alt="img" onClick={BlueThemes} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Blue</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-light"
                        defaultValue="light"
                        checked={layoutColor === "light" ? true : false}
                        onChange={() => setlayoutColor("light")}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="layout-mode-light"
                      >
                        <img src={vertical} alt="img" onClick={LightThemes} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Light</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio dark  p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-dark"
                        defaultValue="dark"
                        checked={layoutColor === "dark" ? true : false}
                        onChange={() => setlayoutColor("dark")}
                      />
                      <label
                        className="form-check-label avatar-md w-100 "
                        htmlFor="layout-mode-dark"
                      >
                        <img src={vertical} alt="img" onClick={DarkThemes} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Dark</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-orange"
                        defaultValue="orange"
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-orange"
                      >
                        <img src={vertical} alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Orange</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check card-radio maroon p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-maroon"
                        defaultValue="maroon"
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-maroon"
                      >
                        <img src={vertical} alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Brink Pink</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check card-radio purple p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-mode"
                        id="layout-mode-purple"
                        defaultValue="purple"
                      />
                      <label
                        className="form-check-label  avatar-md w-100 "
                        htmlFor="layout-mode-purple"
                      >
                        <img src={vertical} alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2 mb-2">Green</h5>
                  </div>
                </div>
              </div>
              <div id="layout-width">
                <div className="layout-head pt-3">
                  <h5>Layout Width</h5>
                  <h6>Choose Fluid or Boxed layout.</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-width"
                        id="layout-width-fluid"
                        defaultValue="fluid"
                        checked={layoutWidths === "fluid" ? true : false}
                        onChange={() => setLayoutwidths("fluid")}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="layout-width-fluid"
                      >
                        <img src={vertical} alt="img" onClick={Fluid} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Fluid</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-width"
                        id="layout-width-boxed"
                        defaultValue="boxed"
                        checked={layoutWidths === "boxed" ? true : false}
                        onChange={() => setLayoutwidths("boxed")}
                      />
                      <label
                        className="form-check-label avatar-md w-100 px-2"
                        htmlFor="layout-width-boxed"
                      >
                        <img src={boxed} alt="img" onClick={BoxThemes} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Boxed</h5>
                  </div>
                </div>
              </div>
              <div id="layout-position" className="d-none">
                <div className="layout-head pt-3">
                  <h5>Layout Position</h5>
                  <h6>Choose Fixed or Scrollable Layout Position.</h6>
                </div>
                <div
                  className="btn-group bor-rad-50 overflow-hidden radio"
                  role="group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="data-layout-position"
                    id="layout-position-fixed"
                    defaultValue="fixed"
                  />
                  <label
                    className="btn btn-light w-sm"
                    htmlFor="layout-position-fixed"
                  >
                    Fixed
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="data-layout-position"
                    id="layout-position-scrollable"
                    defaultValue="scrollable"
                  />
                  <label
                    className="btn btn-light w-sm ms-0"
                    htmlFor="layout-position-scrollable"
                  >
                    Scrollable
                  </label>
                </div>
              </div>
              <div className="layout-head pt-3">
                <h5>Topbar Color</h5>
                <h6>Choose Light or Dark Topbar Color.</h6>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-check card-radio  p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-topbar"
                      id="topbar-color-light"
                      defaultValue="light"
                      checked={layoutTopbar === "light" ? true : false}
                      onChange={() => setLayoutTopbar("light")}
                    />
                    <label
                      className="form-check-label avatar-md w-100"
                      htmlFor="topbar-color-light"
                    >
                      <img src={vertical} alt="img" onClick={LightBarThemes} />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Light</h5>
                </div>
                <div className="col-4">
                  <div className="form-check card-radio p-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-topbar"
                      id="topbar-color-dark"
                      defaultValue="dark"
                      checked={layoutTopbar === "dark" ? true : false}
                      onChange={() => setLayoutTopbar("dark")}
                    />
                    <label
                      className="form-check-label  avatar-md w-100"
                      htmlFor="topbar-color-dark"
                    >
                      <img src={dark} alt="img" onClick={DarkBarThemes} />
                    </label>
                  </div>
                  <h5 className="fs-13 text-center mt-2">Dark</h5>
                </div>
              </div>
              <div id="sidebar-size">
                <div className="layout-head pt-3">
                  <h5>Sidebar Size</h5>
                  <h6>Choose a size of Sidebar.</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check sidebar-setting card-radio  p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar-size"
                        id="sidebar-size-default"
                        defaultValue="lg"
                        checked={layoutSize === "lg" ? true : false}
                        onChange={() => setLayoutSize("lg")}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-size-default"
                      >
                        <img src={vertical} alt="img" onClick={Default} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Default</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check sidebar-setting card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar-size"
                        id="sidebar-size-compact"
                        defaultValue="md"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-size-compact"
                      >
                        <img src={compact} alt="img" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Compact</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check sidebar-setting card-radio p-0 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar-size"
                        id="sidebar-size-small-hover"
                        defaultValue="sm-hover"
                        checked={layoutSize === "md" ? true : false}
                        onChange={() => setLayoutSize("md")}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-size-small-hover"
                      >
                        <img src={small_hover} alt="img" onClick={Compact} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Small Sidebar</h5>
                  </div>
                </div>
              </div>
              <div id="sidebar-view">
                <div className="layout-head pt-3">
                  <h5>Sidebar View</h5>
                  <h6>Choose Default or Detached Sidebar view.</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check sidebar-setting card-radio  p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-style"
                        id="sidebar-view-default"
                        defaultValue="default"
                        checked={layoutView === "default" ? true : false}
                        onChange={() => setLayoutView("default")}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-view-default"
                      >
                        <img src={compact} alt="img" onClick={DefaultStyle} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Default</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check sidebar-setting card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-layout-style"
                        id="sidebar-view-detached"
                        defaultValue="detached"
                        checked={layoutView === "detached" ? true : false}
                        onChange={() => setLayoutView("detached")}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-view-detached"
                      >
                        <img src={detached} alt="img" onClick={DetachedStyle} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Detached</h5>
                  </div>
                </div>
              </div>
              <div id="sidebar-color">
                <div className="layout-head pt-3">
                  <h5>Sidebar Color</h5>
                  <h6>Choose a color of Sidebar.</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div
                      className="form-check sidebar-setting card-radio p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBgGradient.show"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar"
                        id="sidebar-color-light"
                        defaultValue="light"
                        checked={layoutSidebar === "light" ? true : false}
                        onChange={() => setLayoutSidebar("light")}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-color-light"
                      >
                        <span
                          className="bg-light bg-sidebarcolor"
                          onClick={LightStyle}
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Light</h5>
                  </div>
                  <div className="col-4">
                    <div
                      className="form-check sidebar-setting card-radio p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBgGradient.show"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar"
                        id="sidebar-color-dark"
                        defaultValue="dark"
                        checked={layoutSidebar === "dark" ? true : false}
                        onChange={() => setLayoutSidebar("dark")}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="sidebar-color-dark"
                      >
                        <span
                          className="bg-darks bg-sidebarcolor"
                          onClick={DarkStyle}
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Dark</h5>
                  </div>
                  <div className="col-4 d-none">
                    <div className="form-check sidebar-setting card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-sidebar"
                        id="sidebar-color-gradient"
                        defaultValue="gradient"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="sidebar-color-gradient"
                      >
                        <span className="bg-gradients bg-sidebarcolor" />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Gradient</h5>
                  </div>
                  <div className="col-4 d-none">
                    <button
                      className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseBgGradient"
                      aria-expanded="false"
                    >
                      <span className="d-flex gap-1 h-100">
                        <span className="flex-shrink-0">
                          <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                            <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                            <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                          </span>
                        </span>
                        <span className="flex-grow-1">
                          <span className="d-flex h-100 flex-column">
                            <span className="bg-light d-block p-1" />
                            <span className="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </button>
                    <h5 className="fs-13 text-center mt-2">Gradient</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer border-top p-3 text-center">
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-light w-100 bor-rad-50"
                id="reset-layout"
                onClick={resetFunctions}
              >
                Reset
              </button>
            </div>
            <div className="col-6">
              <Link
                to="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
                target="_blank"
                className="btn btn-primary w-100 bor-rad-50"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;
