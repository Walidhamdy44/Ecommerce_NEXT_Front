import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import {
  SlSocialTwitter,
  SlSocialDribbble,
  SlSocialPintarest,
  SlSocialInstagram,
} from "react-icons/sl";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="container py-[20px] shadow-b">
      <div className="flex items-start gap-4 mt-[50px] footer max-md:flex-col">
        <div className="flex items-start gap-2 flex-col flex-[1.3]">
          <Link href="/" className="flex items-center gap-4 ">
            <Image
              alt="logo"
              src="/E-commerce.png"
              width={50}
              height={50}
              style={{
                borderRadius: "50%",
              }}
            />
            <p className="text-[23px] font-extrabold ">E-commerce NEXT</p>
          </Link>
          <p className="text-gray-400 w-[70%] my-[20px] max-sm:w-[100%]">
            It typically features an eye-catching hero section with an engaging
            tagline and a call-to-action, it posts or subscribe for updates.
          </p>
          <div className="flex items-start gap-2 ">
            <Image
              alt="facebook"
              src="/payment-1.webp"
              width={30}
              height={30}
              className="rounded-full"
            />
            <Image
              alt="facebook"
              src="/payment-2.webp"
              width={30}
              height={30}
              className="rounded-full"
            />

            <Image
              alt="facebook"
              src="/payment-3.webp"
              width={30}
              height={30}
              className="rounded-full"
            />
            <Image
              alt="facebook"
              src="/payment-4.webp"
              width={30}
              height={30}
              className="rounded-full"
            />
            <Image
              alt="facebook"
              src="/payment-5.webp"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between footer-links flex-1">
          <ul>
            <p className="text-[22px] font-extrabold ">Quick Links</p>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 justify-between footer-links flex-1">
          <ul>
            <p className="text-[22px] font-extrabold ">Amazing </p>
            <li>Fashion</li>
            <li>Style</li>
            <li>Food</li>
            <li>Travel</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 flex-[1.3]">
          <p className="text-[22px] font-extrabold ">NEWSTELLER</p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
          <div className="flex items-start gap-3 text-[20px] icons">
            <SlSocialTwitter />
            <SlSocialDribbble />
            <SlSocialPintarest />
            <TiSocialFacebook />
            <SlSocialInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
