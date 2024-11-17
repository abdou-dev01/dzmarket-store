"use client";

import useCart from "@/hooks/useCart";
import Summary from "./Summary";
import CartItem from "./CartItem";

const Checkout = () => {
  const cart = useCart();
  return (
    <>
      {cart.items.length === 0 && (
        <div className="col-span-12">
          <p className="text-neutral-500 text-center">No Items in the cart.</p>
        </div>
      )}
      <div className="lg:col-span-7">
        <ul>
          {cart.items.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
      <Summary items={cart.items} />
    </>
  );
};

export default Checkout;
