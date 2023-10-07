import React from "react";
import { useStripe, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ setPay, price }) => {
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uri = "https://webserver-x2zr.onrender.com";
    //const uri = "http://localhost:3500";

    try {
      fetch(`${uri}/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price,
        }),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          } else if (400) {
            throw "something went wrong";
          } else {
            throw "server error";
          }
        })
        .then((data) => {
          alert("Payment successful");
          setPay(false);
        })
        .catch((err) => alert("something went wrong"));
    } catch (err) {
      console.log(err);
    }
    // }
  };

  return (
    <div className="paycon">
      <form onSubmit={handleSubmit}>
        <h2 onClick={() => setPay(null)}>&times;</h2>
        <PaymentElement />
        <button disabled={!stripe} className="btn">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
