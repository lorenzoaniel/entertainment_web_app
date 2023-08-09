import { StoryObj, Meta } from "@storybook/react";
import Searchbar from ".";

export type Story = StoryObj<typeof Searchbar>;

const meta: Meta<typeof Searchbar> = {
	title: "components/Searchbar",
	component: Searchbar,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
