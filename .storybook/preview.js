
import React from "react";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";

export const decorators = [
  Story => (
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}