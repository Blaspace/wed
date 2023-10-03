import React from "react";
import img from "../public/img5.webp";

function FirstSection() {
  return (
    <div className="first">
      <div>
        <h2>
          We Are A Creative Digital Agency Focused on Growing Branding Online
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi
          quos unde, architecto, laudantium in exercitationem quisquam magni
          perspiciatis fugit eveniet consequuntur rerum ad dolor unde sed
          <br />
          <br />
          maiores ea vel temporibus corporis sint, nulla numquam voluptatibus
          repudiandae reprehenderit accusamus. Corporis expedita asperiores quos
        </p>
        <br />
        <button className="btn2" style={{ color: "#000" }}>
          Contact Us
        </button>
      </div>
      <div className="first-img">
        <img src={img} alt="first image" />
      </div>
    </div>
  );
}

export default FirstSection;
