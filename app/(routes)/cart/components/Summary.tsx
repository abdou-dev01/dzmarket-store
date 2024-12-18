"use client";

import Button from "@/components/Button";
import Currency from "@/components/Currency";
import { Product } from "@/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface SummaryProps {
  items: Product[];
  isPaid?: boolean;
}

const Summary: React.FC<SummaryProps> = ({ items, isPaid }) => {
  const searchParams = useSearchParams();
  // const removeAllItems = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      // removeAllItems();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = response.data.url;
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-800">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="font-medium text-gray-800 capitalize">order total</p>
          <Currency value={totalPrice} />
        </div>
      </div>
      {isPaid ||
        (items.length > 0 && (
          <Button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full mt-6"
          >
            Chekout
          </Button>
        ))}
    </div>
  );
};

export default Summary;
