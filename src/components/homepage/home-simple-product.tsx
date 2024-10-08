import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import imgLiving1 from "@images/dummy-home-all-living-1.png";
import imgLiving2 from "@images/dummy-home-all-living-2.png";
import imgShowcase1 from "@images/dummy-altec-showcase-1.png";
import imgShowcase2 from "@images/dummy-altec-showcase-2.png";

export default function HomeSimpleProduct() {
  return (
    <>
      {/* <!-- Simple Product--> */}
      <div className="transition-responsive container mx-auto block justify-evenly space-y-8 lg:space-y-0 px-4 md:flex md:space-x-5">
        <div>
          <h2 className="animate-slideDown font-normal text-primary">
            ALL Living, Alright
          </h2>
          <div className="mt-6 space-y-4">
            <Image className="rounded-xl" src={imgLiving1} alt="showcase" />

            <p className="text-lg">
              Altec เครื่องดูดฝุ่นพกพาไร้สาย รุ่น V2 mini - รับประกัน 3 ปี
            </p>
            <b className="text-xl font-extrabold text-primary">฿ 1,990.-</b>
          </div>
        </div>

        <div className="space-y-4">
          <Image className="rounded-xl" src={imgLiving2} alt="showcase" />

          <p className="text-lg">
            Altex Smart Inverter DC พักลมอัจฉริยะ รุ่น F1 - รับประกันสินค้า 3 ปี
          </p>
          <b className="text-xl text-primary">฿ 2,990.-</b>
        </div>
      </div>

      {/* <!-- Dummy showcase --> */}
      <div className="transition-responsive container mx-auto space-y-20">
        <div className="items-center bg-dark p-8 text-white md:flex lg:rounded-xl lg:px-20">
          <div className="flex flex-1 scale-90 justify-center py-6 transition duration-500 hover:-rotate-2">
            <Image className="rounded-3xl" src={imgShowcase1} alt="showcase" />
          </div>
          <div className="flex-1 space-y-3">
            <h2>เครื่องปั่นสุญญากาศ 1 ลิตร เก็บเสียง</h2>

            <p className="md:w-3/4">
              เครื่องปั่นสุญญากาศ ความจุ 1 ลิตร ALTEC รุ่น QB1 กำลังไฟ 1000
              วัตต์
              สามารถทำสมูทตี้ได้ง่ายๆเพียงกดป่มฟังก์ชันสมูทตี้เพียงปุ่มเดียว
            </p>
            <button className="btn-primary group border-none bg-white text-primary">
              <Link href="#" className="flex items-center">
                ดูเพิ่มเติม
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="ml-2 group-hover:translate-x-1"
                />
              </Link>
            </button>
          </div>
        </div>

        <div className="items-center space-y-4 p-8 md:flex lg:px-20">
          <div className="flex flex-1 justify-end transition duration-500 hover:rotate-2 lg:order-2">
            <Image src={imgShowcase2} alt="showcase" />
          </div>
          <div className="flex-1 space-y-3">
            <h2>เครื่องดูดฝุ่น แบบกล่องเก็บฝุ่น 2.2 ลิตร 1400 วัตต์ รุ่น V3</h2>
            <p className="md:w-3/4">
              มีตัวกรอง HEPA ที่เป็นเอกลักษณ์เฉพาะของแบรนด์
              สามารถล้างทำความสะอาดได้ด้วยน้ำ มีหัวแปรงมาให้ถึง 2 ชิ้น
            </p>
            <button className="btn-primary group border-none bg-primary text-white">
              <Link href="#" className="flex items-center">
                ดูเพิ่มเติม
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="ml-2 group-hover:translate-x-1"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
