import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface IProps {
	navType: "home" | "movie" | "tv" | "bookmark";
}

const NavButton: React.FC<IProps> = ({ navType }) => {
	const iconSrc: { [key: string]: string } = {
		home: "./assets/icon-nav-home.svg",
		movie: "./assets/icon-nav-movies.svg",
		tv: "./assets/icon-nav-tv-series.svg",
		bookmark: "./assets/icon-nav-bookmark.svg",
	};

	return (
		<button className={clsx("navbutton")}>
			<Image
				className={clsx(
					"navbutton-img",
					`
            md:w-[2rem] md:h-[2rem]
          `
				)}
				src={iconSrc[navType]}
				width={16}
				height={16}
				alt={`${navType} + nav-icon`}
			/>
		</button>
	);
};

export default NavButton;
