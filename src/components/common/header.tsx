"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MenuMobile from "../menu/menu-mobile";
import MunuList from "../menu/menu-list";
import Image from "next/image";
import logo from "@images/logo.svg";
import MenuSearch from "../menu/menu-search";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [isOpenSearch, setIsSearch] = useState(false);
  const toggleSearch = () => {
    setIsSearch(!isOpenSearch);
  };

  useEffect(() => {
    setIsSearch(false);
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <>
      <nav className="sticky top-0 z-10 w-full border-b bg-white py-4">
        <section className="transition-responsive container mx-auto flex items-center justify-between space-x-2 px-4 xl:px-0">
          {/* <!-- Icon hamberger --> */}
          <button
            id="hamburger-button"
            className="me-2 lg:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* <!-- Logo  --> */}
          <div className="w-3/4 lg:w-auto">
            <a href="/" title="">
              <Image src={logo} alt="logo" />
            </a>
          </div>

          {/* <!--  Links - desktop  --> */}
          <div className="hidden lg:flex">
            <ul className="mx-1 flex flex-1 items-center justify-evenly space-x-7 text-primary *:flex xl:space-x-12">
              <MunuList />
            </ul>
          </div>

          <div className="lg:w-auto lg:basis-1/5" onClick={toggleSearch}>
            <div
              className="flex justify-center overflow-hidden rounded-lg border border-gray-300 duration-500 hover:border-primary focus:border-primary"
              tabIndex={0}
            >
              <span className="flex items-center justify-center px-3 text-gray-500">
                {/* <!-- Search Icon --> */}
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <div className="w-40 flex-1 border-none px-1 py-2 text-sm outline-none hover:cursor-text focus:ring-0">
                <p className="text-gray-400">ค้นหาสินค้า...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Link - Sidebar Menu */}
        <MenuMobile toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
        <MenuSearch toggleSearch={toggleSearch} isOpenSearch={isOpenSearch} />
      </nav>
    </>
  );
}
