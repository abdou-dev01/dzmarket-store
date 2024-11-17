import getPaidProducts from "@/actions/getPaidProducts";
import Summary from "./Summary";

const SuccessCart = async () => {
  const paidProducts = await getPaidProducts();
  const isPaid = paidProducts.length > 0;
  return <Summary items={paidProducts} isPaid={isPaid} />;
};

export default SuccessCart;
