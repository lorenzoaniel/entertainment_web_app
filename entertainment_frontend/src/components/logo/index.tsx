import React from "react";
import clsx from "clsx";
import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<div className={clsx("logo")}>
			<Image
				className={clsx(
					"logo-img",
					`
						md:w-[3.2rem] md:h-[2.56rem]
					`
				)}
				src={"./assets/logo.svg"}
				width={25}
				height={20}
				alt={"logo"}
				priority
			/>
		</div>
	);
};

export default Logo;
