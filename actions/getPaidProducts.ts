"use server";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product/paidProducts`;

const getPaidProducts = async (): Promise<Product[]> => {
  const response = await fetch(URL);

  const res = await response.json();

  return res;
};

export default getPaidProducts;
