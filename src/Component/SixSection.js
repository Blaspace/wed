import React from "react";

function SixSection() {
  return (
    <div className="six-section-con">
      <div className="six-section">
        <div>
          <h2>Get In Touch with Us</h2>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            explicabo facere aperiam obcaecati cumque tempore?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ex rerum nemo alias est, culpa aut consequuntur perferendis dolor
            itaque?
          </p>
        </div>
        <form>
          <input type="text" placeholder="full name..." />
          <br />
          <br />
          <input type="text" placeholder="your email..." />
          <br />
          <br />
          <textarea placeholder="message..." />
          <br />
          <br />
          <button className="btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default SixSection;
