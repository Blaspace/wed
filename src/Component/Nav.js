import React, { useRef } from "react";

function Nav() {
  const navi = useRef();

  window.addEventListener("scroll", () => {
    if (window.scrollY < 1) {
      navi.current.style.backgroundColor = "transparent";
    } else {
      navi.current.style.backgroundColor = "#071213";
    }
  });
  return (
    <nav className="nav" ref={navi}>
      <h2>WEB</h2>
      <ul>
        <a href="#first" style={{ color: "#0999a3" }}>
          <li>About</li>
        </a>
        <a href="#second" style={{ color: "#0999a3" }}>
          <li>Our Services</li>
        </a>
        <a href="#fourth" style={{ color: "#0999a3" }}>
          <li>Our Team</li>
        </a>
        <a href="#fifth" style={{ color: "#0999a3" }}>
          <li>Testimonial</li>
        </a>
        <a href="#sixth" style={{ color: "#0999a3" }}>
          <li>Contact Us</li>
        </a>
      </ul>
      <span>&#x2630;</span>
    </nav>
  );
}

export default Nav;
