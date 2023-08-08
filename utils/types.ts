import React from "react";

export type Items = {
  id: number;
  name: string;
  pathname: string;
};

export interface IProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: "men" | "women" | "kid" | "unisex";
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";

export interface INavbarDropdown {
  key: string
  title: string;
  description: string;
  icon?: React.ReactNode;
}
