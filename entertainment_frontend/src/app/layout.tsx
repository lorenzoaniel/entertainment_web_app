import { clsx } from "clsx";
import "@/style/globals.css";
import { Outfit } from "next/font/google";

const outfitFont = Outfit({
	weight: ["300", "500"],
	subsets: ["latin"],
	variable: "--font-outfit",
});

export const metadata = {
	title: "Entertainment-Web-App",
	description: "Netflix style clone web app developed by Mikhail Lorenzo Aniel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx("body", outfitFont.variable)}>{children}</body>
		</html>
	);
}
