import type { AppProps } from "next/app";
import { HtmlHead } from "../components/HtmlHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HtmlHead />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
