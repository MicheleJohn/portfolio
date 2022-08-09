import "../styles/globals.css";
import * as NextImage from "next/image";
import { MemoryRouter } from "react-router-dom";
import Style from "./style";

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <Style />
      <Story />
    </MemoryRouter>
  ),
];

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
};
