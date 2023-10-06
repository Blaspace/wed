import React from "react";
import img from "../public/images1.jpeg";
import img2 from "../public/images2.jpeg";
import img3 from "../public/images3.jpeg";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function FourthSection() {
  return (
    <div className="forth-section-con">
      <div className="forth-section" id="fourth">
        <h2>Meet Our Team</h2>
        <p className="fourth-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          fugiat enim eligendi iure adipisci veritatis soluta doloremque labore!
        </p>
        <br />
        <br />
        <section>
          <div>
            <span>
              <img src={img3} alt="profile" />
            </span>
            <h3>John Bright</h3>
            <p>
              <b>CEO Founder</b>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              culpa sequi sit voluptatum ad veniam nisi libero impedit quis
              totam?
            </p>
            <br />
            <span>
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <BsFacebook />
            </span>
            <br />
          </div>
          <div>
            <span>
              <img src={img2} alt="profile" />
            </span>
            <h3>John Bright</h3>
            <p>
              <b>CEO Founder</b>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              culpa sequi sit voluptatum ad veniam nisi libero impedit quis
              totam?
            </p>
            <br />
            <span>
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <BsFacebook />
            </span>
            <br />
          </div>
          <div>
            <span>
              <img src={img} alt="profile" />
            </span>
            <h3>John Bright</h3>
            <p>
              <b>CEO Founder</b>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              culpa sequi sit voluptatum ad veniam nisi libero impedit quis
              totam?
            </p>
            <br />
            <span>
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <BsFacebook />
            </span>
            <br />
          </div>
        </section>
      </div>
      <br />
      <br />
    </div>
  );
}

export default FourthSection;
