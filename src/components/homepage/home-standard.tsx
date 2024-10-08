import iconDummy1 from "@images/dummy-standard-icon-1.png";
import iconDummy2 from "@images/dummy-standard-icon-2.png";
import iconDummy3 from "@images/dummy-standard-icon-3.png";
import Image from "next/image";

export default function HomeStandard() {
  return (
    <>
      {/* <!-- Dummy Standard--> */}
      <div className="bg-blue-50 p-4">
        <div className="transition-responsive container mx-auto text-center">
          <h1 className="text-primary">มาตรฐานของเรา</h1>
          <div className="grid grid-cols-1 gap-5 py-5 *:space-y-4 *:rounded-3xl *:bg-white *:p-12 lg:grid-cols-3 [&_img]:mx-auto [&_img]:object-cover [&_p]:text-gray-500">
            <div>
              <Image src={iconDummy1} alt="standard1" />
              <div className="space-y-2">
                <b>ประสิทธิภาพ</b>
                <p>
                  ผ่านการทดสอบจากองค์กรชั้นนำ
                  ในด้านคุณภาพการใช้งานที่มีประสิทธิภาพ
                </p>
              </div>
            </div>
            <div>
              <Image src={iconDummy2} alt="standard2" />
              <div className="space-y-2">
                <b>จัดส่งรวดเร็ว</b>
                <p>
                  จัดส่งถึงมือคุณอย่างรวดเร็วด้วยบริการขนส่งชั้นนำจาก
                  TopvalueExpress, Kerry Express, CJ Logistics และ ไปรษณีย์ไทย
                </p>
              </div>
            </div>
            <div>
              <Image src={iconDummy3} alt="standard3" />
              <div className="space-y-2">
                <b>ประหยัดไฟ</b>
                <p>
                  ผ่านเกณฑ์ประสิทธิภาพพลังงาน ตามโครงการฉลากประหยัดไฟเบอร์ 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
