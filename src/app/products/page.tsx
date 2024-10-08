import type { Metadata } from "next";
import ProductCard from "@/components/products/product-card";
import { ProductDto } from "@/interface/dto/product.dto";
import { Suspense } from "react";
import LoadingProductCard from "./loading";
import { fetchAllProduct } from "./api/fetch";

export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const products = await fetchAllProduct();

  return (
    <div className="bg-theme-container">
      <Suspense fallback={<LoadingProductCard />}>
        <div className="container mx-auto grid grid-cols-2 gap-3 p-4 md:grid-cols-3">
          {products.map((product: ProductDto) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
