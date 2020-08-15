import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

toast.configure();

function Pay() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car",
  });

  async function handleToken(token, addresses) {
    console.log(token, addresses);
    const response = await axios.post("http://localhost:5000/pay", {
      token,
      product,
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <div className="product">
        {/* <h1>{product.name}</h1> */}
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51HFEs6Ey67T81IS2KNo9i3yPO4XXg3nFjEvijNPbhFB5MYClrAfsDbhYYpW6KirbjRovN8obIcQH1RRYtbKzuvHz00Wr6fsRey"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
export default Pay;
