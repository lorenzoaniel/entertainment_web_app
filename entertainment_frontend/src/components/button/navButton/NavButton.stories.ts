import { StoryObj, Meta } from "@storybook/react";
import NavButton from ".";

type Story = StoryObj<typeof NavButton>;

const meta: Meta<typeof NavButton> = {
	title: "components/button/NavButton",
	component: NavButton,
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
