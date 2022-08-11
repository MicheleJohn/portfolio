import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="portfolio">
        <Main />
        <NextScript />
        <Script
          src="/theme.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
