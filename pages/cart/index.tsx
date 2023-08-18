import { OrderSummary } from "@/components/cart/OrderSummary";
import Layout from "@/components/layouts/Layout";


export default function CartHome() {
  return (
    <Layout title="Style Connect | Carrito" description="Carrito de compras">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Carrito de Compras
      </h1>

      <section className="grid mt-5 gap-5 lg:grid-cols-4 md:grid-cols-2">
        <div className="bg-blue-500 col-span-4 lg:col-span-3 md:col-span-2 h-[60vh]">
          {/* First part Products Cards */}
        </div>
        <div className="col-span-4 lg:col-span-1 md:col-span-2 h-auto">
          {/* Checkout Card */}
          <OrderSummary />
        </div>
      </section>
    </Layout>
  );
}
