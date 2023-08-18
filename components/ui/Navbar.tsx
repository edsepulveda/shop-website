import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CartIcon, MoonIcon, SearchIcon, SunIcon } from "./icons/Icons";
import { Items } from "@/utils/types";
import { MobileNavbarItems, NavbarItems } from "./NavbarItems";
import { DropdownList } from "./dropdown/DropdownList";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function NavbarPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const menuItems: Items[] = [
    { id: 1, name: "Inicio", pathname: "/" },
    { id: 2, name: "Hombres", pathname: "/abc" },
    { id: 3, name: "Mujeres", pathname: "/abc" },
    { id: 4, name: "Niños", pathname: "/abc" },
  ];

  return (
    //@ts-ignore
    <Navbar onMenuOpenChange={setIsOpen} className="shadow">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="block sm:hidden"
        />
        <NavbarBrand>
          <p className="ml-3 font-bold text-black dark:text-white">Style Connect</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5 w-full" justify="center">
        <NavbarItems item={menuItems} />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>
          <Popover>
            <PopoverTrigger>
              <Button isIconOnly variant="light">
                <SearchIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <section className="px-1 py-2 w-full">
                <div className="mt-2 flex flex-col gap-2 w-full">
                  <Input
                    label="Buscar"
                    placeholder="Busca tus productos.."
                    labelPlacement="outside"
                    startContent={<SearchIcon />}
                  />
                </div>
              </section>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        <NavbarItem className="flex items-center">
          <Badge content="5" color="danger">
            <Button
              isIconOnly
              variant="light"
              onPress={() => router.push("/cart")}
            >
              <CartIcon />
            </Button>
          </Badge>
        </NavbarItem>

        <NavbarItem>
          <DropdownList />
        </NavbarItem>

        <NavbarItem>
          {theme === "light" ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                isIconOnly
                variant="ghost"
                onClick={() => setTheme("dark")}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoonIcon />
                </motion.div>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                isIconOnly
                variant="ghost"
                onClick={() => setTheme("light")}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SunIcon />
                </motion.div>
              </Button>
            </motion.div>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <MobileNavbarItems item={menuItems} />
      </NavbarMenu>
    </Navbar>
  );
}
