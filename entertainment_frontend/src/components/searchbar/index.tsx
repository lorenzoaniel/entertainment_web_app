import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Searchbar: React.FC = () => {
	return (
		<div
			className={clsx(
				"searchbar-wrapper",
				`
          w-fit h-fit
          flex items-center
        `
			)}
		>
			<Image
				className={clsx(
					"searchbar-wrapper-searchicon",
					`
            md:h-[3.2rem] md:w-[3.2rem]
            mr-[1.6rem]
          `
				)}
				src={"./assets/icon-search.svg"}
				width={24}
				height={24}
				alt={"searchbar-searchicon"}
			/>
			<input
				className={clsx(
					"searchbar-wrapper-input",
					`
            w-[21rem] md:w-[33rem]
            bg-transparent
            
            text-body-m md:text-heading-m
            placeholder:text-body-m md:placeholder:text-heading-m
          `
				)}
				type="search"
				placeholder="Search for movies or TV series"
			/>
		</div>
	);
};

export default Searchbar;
