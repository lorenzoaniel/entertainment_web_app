import { StoryObj, Meta } from "@storybook/react";
import Home from "./page";

type Story = StoryObj<typeof Home>;

const meta: Meta<typeof Home> = {
	title: "page/Home",
	component: Home,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
