import { ICard } from "@/interfaces/ICard";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import BookmarkBtn from "../button/bookmarkBtn";

interface IProps {
	cardProps: ICard;
}

const Card: React.FC<IProps> = ({ cardProps }) => {
	return (
		<article
			className={clsx(
				cardProps.title + "-card",
				`
					w-[24rem] h-[14rem] md:h-[23rem] md:w-[47rem]
					grid grid-cols-4 grid-rows-3
				`
			)}
		>
			<Image
				className={clsx(
					cardProps.title + "-card-thumbnail",
					`
						h-full w-full
						col-start-1 col-end-5 row-start-1 row-end-4 z-[-1]
						rounded-[0.8rem]
					`
				)}
				src={cardProps.thumbnailSrc.large}
				width={cardProps.isTrending ? 240 : 164}
				height={cardProps.isTrending ? 140 : 110}
				alt={cardProps.title + " img"}
			/>
			<BookmarkBtn isBookmarked={cardProps.isBookmarked} />
			<div
				className={clsx(
					cardProps.title + "-card-desc-wrapper",
					`
						col-start-1 col-end-5 row-start-3 row-end-4
						flex flex-col items-start justify-end
						pl-[1.6rem] pb-[1.6rem]
					`
				)}
			>
				<p
					className={clsx(
						cardProps.title + "-card-desc-wrapper-tags",
						`
							w-[13.2rem] md:w-[15rem]
							flex items-center justify-between
							text-body-s text-white-pure md:text-body-m
							opacity-75
						`
					)}
				>
					<time dateTime={`${cardProps.year}`}>{cardProps.year}</time> &bull;
					<Image
						className={clsx(
							cardProps.title + "-card-desc-wrapper-tags-categoryicon",
							`
								w-[1.2rem] h-[1.2rem] //need this since height goes to 19px without it
							`
						)}
						src={`./assets/icon-category-${cardProps.category === "Movie" ? "movie" : "tv"}.svg`}
						width={12}
						height={12}
						alt={cardProps.title + "-card-desc-wrapper-tags-categoryicon"}
					></Image>
					{cardProps.category === "Movie" ? "Movie" : "TV Series"} &bull;
					{" " + cardProps.rating}
				</p>
				<h2
					className={clsx(
						cardProps.title + "-card-desc-wrapper-title",
						`
							text-body-m font-medium leading-normal text-white-pure md:text-heading-s
						`
					)}
				>
					{cardProps.title}
				</h2>
			</div>
		</article>
	);
};

export default Card;
