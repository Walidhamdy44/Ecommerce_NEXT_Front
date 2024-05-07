"use client";
import { getAllProductWithFilter } from "@/app/_utils/globalApi";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Item from "@/components/Home/Item";
import { Slash } from "lucide-react";
import { Zoom } from "react-awesome-reveal";
import CategoriesSelect from "@/components/layout/CategoriesSelect";

const AllProductPage = ({ searchParams }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cat } = searchParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProductWithFilter(cat);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="container min-h-[500px]">
      <div className="flex items-center py-[30px]">
        <CategoriesSelect />
      </div>
      <div className="flex gap-4 flex-col">
        <div className="text-[22px] p-[20px] pb-[0px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-[22px]">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-[22px]" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href={`/all-products?cat=${cat}`}
                    className="text-[22px]"
                  >
                    {` ${cat} Products Page`}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-[30px]">
          {loading ? (
            <div className="item-container">
              <div className="h-[400px] w-[270px] bg-slate-200 animate-pulse rounded-xl "></div>
              <div className="h-[400px] w-[270px] bg-slate-200 animate-pulse rounded-xl"></div>
              <div className="h-[400px] w-[270px] bg-slate-200 animate-pulse rounded-xl "></div>
              <div className="h-[400px] w-[270px] bg-slate-200 animate-pulse rounded-xl "></div>
            </div>
          ) : (
            <div className="item-container">
              {data.map((item) => (
                <Zoom key={item.id} cascade damping={0.1}>
                  <Item item={item} />
                </Zoom>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;
