import { ICard } from "@/interfaces/card/ICard";
import { createCard } from "@/lib/createCard";
import clsx from "clsx";
import React from "react";

interface IProps {
	contentList: ICard[];
}

const TrendingDisplay: React.FC<IProps> = ({ contentList }) => {
	return (
		<section
			className={clsx(
				"trending-display",
				`
          h-fit w-full
          flex flex-col
          gap-y-[1.6rem]
          overflow-x-scroll
        `
			)}
		>
			<span
				className={clsx(
					"trending-display-title",
					`
            text-body-s text-[2rem] text-white-pure
          `
				)}
			>
				Trending
			</span>
			<div
				className={
					(clsx("trending-display-contentwrapper"),
					`
            w-fit
            flex
            gap-x-[1.6rem]
          `)
				}
			>
				{createCard(contentList, true)}
			</div>
		</section>
	);
};

export default TrendingDisplay;
