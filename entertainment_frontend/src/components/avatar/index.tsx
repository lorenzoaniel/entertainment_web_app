import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import clsx from "clsx";

const AvatarPic: React.FC = () => {
	// SELECTOR
	const selector = {
		imgSrc: "./assets/image-avatar.png",
	};

	return (
		<Avatar.Root
			className={clsx(
				"avatarpic",
				`
          h-[2.4rem] w-[2.4rem] md:h-[3.2rem] md:w-[3.2rem] lg:w-[4rem] lg:h-[4rem]
          flex justify-center items-center
        `
			)}
		>
			<Avatar.Image
				src={selector.imgSrc}
				className={clsx("avatarpic-image", `h-full w-full object-cover`)}
			/>
			<Avatar.Fallback />
		</Avatar.Root>
	);
};

export default AvatarPic;
