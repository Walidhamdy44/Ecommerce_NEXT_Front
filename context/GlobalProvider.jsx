import { CartProvider } from "./CartContext";

const GlobalProvider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default GlobalProvider;
