import { StoryObj, Meta } from "@storybook/react";
import AvatarPic from ".";

type Story = StoryObj<typeof AvatarPic>;

const meta: Meta<typeof AvatarPic> = {
	title: "components/Avatar",
	component: AvatarPic,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
