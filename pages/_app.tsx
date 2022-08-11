import "../styles/globals.css";
import "../styles/custom.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../next-i18next.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
