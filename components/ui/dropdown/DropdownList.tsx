import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import { CreditCardIcon, ProfileIcon, SignOut } from "../icons/Icons";
import { INavbarDropdown } from "@/utils/types";

export const navbarDropdownItems: INavbarDropdown[] = [
  {
    key: "perfil",
    title: "Tu Perfil",
    description: "Cambia tu dirección, contraseña, foto o nombre",
    icon: <ProfileIcon />, // Reemplaza con tu icono o componente
  },
  {
    key: "orden",
    title: "Tus Ordenes",
    description: "Revisa las últimas ordenes realizadas",
    icon: <CreditCardIcon />, // Reemplaza con tu icono o componente
  },
  {
    key: "cerrar",
    title: "Cerrar Sesión",
    description: "Cierra tu sesión actual",
    icon: <SignOut />, // Reemplaza con tu icono o componente
  },
  // Agrega más elementos según sea necesario
];

export const DropdownList = () => {
  return (
    <Dropdown placement="bottom-end" backdrop="opaque">
      <DropdownTrigger>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu
        className="w-[340px]"
        itemClasses={{ base: "gap-4" }}
        aria-label="Actions by user"
        variant="shadow"
      >
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>

        <DropdownSection
          items={navbarDropdownItems}
          title="Tus Acciones"
          showDivider
        >
          {(item: INavbarDropdown) => {
            return (
              <DropdownItem
                key={item.key}
                description={item.description}
                startContent={item.icon}
                color={item.key === "cerrar" ? "danger" : "default"}
                className={item.key === "cerrar" ? "text-danger" : ""}
              >
                {item.title}
              </DropdownItem>
            );
          }}
        </DropdownSection>

        <DropdownSection title="Panel Administrativo">
          <DropdownItem></DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
