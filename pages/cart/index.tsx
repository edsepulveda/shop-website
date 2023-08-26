import { CartList } from "@/components/cart/CartList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import Layout from "@/components/layouts/Layout";
import { initialData } from "@/utils/DummyData";
import { IProduct } from "@/utils/types";

export default function CartHome() {
  const threeProducts: IProduct[] = [
    initialData?.products[0],
    initialData?.products[1],
  ];

  return (
    <Layout title="Style Connect | Carrito" description="Carrito de compras">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Carrito de Compras
      </h1>

      <section className="grid grid-cols-4 lg:grid-cols-4 lg:gap-4 h-full mt-5">
        <div className="col-span-4 lg:col-span-3 h-[60vh] overflow-y-auto lg:overflow-y-visible">
          <CartList items={threeProducts} editable />
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
