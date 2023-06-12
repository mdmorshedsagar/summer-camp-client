import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const loader = useLoaderData();
    const price = parseFloat(loader.price.toFixed(2))

    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutForm loader={loader} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;