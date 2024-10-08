"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

// Custom Previous Arrow
export const PrevArrow = ({ className, onClick }: ArrowProps) => (
  <div
    className={`${className} absolute left-5 top-1/3 z-30 flex size-7 items-center justify-center rounded-full bg-black text-white opacity-50 hover:cursor-pointer hover:opacity-80 lg:top-[40%]`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleLeft} />
  </div>
);

// Custom Next Arrow
export const NextArrow = ({ className, onClick }: ArrowProps) => (
  <div
    className={`${className} absolute right-5 top-1/3 z-30 flex size-7 items-center justify-center rounded-full bg-black text-white opacity-50 hover:cursor-pointer hover:opacity-80 lg:top-[40%]`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleRight} />
  </div>
);

export default function ProductCarousel({ images }: { images: string[] }) {
  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i: number) {
      return (
        <Image
          src={images[i]}
          alt={`dot-image-${i}`}
          width={200}
          height={200}
          className="w-20 hover:cursor-pointer hover:ring-2 ring-slate-200 rounded-lg ring-offset-2"
        />
      );
    },
    dotsClass: "slick-carousel overflow-x-auto !flex space-x-3 p-3 justify-center",
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="rounded-lg">
            <Image
              src={imageUrl}
              alt={`product-image-${index}`}
              width={700}
              height={700}
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
