"use client";
import { socialData } from "@/const/social.data";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [activeToggle, setActiveToggle] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveToggle(activeToggle === index ? null : index);
  };
  useEffect(() => {
    setActiveToggle(null);
  }, [pathname]);

  return (
    <>
      {/* <!-- Footer--> */}
      <footer className="bg-primaryDark px-4 py-6 text-sm text-white lg:pt-10 lg:text-base">
        <section className="accordion container mx-auto flex flex-col justify-center gap-5 md:flex-row [&_svg]:me-3 [&_svg]:w-5">
          {/* <!-- Contact --> */}
          <div className="accordion-item sm:basis-1/3 lg:basis-1/2">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(1)}
            >
              <b>ติดต่อ</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 1 ? "open" : ""
              }`}
            >
              <div className="p-3 md:p-0">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  บริษัท สวิทซเฟลคซ จำกัด เลขที่ 30/119 หมู่ 1 ต.โคกขาม อ.เมือง
                  จ.สมุทรสาคร 74000
                </p>
                <div className="pt-6">
                  <p>
                    <FontAwesomeIcon icon={faClock} />
                    จันทร์ - เสาร์ <br />
                    9:00 - 17:00, <br />
                    ปิดทำการวันอาทิตย์
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Dealer --> */}
          <div className="accordion-item sm:basis-1/2 lg:basis-1/2">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(2)}
            >
              <b>ตัวแทนจำหน่าย</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 2 ? "open" : ""
              }`}
            >
              <p className="p-3 md:p-0">
                สนใจสั่งซื้อสินค้าเป็นจำนวนมาก หรือสมัครเป็นตัวแทนจำหน่ายได้ที่
                โทร. 1277 E-mail: Service@switchflex.com
              </p>
            </div>
          </div>

          {/* <!-- Social media --> */}
          <div className="accordion-item basis-1/4">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(3)}
            >
              <b>ติดตาม</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 3 ? "open" : ""
              }`}
            >
              <ul className="p-3 md:p-0">
                {socialData.map((social, index) => (
                  <li key={index}>
                    <a href={social.path} target="_blank">
                      <FontAwesomeIcon icon={social.icon} />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <!-- Store --> */}
          <div className="accordion-item basis-1/4">
            <p
              className="accordion-header border-b pb-2 font-bold md:border-0 md:pb-4"
              aria-expanded="false"
              onClick={() => handleToggle(4)}
            >
              <b>สั่งซื้อ</b>
              <b className="accordion-icon md:hidden">&#9660;</b>
            </p>
            <div
              className={`accordion-content max-h-0 leading-9 opacity-0 md:max-h-none md:opacity-100 ${
                activeToggle === 4 ? "open" : ""
              }`}
            >
              <ul className="p-3 md:p-0">
                <li className="flex">
                  <img
                    src="/images/site-topvalue.svg"
                    alt="Topvalue"
                    className="me-3 ms-2 w-5"
                  />
                  <a href="#">Topvalue</a>
                </li>
                <li className="flex">
                  <img
                    src="/images/site-shopee.svg"
                    alt="Shopee"
                    className="me-2"
                  />
                  <a href="#">Shopee</a>
                </li>
                <li className="flex">
                  <img
                    src="/images/site-lazada.svg"
                    alt="Lazada"
                    className="me-2"
                  />
                  <a href="#">Lazada</a>
                </li>
                <li className="flex">
                  <img
                    src="/images/site-jd.svg"
                    alt="JD Central"
                    className="me-2"
                  />
                  <a href="#">JD Central</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div className="flex flex-wrap pt-4 container mx-auto  border-0 leading-10 relative md:border-t md:mt-10">
          <div className="w-full content-center lg:w-1/5">
            <img
              className="mx-auto lg:mx-0 text-white"
              src="/images/altec-logo-footer.svg"
              alt="swf"
            />
          </div>
          <div className="flex-1 text-center pt-3 lg:pt-0">
            <p>© Topvalue 2024</p>
            <a href="#"> เงื่อนไขการใช้งาน นโยบายส่วนบุคคล </a>
          </div>
          <div className="hidden lg:flex lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}
