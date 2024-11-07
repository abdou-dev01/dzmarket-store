import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/size`;

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL);

  const res = await response.json();

  return res;
};

export default getSizes;
