import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/category`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, {
    method: "GET",
  });

  if (!response.ok) {
    console.log("Error fetching categories:", response.status);
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  const res = await response.json();

  return res;
};

export default getCategories;
