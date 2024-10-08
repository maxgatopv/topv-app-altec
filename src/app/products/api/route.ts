import { products } from "./data";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(products);
}
