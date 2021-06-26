import { Story, Meta } from "@storybook/react";
import Menu from ".";

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: Story = () => <Menu />;
