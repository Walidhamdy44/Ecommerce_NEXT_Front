"use client";

import { CartContext } from "@/context/CartContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Cart from "@/components/layout/Cart";

const UserHeader = () => {
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3 text-[22px]">
          <UserButton />
          <div className="relative">
            <Cart>
              <span className="absolute  bage text-[15px]">{cart.length}</span>
              <AiOutlineShopping className="cursor-pointer  hover:scale-[1.5] hover:text-red-400 transition-all" />
            </Cart>
          </div>
          <FaRegHeart className="cursor-pointer hover:scale-[1.5] hover:text-red-400 transition-all" />
        </div>
      ) : (
        <div>
          <Link className="text-[18px] " href="/sign-in">
            <button className="custom-btn btn"> Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserHeader;
