"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createContext } from "react";

// Create a context for cart data
export const CartContext = createContext();

// CartProvider component to manage cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State variable for cart data
  const router = useRouter; // Get the router object

  return (
    // Provide cart state and setter function to child components via context
    <CartContext.Provider value={{ cart, setCart }}>
      {children} {/* Render children components */}
    </CartContext.Provider>
  );
};
