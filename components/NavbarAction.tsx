"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./Button";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarAction = () => {
  const cart = useCart();
  const router = useRouter();
  return (
    <div className="ms-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ms-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarAction;
