"use client";

import { Fugaz_One } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggler from "../Theme/Themetoggler";

const fugaz_one = Fugaz_One({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	const [show_menu, setShowMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setScrolled(false);
				return;
			}
			setScrolled(window.scrollY !== 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!show_menu) {
			document.body.style.overflow = "auto";
			return;
		} else {
			document.body.style.overflow = "hidden";
		}
	}, [show_menu]);

	return (
		<nav
			className={`sticky top-0 bg-transparent backdrop-blur-md border-b border-b-slate-300 dark:border-b dark:border-b-zinc-600 z-[100] ${
				scrolled
					? "shadow-lg shadow-slate-300 dark:shadow-lg dark:shadow-zinc-800"
					: ""
			}`}
		>
			<div className="flex items-center justify-between p-2 lg:p-3">
				<div className={`text-2xl lg:text-3xl ${fugaz_one.className}`}>
					<Link href={"#home"} className="mx-4">
						coder_zi
					</Link>
				</div>
				<div className="hidden lg:flex items-center justify-center">
					<Link href={"#home"} className="mx-3">
						Home
					</Link>
					<Link href={"#about"} className="mx-3">
						About
					</Link>
					<Link href={"#projects"} className="mx-3">
						Projects
					</Link>
					<Link href={"#skills"} className="mx-3">
						Skills
					</Link>
					<Link href={"#contact"} className="mx-3">
						Contact
					</Link>
				</div>

				{/**Harmburger svg */}
				<div className="flex items-center justify-center mt-auto lg:hidden hover:cursor-pointer">
					<ThemeToggler />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-7 dark:text-white mx-4"
						onClick={() => setShowMenu(!show_menu)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>

				{/**Mobile menu */}
				{show_menu && (
					<div className="absolute flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-slate-100 via-white to-slate-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 inset-0 p-2">
						<div
							className="absolute top-4 right-2 dark:text-white hover:cursor-pointer w-max"
							onClick={() => setShowMenu(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</div>
						<div className="flex flex-col p-4 items-center justify-center">
							<Link
								href={"#home"}
								className="mt-4 dark:text-white"
								onClick={() => setShowMenu(false)}
							>
								Home
							</Link>
							<Link
								href={"#about"}
								className="mt-6 dark:text-white"
								onClick={() => setShowMenu(false)}
							>
								About
							</Link>
							<Link
								href={"#projects"}
								className="mt-6 dark:text-white"
								onClick={() => setShowMenu(false)}
							>
								Projects
							</Link>
							<Link
								href={"#skills"}
								className="mt-6 dark:text-white"
								onClick={() => setShowMenu(false)}
							>
								Skills
							</Link>
							<Link
								href={"#contact"}
								className="mt-6 dark:text-white"
								onClick={() => setShowMenu(false)}
							>
								Contact
							</Link>
							<a
								target="_blank"
								href={
									"https://docs.google.com/document/d/1_7M8XB0GCeD81eHLFowSKHBbLnJCZrditI-6yB9FKUE/edit?usp=sharing"
								}
								className="inline-flex items-center justify-center mt-6 dark:text-white"
								onClick={() => setShowMenu(false)}
							>
								View Resume
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-4 mx-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</div>
					</div>
				)}

				<div className="hidden lg:flex">
					<ThemeToggler />
					<a
						className="inline-flex items-center justify-center font-semibold mx-4 bg-gradient-to-b from-green-600 to-green-700 text-white p-3 rounded-xl text-sm [&>*:last-child]:hover:translate-x-1 [&>*:last-child]:ease-in-out [&>*:last-child]:duration-200"
						target="_blank"
						href={
							"https://docs.google.com/document/d/1_7M8XB0GCeD81eHLFowSKHBbLnJCZrditI-6yB9FKUE/edit?usp=sharing"
						}
					>
						View Resume
						<span className="mx-1">-&gt;</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
