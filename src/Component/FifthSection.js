import React from "react";
import img from "../public/images5.jpeg";
import img1 from "../public/images6.jpeg";
import img2 from "../public/images7.jpeg";

function FifthSection() {
  return (
    <div className="fifth-section-con" id="fifth">
      <br />
      <h2 style={{ color: "#0999a3", textAlign: "center" }}>Our Testimonial</h2>
      <br />
      <br />
      <div className="fifth-section">
        <div>
          <section>
            <span>
              <img src={img} alt="profile" />
            </span>
          </section>
          <br />
          <br />
          <article>
            <h3>Favour James</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              debitis! Eum repudiandae sunt veniam explicabo optio eos quas!
              Neque, error. debitis! Eum repudiandae sunt veniam
            </p>
          </article>
        </div>
        <div>
          <section>
            <span>
              <img src={img1} alt="profile" />
            </span>
          </section>
          <br />
          <br />
          <article>
            <h3>Peace James</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              debitis! Eum repudiandae sunt veniam explicabo optio eos quas!
              Neque, error. debitis! Eum repudiandae sunt veniam
            </p>
          </article>
        </div>
        <div>
          <section>
            <span>
              <img src={img2} alt="profile" />
            </span>
          </section>
          <br />
          <br />
          <article>
            <h3>John Joseph</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              debitis! Eum repudiandae sunt veniam explicabo optio eos quas!
              Neque, error. debitis! Eum repudiandae sunt veniam
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
