import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Image from "next/image";
import ImgAbout from "@images/about1.png"

export const metadata: Metadata = {
  title: "About",
};

export default function AboutusPage() {
  return (
    <section className="bg-theme-container pb-10">
      <div className="transition-responsive container mx-auto py-1">
        <Image
          className="transition-responsive w-full object-cover lg:rounded-xl"
          src={ImgAbout}
          alt="about"
        />
        <article className="divide-y divide-black px-5 py-5">
          <div className="mb-7 space-y-4 [&_p]:indent-10 [&_p]:leading-relaxed [&_p]:md:text-justify">
            <h4 className="text-primary">บริษัท สวิทซเฟลคซ จำกัด</h4>
            <p>
              ก่อตั้งขึ้นเมื่อปี 2005
              โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
              ซึ่งได้คร่ำหวอดอยู่ในวงการเครื่องจักรและสายงานอุตสาหกรรมมาเป็นเวลานาน
              และได้มีโอกาสในการดำเนินงานอย่างครอบคลุมและหลากหลาย
              ทั้งในกลุ่มเครื่องจักรขนาดเล็ก ไปตลอดจนถึงเครื่องจักรขนาดใหญ่
              โดยมีทีมงานเป็นกลุ่มวิศวกรที่มากประสบการณ์
              และมีความเชี่ยวชาญในสายงานนี้
              ซึ่งได้เล็งเห็นโอกาสในการทำธุรกิจเพิ่มขึ้น
              เพราะมองเห็นถึงช่องว่างระหว่างสินค้าที่มีคุณภาพดีแต่มีราคาสูง
              และสินค้าราคาถูก แต่คุณภาพตามราคา
            </p>
            <p>
              บริษัท สวิทซ เฟลคซ จำกัด
              จึงได้เลือกผลิตเครื่องใช้ไฟฟ้าและสร้างแบรนด์สินค้าของตนเอง
              โดยตั้งเป้าหมายให้เป็นสินค้าที่มีคุณภาพ มีการออกแบบที่สวยงาม
              ในราคาที่ผู้คนสามารถจับต้องได้
              และตั้งเป้าไว้ว่าจะเป็นแบรนด์ที่มุ่งเน้นเพื่อผลิตสินค้าที่ดี
              ในราคาที่ใช่ ให้ทุกคนได้มีโอกาสใช้งาน
              และช่วยยกระดับคุณภาพชีวิตของผู้ใช้งานให้สะดวกสบายมากยิ่งขึ้น
            </p>
            <p>
              โดยในปัจจุบัน บริษัท สวิทซ เฟลคซ จำกัด
              ได้ผลิตสินค้าในกลุ่มเครื่องใช้ไฟฟ้าออกมาวางจำหน่าย
              ภายใต้ชื่อแบรนด์ ALTEC และ Alectric โดยมีสินค้าหลากหลาย
              ให้ผู้บริโภคได้เลือกใช้งาน ไม่ว่าจะเป็นเครื่องฟอกอากาศ
              เครื่องดูดฝุ่น เครื่องดูดไรฝุ่น ตู้กดน้ำ เครื่องอบผ้า พัดลมมือถือ
              และอื่น ๆ อีกมากมาย
              ตลอดจนได้ผลิตและจัดจำหน่ายสินค้ากลุ่มกล่องบรรจุอาหาร
              ภายใต้ชื่อแบรนด์ namiko
            </p>
            <p>
              บริษัท สวิทซ เฟลคซ จำกัด
              มีความมุ่งมั่นและตั้งใจที่จะสร้างสรรค์สินค้าที่มีคุณภาพ
              ในราคาที่เหมาะสม ให้ทุกคนสามารถจับต้องและใช้งานได้
              โดยตัวสินค้ามีการรับประกันสูงสุดถึง 2 ปี และมีการบริการหลังการขาย
              สามารถหาซื้อได้ผ่านช่องทางออนไลน์ที่ www.topvalue.com และร้าน
              topvalue Official Shop ที่ Shopee, Lazada และ JD Central
              และวางจำหน่ายผ่านห้างสรรพสินค้าชั้นนำทั่วประเทศ
            </p>
          </div>
          <div className="pt-7">
            <div className="mb-3 w-full space-y-4 sm:w-3/6">
              <h4 className="mb-2 text-primary">บริษัท สวิทซเฟลคซ จำกัด</h4>
              <b className="text-primary">สำนักงานใหญ่</b>
              <ul className="*:mb-4 [&_i]:text-primary [&_li]:flex [&_li]:items-start [&_li]:space-x-2 [&_svg]:mt-1">
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>
                    บริษัท สวิทซเฟลคซ จำกัด <br />
                    เลขที่ 30/119 หมู่ 1 ต.โคกขาม <br />
                    อ.เมือง จ.สมุทรสาคร 74000
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>1277</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>sales@alectric.asia</p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
