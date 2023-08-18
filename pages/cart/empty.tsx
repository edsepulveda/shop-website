import Layout from "@/components/layouts/Layout";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <Layout title="Style Connect | Carrito" description="Carrito de compras">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Carrito de Compras
      </h1>

      <section className="flex flex-row items-center justify-center w-full mt-5">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 scroll-m-20 text-4xl md:text-5xl tracking-tight">
              😓 Tu carrito esta vacio
            </h1>
            <Button as={Link} color="danger" variant="bordered" href="/">
              Ir a Comprar
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
