import { StoryObj, Meta } from "@storybook/react";
import RootLayout from "./layout";
import Auth from "./page";

type Story = StoryObj<typeof RootLayout>;

const meta: Meta<typeof RootLayout> = {
	title: "page/RootLayout",
	component: RootLayout,
	tags: ["autodocs"],
};

export default meta;
export const AuthPage: Story = {
	render: () => {
		return (
			<RootLayout>
				<Auth />
			</RootLayout>
		);
	},
};
