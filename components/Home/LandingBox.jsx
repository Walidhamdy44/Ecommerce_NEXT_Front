"use client";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const LandingBox = ({ img, title, text, height, link }) => {
  return (
    <Slide cascade damping={0.1}>
      <div
        className="flex items-center justify-center flex-col gap-4 bg-cover bg-center text-center box"
        style={{ backgroundImage: `url(${img})`, height: `${height}` }}
      >
        <h2 className="text-[24px] font-extrabold">{title}</h2>
        <div className="flex flex-col items-start max-w-[60%] mx-auto">
          {/* Center the content */}
          <p className="text-gray-700 text-[15px]">{text}</p>
          <button className="text-[#000] px-4 py-2 border-b-2 border-black m-auto cursor-pointer z-20">
            <Link href={link}>Shop Now</Link>
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default LandingBox;
