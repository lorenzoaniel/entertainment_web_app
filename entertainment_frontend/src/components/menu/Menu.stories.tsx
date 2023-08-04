import { StoryObj, Meta } from "@storybook/react";
import Menu from ".";

type Story = StoryObj<typeof Menu>;

const meta: Meta<typeof Menu> = {
	title: "components/Menu",
	component: Menu,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
