import React, { useState } from "react";
import { Link } from "react-router-dom";
import { img2 } from "../../_components/Imagepath";
import FeatherIcon from "feather-icons-react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";

const Profile = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        {/** Page Wrapper  */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row justify-content-lg-center">
              <div className="col-lg-10">
                {/* Page Header */}
                <div className="page-header">
                  <div className="content-page-header">
                    <h5>Profile</h5>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="profile-cover">
                  <div className="profile-cover-wrap">
                    <img
                      className="profile-cover-img"
                      src={img2}
                      alt="Profile Cover"
                      id="cover-image"
                    />
                    {/* Custom File Cover */}
                    <div className="cover-content">
                      <div className="custom-file-btn">
                        <input
                          type="file"
                          className="custom-file-btn-input"
                          id="cover_upload"
                        />
                        <label
                          className="custom-file-btn-label btn btn-sm btn-white"
                          htmlFor="cover_upload"
                        >
                          <i className="fas fa-camera" />
                          <span className="d-none d-sm-inline-block ms-1">
                            Update Cover
                          </span>
                        </label>
                      </div>
                    </div>
                    {/* /Custom File Cover */}
                  </div>
                </div>
                <div className="text-center mb-5">
                  <label
                    className="avatar avatar-xxl profile-cover-avatar"
                    htmlFor="avatar_upload"
                  >
                    <img
                      className="avatar-img"
                      src={img2}
                      alt="Profile Image"
                      id="blah"
                    />
                    <input type="file" id="avatar_upload" />
                    <span className="avatar-edit">
                      {/* <i className="fe fe-edit avatar-uploader-icon shadow-soft" /> */}
                      <FeatherIcon
                        icon="edit"
                        className=" avatar-uploader-icon shadow-soft"
                      />
                    </span>
                  </label>
                  <h2>
                    Charles Hafner{" "}
                    <i
                      className="fas fa-certificate text-primary small"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Verified"
                    />
                  </h2>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="far fa-building" />{" "}
                      <span>Hafner Pvt Ltd. </span>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-map-marker-alt" /> West Virginia, US
                    </li>
                    <li className="list-inline-item">
                      <i className="far fa-calendar-alt" />{" "}
                      <span>Joined November 2017</span>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card-body">
                      <h5>Complete your profile</h5>
                      {/* Progress */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="progress progress-md flex-grow-1">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ms-4">30%</span>
                      </div>
                      {/* /Progress */}
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title d-flex justify-content-between">
                          <span>Profile</span>
                          <Link className="btn btn-sm btn-white" to="/settings">
                            Edit
                          </Link>
                        </h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <li className="py-0">
                            <h6>About</h6>
                          </li>
                          <li>Charles Hafner</li>
                          <li>Hafner Pvt Ltd.</li>
                          <li className="pt-2 pb-0">
                            <h6>Contacts</h6>
                          </li>
                          <li>charleshafner@example.com</li>
                          <li>+1 (304) 499-13-66</li>
                          <li className="pt-2 pb-0">
                            <h6>Address</h6>
                          </li>
                          <li>
                            4663 Agriculture Lane,
                            <br />
                            Miami,
                            <br />
                            Florida - 33165,
                            <br />
                            United States.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Activity</h5>
                      </div>
                      <div className="card-body card-body-height">
                        <ul className="activity-feed">
                          <li className="feed-item">
                            <div className="feed-date">Nov 16</div>
                            <span className="feed-text">
                              <Link to="/profile">Brian Johnson</Link> has paid
                              the invoice{" "}
                              <Link to="/invoice-details">&quot;#DF65485&quot;</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Nov 7</div>
                            <span className="feed-text">
                              <Link to="/profile">Marie Canales</Link> has
                              accepted your estimate{" "}
                              <Link to="/view-estimate">#GTR458789</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Oct 24</div>
                            <span className="feed-text">
                              New expenses added{" "}
                              <Link to="/expenses">#TR018756</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Oct 24</div>
                            <span className="feed-text">
                              New expenses added{" "}
                              <Link to="/expenses">#TR018756</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Oct 24</div>
                            <span className="feed-text">
                              New expenses added{" "}
                              <Link to="/expenses">#TR018756</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Oct 24</div>
                            <span className="feed-text">
                              New expenses added{" "}
                              <Link to="/expenses">#TR018756</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Oct 24</div>
                            <span className="feed-text">
                              New expenses added{" "}
                              <Link to="/expenses">#TR018756</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Jan 27</div>
                            <span className="feed-text">
                              <Link to="/profile">Robert Martin</Link> gave a
                              review for <Link to="#">Dell Laptop</Link>
                            </span>
                          </li>
                          <li className="feed-item">
                            <div className="feed-date">Jan 14</div>
                            <span className="feed-text">
                              New customer registered{" "}
                              <Link to="/profile">&quot;Tori Carter&quot;</Link>
                            </span>
                          </li>
                        </ul>
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
export default Profile;
