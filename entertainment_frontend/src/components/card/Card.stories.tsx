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
			thumbnailSrc: {
				small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
				medium: "./assets/thumbnails/beyond-earth/trending/medium.jpg",
				large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
			},
		},
	},
};

export const PrimaryNonTrending: Story = {
	args: {
		cardProps: {
			category: "Movie",
			year: 2023,
			title: "Community of Ours",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
			thumbnailSrc: {
				small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
				medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
				large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
			},
		},
	},
};
