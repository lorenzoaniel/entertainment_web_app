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
					${
						cardProps.isTrending
							? "w-[24rem] h-[14rem] md:h-[23rem] md:w-[47rem]"
							: "w-[16.4rem] h-[15.4rem] md:h-[19.2rem] md:w-[22rem] lg:h-[22.6rem] lg:w-[28rem]"
					}
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
				src={
					cardProps.isTrending
						? cardProps.thumbnail.trending?.large || cardProps.thumbnail.regular.large
						: cardProps.thumbnail.regular.large
				}
				width={cardProps.isTrending ? 240 : 164}
				height={cardProps.isTrending ? 140 : 110}
				alt={cardProps.title + " img"}
			/>
			<BookmarkBtn isBookmarked={cardProps.isBookmarked} isTrending={cardProps.isTrending} />
			<div
				className={clsx(
					cardProps.title + "-card-desc-wrapper",
					`
						${
							cardProps.isTrending
								? "col-start-1 col-end-5 row-start-3 row-end-4"
								: "col-start-1 col-end-5 row-start-4 row-end-4"
						}
						flex flex-col items-start justify-end
						${cardProps.isTrending ? "pl-[1.6rem] pb-[1.6rem]" : "mt-[0.8rem]"}
					`
				)}
			>
				<p
					className={clsx(
						cardProps.title + "-card-desc-wrapper-tags",
						`
							w-[13.2rem] md:w-[15rem]
							flex items-center justify-between
							text-body-s text-white-pure ${
								cardProps.isTrending
									? "text-[1.2rem] md:text-body-m"
									: "text-[1.1rem] md:text-body-s"
							} 
							opacity-75
						`
					)}
				>
					<time dateTime={`${cardProps.year}`}>{cardProps.year}</time>
					&bull;
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
					<span className={clsx(cardProps.title + "-card-desc-wrapper-tags-categorytype")}>
						{cardProps.category === "Movie" ? "Movie" : "TV Series"}
					</span>
					&bull;
					<span className={clsx(cardProps.title + "-card-desc-wrapper-tags-rating")}>
						{" " + cardProps.rating}
					</span>
				</p>
				<h2
					className={clsx(
						cardProps.title + "-card-desc-wrapper-title",
						`
							${
								cardProps.isTrending
									? "text-body-m md:text-heading-s"
									: "text-body-m text-[1.4rem] font-medium md:text-heading-xs"
							}
							font-medium leading-normal text-white-pure
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
