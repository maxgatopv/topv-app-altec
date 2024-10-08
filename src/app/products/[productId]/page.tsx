import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Products ${params.productId}`);
    }, 100);
  });
  return {
    title: `Detail ${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <>
      <div className="block p-3">
        <small className="text-primary">
          <Link href="/products">products</Link> / {params.productId}
        </small>
      </div>
    </>
  );
}
