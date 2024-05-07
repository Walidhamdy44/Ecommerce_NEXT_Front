import Image from "next/image";
import CountdownTimer from "./Timer";
import Link from "next/link";

const SectionTimer = () => {
  return (
    <div className="py-[30px] container" id="descount">
      <div className="flex max-md:flex-col">
        {/* Image */}
        <div className="flex justify-center lg:justify-start box flex-1">
          <Image
            src="/discount.jpg"
            alt="section altry"
            width={500}
            height={300}
            className=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col mt-6 lg:mt-0 bg-background w-[50%] flex-1 max-md:w-[100%]">
          {/* Discount */}
          <div className="flex flex-col items-center justify-between">
            <div className="mb-4 flex items-center justify-center flex-col gap-3 pt-[60px]">
              <span className="block text-[14px] text-gray-500">Descount</span>
              <span className="block text-[26px] text-red-400 font-extrabold">
                Summer 2024
              </span>
              <span className="block text-[14px] text-amber-500">SALE 67%</span>
            </div>

            {/* Timer */}
            <div className="text-center lg:text-left">
              <CountdownTimer />
            </div>

            {/* Shop Now Button */}
            <button className="custom-btn btn">
              <Link href="#shop">SHOP NOW</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTimer;
