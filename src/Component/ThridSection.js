import React from "react";

function ThridSection() {
  return (
    <div className="third-section-con">
      <br />
      <br />
      <div className="third-section">
        <h2 style={{ color: "#2a2c2c" }}>Our Working Process</h2>
        <br />
        <br />
        <div className="flex1">
          <div className="flex2">
            <div id="box2">
              <span>
                <h4>Problem Identification</h4>
              </span>
            </div>
            <div className="flex3">
              <div id="box3">
                <span>
                  <h4>Design and Development</h4>
                </span>
              </div>
              <div id="box4">
                <span>
                  <h4>Implementation and Testing</h4>
                </span>
              </div>
            </div>
          </div>
          <div id="box1">
            <span>
              <h4>Analyzing Solutions</h4>
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ThridSection;
