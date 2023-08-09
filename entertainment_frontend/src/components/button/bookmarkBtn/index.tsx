import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface IProps {
	isBookmarked: boolean;
	isTrending: boolean;
}

const BookmarkBtn: React.FC<IProps> = ({ isBookmarked, isTrending }) => {
	return (
		<button
			className={clsx(
				"bookmarkbtn",
				`
          w-[3.2rem] h-[3.2rem]
          rounded-full
          bg-blue-dark opacity-50
          flex justify-center items-center
          justify-self-end
          col-start-4 col-end-4 row-start-1 row-end-1
          ${
						isTrending
							? "mt-[0.8rem] mr-[0.8rem] md:mt-[1.6rem] md:mr-[2.4rem]"
							: "mt-[0.8rem] mr-[0.8rem] md:mt-[1.4rem] md:mr-[1.4rem]"
					}
        `
			)}
		>
			<Image
				src={isBookmarked ? "./assets/icon-bookmark-full.svg" : "./assets/icon-bookmark-empty.svg"}
				width="12"
				height="14"
				alt={"bookmarkbtn-bookmark"}
			/>
		</button>
	);
};

export default BookmarkBtn;
