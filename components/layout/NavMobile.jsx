import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import UserHeader from "./UserHeader";

const NavMobile = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <RiMenu2Fill size={30} aria-label="Menu" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex items-center gap-4 flex-col pt-[40px]">
            <div className="flex items-center gap-3 flex-col text-[22px] menu-mobile">
              <Link href="/all-products?cat=Clothing">Clothing</Link>
              <Link href="/all-products?cat=Accessories">Accessories</Link>
              <Link href="/all-products?cat=Electronics">Electronics</Link>
              <Link href="/all-products?cat=Beauty">Beauty</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/all-products?cat=Home">Home Categories</Link>
              <Link href="/contact-us">Contact</Link>
            </div>
            <UserHeader />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
