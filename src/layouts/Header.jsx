import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  avatar02,
  avatar05,
  avatar07,
  avatar10,
  avatar13,
  de,
  es,
  fr,
  logo,
  logoSmall,
  logoSmallWhite,
  search,
  us,
  us1,
} from "../_components/Imagepath";

const Header = (props) => {
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };

  const onMenuClik = () => {
    // eslint-disable-next-line react/prop-types
    props.onMenuClick();
  };

  useEffect(() => {
    const handleClick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    const maximizeBtn = document.querySelector(".win-maximize");
    maximizeBtn.addEventListener("click", handleClick);

    return () => {
      maximizeBtn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="header header-one">
      <Link
        to="index"
        className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo"
      >
        <img src={logo} className="img-fluid logo2" alt="Logo" />
      </Link>
      <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
        <div className="logo-white">
          <Link to="index">
            <img src={logo} className="img-fluid logo-blue" alt="Logo" />
          </Link>
          <Link to="index">
            <img
              src={logoSmallWhite}
              className="img-fluid logo-small"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="logo-color">
          <Link to="index">
            <img src={logo} className="img-fluid logo-blue" alt="Logo" />
          </Link>
          <Link to="index">
            <img src={logoSmall} className="img-fluid logo-small" alt="Logo" />
          </Link>
        </div>
      </div>
      {/* Sidebar Toggle */}
      <Link to="#" id="toggle_btn" onClick={handlesidebar}>
        <span className="toggle-bars">
          <span className="bar-icons" />
          <span className="bar-icons" />
          <span className="bar-icons" />
          <span className="bar-icons" />
        </span>
      </Link>
      {/* /Sidebar Toggle */}
      {/* Search */}
      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <img src={search} alt="img" />
          </button>
        </form>
      </div>
      {/* /Search */}
      {/* Mobile Menu Toggle */}
      <Link
        to="#"
        className="mobile_btn"
        id="mobile_btn"
        onClick={() => onMenuClik()}
      >
        <i className="fas fa-bars" />
      </Link>
      {/* /Mobile Menu Toggle */}
      {/* Header Menu */}
      <ul className="nav nav-tabs user-menu">
        {/* Flag */}
        <li className="nav-item dropdown has-arrow flag-nav">
          <Link
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            to="#"
            role="button"
          >
            <img src={us1} alt="flag" />
            <span>English</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link to="#" className="dropdown-item">
              <img src={us} alt="flag" />
              <span>English</span>
            </Link>
            <Link to="#" className="dropdown-item">
              <img src={fr} alt="flag" />
              <span>French</span>
            </Link>
            <Link to="#" className="dropdown-item">
              <img src={es} alt="flag" />
              <span>Spanish</span>
            </Link>
            <Link to="#" className="dropdown-item">
              <img src={de} alt="flag" />
              <span>German</span>
            </Link>
          </div>
        </li>
        {/* /Flag */}
        <li className="nav-item dropdown  flag-nav dropdown-heads">
          <Link
            className="nav-link"
            data-bs-toggle="dropdown"
            to="#"
            role="button"
          >
            <i className="fe fe-bell" /> <span className="badge rounded-pill" />
          </Link>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <div className="notification-title">
                Notifications <Link to="/notifications">View all</Link>
              </div>
              <Link to="#" className="clear-noti d-flex align-items-center">
                Mark all as read <i className="fe fe-check-circle" />
              </Link>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="d-flex">
                      <span className="avatar avatar-md active">
                        <img
                          className="avatar-img rounded-circle"
                          alt="avatar-img"
                          src={avatar02}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Lex Murphy</span>{" "}
                          requested access to{" "}
                          <span className="noti-title">
                            UNIX directory tree hierarchy
                          </span>
                        </p>
                        <div className="notification-btn">
                          <span className="btn btn-primary">Accept</span>
                          <span className="btn btn-outline-primary">
                            Reject
                          </span>
                        </div>
                        <p className="noti-time">
                          <span className="notification-time">
                            Today at 9:42 AM
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="d-flex">
                      <span className="avatar avatar-md active">
                        <img
                          className="avatar-img rounded-circle"
                          alt="avatar-img"
                          src={avatar10}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Ray Arnold</span> left 6
                          comments{" "}
                          <span className="noti-title">
                            on Isla Nublar SOC2 compliance report
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">
                            Yesterday at 11:42 PM
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="d-flex">
                      <span className="avatar avatar-md">
                        <img
                          className="avatar-img rounded-circle"
                          alt="avatar-img"
                          src={avatar13}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Dennis Nedry</span>{" "}
                          commented on{" "}
                          <span className="noti-title">
                            {" "}
                            Isla Nublar SOC2 compliance report
                          </span>
                        </p>
                        <blockquote>
                          “Oh, I finished de-bugging the phones, but the systems
                          compiling for eighteen minutes, or twenty. So, some
                          minor systems may go on and off for a while.”
                        </blockquote>
                        <p className="noti-time">
                          <span className="notification-time">
                            Yesterday at 5:42 PM
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="d-flex">
                      <span className="avatar avatar-md">
                        <img
                          className="avatar-img rounded-circle"
                          alt="avatar-img"
                          src={avatar05}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">John Hammond</span>{" "}
                          created{" "}
                          <span className="noti-title">
                            Isla Nublar SOC2 compliance report
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">
                            Last Wednesday at 11:15 AM
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="#">Clear All</Link>
            </div>
          </div>
        </li>
        <li className="nav-item  has-arrow dropdown-heads ">
          <Link to="#" className="win-maximize">
            <i className="fe fe-maximize" />
          </Link>
        </li>
        {/* User Menu */}
        <li className="nav-item dropdown">
          <Link
            to="#"
            className="user-link  nav-link"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img src={avatar07} alt="img" className="profilesidebar" />
              <span className="animate-circle" />
            </span>
            <span className="user-content">
              <span className="user-details">Admin</span>
              <span className="user-name">John Smith</span>
            </span>
          </Link>
          <div className="dropdown-menu menu-drop-user">
            <div className="profilemenu">
              <div className="subscription-menu">
                <ul>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="subscription-logout">
                <ul>
                  <li className="pb-0">
                    <Link className="dropdown-item" to="/login">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        {/* /User Menu */}
      </ul>
      {/* /Header Menu */}
    </div>
  );
};
export default Header;
