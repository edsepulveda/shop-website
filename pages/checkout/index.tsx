import { OrderSummary } from "@/components/cart/OrderSummary";
import Layout from "@/components/layouts/Layout";
import { Card, CardHeader, CardBody, Input } from "@nextui-org/react";
const CheckoutPage = () => {
  return (
    <Layout title="Checkout" description="Página de checkout para productos">
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-14 mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="relative">
            <Card
              className="flex flex-col border p-4 lg:p-10 dark:border-gray-700"
              shadow="md"
            >
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Dirección de facturación
                </h2>
              </CardHeader>
              <CardBody>
                {/* LATER CHANGE THIS: FORM COMPONENT */}
                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
          <div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
