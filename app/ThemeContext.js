"use client";

import { useState, createContext } from "react";

export const theme_context = createContext({
	theme: "light",
	setTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("light");

	return (
		<theme_context.Provider value={{ theme, setTheme }}>
			{children}
		</theme_context.Provider>
	);
}
