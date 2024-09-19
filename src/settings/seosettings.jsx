import React from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
// import { Link } from "react-router-dom";
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import SettingsSidebar from '../layouts/SettingsSidebar';
import TextEditor from '../inventory/products/editor';
import { company_add_img } from '../_components/Imagepath';
const SeoSettings = () => {
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
        <h5>SEO Settings</h5>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="input-block mb-3">
              <label>Meta Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
              />
            </div>
          </div>
          <div className="col-md-12 description-box">
            <div className="input-block mb-3">
              <label className="form-control-label">Meta Description</label>
             <TextEditor />
            </div>
          </div>
          <div className="col-md-12 description-box">
            <div className="input-block mb-3">
              <label className="form-control-label">Meta keywords</label>
              {/* <textarea
                className="summernote form-control"
                placeholder="Type your message"
                defaultValue={""}
              /> */}
              <TextEditor />
            </div>
          </div>
          <div className="col-md-12">
            <div className="seo-setting">
              <h6 className="mb-3">Meta Image</h6>
              <div className="profile-picture">
                <div className="upload-profile">
                  <div className="profile-img company-profile-img">
                    <img
                      id="company-img"
                      className="img-fluid me-0"
                      src={company_add_img}
                      alt="profile-img"
                    />
                  </div>
                  <div className="add-profile">
                    <h5>Upload a New Photo</h5>
                    <span>Profile-pic.jpg</span>
                  </div>
                </div>
                <div className="img-upload">
                  <label className="btn btn-upload">
                    Upload <input type="file" />
                  </label>
                  <a className="btn btn-remove">Remove</a>
                </div>
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
export default SeoSettings;