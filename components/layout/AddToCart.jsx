"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { AiOutlineShopping } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const AddToCart = ({ children, product }) => {
  const { user } = useUser();
  const { toast } = useToast();
  const { addToCart } = useContext(CartContext);
  const Router = useRouter();

  const handleAddToCart = async () => {
    if (!user) {
      Router.push("/sign-in");
      return;
    }

    try {
      addToCart(product);
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
  };

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleAddToCart}
    >
      <AiOutlineShopping />
      {children}
    </div>
  );
};

export default AddToCart;
