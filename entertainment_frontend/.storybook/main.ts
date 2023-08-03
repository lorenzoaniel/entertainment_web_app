import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
	stories: [
		// "../src/**/*.mdx",
		"../src/app/**/*.stories.@(js|jsx|ts|tsx)",
		"../src/components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	// need this for assets
	staticDirs: ["../public", "../src"],
	// so that zustand store works in storybook
	webpackFinal: async (config, { configType }) => {
		config.resolve = config.resolve ?? {};
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "../src"),
		};

		return config;
	},
};
export default config;
