import { Inter } from "next/font/google";
import { Fragment } from "react";
import Head from "next/head";
import NavbarPage from "../ui/Navbar";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
  title,
  description,
  imageUrl,
}: Props) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:title" content={description} />
      </Head>

      <section className={inter.className}>
        <header aria-label="Navbar" className="sticky">
          <nav>
            <NavbarPage />
          </nav>
        </header>

        <main className="my-[80px] mx-auto max-w-[1440px] py-0 px-[30px]">
          {children}
        </main>

        <footer>{/* FOOTER */}</footer>
      </section>
    </Fragment>
  );
}
