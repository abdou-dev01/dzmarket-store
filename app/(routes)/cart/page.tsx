"use client";

import Container from "@/components/Container";
import useCart from "@/hooks/useCart";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";
import { Suspense, useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Spinner />;
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

export default CartPage;
