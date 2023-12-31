import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import {
  AdminIcon,
  CreditCardIcon,
  FolderIcon,
  ProductIcon,
  ProfileIcon,
  SignOut,
  UserIcon,
} from "../icons/Icons";
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
    <Dropdown placement="bottom-end">
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
          <p className="font-semibold">Usuario: Pepito</p>
          <p className="font-semibold">Correo: zoey@example.com</p>
        </DropdownItem>

        <DropdownSection
          items={navbarDropdownItems}
          title="Tus Acciones"
          showDivider
        >
          {/* @ts-ignore */}
          {(item: INavbarDropdown) => {
            return (
              <DropdownItem
                key={item.title}
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
          <DropdownItem
            key="dashboard"
            description="Visualiza información general sobre la tienda"
            startContent={<AdminIcon />}
          >
            Dashboard
          </DropdownItem>
          <DropdownItem
            key="productos"
            description="Ve todos los productos de la tienda"
            startContent={<ProductIcon />}
          >
            Productos
          </DropdownItem>
          <DropdownItem
            key="ordenes"
            description="Ve las ordenes que han sido creadas"
            startContent={<FolderIcon />}
          >
            Ordenes
          </DropdownItem>
          <DropdownItem
            key="usuarios"
            description="Ve los usuarios registrados"
            startContent={<UserIcon />}
          >
            Usuarios
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
