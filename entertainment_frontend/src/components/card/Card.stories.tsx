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
			title: "Beyond Earth",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
					large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
					medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
					large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
				},
			},
			year: 2019,
			category: "Movie",
			rating: "PG",
			isBookmarked: false,
			isTrending: true,
		},
	},
};

export const PrimaryNonTrending: Story = {
	args: {
		cardProps: {
			title: "Beyond Earth",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
					large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
					medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
					large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
				},
			},
			year: 2019,
			category: "Movie",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
	},
};
