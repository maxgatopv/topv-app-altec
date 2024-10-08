import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SocialButton from "../common/social-button";
import MunuList from "./menu-list";
import Image from "next/image";
import logo from "@images/logo.svg";

type Props = {
  toggleMenu: () => void;
  isOpenMenu: boolean;
};

export default function MenuMobile({ toggleMenu, isOpenMenu }: Props) {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-full -translate-x-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-1/2 lg:hidden ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex justify-between p-6">
          <Image src={logo} alt="logo" />

          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>

        <div className="container mx-auto flex h-[90%] flex-col justify-between">
          <ul className="flex flex-col space-y-5 px-6 text-primary *:border-b">
            <MunuList />
          </ul>

          <div>
            <SocialButton styleColor={"btn-light"} />
            <small className="block pt-3 text-center text-gray-400">
              © topvalue 2024
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
