import { StoryObj, Meta } from "@storybook/react";
import LoggedIn from "./page";

type Story = StoryObj<typeof LoggedIn>;

const meta: Meta<typeof LoggedIn> = {
	title: "page/LoggedIn",
	component: LoggedIn,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
