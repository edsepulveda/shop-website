import { OrderSummary } from "@/components/cart/OrderSummary";
import Layout from "@/components/layouts/Layout";
import { initialData } from "@/utils/DummyData";
import { IProduct } from "@/utils/types";
import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Link,
  Divider,
  CardHeader,
  Button,
} from "@nextui-org/react";
import NextLink from "next/Link";

export default function CartHome() {
  const threeProducts: IProduct[] = [
    initialData?.products[0],
    initialData?.products[1],
    initialData.products[2],
    initialData.products[3],
  ];

  return (
    <Layout title="Style Connect | Carrito" description="Carrito de compras">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Carrito de Compras
      </h1>

      <section className="grid grid-cols-4 lg:grid-cols-4 lg:gap-4 h-full mt-5">
        <div className="col-span-4 lg:col-span-3 h-[60vh] overflow-y-auto lg:overflow-y-visible">
          <Card className="p-4 dark:bg-gray-900">
            <ul role="products" className="-my-6 divide-y divide-gray-200">
              {threeProducts.map((product, idx) => (
                <li key={idx} className="flex py-6">
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
                        <CardHeader>
                          <Link
                            color="foreground"
                            as={NextLink}
                            href={product.slug}
                            className="text-danger-500 dark:text-danger-300"
                          >
                            {product.title}
                          </Link>
                        </CardHeader>
                        <CardBody>
                          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                            <p>Precio: ${product.price}</p>
                            <p className="uppercase">{product.type}</p>
                          </div>

                          <div className="flex flex-1 items-center justify-between text-sm">
                            <p>Stock: {product.inStock}</p>
                            <div className="flex justify-center items-center">
                              <Button variant="light" className="self-center">
                                Remove
                              </Button>
                            </div>
                          </div>
                        </CardBody>

                        <CardFooter>
                          <p>Hello</p>
                        </CardFooter>
                      </div>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="col-span-4 lg:col-span-1 h-[60vh]">
          {/* Checkout Card */}
          <div className="mt-5 lg:mt-0">
            <OrderSummary />
          </div>
        </div>
      </section>
    </Layout>
  );
}
