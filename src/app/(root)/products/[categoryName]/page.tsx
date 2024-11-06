import Container from "@/components/ui/container";
import ProductsGrid from "../../../../features/products/components/products-grid";
import { Suspense } from "react";
import ProductCardsSkeleton from "@/features/products/components/product-cards-skeleton";
import FilterSection from "../../../../features/products/components/filter-section";
import MobileFilter from "../../../../features/products/components/mobile-filter";

type Props = {
  params: Promise<{ categoryName: string }>;
};

export default async function ProductsPage(props: Props) {
  const params = await props.params;
  return (
    <Container>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4 lg:gap-12">
        <div className="sticky top-5 max-md:hidden lg:col-span-1 xl:col-span-1">
          <FilterSection />
        </div>
        <div className="md:col-span-3">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCardsSkeleton amount={3} />
              </div>
            }
          >
            <MobileFilter />
            <ProductsGrid categoryName={params.categoryName} />
          </Suspense>
        </div>
      </div>
    </Container>
  );
}
