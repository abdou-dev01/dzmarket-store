"use server";

import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboard`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);

  const res = await response.json();

  return res;
};

export default getBillboard;
