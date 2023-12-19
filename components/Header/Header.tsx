import React from "react";
import Image from "next/image";
import logo from "../../public/Assets/logo.png";
import BurgerMenu from "./BurgerMenu";
import NavigationLink from "./NavigationLink";

interface NavigationLinkProps {
	href: string;
	label: string;
	hasMargin?: boolean;
}

const links: NavigationLinkProps[] = [
	{ href: "/", label: "Главная" },
	{ href: "/technology", label: "Технология" },
	{ href: "/schedule", label: "График полетов" },
	{ href: "/guarantees", label: "Гарантии" },
	{ href: "/company", label: "О компании" },
	{ href: "/contacts", label: "Контакты", hasMargin: false },
];

const Header: React.FC = () => {
	return (
		<div className="sm:flex sm:justify-between sm:items-center md:flex-col lg:flex-row pt-24 pb-40">
			<Image
				src={logo}
				alt="logo"
				className="sm:w-150 md:w-200 lg:w-312"
			/>
			<BurgerMenu>
				<ul className="flex flex-col text-25 font-Museo text-black font-medium leading-22 items-center">
					{links.map((link) => (
						<NavigationLink key={link.href} {...link} />
					))}
				</ul>
			</BurgerMenu>
			<div className="exsm:hidden sm:hidden md:block md:justify-center">
				<ul className="flex text-16 font-Museo text-nav font-medium leading-22 items-center">
					{links.map((link) => (
						<NavigationLink key={link.href} {...link} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Header;
