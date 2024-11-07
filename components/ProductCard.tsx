"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreviewModal: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white cursor-pointer rounded-3xl border p-3 space-y-4"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          alt="Image"
          fill
          sizes="cover"
          src={product.images[0]?.url}
          className="aspect-square rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5 px-6 ">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreviewModal}
              Icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              Icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
