import { Inter } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://coderzi.vercel.app"
  ),
  title: "Emmanuel — Software Engineer & Product Builder | coder_zi",
  description:
    "Emmanuel (coder_zi) designs and builds websites, web apps, mobile apps and custom software end to end.",
  authors: [{ name: "Emmanuel" }],
  openGraph: {
    siteName: "Emmanuel — coder_zi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@coder_zi",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta
					name="google-site-verification"
					content="12z_9nW2zfWHVbFZYYsPch9kjz6NZNJ1Kh3m-q3lPDk"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<TooltipProvider>
						<div className="min-h-dvh">
							<Nav />
							{children}
						</div>
						<Footer />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
