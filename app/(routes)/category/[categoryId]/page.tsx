import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import Filter from "@/components/Filter";
import MobileFilter from "@/components/MobileFilter";
import ProductCard from "@/components/ProductCard";
import { Category, Color, Product, Size } from "@/types";

// interface CategoryPageProps {
//   params: Promise<{ categoryId: string }>;
//   searchParams: Promise<{
//     colorId?: string;
//     sizeId?: string;
//   }>;
// }

const CategoryPage = async ({}) => {
  // const products = await getProducts({
  //   categoryId: categoryId,
  //   colorId: colorId,
  //   sizeId: sizeId,
  // });
  // const category = await getCategory(categoryId);
  // const sizes = await getSizes();
  // const colors = await getColors();
  const products: Product[] = [];
  const sizes: Size[] = [];
  const colors: Color[] = [];
  const category: Category[] = [];
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category[0]?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <EmptyState />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
