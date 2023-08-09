import { StoryObj, Meta } from "@storybook/react";
import NavBtn from ".";

type Story = StoryObj<typeof NavBtn>;

const meta: Meta<typeof NavBtn> = {
	title: "components/button/NavBtn",
	component: NavBtn,
	argTypes: {
		navType: {
			control: {
				type: "select",
			},
			options: ["home", "movie", "tv", "bookmark"],
		},
	},
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
