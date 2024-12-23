"use client";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="p-2 px-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700"
		>
			{theme === "dark" ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
		</button>
	);
}
