"use server";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/category`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, { cache: "no-store" });

  const res = await response.json();

  return res;
};

export default getCategories;
