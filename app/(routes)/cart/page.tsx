import Container from "@/components/Container";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

import SuccessCart from "./components/SuccessCart";
import Checkout from "./components/Checkout";

type Params = Promise<{ success?: boolean; canceled?: boolean }>;

const CartPage = async ({ params }: { params: Params }) => {
  const { success } = await params;
  const { canceled } = await params;

  return (
    <Suspense fallback={<Spinner />}>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping card</h1>
            <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12 mt-12">
              {success && <SuccessCart />}
              {canceled && <SuccessCart />}
              {!canceled && !success && <Checkout />}
            </div>
          </div>
        </Container>
      </div>
    </Suspense>
  );
};

export default CartPage;
