import { Items } from "@/utils/types";
import {
  NavbarItem,
  Link,
  NavbarMenuItem,
  Input,
  Divider,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon } from "./icons/Icons";

import { motion } from "framer-motion";

//[COMPONENT] Desktop items mapper
export const NavbarItems = ({ item }: { item: Items[] }) => {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex gap-5 w-full justify-center">
      {item.map((it) => (
        <NavbarItem key={it.id}>
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.5 }}
          >
            <Link
              as={NextLink}
              className={`${
                pathname === it.pathname ? "underline" : ""
              } transition-all duration-200`}
              color={`${pathname === it.pathname ? "danger" : "foreground"}`}
              href={it.pathname}
            >
              {it.name}
            </Link>
          </motion.div>
        </NavbarItem>
      ))}
    </div>
  );
};

export const MobileNavbarItems = ({ item }: { item: Items[] }) => {
  const pathname = usePathname();

  return (
    <div>
      {item.map((it) => (
        <NavbarMenuItem className="p-2" key={it.id}>
          <Link
            as={NextLink}
            color={`${pathname === it.pathname ? "danger" : "foreground"}`}
            href="#"
            className="w-full"
            size="lg"
          >
            {it.name}
          </Link>
        </NavbarMenuItem>
      ))}
      <Divider className="mt-4 mb-4" />
      <NavbarItem>
        <Input
          placeholder="Busca tus productos.."
          labelPlacement="outside"
          startContent={<SearchIcon />}
        />
      </NavbarItem>
    </div>
  );
};
