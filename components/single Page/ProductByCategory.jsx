"use client";
import { useEffect, useState } from "react";
import Item from "../Home/Item";
import { getAllProductByCat } from "@/app/_utils/globalApi";

const ProductByCategory = ({ category }) => {
  if (!category) {
    return null;
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    getAllProduct_();
  }, []);

  const getAllProduct_ = () =>
    getAllProductByCat(category).then((res) => {
      setData(res.data.data);
    });
  return (
    <div className="item-container w-[100%]">
      {data.slice(0, 4).map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductByCategory;
