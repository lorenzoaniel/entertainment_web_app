import { StoryObj, Meta } from "@storybook/react";
import Logo from ".";

type Story = StoryObj<typeof Logo>;

const meta: Meta<typeof Logo> = {
	title: "components/Logo",
	component: Logo,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
