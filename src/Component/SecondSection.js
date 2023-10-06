import React from "react";
import { VscDebug, VscServerProcess } from "react-icons/vsc";
import { AiOutlineFileSearch, AiOutlineCloudServer } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";

function SecondSection() {
  return (
    <div className="second-section-con">
      <div className="second-section" id="second">
        <br />
        <br />
        <h2>Our Services</h2>
        <br />
        <br />
        <div className="second-section-breakpoint">
          <div>
            <VscDebug size={50} />
            <h4>Debugging</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptate deserunt sint dolor deleniti amet! Facere corrupti quo
              possimus maxime!
            </p>
          </div>
          <div>
            <AiOutlineFileSearch size={50} />
            <h4>SEO (search engine optimisation)</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptate deserunt sint dolor deleniti amet! Facere corrupti quo
              possimus maxime!
            </p>
          </div>
          <div>
            <CgWebsite size={50} />
            <h4>Front-end Website</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptate deserunt sint dolor deleniti amet! Facere corrupti quo
              possimus maxime!
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="second-section-breakpoint">
          <div>
            <VscServerProcess size={50} />
            <h4>Full-stack Application</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptate deserunt sint dolor deleniti amet! Facere corrupti quo
              possimus maxime!
            </p>
          </div>
          <div>
            <AiOutlineCloudServer size={50} />
            <h4>Backend Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptate deserunt sint dolor deleniti amet! Facere corrupti quo
              possimus maxime!
            </p>
          </div>
          <div>
            <MdManageAccounts size={50} />
            <h4>Web Management</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptate deserunt sint dolor deleniti amet! Facere corrupti quo
              possimus maxime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
