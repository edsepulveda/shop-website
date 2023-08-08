import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
  Divider,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";
import NextLink from "next/link";
import { CartIcon, CreditCardIcon, SearchIcon } from "./icons/Icons";
import { Items } from "@/utils/types";
import { MobileNavbarItems, NavbarItems } from "./NavbarItems";
import { DropdownList } from "./dropdown/DropdownList";

export default function NavbarPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: Items[] = [
    { id: 1, name: "Inicio", pathname: "/" },
    { id: 2, name: "Hombres", pathname: "/abc" },
    { id: 3, name: "Mujeres", pathname: "/abc" },
    { id: 4, name: "Niños", pathname: "/abc" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsOpen} className="shadow">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="block sm:hidden"
        />
        <NavbarBrand>
          <p className="ml-3 font-bold text-black">Style Connect</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5 w-full" justify="center">
        <NavbarItems item={menuItems} />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light">
            <SearchIcon />
          </Button>
        </NavbarItem>

        <NavbarItem className="flex items-center">
          <Badge content="5" color="danger">
            <Button isIconOnly variant="light">
              <CartIcon />
            </Button>
          </Badge>
        </NavbarItem>

        <NavbarItem className="hidden sm:block">
          <Button as={NextLink} color="danger" href="#" variant="flat">
            Iniciar sesión
          </Button>
        </NavbarItem>

        <NavbarItem>
          <DropdownList />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <MobileNavbarItems item={menuItems} />
        <Divider className="my-4" />
        <NavbarMenuItem className="w-full">
          <Button as={NextLink} color="danger" href="#" variant="flat">
            Iniciar Sesión
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
