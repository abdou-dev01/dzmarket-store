"use client";

import Container from "@/components/Container";
import useCart from "@/hooks/useCart";
import CartItem from "./CartItem";
import Summary from "./Summary";

const CartPage = () => {
  const cart = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping card</h1>
          <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12 mt-12">
            {cart.items.length === 0 && (
              <div className="col-span-12">
                <p className="text-neutral-500 text-center">
                  No Items in the cart.
                </p>
              </div>
            )}
            <div className="lg:col-span-7">
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
