'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import btnStyles from "../../app/styles/buttons.module.css";

interface NavigationLinkProps {
	href: string;
	label: string;
	hasMargin?: boolean;
}
const NavigationLink: React.FC<NavigationLinkProps> = ({
	href,
	label,
	hasMargin = true,
}) => {
	const pathname = usePathname();
	const cleanedPathname = pathname.replace(/\/$/, "");
	const cleanedHref = href.replace(/\/$/, "");
	const isActive = cleanedPathname === cleanedHref;

	return (
		<li
			className={`${btnStyles["navItem"]} ${
				hasMargin ? "sm:mb-20 md:mb-0 md:mr-40" : ""
			} cursor-pointer ${isActive ? btnStyles["active"] : ""}`}>
			<Link href={href}>{label}</Link>
		</li>
	);
};

export default NavigationLink