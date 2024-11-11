"use server";

import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/color`;

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL);

  const res = await response.json();

  return res;
};

export default getColors;
