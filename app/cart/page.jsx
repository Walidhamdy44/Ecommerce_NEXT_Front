"use client";
import { useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { deleteItemFromCart, getCartUserByEmail } from "../_utils/globalApi";
import { useToast } from "@/components/ui/use-toast";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

const CartPage = () => {
  // Import necessary hooks and context
  const { user } = useUser(); // Get the user object from useUser hook
  const { toast } = useToast(); // Get the toast function from useToast hook
  const { cart, setCart } = useContext(CartContext); // Get the cart state and setCart function from CartContext

  // State variable to indicate loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effect hook to fetch cart data when the user object changes
    const fetchData = async () => {
      if (user) {
        try {
          setLoading(true); // Set loading state to true before fetching data
          // Fetch cart data for the user
          const res = await getCartUserByEmail(
            user.primaryEmailAddress.emailAddress
          );
          // Update cart state with fetched data
          setCart(
            res.data.map((citem) => ({
              id: citem.id,
              product: citem.attributes.products.data[0],
            }))
          );
        } catch (error) {
          console.error("Error fetching cart data:", error);
        } finally {
          setLoading(false); // Set loading state to false after fetching data
        }
      }
    };

    fetchData(); // Invoke the fetchData function
  }, [user]); // Dependency array with user as the dependency for re-fetching cart data

  // Calculate subtotal, VAT, and total
  const subTotal = cart.reduce(
    (total, item) => total + Number(item.product?.attributes?.price),
    0
  );
  const VAT = 25;
  const total = subTotal + VAT;

  // Function to delete an item from the cart
  const deleteItem = async (id) => {
    try {
      await deleteItemFromCart(id); // Delete item from the cart
      const updatedCart = cart.filter((item) => item.id !== id); // Filter out the deleted item from the cart
      setCart(updatedCart); // Update cart state with the filtered cart
      // Show success toast message
      toast({
        description: "Item deleted from cart successfully",
      });
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold  sm:text-3xl">
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
                {cart.map((item, index) => (
                  <li className="flex items-center gap-4" key={index}>
                    <Image
                      src={
                        item.product?.attributes?.coverImg?.data?.attributes
                          ?.url
                      }
                      width={70}
                      height={70}
                      alt="product new"
                      className="size-[70px] object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="text-sm ">
                        {item.product?.attributes?.title}
                      </h3>
                      <dl className="mt-0.5 space-y-px text-[17px] ">
                        <div>
                          <dt className="inline">category:</dt>
                          <dd className="inline">
                            {item.product?.attributes?.category}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <label htmlFor="Line1Qty" className="sr-only">
                          Quantity
                        </label>
                        <span
                          type="number"
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 text-red-700 bg-gray-200 px-[10px] text-center text-[17px]  [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        >
                          {item.product?.attributes?.price} $
                        </span>
                      </form>

                      <button
                        className=" transition hover:text-red-600"
                        onClick={() => deleteItem(item?.id)}
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
              <div className="flex items-center justify-center p-[20px] gap-6 flex-col  bg-background">
                <h2>Your Cart Is Empty</h2>
                <Link href="/" className="btn custom-btn text-center ">
                  Shoping
                </Link>
              </div>
            )}

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm t">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd> ${subTotal.toFixed(3)}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>$ 25</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd className="text-red-500 font-extrabold">
                      $ {total.toFixed(3)}
                    </dd>
                  </div>
                </dl>

                <div className=" flex justify-end">
                  <Link href="/cart" className="btn custom-btn text-center ">
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
