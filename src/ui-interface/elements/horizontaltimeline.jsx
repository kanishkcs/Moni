import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const Horizontaltimeline = () => {
  const [menu, setMenu] = useState(false);
  const [sliderValueCustomValue, setSliderValueCustomValue] = useState([0, 5]);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const handleSliderChangeCustomValue = (values) => {
    setSliderValueCustomValue(values);
  };
  const value = 0;

  const VALUES = [
    "2022-01-16",
    "2022-02-28",
    "2022-03-20",
    "2022-05-20",
    "2022-07-09",
    "2021-08-30",
    "2022-11-01",
    "2022-12-21",
  ];

  const description = [
    "Title01:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus. ",
    "Title02:Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney illege in Virginia, looked up one of the more obscure Latin words",
    "Title03: Dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus.",
    "Title04: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney illege in Virginia, looked up one of the more obscure Latin words",
    "Title05: Dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus.",
    "Title01:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus. ",
  ];

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />

      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Horizontal Timeline</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="cd-horizontal-timeline loaded">
                    <div className="timeline">
                      <div className="events-wrapper">
                        <Slider
                          min={0}
                          max={VALUES.length - 1}
                          step={1}
                          value={sliderValueCustomValue}
                          onChange={handleSliderChangeCustomValue}
                          range
                          marks={{
                            0: "01 Jan",
                            1: "01 Feb",
                            2: "30 March",
                            3: "01 Apr",
                            4: "30 May",
                            5: "26 June",
                          }}
                          dots
                        />
                      </div>

                      <div className="events-content">
                        <div
                          className="selected"
                          style={{
                            maxWidth: 400,
                            wordSpacing: 5,
                            fontSize: 20,
                          }}
                        >
                          {description[value]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horizontaltimeline;
