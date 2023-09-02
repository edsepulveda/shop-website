import { ArrowBackIcon, HomeIcon } from "@/components/ui/icons/Icons";
import { useRouter } from "next/navigation";
import { Button, Link } from "@nextui-org/react";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col items-center max-w-lg mx-auto text-center">
          <p className="text-3xl lg:text-4xl font-medium text-danger-500">
            404 Error
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold">
            Página no encontrada
          </h1>
          <p className="mt-4 text-gray-500">
            Buscamos por tierra y mar la página que estas buscando,
            lamentablemente, dicha página no existe
          </p>

          {/* Buttons */}
          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto justify-center">
            <Button
              variant="ghost"
              color="default"
              onPress={() => router.back()}
              startContent={<ArrowBackIcon />}
            >
              Volver
            </Button>
            <Button
              onPress={() => router.push("/")}
              color="danger"
              startContent={<HomeIcon />}
            >
              Ir hacia el inicio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
