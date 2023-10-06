import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishablekey =
  "pk_test_51Nv5SQAGawwzCB9CE1iH1XADNkxevSsDnexfxCcCSlSkZXIgIah0mhdgyvLpwtimJPrI0XyX9JBWXnkKW3HmOHl600eqaSDtlG";
const stripePromise = loadStripe(publishablekey);

const StripeConfig = ({ client, setPay, price }) => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: client?.client_secret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm setPay={setPay} price={price} />
    </Elements>
  );
};

export default StripeConfig;
