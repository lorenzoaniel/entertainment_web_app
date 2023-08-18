import { StoryObj, Meta } from "@storybook/react";
import Auth from "./page";

type Story = StoryObj<typeof Auth>;

const meta: Meta<typeof Auth> = {
	title: "page/Auth",
	component: Auth,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
