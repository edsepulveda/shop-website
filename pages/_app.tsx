import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import nProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const progressStart = () => nProgress.start();
    const progressStop = () => nProgress.done();

    router.events.on("routeChangeStart", progressStart);
    router.events.on("routeChangeComplete", progressStop);
    router.events.on("routeChangeError", progressStop);

    //Cleanup function
    return () => {
      router.events.off("routeChangeStart", progressStart);
      router.events.off("routeChangeComplete", progressStop);
      router.events.off("routeChangeError", progressStop);
    };
  }, [router]);

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  );
}
