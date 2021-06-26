import { Story, Meta } from "@storybook/react";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  args: {
    description: "description default",
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  description: "description basic",
};

export const Default: Story = (args) => <Main {...args} />;
