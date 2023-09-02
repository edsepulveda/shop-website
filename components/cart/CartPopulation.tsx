import { IProduct } from "@/utils/types";
import {
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import { FC } from "react";
import NextLink from "next/link";
import { ItemCounter } from "../ui/ItemCounter";

interface CartProps {
  editable?: boolean;
  product: IProduct;
}

export const CartPopulation: FC<CartProps> = ({
  product,
  editable = false,
}) => {
  return (
    <div>
      <li className="flex py-6">
        <div className="h-24 w-24 lg:h-[12rem] lg:w-[12rem] lg:flex-shrink-0 overflow-hidden rounded-lg border pointer-events-none">
          <Image
            className="h-full w-full object-cover object-center"
            src={`products/${product.images[0]}`}
            alt={product.slug}
          />
        </div>
        <section className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex flex-col text-sm lg:text-base font-medium">
              <CardHeader className="lg:p-2">
                <Link
                  color="foreground"
                  as={NextLink}
                  href={product.slug}
                  className="text-danger-500 dark:text-danger-300 text-sm md:text-base lg:text-lg"
                >
                  {product.title}
                </Link>
              </CardHeader>
              <CardBody className="lg:p-2">
                <div className="flex flex-col justify-start lg:justify-between lg:flex-row gap-2 lg:gap-4">
                  <p>Precio: ${product.price}</p>
                  <div>
                    {editable && (
                      <Button variant="light" className="text-left">
                        Remove
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-between text-sm"></div>
              </CardBody>

              <CardFooter className="lg:p-2">
                <div>{editable ? <ItemCounter /> : <p>2 Items</p>}</div>
              </CardFooter>
            </div>
          </div>
        </section>
      </li>
    </div>
  );
};
