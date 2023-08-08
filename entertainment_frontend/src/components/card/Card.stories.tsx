import { StoryObj, Meta } from "@storybook/react";
import Card from ".";

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
	title: "components/Card",
	component: Card,
	argTypes: {
		cardProps: {
			defaultValue: { title: "test" },
		},
	},
	tags: ["autodocs"],
};

export default meta;
export const PrimaryTrending: Story = {
	args: {
		cardProps: {
			category: "Movie",
			year: 2023,
			title: "Trending Title Test",
			rating: "PG",
			isBookmarked: false,
			isTrending: true,
			thumbnailSrc: "./assets/thumbnails/beyond-earth/trending/small.jpg",
		},
	},
};
