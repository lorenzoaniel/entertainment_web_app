import Logo from "@/components/logo";
import clsx from "clsx";

export default function Home() {
	return (
		<main
			className={clsx(
				"home-page",
				`
          bg-transparent
        `
			)}
		>
			<Logo />
		</main>
	);
}
