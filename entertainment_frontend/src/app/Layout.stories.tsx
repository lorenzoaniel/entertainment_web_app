import { StoryObj, Meta } from "@storybook/react";
import RootLayout from "./page";

type Story = StoryObj<typeof RootLayout>;

const meta: Meta<typeof RootLayout> = {
	title: "page/RootLayout",
	component: RootLayout,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
