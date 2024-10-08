import { Suspense } from "react";
import LoadingProductDescription from "./loading";
import { fetchProductDetail } from "../../api/fetch";

type Props = {
  params: { productId: string };
};

export default async function Description({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // throw new Error("Failed to load the product description!");
  const product = await fetchProductDetail(params.productId);
  return (
    <>
      <Suspense fallback={<LoadingProductDescription />}>
        {/* <ProductDescription productId={params.productId} /> */}
        {product.description ? (
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        ) : (
          <p>No description available for this product.</p>
        )}
      </Suspense>
    </>
  );
}
