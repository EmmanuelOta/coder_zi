"use client";

import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import { useEffect } from "react";

export default function SiteLayout({ children }) {
	useEffect(() => {
		Aos.init({
			duration: 1500,
			once: true,
		});
	}, []);
	return <div className="overflow-hidden">{children}</div>;
}
