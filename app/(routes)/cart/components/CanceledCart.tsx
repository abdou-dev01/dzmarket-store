import getPaidProducts from "@/actions/getPaidProducts";
import Summary from "./Summary";

const CanceledCart = async () => {
  const paidProducts = await getPaidProducts();
  return <Summary items={paidProducts} />;
};

export default CanceledCart;
