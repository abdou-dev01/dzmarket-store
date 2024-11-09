"use server";

import { Product } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product/`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url, { cache: "no-store" });

  const res = await response.json();

  return res;
};

export default getProducts;
