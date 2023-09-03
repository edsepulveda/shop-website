import Layout from "@/components/layouts/Layout";
import { SelectorIcon } from "@/components/ui/icons/Icons";
import { Country } from "@/utils/types";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { ChangeEvent, useState } from "react";

export const getStaticProps: GetStaticProps<{
  country: Country[];
}> = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const country = await res.json();
  return { props: { country } };
};

const CheckoutPage = ({
  country,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const availableCountries = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Perú",
    "Surinam",
    "Uruguay",
    "Venezuela",
  ];

  const filteredCountry = country.filter((coun) =>
    availableCountries.includes(coun.name.common)
  );

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
                      <div className="grid">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="grid">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid w-full">
                      <div className="grid">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid w-full">
                      <div className="grid">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
                      <div className="grid">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="grid">
                        <Select
                          items={filteredCountry}
                          label="País"
                          disableSelectorIconRotation
                          selectorIcon={<SelectorIcon />}
                          value={selectedCountry}
                          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            setSelectedCountry(e.target.value);
                          }}
                          placeholder="Selecciona un pais"
                        >
                          {(coun: Country) => (
                            <SelectItem
                              key={coun.cca2}
                              startContent={
                                <Avatar
                                  className="w-6 h-6"
                                  src={coun.flags.svg}
                                />
                              }
                              value={coun.name.common}
                            >
                              {coun.name.common}
                            </SelectItem>
                          )}
                        </Select>
                      </div>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
