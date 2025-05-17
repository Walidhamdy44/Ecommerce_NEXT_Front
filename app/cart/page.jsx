"use client";
import { useContext } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const { cart, removeFromCart } = useContext(CartContext);

  const subTotal = cart.reduce(
    (total, item) => total + Number(item.attributes?.price || 0),
    0
  );
  const VAT = 25;
  const total = subTotal + VAT;

  const deleteItem = async (id) => {
    try {
      removeFromCart(id);
      toast({
        description: "Item removed from cart successfully",
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast({
        description: "Failed to remove item. Please try again.",
        status: "error",
      });
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold sm:text-3xl">
              Hello,
              <span className="px-[10px] text-red-800 font-extrabold">
                {user && user.fullName}
              </span>
              Your Cart 🛒
            </h1>
          </header>

          <div className="mt-8">
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li className="flex items-center gap-4" key={item.id}>
                    <Image
                      src={item.attributes?.coverImg?.data?.attributes?.url}
                      width={70}
                      height={70}
                      alt={item.attributes?.title}
                      className="size-[70px] object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="text-sm">{item.attributes?.title}</h3>
                      <dl className="mt-0.5 space-y-px text-[17px]">
                        <div>
                          <dt className="inline">category:</dt>
                          <dd className="inline">
                            {item.attributes?.category}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <label htmlFor="Line1Qty" className="sr-only">
                          Price
                        </label>
                        <span className="h-8 w-12 rounded border-gray-200 text-red-700 bg-gray-200 px-[10px] text-center text-[17px]">
                          ${item.attributes?.price}
                        </span>
                      </form>

                      <button
                        className="transition hover:text-red-600"
                        onClick={() => deleteItem(item.id)}
                      >
                        <span className="sr-only">Remove item</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center justify-center p-[20px] gap-6 flex-col bg-background">
                <h2>Your Cart Is Empty</h2>
                <Link href="/" className="btn custom-btn text-center">
                  Shopping
                </Link>
              </div>
            )}

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>${subTotal.toFixed(2)}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>$25</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd className="text-red-500 font-extrabold">
                      ${total.toFixed(2)}
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <Link href="/checkout" className="btn custom-btn text-center">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
