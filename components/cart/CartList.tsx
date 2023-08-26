import { IProduct } from "@/utils/types";
import { Card } from "@nextui-org/react";
import { FC } from "react";
import { CartPopulation } from "./CartPopulation";

interface CartListProps {
  editable?: boolean;
  items: IProduct[];
}

export const CartList: FC<CartListProps> = ({ editable = false, items }) => {
  return (
    <Card className="p-4 dark:bg-gray-900 flex flex-1">
      <ul
        role="products"
        className="-my-6 divide-y divide-gray-200 dark:divide-gray-600"
      >
        {items.map((product, idx) => (
          <CartPopulation key={idx} product={product} editable={editable} />
        ))}
      </ul>
    </Card>
  );
};
