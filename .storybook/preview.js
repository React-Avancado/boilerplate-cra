import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/styles/global";
import StoryRouter from "storybook-react-router";

addDecorator(StoryRouter());

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
