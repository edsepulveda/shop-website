import {
  Card,
  CardHeader,
  Chip,
  CardBody,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { IProduct } from "@/utils/types";
import { FC, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductDetail } from "./ProductDetail";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const swapImagesOnHover = useMemo(() => {
    return isHover
      ? `products/${product.images[0]}`
      : `products/${product.images[1]}`;
  }, [isHover, product.images]);

  return (
    <div>
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
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isHover ? 0.8 : 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <Image
                  as={motion.img}
                  loading="lazy"
                  alt={product.title}
                  className="object-cover rounded-lg"
                  src={swapImagesOnHover}
                  width={300}
                  height={200}
                />
              </motion.div>
            </AnimatePresence>
            <h2 className="text-medium text-default-500 line-clamp-4 mt-5">
              {product.description}
            </h2>
          </div>

          <Button
            color="danger"
            variant="ghost"
            className="mt-5 text-sm"
            onPress={onOpen}
          >
            Más Información
          </Button>
        </CardBody>
      </Card>

      {isOpen && (
        <ProductDetail
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      )}
    </div>
  );
};
