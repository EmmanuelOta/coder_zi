"use client";

import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const libre_baskerville = Libre_Baskerville({
	weight: "400",
	style: "italic",
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
	}, [window.scrollY]);

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
			className={`sticky top-0 bg-transparent backdrop-blur-md border-b border-b-slate-300 z-[100] ${
				scrolled ? "shadow-lg shadow-slate-300" : ""
			}`}
		>
			<div className="flex items-center justify-between p-2 lg:p-3">
				<div
					className={`text-2xl lg:text-3xl text-blue-600 ${libre_baskerville.className}`}
				>
					<Link href={"#home"}>Coder_zi</Link>
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
				<div
					className="flex lg:hidden hover:cursor-pointer"
					onClick={() => setShowMenu(!show_menu)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-7 text-blue-500"
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
					<div className="absolute flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-slate-100 via-white to-slate-200 inset-0 p-2">
						<div
							className="absolute top-4 right-2 text-blue-500 hover:cursor-pointer w-max"
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
								className="mt-4 text-blue-500"
								onClick={() => setShowMenu(false)}
							>
								Home
							</Link>
							<Link
								href={"#about"}
								className="mt-6 text-blue-500"
								onClick={() => setShowMenu(false)}
							>
								About
							</Link>
							<Link
								href={"#projects"}
								className="mt-6 text-blue-500"
								onClick={() => setShowMenu(false)}
							>
								Projects
							</Link>
							<Link
								href={"#skills"}
								className="mt-6 text-blue-500"
								onClick={() => setShowMenu(false)}
							>
								Skills
							</Link>
							<Link
								href={"#contact"}
								className="mt-6 text-blue-500"
								onClick={() => setShowMenu(false)}
							>
								Contact
							</Link>
							<button
								className="mt-6 text-blue-500"
								onClick={() => {
									setShowMenu(false);
									setContactUs(true);
								}}
							>
								Contact us
							</button>
						</div>
					</div>
				)}

				<div className="hidden lg:flex">
					<button
						className="inline-flex bg-gradient-to-b from-blue-400 to-blue-500 text-white p-3 rounded-xl text-sm [&>*:last-child]:hover:translate-x-1 [&>*:last-child]:ease-in-out [&>*:last-child]:duration-200"
					>
						Contact us
						<div className="mx-1">-&gt;</div>
					</button>
				</div>
			</div>
		</nav>
	);
}
