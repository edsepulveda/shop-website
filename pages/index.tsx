import Layout from "@/components/layouts/Layout";
import { initialData } from "@/utils/DummyData";
import { ProductList } from "@/components/products/ProductList";

export default function Home() {
  return (
    <Layout title="Teslo Shop | Home" description="Homepage">
      <h1 className="scroll-m-20 text-4xl lg:text-5xl font-bold tracking-tight">
        Style Connect
      </h1>
      <p className="leading-7">Items en la tienda</p>

      <div className="mt-10">
        <ProductList product={initialData?.products} />
      </div>
    </Layout>
  );
}
