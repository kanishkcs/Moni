import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { ii02, ii03, ii04, ii05, img } from "../../_components/Imagepath";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const Lightbox = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const galleryItems = [{ original: img }, { original: ii02 }];

  const galleryImages = [{ img: ii03 }, { img: ii04 }, { img: ii05 }];

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Lightbox</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Single Image Lightbox</h5>
                </div>
                {galleryItems.map((item, index) => (
                  <div className="card-body" key={index}>
                    <div className="row">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <a href="#" className="image-popup">
                          <SlideshowLightbox>
                            <img
                              src={item.original}
                              className="img-fluid"
                              alt="image"
                            />
                          </SlideshowLightbox>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* /Lightbox */}
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image with Description</h5>
                </div>
                {galleryImages.map((item, index) => (
                  <div className="card-body" key={index}>
                    <div className="row">
                      <div className="col-md-4 mb-2 mb-md-0">
                        <a
                          href="#"
                          className="image-popup-desc"
                          data-title="Title 01"
                          data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                        >
                          <SlideshowLightbox>
                            <img
                              src={item.img}
                              className="img-fluid"
                              alt="work-thumbnail"
                            />
                          </SlideshowLightbox>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* /Lightbox */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
