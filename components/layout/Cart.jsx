"use client";
import { getCartUserByEmail } from "@/app/_utils/globalApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CartContext } from "@/context/CartContext";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const Cart = ({ children }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          setLoading(true);
          const res = await getCartUserByEmail(
            user.primaryEmailAddress.emailAddress
          );
          setCart(
            res.data.map((citem) => ({
              id: citem.id,
              product: citem.attributes.products.data[0],
            }))
          );
        } catch (error) {
          console.error("Error fetching cart data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]); // Fetch data only when user changes

  return (
    <Dialog>
      <DialogTrigger>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent className="w-[800px] max-h-[500px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>My Cart : 🐱‍👤</DialogTitle>
          <div className="flex flex-col items-start gap-4 p-[10px]">
            {loading ? (
              <p>Loading cart...</p>
            ) : (
              cart.map((item, index) => (
                <Slide key={index} cascade damping={0.4}>
                  <div className="flex items-center justify-between gap-[20px] w-full p-[20px] rounded-xl">
                    <Image
                      src={
                        item.product?.attributes?.coverImg?.data?.attributes
                          ?.url
                      }
                      alt="Product Image"
                      width={200}
                      height={200}
                      className="w-[100px] h-[100px]"
                    />
                    <div className="flex items-start gap-4 flex-col py-[10px]">
                      <span>{item.product?.attributes?.title}</span>
                      <span>{item.product?.attributes?.price}</span>
                    </div>
                  </div>
                </Slide>
              ))
            )}
            <Link href="/cart">
              <button className="btn custom-btn ">
                View My Cart {"  "}
                {cart.length}
              </button>
            </Link>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
