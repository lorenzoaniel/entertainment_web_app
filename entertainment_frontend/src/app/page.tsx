import CredentialsForm from "@/components/forms";
import Logo from "@/components/logo";
import { _page_mixins } from "@/style/mixins/_page_mixins";
import clsx from "clsx";

export default function Auth() {
	return (
		<main
			className={clsx(
				"home-page",
				`
					${_page_mixins.default}
          bg-transparent
					flex justify-center items-start
        `
			)}
		>
			<div
				className={clsx(
					"home-page-layoutwrapper",
					`
						h-fit w-fit
						flex flex-col justify-between items-center gap-[5.84rem] md:gap-[7.24rem] lg:gap-[8.3rem]
						mt-[4.8rem]
					`
				)}
			>
				<Logo />
				<CredentialsForm />
			</div>
		</main>
	);
}
