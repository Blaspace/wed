import React, { useState } from "react";
import project1 from "../public/project1.jpeg";
import project2 from "../public/project2.jpeg";
import project3 from "../public/project3.jpg";
import StripeConfig from "./StripeConfig";

function Project({ client }) {
  const [pay, setPay] = useState(false);
  const [price, setPrice] = useState(null);
  const handleBuy = (e) => {
    const p = Number(e.slice(1) + "000");
    setPrice(p);
    setPay(true);
  };
  const project = [
    {
      image: project1,
      name: "Protfolio Website",
      price: "$45",
      id: 1,
    },
    {
      image: project2,
      name: "Web Development Website",
      price: "$50",
      id: 2,
    },
    {
      image: project3,
      name: "E-commerce Website",
      price: "$80",
      id: 3,
    },
  ];
  return (
    <div className="project-con">
      <h2>Some of Our Work for Sale</h2>
      <br />
      <br />
      <div className="project">
        {project.map((value) => {
          return (
            <div>
              <span>
                <img src={value.image} key={value.id} />
              </span>
              <br />
              <section>
                <p>
                  <b>{value.name}</b>
                </p>
                <h3>{value.price}</h3>
                <br />
                <button className="btn" onClick={() => handleBuy(value.price)}>
                  Buy
                </button>
              </section>
            </div>
          );
        })}
      </div>
      {pay && <StripeConfig client={client} setPay={setPay} price={price} />}
    </div>
  );
}

export default Project;
