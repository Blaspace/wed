import React, { useEffect, useState } from "react";
import Nav from "./Component/Nav";
import Header from "./Component/Header";
import FirstSection from "./Component/FirstSection";
import SecondSection from "./Component/SecondSection";
import ThridSection from "./Component/ThridSection";
import FourthSection from "./Component/FourthSection";
import FifthSection from "./Component/FifthSection";
import SixSection from "./Component/SixSection";
import Footer from "./Component/Footer";
import Project from "./Component/Project";

function App() {
  const [client, setClient] = useState();
  const uri = "http://localhost:3500";
  useEffect(() => {
    fetch(`${uri}/secret`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currency: "USD" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClient(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Nav />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <Project client={client} />
      <FourthSection />
      <FifthSection />
      <SixSection />
      <Footer />
    </div>
  );
}

export default App;
