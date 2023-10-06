import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsPersonCheck, BsPersonWorkspace } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

function Header() {
  return (
    <header className="header">
      <h1>Website Development, Website Design, Website Deployment</h1>
      <br />
      <span>
        <a href="#sixth" style={{ color: "#fafafa" }}>
          <button className="btn">Contact Us</button>
        </a>
        <a href="#first" style={{ color: "#fafafa" }}>
          <button className="btn2">About Us</button>
        </a>
      </span>
      <div>
        <small>
          <LiaShippingFastSolid size={80} />
          <p>Fast</p>
        </small>
        <small>
          <BsPersonCheck size={80} />
          <p>Reliable</p>
        </small>
        <small>
          <BsPersonWorkspace size={80} />
          <p>Skilled</p>
        </small>
        <small>
          <RiCustomerService2Line size={80} />
          <p>Customer Support</p>
        </small>
      </div>
    </header>
  );
}

export default Header;
