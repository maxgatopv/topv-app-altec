import type { Metadata } from "next";
import Banner from "@images/shop.png";
import Image from "next/image";
import imgTopv from "@images/shop-topvalue.svg";
import imgShopee from "@images/shop-shopee.svg";
import imgLazada from "@images/shop-lazada.svg";
import imgJd from "@images/shop-jd.svg";

export const metadata: Metadata = {
  title: "Stores",
};

export default function StorePage() {
  return (
    <section className="space-y-5 bg-theme-container">
      {/* <!-- Banner --> */}
      <div className="transition-responsive container mx-auto my-1">
        <Image
          src={Banner}
          alt="banner-store"
          className="transition-responsive w-full rounded-xl object-cover"
        />
      </div>

      {/* <!-- Online --> */}
      <div className="transition-responsive container mx-auto">
        <div className="space-y-2 px-[10%] text-center">
          <h4 className="text-primary">ออนไลน์</h4>
          <p>พันธมิตรการขายออนไลน์</p>
          {/* <!-- Logo --> */}
          <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-4">
            <a
              className="transition hover:-translate-y-1"
              href="https://topvalue.com/brands/altec"
              target="_blank"
            >
              <Image
                className="rounded-lg border bg-white"
                src={imgTopv}
                alt="shop-topvalue"
              />
            </a>
            <a
              className="transition hover:-translate-y-1"
              href="https://shopee.co.th/altec_officialth"
              target="_blank"
            >
              <Image
                className="rounded-lg border bg-white"
                src={imgShopee}
                alt="shop-shopee"
              />
            </a>
            <a
              className="transition hover:-translate-y-1"
              href="https://www.lazada.co.th/shop/alectric-officialstore/"
            >
              <Image
                className="rounded-lg border bg-white"
                src={imgLazada}
                alt="shop-lazada"
              />
            </a>
            <a className="transition hover:-translate-y-1" href="#">
              <Image
                className="rounded-lg border bg-white"
                src={imgJd}
                alt="shop-jd"
              />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Retail store --> */}
      <div className="transition-responsive container mx-auto pb-10">
        <div className="space-y-2 text-center">
          <h4 className="text-primary">หน้าร้าน</h4>
          <p>ค้นหา Retail Store ใกล้คุณ</p>
          <div className="pt-3">
            <iframe
              className="h-[500px] w-full lg:rounded-xl"
              src="https://www.google.com/maps/d/embed?mid=1G0Oxg9UKDRkxEI5YOp6FaZRcgDBz4QlF&amp;hl=en"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
