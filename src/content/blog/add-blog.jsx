/* eslint-disable */ 
import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import TextEditor from "../../inventory/products/editor";
import { DropIcon } from "../../_components/Imagepath";
import Select from 'react-select';

const AddBlog = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [category, setCategory] = useState([
    { value: 1, label: "Select Category" },
    { value: 2, label: "Category 1" },
    { value: 3, label: "Category 2" },
    { value: 4, label: "Category 3" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };


  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="content-page-header">
              <h5>Add Blog</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-item border-0 pb-0">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>
                            Title <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>Category</label>
                          <Select
                          className="w-100"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          options={category}
                          placeholder="Select Category"
                        />
                  
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-block mb-3">
                          <label>Parent Category</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Parent Category"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="input-block mb-3" id="summernote_container">
                          <label className="form-control-label">
                            Description
                          </label>
                          {/* <textarea
                            className="summernote form-control"
                            placeholder="Type your message"
                            defaultValue={""}
                          /> */}
                          <TextEditor />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="input-block mb-3">
                          <label>Image</label>
                          <div className="input-block mb-3 service-upload mb-0">
                            <span>
                              <img src={DropIcon} alt="upload" />
                            </span>
                            <h6 className="drop-browse align-center">
                              Drop your files here or
                              <span className="text-primary ms-1">browse</span>
                            </h6>
                            <p className="text-muted">Maximum size: 50MB</p>
                            <input type="file" multiple="" id="image_sign" />
                            <div id="frames" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end mt-4">
                    <button
                      type="reset"
                      className="btn btn-primary cancel me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Post
                    </button>
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

export default AddBlog;
