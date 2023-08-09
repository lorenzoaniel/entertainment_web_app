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
					flex
        `
			)}
		>
			<div
				className={clsx(
					"home-page-layoutwrapper",
					`
						h-[44.9rem] w-fit
						flex flex-col justify-between items-center
					`
				)}
			>
				<Logo />
				<CredentialsForm />
			</div>
		</main>
	);
}
