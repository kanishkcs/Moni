import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
//  import WorldMap from "react-svg-worldmap";

const VectorMaps = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  // const data = [
  //   { country: "cn", value: 1389618778 },
  //   { country: "in", value: 1311559204 },
  //   { country: "us", value: 331883986 },
  //   { country: "id", value: 264935824 },
  //   { country: "pk", value: 210797836 },
  //   { country: "br", value: 210301591 },
  //   { country: "ng", value: 208679114 },
  //   { country: "bd", value: 161062905 },
  //   { country: "ru", value: 141944641 },
  //   { country: "mx", value: 127318112 },
  // ];
  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/*Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="page-title">Vector Maps</h5>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">World Map</h5>
                </div>
                <div className="card-body">
                  <div id="world_map" />
               {/* <WorldMap
                    className="vector-map"
                    color="blue"
                    valueSuffix="people"
                    size="sm"
                    data={data}
                  /> */}
                  <iframe
                      src="https://www.google.com/maps/embed"
                      style={{ border: "0", height: "265px", width: "364px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-map"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /World map */}
    </div>
  );
};
export default VectorMaps;
