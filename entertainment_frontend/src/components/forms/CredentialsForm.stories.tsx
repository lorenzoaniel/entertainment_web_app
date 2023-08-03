import { StoryObj, Meta } from "@storybook/react";
import CredentialsForm from ".";

type Story = StoryObj<typeof CredentialsForm>;

const meta: Meta<typeof CredentialsForm> = {
	title: "components/CredentialsForm",
	component: CredentialsForm,
	tags: ["autodocs"],
};

export default meta;
export const Primary: Story = {};
