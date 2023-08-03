import CredentialsForm from "@/components/forms";
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
			<CredentialsForm />
		</main>
	);
}
