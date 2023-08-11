import Menu from "@/components/menu";
import Searchbar from "@/components/searchbar";
import clsx from "clsx";
import React from "react";

export default function LoggedIn({ children }: { children: React.ReactNode }) {
	return (
		<section
			className={clsx(
				"loggedin-home",
				`
          w-full h-full
          bg-transparent 
        `
			)}
		>
			<Menu />
			<Searchbar />
			{children}
		</section>
	);
}
