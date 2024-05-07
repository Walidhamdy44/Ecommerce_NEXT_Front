import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

const CategoriesSelect = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Sports">Sports</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Beauty">Beauty</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Electronics">Electronics</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Accessories">Accessories</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Toys">Toy</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Health">Healthy</Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/all-products?cat=Home">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default CategoriesSelect;
