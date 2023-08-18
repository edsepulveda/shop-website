import { Button } from "@nextui-org/react";
import { MinusIcon, PlusIcon } from "./icons/Icons";
import { useState } from "react";

export const ItemCounter = () => {
  const [counter, setCounter] = useState<number>(1);

  return (
    <div className="mt-2.5">
      <p className="font-medium">Cantidad</p>
      <div className="flex justify-start items-center gap-4">
        <Button
          onPress={() => setCounter((prev) => prev - 1)}
          isIconOnly
          variant="light"
        >
          <MinusIcon />
        </Button>
        <h3>{counter}</h3>
        <Button
          onPress={() => setCounter((prev) => prev + 1)}
          isIconOnly
          variant="light"
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
