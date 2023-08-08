import clsx from "clsx";
import React, { ReactElement } from "react";
import Logo from "../logo";
import NavBtn from "../button/navBtn";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import AvatarPic from "../avatar";

const Menu: React.FC = () => {
	return (
		<NavigationMenu.Root
			className={clsx(
				"menu-root",
				`
          w-full h-[5.6rem] lg:h-[96rem] lg:w-[9.6rem]
          bg-blue-semidark
          flex flex-col justify-center lg:flex-row
          px-[1.6rem] md:py-[2.4rem]
          md:rounded-[1rem] lg:rounded-[2rem]
        `
			)}
		>
			<NavigationMenu.List
				className={clsx(
					"menu-root-list",
					`
            lg:h-full
            bg-transparent
            flex justify-between items-center lg:flex-col lg:items-center lg:justify-start
          `
				)}
			>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						<Logo />
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link>
						<div
							className={clsx(
								"menu-wrapper",
								`
                  w-[13.4rem] h-fit md:w-[17.3rem] lg:h-[20rem] lg:w-fit
                  flex justify-between lg:flex-col
                  lg:mt-[7.5rem] lg:mb-[56.2rem] 
                `
							)}
						>
							<NavBtn navType={"home"} />
							<NavBtn navType={"movie"} />
							<NavBtn navType={"tv"} />
							<NavBtn navType={"bookmark"} />
						</div>
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link>
						<AvatarPic />
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
	);
};

export default Menu;
