"use server";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/category`;

const getCategory = async (categoryId: string): Promise<Category> => {
  const response = await fetch(`${URL}/${categoryId}`, { cache: "no-store" });

  const res = await response.json();

  return res;
};

export default getCategory;
