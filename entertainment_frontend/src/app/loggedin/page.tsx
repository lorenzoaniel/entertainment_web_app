import Menu from "@/components/menu";
import Searchbar from "@/components/searchbar";
import clsx from "clsx";
import React from "react";

export default function LoggedIn({ children }: { children: React.ReactNode }) {
	return (
		<main
			className={clsx(
				"loggedin-home",
				`
          w-full h-full
          bg-transparent
					flex flex-col lg:grid
					lg:grid-cols-[13rem_1fr] lg:grid-rows-1
					gap-y-[2.6rem] md:gap-y-[3.4rem] lg:gap-y-0
        `
			)}
		>
			<Menu />
			<Searchbar />
			{children}
		</main>
	);
}
