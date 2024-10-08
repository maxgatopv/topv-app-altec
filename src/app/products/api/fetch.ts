import { ProductDto } from "@/interface/dto/product.dto";

export async function fetchAllProduct() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/api`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch all product data");
  }
  const products = await res.json();
  return products;

}

export async function fetchProductDetail(productId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/api/${productId}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product detail data");
  }

  const product: ProductDto = await res.json();
  return product;
}
