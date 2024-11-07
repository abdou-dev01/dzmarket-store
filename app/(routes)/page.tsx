import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductList from "@/components/ProductList";

const Page = async () => {
  const products = await getProducts({});
  const billboard = await getBillboard("cc5183ee-ec5f-4f62-8d36-a86a5efcef9f");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
