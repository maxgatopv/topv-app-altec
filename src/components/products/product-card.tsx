import { ProductDto } from "@/interface/dto/product.dto";
import Link from "next/link";
import Image from "next/image";
import ProductRating from "./product-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

type Props = {
  product: ProductDto;
};

export default function ProductCard({ product }: Props) {
  return (
    <>
      <div
        key={product.id}
        className="rounded-2xl h-full bg-white p-1 text-center transition duration-500 hover:-translate-y-1"
      >
        <Link href={`/products/${product.id}`}>
          <Image
            width={500}
            height={500}
            className="rounded-t-xl object-cover"
            src={product.image[0]}
            alt={product.name}
          />
        </Link>

        <div className="my-3 space-y-2 px-2 md:space-y-3 md:px-6">
          <p className="line-clamp-2 px-2 h-12">{product.name}</p>
          <b>฿ {product.price}</b>
          <div className="flex justify-center space-x-1">
            <ProductRating rating={product.rating} />

            <p>{product.rating}</p>
          </div>
          <div>
            <Link href={`/products/${product.id}`}>
              <button className="btn-primary w-full rounded-lg bg-primaryDark hover:bg-white hover:text-primary md:w-4/5">
                เรียนรู้เพิ่มเติม
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-1">
            <FontAwesomeIcon icon={faLocationDot} />
            <small className="text-gray-500">สถานที่จัดจำหน่าย</small>
          </div>
        </div>
      </div>
    </>
  );
}
