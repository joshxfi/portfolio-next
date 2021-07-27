import { useEffect } from "react";
import type { AppProps } from "next/app";
import { HtmlHead } from "../components/HtmlHead";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <>
      <HtmlHead />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
