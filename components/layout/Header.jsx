import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMobile from "./NavMobile";
import { ModeToggle } from "./ThemTogle";
import UserHeader from "./UserHeader";

const Header = () => {
  return (
    <div>
      <div className="container shadow-t flex items-center gap-4 justify-between lg:p-4 md:p-5 max-md:p-[10px]">
        <div className="logo">
          <Link href="/">
            <Image
              alt="logo"
              src="/E-commerce.png"
              width={50}
              height={50}
              className="scale-[1.5] pl-[15px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 max-md:hidden ">
          <Link href="/">Home</Link>
          <Link href="/all-products?cat=Electronics">Electronics</Link>
          <Link href="#descount">Descount</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
        <div className="flex items-center gap-3 text-[22px] max-md:hidden">
          <ModeToggle />
          <UserHeader />
        </div>
        <div className=" hidden max-lg:flex">
          <ModeToggle />
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
