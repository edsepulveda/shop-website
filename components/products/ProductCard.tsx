import {
  Card,
  CardHeader,
  Chip,
  CardBody,
  Button,
  Image,
} from "@nextui-org/react";
import { IProduct } from "@/utils/types";
import { FC } from "react";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card className="p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Chip className="text-tiny" color="danger" variant="bordered">
          {product.type.toLocaleUpperCase()}
        </Chip>
        <small className="text-default-500 mt-5">
          En Stock: {product.inStock}
        </small>
        <h4 className="font-bold text-medium lg:text-lg">{product.title}</h4>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        <div className="flex-grow">
          <Image
            alt={product.title}
            className="object-cover rounded-lg"
            src={`products/${product.images[1]}`}
            width={300}
            height={200}
          />
          <h2 className="text-medium text-default-500 line-clamp-4 mt-5">
            {product.description}
          </h2>
        </div>

        <Button color="danger" variant="ghost" className="mt-5 text-sm">
          Más Información
        </Button>
      </CardBody>
    </Card>
  );
};
