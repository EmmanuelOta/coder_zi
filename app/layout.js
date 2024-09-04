import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "coder_zi's portfolio",
	description:
		"Front End developer with a philosophical mind. Perpetual state of evolution ⚜.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<div className="min-h-screen bg-gradient-to-r from-slate-100 via-white to-slate-200 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950">
						<Navbar />
						{children}
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
