import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const OrderSummary = () => {
  const router = useRouter();

  return (
    <aside className="lg:fixed lg:w-96">
      <Card className="bg-slate-200 dark:bg-slate-900 p-4">
        <CardHeader className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Order Summary
        </CardHeader>
        {/* Flex items */}
        <CardBody className="flex gap-x-10 gap-y-6 flex-wrap md:gap-x-16 dark:text-white">
          <div className="flex flex-col gap-y-4 mt-2.5">
            <section className="flex justify-between items-center">
              <p>Subtotal</p>
              <p className="font-bold">$99</p>
            </section>
            <Divider />
            <section className="flex justify-between items-center">
              <p>Subtotal</p>
              <p className="font-bold">$99</p>
            </section>
            <Divider />
            <section className="flex justify-between items-center">
              <p>Subtotal</p>
              <p className="font-bold">$99</p>
            </section>
            <Divider />

            <div className="flex justify-between items-center">
              <p className="font-bold">Order Total</p>
              <p className="font-bold">$99</p>
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex flex-col gap-5">
          <Button
            className="inline-flex w-full"
            color="primary"
            onPress={() => router.push("/checkout")}
          >
            Checkout
          </Button>
        </CardFooter>
      </Card>
    </aside>
  );
};
