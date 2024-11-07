"use client";

import Currency from "@/components/Currency";
import IconButton from "@/components/IconButton";
import useCart from "@/hooks/useCart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:w-48 sm:h-48">
        <Image src={data.images[0].url} alt="image" fill sizes="cover" />
      </div>
      <div className="relative flex flex-col justify-between flex-1 ms-4 sm:ms-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton onClick={onRemove} Icon={<X size={15} />} />
        </div>
        <div className="relative pe-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pe-0">
          <div className="flex justify-between">
            <p className="text-black text-lg font-semibold">{data.name} </p>
          </div>
          <div className="flex text-sm mt-1">
            <p className="text-gray-500 capitalize">{data.color.name}</p>
            <p className="text-gray-500 capitalize ms-4 border-s border-gray-200 ps-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
