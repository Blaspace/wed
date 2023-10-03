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
        <li>About</li>
        <li>Our Services</li>
        <li>Our Team</li>
        <li>Testimonial</li>
        <li>Contact Us</li>
      </ul>
      <span>&#x2630;</span>
    </nav>
  );
}

export default Nav;
