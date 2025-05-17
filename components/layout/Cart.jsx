"use client";
import { getCartUserByEmail } from "@/app/_utils/globalApi";
import {
  Dialog,
  DialogClose,
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
  const { cart } = useContext(CartContext);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + (item.attributes?.price || 0),
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent className="w-[550px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            My Cart{" "}
            <span className="text-sm text-gray-500">({cart.length} items)</span>
          </DialogTitle>
          <div className="flex flex-col gap-4 pt-4">
            {loading ? (
              <div className="flex justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <Slide key={index} direction="right">
                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm">
                      <Image
                        src={item.attributes?.coverImg?.data?.attributes?.url}
                        alt={item.attributes?.title}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium line-clamp-1">
                          {item.attributes?.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.attributes?.category}
                        </p>
                        <p className="font-bold text-primary mt-1">
                          ${item.attributes?.price}
                        </p>
                      </div>
                    </div>
                  </Slide>
                ))}
                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <DialogClose asChild>
                    <Link href="/checkout" className="w-full">
                      <button className="w-[90%] bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </DialogClose>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/all-products">
                  <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
