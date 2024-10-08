import Link from "next/link";
import {
  PRODUCTS_ROUTE_PATH,
  WARRANTY_ROUTE_PATH,
  STORES_ROUTE_PATH,
  ABOUT_US_ROUTE_PATH,
} from "@/const/route-paths.const";
import { usePathname } from "next/navigation";

const navLink = [
  {
    name: "หน้าแรก",
    href: "/",
  },
  {
    name: "สินค้า",
    href: PRODUCTS_ROUTE_PATH,
  },
  {
    name: "การรับประกัน",
    href: WARRANTY_ROUTE_PATH,
  },
  {
    name: "สั่งซื้อสินค้า",
    href: STORES_ROUTE_PATH,
  },
  {
    name: "เกี่ยวกับเรา",
    href: ABOUT_US_ROUTE_PATH,
  },
];

export default function MunuList() {
  const pathname = usePathname();
  return (
    <>
      {navLink.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href &&
                "pointer-events-none underline underline-offset-8"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
      <li>
        <p>ติดต่อเรา 1277</p>
      </li>
    </>
  );
}
