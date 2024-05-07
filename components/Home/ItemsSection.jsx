"use client";
import { getAllProduct } from "@/app/_utils/globalApi";
import Item from "./Item";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";

const ItemsSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProduct_();
  }, []);

  const getAllProduct_ = () =>
    getAllProduct().then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  return (
    <div className="my-[30px] " id="shop">
      <Bounce delay={400}>
        <h2 className="p-[20px] text-[34px] font-extrabold uppercase">
          New Products
        </h2>
      </Bounce>

      {loading ? (
        <div className="item-container">
          <div className="h-[400px] w-[300px] bg-slate-200 animate-pulse rounded-xl "></div>
          <div className="h-[400px] w-[300px] bg-slate-200 animate-pulse rounded-xl"></div>
          <div className="h-[400px] w-[300px] bg-slate-200 animate-pulse rounded-xl "></div>
          <div className="h-[400px] w-[300px] bg-slate-200 animate-pulse rounded-xl "></div>
        </div>
      ) : (
        <div className="item-container">
          {data.slice(0, 8).map((item) => (
            <Bounce key={item.id}>
              <Item item={item} />
            </Bounce>
          ))}
        </div>
      )}
      <div className="text-center m-auto">
        <Link href="/all-products?cat=Electronics" className="custom-btn btn">
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default ItemsSection;
