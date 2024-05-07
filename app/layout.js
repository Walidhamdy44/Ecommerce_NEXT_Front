import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import GlobalProvider from "@/context/GlobalProvider";
const inter = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce - Next",
  description: "An application created by next js full stack app",
  keywords: "nextjs, Ecommerce, app",
  icons: {
    icon: "/E-commerce.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <GlobalProvider>
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />

              {children}
              <Toaster />
              <Footer />
            </ThemeProvider>
          </body>
        </GlobalProvider>
      </ClerkProvider>
    </html>
  );
}
