import { StoryObj, Meta } from "@storybook/react";
import BookmarkBtn from ".";

type Story = StoryObj<typeof BookmarkBtn>;

const meta: Meta<typeof BookmarkBtn> = {
	title: "components/Button/BookmarkBtn",
	component: BookmarkBtn,
	tags: ["autodocs"],
};

export default meta;
export const PrimaryTrending: Story = {};
