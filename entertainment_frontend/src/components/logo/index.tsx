import React from "react";
import clsx from "clsx";
import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<div>
			<Image src={"./assets/thumbnails/logo.svg"} width={33} height={27} alt={"logo"} priority />
		</div>
	);
};

export default Logo;
