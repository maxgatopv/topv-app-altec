import SocialButton from "@/components/common/social-button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-100">
        <div className="text-center *:my-3">
          <h2 className="text-5xl font-thin">Page Not Found</h2>
          <p>Could not find requested resource</p>

          <button className="btn-primary group border-none bg-primary text-white">
            <Link href="/" className="flex">
              Home Page
              <FontAwesomeIcon
                icon={faAngleRight}
                className="my-auto ml-2 group-hover:translate-x-1"
              />
            </Link>
          </button>
        </div>
        <SocialButton styleColor="btn-light" />
      </div>
    </>
  );
}
