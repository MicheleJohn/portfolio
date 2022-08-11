import "../styles/globals.css";
import * as NextImage from "next/image";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: "it",
  locales: {
    en: "English",
    it: "Italiano",
  },
};

export const globalTypes = {
  darkMode: true,
};
