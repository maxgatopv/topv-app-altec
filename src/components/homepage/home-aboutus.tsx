import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialButton from "../common/social-button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import imgLogo from "@images/logo.svg";
import imgSwitchflex from "@images/switchflex-new-670x440.jpg";
import imgLogoSwf from "@images/logo-switchflex.svg";

export default function HomeAboutUs() {
  return (
    <>
      {/* <!-- Contact us--> */}
      <div className="transition-responsive container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 space-x-4 p-5">
          <div className="flex items-center divide-x *:px-2">
            <h4 className="font-semibold text-primary">ติดตามเรา</h4>

            <Image className="size-24" src={imgLogo} alt="logo-alectric" />
          </div>
          <div className="content-center space-x-2">
            <SocialButton styleColor="btn-dark" />
          </div>
        </div>

        {/* <!-- About us --> */}
        <div className="transition-responsive mx-auto mb-10 overflow-hidden bg-white shadow-md">
          <div className="md:flex">
            <div className="md:flex-1">
              <Image
                className="h-48 w-full object-cover md:h-full"
                src={imgSwitchflex}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-4 md:w-2/5 md:flex-initial lg:px-16 [&_p]:text-sm [&_p]:text-gray-500">
              <div className="space-y-3 divide-y-2">
                <div className="space-y-5">
                  <p>เกี่ยวกับ</p>
                  <h4 className="text-primary">บริษัท สวิทซ เฟลคซ จำกัด</h4>
                  <p>
                    ก่อตั้งขึ้นเมื่อปี 2005
                    โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
                    และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
                    ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี
                    2019 คณะผู้ก่อตั้งบริษัท
                    ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
                    มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
                  </p>
                  <button className="btn-primary group border-none bg-primary text-white">
                    <Link href="#" className="flex">
                      ดูเพิ่มเติม
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="my-auto ml-2 group-hover:translate-x-1"
                      />
                    </Link>
                  </button>
                </div>
                <div className="pt-6">
                  <p className="pb-4">ไปยังเว็บไซต์</p>
                  <a
                    href="https://switchflex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={imgLogoSwf} alt="switchflex" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
