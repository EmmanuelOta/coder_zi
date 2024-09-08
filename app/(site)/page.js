import Slider from "../components/picture-slider/Slider";

export const metadata = {
	title: "A Front End Developer with a constanly evolving philosophical mind ⚜",
	description:
		"coder_zi Instagram: https://instagram.com/coder_zi, coder_zi X: https://x.com/coder_zi, coder_zi LinkedIn: https://linkedin.com/in/coder-zi",
};

export default function Home() {
	//slider images for wanderlust
	const wanderlust = [
		"wanderlust-home.png",
		"wanderlust-city.png",
		"wanderlust-login.png",
		"wanderlust-favourite.png",
	];

	//slider images for dcwears
	const dcwears = [
		"dcwears-home.png",
		"dcwears-categories.png",
		"dcwears-all-products.png",
		"dcwears-add-to-cart.png",
		"dcwears-product-page.png",
		"dcwears-similar-products.png",
		"dcwears-checkout.png",
	];

	//slider images for emporion
	const emporion = [
		"emporion-landing-page.png",
		"emporion-login.png",
		"emporion-home.png",
		"emporion-transactions.png",
		"emporion-deposit.png",
		"emporion-profile.png",
		"emporion-history.png",
		"emporion-withdraw.png",
	];

	const revia = [
		"revia-hero.png",
		"revia-benefits.png",
		"revia-how-it-works.png",
		"revia-steps.png",
		"revia-faq.png",
	];

	const anaco = [
		"anaco-hero.png",
		"anaco-benefits.png",
		"anaco-steps.png",
		"anaco-faq.png",
		"anaco-contact.png",
	];

	const clipifai = [
		"clipifai-hero.png",
		"clipifai-login.png",
		"clipifai-convert.png",
		"clipifai-tools.png",
		"clipifai-upload.png",
		"clipifai-image-convert.png",
		"clipifai-image-converted.png",
	];

	return (
		<>
			<section className="flex flex-col items-center justify-center p-5">
				<div
					className="flex flex-row my-3 md:my-6 items-center jusify-center relative bg-slate-200 dark:bg-zinc-700 border-4 border-white dark:border dark:border-slate-200 p-3 px-4 text-green-500 dark:text-green-300 rounded-2xl"
					data-aos="fade-left"
				>
					<span className="relative flex h-3 w-3 mx-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-green-300"></span>
					</span>
					Open To Work
				</div>
				<img
					data-aos="zoom-in"
					src="/images/coder_zi.png"
					width={180}
					height={180}
					className="rounded-full my-6 md:my-10"
					alt="coder_zi"
				/>
				<div className="w-[90%] lg:w-[60%] my-4" data-aos="fade-right">
					<p className="text-2xl lg:text-4xl font-semibold text-zinc-800 text-center dark:text-slate-100">
						Hello!! I&apos;m Emmanuel, a Front End Developer with a
						constantly evolving philosophical mind ⚜.
					</p>
				</div>
			</section>

			<section
				className="flex flex-col items-center justify-center p-5"
				id="about"
			>
				<h3
					className="p-1 text-3xl lg:text-4xl font-semibold my-3 text-center text-zinc-800 dark:text-white"
					data-aos="fade-down"
				>
					Who are you?
				</h3>

				<div
					className="w-[90%] lg:w-[70%] my-2 text-lg font-medium"
					data-aos="fade-up"
				>
					<p className="p-2 mt-2">
						I&apos;m a naturally curious person who loves exploring
						nature and the universe. I&apos;m fascinated by how both
						physical and spiritual laws work, and I often think
						about the deeper meaning of life and how we can live
						happily while achieving our purpose.
					</p>

					<p className="p-2 mt-2">
						I enjoy solving riddles and puzzles because they make me
						think better, and that&apos;s one of the reasons I got
						into coding, it&apos;s a fun way to challenge my mind.
					</p>

					<p className="p-2 mt-2">
						In my free time, I like playing the piano, drums, or
						guitar. I also enjoy watching fantasy and sci-fi movies,
						and when I&apos;m not doing that, I love playing
						football.
					</p>
				</div>

				<h3
					className="p-1 text-3xl lg:text-4xl font-semibold my-7 text-center text-zinc-800 dark:text-white"
					data-aos="fade-left"
				>
					What do you do professionally?
				</h3>

				<div
					className="w-[90%] lg:w-[70%] my-2 text-lg font-medium"
					data-aos="fade-up"
				>
					<p className="p-2">
						I&apos;m an aspiring founder developing my first SaaS
						project,
						<a
							href="https://clipifai.vercel.app"
							target="_blank"
							className="inline-flex items-center font-semibold mx-1 hover:underline"
						>
							Clipifai
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
						. I have a passion for creating stunning user interfaces
						that deliver memorable experiences to users for web
						applications. I also design eye-catching landing pages
						with compelling copy that boost conversion rates. My
						work consistently turns leads into loyal users and
						customers.
					</p>
				</div>
			</section>

			<section
				className="flex flex-col items-center justify-center p-5"
				id="projects"
			>
				<h3
					className="p-1 text-3xl lg:text-4xl font-semibold my-7 text-center text-zinc-800 dark:text-white"
					data-aos="zoom-out-down"
				>
					My Popular Projects
				</h3>

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full p-4 my-5 lg:my-10">
					<div
						className="w-full lg:w-[50%] p-4"
						data-aos="fade-right"
					>
						<Slider pictures={wanderlust} />
					</div>
					<div className="w-full lg:w-[50%] p-4" data-aos="fade-left">
						<h4 className="text-2xl font-semibold text-center">
							Wanderlust
						</h4>
						<p className="p-2 font-medium">
							Wanderlust is a vacation destination site, with over
							200 vacation destinations ready for tourist to
							explore. Wanderlust is a sleek travel inspiration
							app, designed to spark adventure. Built with React,
							it offers a fast, responsive user experience, while
							Firebase powers real-time data and secure user
							authentication. This project shows my ability to
							craft dynamic, user-friendly interfaces and
							seamlessly integrate backend services.
						</p>
						<a
							target="_blank"
							href="https://earthscapes.netlify.app"
							className="mx-1 inline-flex items-center font-semibold p-2"
						>
							Wanderlust
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
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

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full p-4 my-5 lg:my-10">
					<div className="w-full lg:w-[50%] p-4" data-aos="fade-left">
						<h4 className="text-2xl font-semibold text-center">
							E-commerce Store (DC Wears)
						</h4>
						<p className="p-2 font-medium">
							DC Wears is a stylish e-commerce platform built for
							seamless shopping. Developed using React for a fast
							and responsive UI, and Firebase for real-time data
							management, secure transactions, and user
							authentication. This project showcases my ability to
							create scalable online stores with smooth, intuitive
							user experiences.
						</p>
						<a
							target="_blank"
							href="https://dcwears.netlify.app"
							className="mx-1 inline-flex items-center font-semibold p-2"
						>
							DC Wears
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					</div>

					<div
						className="w-full lg:w-[50%] p-4"
						data-aos="fade-right"
					>
						<Slider pictures={dcwears} />
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full p-4 my-5 lg:my-10">
					<div
						className="w-full lg:w-[50%] p-4"
						data-aos="fade-right"
					>
						<Slider pictures={emporion} />
					</div>
					<div className="w-full lg:w-[50%] p-4" data-aos="fade-left">
						<h4 className="text-2xl font-semibold text-center">
							Trading Exchange Patform
						</h4>
						<p className="p-2 font-medium">
							Emporion is a mock trading platform designed to
							simulate real-world trading. Featuring a sleek
							landing page, a dynamic dashboard for executing
							trades, and real-time user data updates. It also
							features a beautiful coin marquee at the top of the
							page that showcases live crypto prices. Built with
							Next.js and tailwind for the front end and Python
							Flask for the backend, it includes a secure
							authentication system and showcases my ability to
							develop both user-focused interfaces and robust
							backend services.
						</p>
						<a
							target="_blank"
							href="https://emporionexchange.xyz"
							className="mx-1 inline-flex items-center font-semibold p-2"
						>
							Emporion
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
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

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full my-5 lg:my-10">
					<div
						className="w-full lg:w-[50%] p-4 mx-0 lg:mx-5"
						data-aos="fade-left"
					>
						<h4 className="text-2xl font-semibold text-center">
							AI Voice Call Assistant (Revia) - Landing Page
						</h4>
						<p className="p-2 font-medium">
							Revia is a sleek landing page for an AI voice call
							assistant, built with Next.js and Tailwind CSS. The
							design is clean, intuitive, and optimized for
							conversions, showcasing my ability to apply design
							principles that engage users. With compelling copy
							and smooth animations, I crafted an interface that
							not only looks great but effectively drives user
							interaction and conversions.
						</p>
						<a
							target="_blank"
							href="https://revia.vercel.app"
							className="mx-1 inline-flex items-center font-semibold p-2"
						>
							Revia
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					</div>

					<div
						className="w-full lg:w-[50%] p-4"
						data-aos="fade-right"
					>
						<Slider pictures={revia} />
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full my-5 lg:my-10">
					<div
						className="w-full lg:w-[50%] p-4"
						data-aos="fade-right"
					>
						<Slider pictures={anaco} />
					</div>
					<div
						className="w-full lg:w-[50%] p-4 mx-0 lg:mx-5"
						data-aos="fade-left"
					>
						<h4 className="text-2xl font-semibold text-center">
							Anaco Paints - Landing Page
						</h4>
						<p className="p-2 font-medium">
							Anaco Paints is a bright, attention-grabbing landing
							page for a painting company, built with Next.js and
							Tailwind CSS. I used strong visuals and a clean
							design to make the services stand out, with clear,
							persuasive copy to attract customers. This project
							shows my ability to create designs that not only
							look great but also help drive business results.
						</p>
						<a
							target="_blank"
							href="https://anacopaints.vercel.app"
							className="mx-1 inline-flex items-center font-semibold p-2"
						>
							Anaco Paints
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
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

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full my-5 lg:my-10">
					<div
						className="w-full lg:w-[50%] p-4 mx-0 lg:mx-5"
						data-aos="fade-left"
					>
						<h4 className="text-2xl font-semibold text-center">
							Clipifai - Document to Audiobook Converter (SaaS)
						</h4>
						<p className="p-2 font-medium">
							Clipifai is an AI-powered SaaS platform that
							transforms documents (.doc, .docx, .pdf, .txt) into
							human-sounding audiobooks, making content more
							accessible and convenient. Alongside this, Clipifai
							offers free tools for document manipulation, such as
							converting images to PDFs, extracting text from
							PDFs, and more. Built with Next.js, Tailwind CSS,
							Firebase, and Express.js, this project showcases my
							ability to build powerful, user-friendly platforms
							with seamless functionality and a clean interface.
						</p>
						<a
							target="_blank"
							href="https://clipifai.vercel.app"
							className="mx-1 inline-flex items-center font-semibold p-2"
						>
							Clipifai
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-3 mx-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					</div>

					<div
						className="w-full lg:w-[50%] p-4"
						data-aos="fade-right"
					>
						<Slider pictures={clipifai} />
					</div>
				</div>
			</section>
		</>
	);
}
