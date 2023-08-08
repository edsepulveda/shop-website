import { IProduct } from "@/utils/types";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface Props {
  product: IProduct[];
}

export const ProductList: FC<Props> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {product.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};
