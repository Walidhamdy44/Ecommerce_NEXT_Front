import Image from "next/image";
import React from "react";
import AddToCart from "../layout/AddToCart";
import { FaRegHeart } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import QuickView from "./QuickView";
import Link from "next/link";

const Item = ({ item }) => {
  if (!item) {
    return null; // If item is undefined, return null
  }
  let color = "none";
  const badge = (item && item.attributes.badge) || "none";
  if (badge === "new") {
    color = "destructive";
  } else if (badge === "sale") {
    color = "secondary";
  } else if (badge === "best sale") {
    color = "outline";
  }
  return (
    <div className="flex items-center gap-3 flex-col relative justify-start">
      {badge === "none" ? null : (
        <div className="absolute top-[15px] right-[27px] z-[2]">
          <Badge variant={color}>{badge}</Badge>
        </div>
      )}
      <div className="flex items-center gap-3 relative item-box">
        <Link href={`/product-details/${item.id}`}>
          <Image
            src={item.attributes.coverImg.data.attributes.url}
            width={290}
            height={300}
            alt="new colection"
            style={{ maxHeight: "350px" }}
          />
        </Link>
        <div className="item-view text-[32px]">
          <div>
            <QuickView item={item} />
          </div>
          <AddToCart product={item} />
          <div>
            <FaRegHeart />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col">
        <h3 className="text-center capitalize text-[22px]">
          {item.attributes.title}
        </h3>
        <span className="text-orange-400 text-[16px]">
          $
          <span className="text-[20px] font-extrabold">
            {item.attributes.price}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Item;
