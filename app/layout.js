import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "coder_zi's portfolio",
	description: "Front End developer with a philosophical mind. Perpetual state of evolution ⚜.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen">
					<Navbar />
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
