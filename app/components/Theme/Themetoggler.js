"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="p-2 px-3 rounded-md hover:bg-slate-300 dark:hover:bg-zinc-700"
		>
			{theme === "dark" ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
		</button>
	);
}
