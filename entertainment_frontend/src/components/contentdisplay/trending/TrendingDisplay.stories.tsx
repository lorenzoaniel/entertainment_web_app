import { StoryObj, Meta } from "@storybook/react";
import TrendingDisplay from ".";
import testData from "@/app/api/testdata.json";

type Story = StoryObj<typeof TrendingDisplay>;

const meta: Meta<typeof TrendingDisplay> = {
	title: "components/contentdisplay/TrendingDisplay",
	component: TrendingDisplay,
	argTypes: {
		contentList: {
			control: "object", // This allows you to control the contentList prop as an object.
			description: "An array of ICard objects", // Add a suitable description.
			table: {
				type: {
					summary: "ICard[]",
					detail: "Array of ICard objects containing...",
				}, // This will also show the type in the props table.
			},
		},
	},
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {
	args: {
		contentList: testData,
	},
};
