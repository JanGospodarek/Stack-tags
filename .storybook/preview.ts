import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { NextUIProvider } from "@nextui-org/react";
/* TODO: update import for your custom Material UI themes */
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { ReactNode } from "react";
import "../src/index.css";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      Provider: NextUIProvider,
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
