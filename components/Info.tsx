"use client";

import { Product } from "@/types";
import Currency from "./Currency";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/useCart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size : </h3>
          <p>{data.size.name}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <h3 className="font-semibold text-black">Color : </h3>
          <p>{data.color.name}</p>
          <div
            className="rounded-full border border-gray-600 w-6 h-6"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 felx items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add to cart <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
