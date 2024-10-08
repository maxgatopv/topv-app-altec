import { products } from "../data";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const product = products.find(
    (product) => product.id  === parseInt(params.id)
  ) 
  return Response.json(product);
}
