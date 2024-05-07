"use client";
import { addToCart } from "@/app/_utils/globalApi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { AiOutlineShopping } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const AddToCart = ({ children, product }) => {
  const { user } = useUser();
  const { toast } = useToast();
  const { cart, setCart } = useContext(CartContext);
  const Router = useRouter();

  const AddToCartAction = async () => {
    if (!user) {
      Router.push("/sign-in");
      return;
    } else {
      const data = {
        data: {
          products: product.id,
          email: user.primaryEmailAddress.emailAddress,
          userName: user.fullName,
        },
      };

      try {
        await addToCart(data);
        // Update local cart immediately after successful addition
        setCart((prevCart) => [...prevCart, product]);
        toast({
          description: `${product.attributes.title.substring(
            0,
            12
          )} Added To Cart Successfully`,
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
        toast({
          description: "Failed to add item to cart. Please try again later.",
          status: "error",
        });
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={AddToCartAction}
    >
      <AiOutlineShopping />
      {children}
    </div>
  );
};

export default AddToCart;
