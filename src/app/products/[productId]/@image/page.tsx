import { Suspense } from "react";
import LoadingProductImage from "./loading";
import { fetchProductDetail } from "../../api/fetch";
import ProductCarousel from "@/components/products/product-carousel";

type Props = {
  params: { productId: string };
};

export default async function ImageProduct({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1700));
  // throw new Error("Failed to load the product image!");
  const product = await fetchProductDetail(params.productId);

  return (
    <>
      <Suspense fallback={<LoadingProductImage />}>
        <ProductCarousel images={product.image} />
      </Suspense>
    </>
  );
}
