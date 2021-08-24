import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
