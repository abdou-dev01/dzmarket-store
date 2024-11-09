"use server";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;

const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`, { cache: "no-store" });

  const res = await response.json();

  return res;
};

export default getProduct;
