import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ProductDto } from "@/interface/dto/product.dto";

type Props = {
  toggleSearch: () => void;
  isOpenSearch: boolean;
};

export default function SearchSearch({ toggleSearch, isOpenSearch }: Props) {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // const fetchProduct = async (query: string) => {
  const fetchProduct = async () => {
    const res = await fetch(
      // `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/api/search?query=${query}`,
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/api`,
      {
        cache: "no-store",
      },
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const fetchData = async () => {
        setLoading(true);
        try {
          // const result = await fetchProduct(searchQuery);
          const result = await fetchProduct();
          setProducts(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setProducts([]);
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    if (isOpenSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpenSearch]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 w-full -translate-x-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-1/2 lg:w-1/3 ${
          isOpenSearch ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex justify-between space-x-3 p-4">
          <div
            className="flex w-full overflow-hidden rounded-lg border border-gray-300 duration-500 hover:border-primary focus:border-primary"
            tabIndex={0}
          >
            <span className="flex items-center justify-center px-3 text-gray-500">
              {/* <!-- Search Icon --> */}
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              ref={inputRef}
              type="search"
              placeholder="ค้นหาสินค้า..."
              className="flex-1 border-none px-1 py-2 text-sm outline-none focus:ring-0"
            />
          </div>

          <button
            onClick={() => {
              clearSearch();
              toggleSearch();
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>

        <div className="container flex h-full">
          <div className="container flex h-[90%] flex-col justify-between border-t pb-4">
            <ul className="flex max-h-[90%] flex-col overflow-y-auto text-primary">
              {searchQuery.length >= 3  &&(
                <small className="my-2 text-center text-gray-500">
                  {filteredProducts.length} item
                </small>
              )}
              {loading ? (
                <div role="status" className="m-5 flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 animate-spin fill-primary text-gray-200"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  {filteredProducts.length > 0 ? (
                    <>
                      {filteredProducts
                        // .slice(0, 5)
                        .map((product: ProductDto) => (
                          <li
                            className="border-b p-4 hover:bg-slate-50"
                            key={product.id}
                            onClick={() => {
                              clearSearch();
                              toggleSearch();
                            }}
                          >
                            <Link
                              href={`/products/${product.id}`}
                              className="flex space-x-2"
                            >
                              <Image
                                src={product.image[0]}
                                alt="product"
                                className="size-12 rounded-md"
                                width={50}
                                height={50}
                              />
                              <div>
                                <p className="line-clamp-1">{product.name}</p>
                                <small>฿ {product.price}</small>
                              </div>
                            </Link>
                          </li>
                        ))}

                      {/* More product */}
                      {/* {filteredProducts.length >= 5 && (
                        <div className="mt-3 flex justify-center">
                          <Link
                            href={"/products"}
                            onClick={() => {
                              clearSearch();
                              toggleSearch();
                            }}
                          >
                            <button className="btn-primary w-24 py-1">
                              ดูเพิ่มเติม
                            </button>
                          </Link>
                        </div>
                      )} */}
                    </>
                  ) : (
                    searchQuery.length >= 3 && (
                      <div className="mt-4 text-center text-gray-500">
                        <small>ไม่พบสินค้าที่ค้นหา</small>
                      </div>
                    )
                  )}
                </>
              )}
            </ul>

            <div className="flex flex-col justify-center">
              <small className="block pt-3 text-center text-gray-400">
                © topvalue 2024
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
