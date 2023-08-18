import { initialData } from "@/utils/DummyData";
import convertNumber from "@/utils/formatNumber";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { FC, useState } from "react";
import { ProductSlider } from "./ProductSlider";
import { ItemCounter } from "../ui/ItemCounter";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export const ProductDetail: FC<Props> = ({ isOpen, onOpenChange, onClose }) => {
  const firstProduct = initialData?.products[0];

  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      size="4xl"
    >
      <ModalContent className="relative z-10">
        {(_onClose) => (
          <div>
            <ModalHeader className="flex flex-col gap-2">
              {firstProduct.title}
            </ModalHeader>
            <ModalBody className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <section className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="overflow-hidden sm:col-span-4 lg:col-span-5 mx-auto">
                  <ProductSlider images={firstProduct.images} />
                </div>

                <div className="sm:col-span-8 lg:col-span-7 text-left z-20 bg-white dark:bg-default-50">
                  <h2 className="text-sm lg:text-2xl font-bold text-gray-900 sm:pr-12 dark:text-white">
                    Precio: {convertNumber(firstProduct.price)}
                  </h2>
                  <section className="mt-2">
                    <p className="text-sm lg:text-xl text-gray-900 dark:text-white">
                      En Stock:{" "}
                      <span className="font-bold">{firstProduct.inStock}</span>
                    </p>
                  </section>
                  <section className="mt-3">
                    <h4 className="sr-only">Sizes</h4>
                    <div className="flex items-center space-x-3">
                      <RadioGroup
                        label="Selecciona tu Talla"
                        orientation="horizontal"
                        size="sm"
                        value={size}
                        onValueChange={setSize}
                        color="danger"
                      >
                        {firstProduct.sizes.map((size) => (
                          <Radio value={size} key={size}>
                            {size}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>
                    <div>
                      <ItemCounter />
                    </div>
                    <h4 className="text-lg lg:text-2xl font-bold mt-4">
                      Descripción
                    </h4>
                    <p className="line-clamp-4 lg:line-clamp-none mt-3 xs:text-xs sm:text-sm lg:text-base max-w-prose">
                      {firstProduct.description}
                    </p>
                  </section>
                  <Button
                    className="w-full mt-5 mb-5"
                    color="danger"
                    isDisabled={!size}
                  >
                    {size === ""
                      ? "Seleccione una talla"
                      : "Agregar al carrito"}
                  </Button>
                </div>
              </section>
            </ModalBody>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};
