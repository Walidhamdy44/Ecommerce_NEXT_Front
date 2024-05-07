"use client";
import { getProductById } from "@/app/_utils/globalApi";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Slash } from "lucide-react";
import ProductByCategory from "@/components/single Page/ProductByCategory";
import AddToCart from "@/components/layout/AddToCart";
import { Slide } from "react-awesome-reveal";

const PageDetails = ({ params }) => {
  // Destructure the id parameter from the params object
  const { id } = params;

  // State variables to hold product data and loading state
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect hook to fetch product data when the component mounts
  useEffect(() => {
    getOneProduct(); // Call the getOneProduct function
  }, []);

  // Function to fetch product data by ID
  const getOneProduct = async () => {
    try {
      // Fetch product data by ID
      const res = await getProductById(id);
      // Update product state with fetched data
      setProduct(res.data.data);
      // If product data has category attribute, set loading to false
      if (res.data.data.attributes.category) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  return (
    <div className="container overflow-hidden">
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
                <Link href={`product-details/${id}`} className="text-[22px]">
                  {"Product Details"}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {product ? (
        <div className="flex items-start gap-6  max-md:flex-col my-[40px]">
          <Slide direction="right" cascade damping={0.2}>
            <div className="flex basis-[40%] flex-col gap-[20px]">
              <Carousel>
                <CarouselContent className=" p-10px">
                  {product.attributes.imgs.data.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image.attributes.url}
                        alt={product.attributes.title}
                        width={300}
                        height={300}
                        style={{ maxHeight: "400px" }}
                        className="m-auto rounded-xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex items-start gap-3 p-[20px] justify-between text-white">
                <div className="text-center rounded-2xl bg-slate-500 p-[5px]">
                  <Link
                    href={`/all-products?cat=${product.attributes.category}`}
                  >
                    {product.attributes.category}
                  </Link>
                </div>
                <div className="text-center rounded-2xl bg-red-400 py-[5px] px-[10px]">
                  {product.attributes.badge}
                </div>
              </div>
            </div>
          </Slide>

          <div className="flex basis-[55%] flex-col">
            <Slide cascade damping={0.3}>
              <h2 className="text-2xl font-bold mb-2">
                {product.attributes.title}
              </h2>
              <p className="text-lg mb-4">{product.attributes.desc}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">
                  {product.attributes.price} USD
                </span>
                <div className="px-[20px] py-[10px] bg-orange-500 text-white font-extrabold rounded-md  hover:bg-[#dc542e] transition-all">
                  <AddToCart product={product}>Add to Cart</AddToCart>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                * Free shipping on orders over $50
              </div>
            </Slide>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-6  max-md:flex-col my-[40px]">
          <div className="h-[350px] w-[500px] max-md:w-[100%] bg-slate-300 animate-pulse rounded-xl "></div>
          <div className="h-[350px] w-[100%] bg-slate-100 animate-pulse rounded-xl flex items-start gap-4 flex-col p-[20px]">
            <div className="h-[50px] w-[100%] max-md:w-[100%] bg-slate-300 animate-pulse rounded-xl "></div>
            <div className="h-[50px] w-[17%] max-md:w-[100%] bg-slate-300 animate-pulse rounded-xl "></div>
            <div className="h-[120px] w-[100%] bg-slate-300 animate-pulse rounded-xl "></div>
          </div>
        </div>
      )}
      <div className="flex gap-4 flex-col">
        <h2 className="p-[20px] text-[34px] font-extrabold uppercase">
          Simeller Products
        </h2>

        {loading ? (
          <div className="text-center">
            <div className="item-container">
              <div className="h-[400px] w-[270px] bg-slate-300 animate-pulse rounded-xl "></div>
              <div className="h-[400px] w-[270px] bg-slate-300 animate-pulse rounded-xl"></div>
              <div className="h-[400px] w-[270px] bg-slate-300 animate-pulse rounded-xl "></div>
              <div className="h-[400px] w-[270px] bg-slate-300 animate-pulse rounded-xl "></div>
            </div>
          </div>
        ) : (
          <ProductByCategory category={product.attributes.category} />
        )}
      </div>
    </div>
  );
};

export default PageDetails;
