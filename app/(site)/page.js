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
					className="flex flex-row my-3 md:my-6 items-center jusify-center relative bg-white dark:bg-zinc-900 border border-green-500 dark:border dark:border-slate-200 p-3 px-4 text-green-500 dark:text-green-300 rounded-2xl"
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
					<p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-800 text-center dark:text-slate-100">
						Hello!! I&apos;m Emmanuel, a Front End Developer with a
						constantly evolving philosophical mind ⚜.
					</p>
				</div>
			</section>

			<section
				className="flex flex-col items-center justify-center p-5"
				id="about"
			>
				<h3 className="p-1 text-3xl lg:text-4xl font-semibold my-3 text-center text-zinc-800 dark:text-white">
					Who are you?
				</h3>

				<div
					className="w-[90%] lg:w-[70%] my-2 text-lg font-medium text-center"
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

				<h3 className="p-1 text-3xl lg:text-4xl font-semibold my-7 text-center text-zinc-800 dark:text-white">
					What do you do professionally?
				</h3>

				<div
					className="w-[90%] lg:w-[70%] my-2 text-lg font-medium text-center"
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
								className="size-3 ml-1"
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

			<section
				className="flex flex-col items-center justify-center p-5"
				id="skills"
			>
				<h3
					className="p-1 text-3xl lg:text-4xl font-semibold my-3 text-center text-zinc-800 dark:text-white"
					data-aos="fade-up"
				>
					My Skills
				</h3>

				<div
					className="flex flex-row flex-wrap items-center justify-center w-[90%] lg:w-[80%] my-5 p-2"
					data-aos="fade-up"
					data-aos-delay="1000"
				>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1100"
					>
						Next.js
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1200"
					>
						React.js
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1300"
					>
						Typescript
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1300"
					>
						TailwindCSS
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1400"
					>
						Firebase
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1500"
					>
						Cloud Firestore
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1600"
					>
						HTML5
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1700"
					>
						CSS3
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1800"
					>
						Javascript
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="1900"
					>
						Python
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2000"
					>
						Front End Development
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2100"
					>
						Landing Page Optimization
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2200"
					>
						Artificial Intelligence (AI)
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2300"
					>
						User Experience (UX)
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2400"
					>
						Web Development
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2500"
					>
						Analytical Skills
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2600"
					>
						Problem Solving
					</p>
					<p
						className="rounded-lg text-lg text-sm md:text-base font-medium p-2 bg-zinc-800 text-white border border-slate-500 hover:bg-green-600 hover:border hover:border-green-600 mx-3 my-3"
						data-aos="fade-left"
						data-aos-delay="2700"
					>
						Communication
					</p>
				</div>
			</section>

			<section
				className="flex flex-col items-center justify-center p-5"
				id="contact"
			>
				<h3
					className="p-1 text-3xl lg:text-4xl font-semibold my-3 text-center text-zinc-800 dark:text-white"
				>
					Contact Me
				</h3>

				<p
					className="p-2 w-[90%] lg:w-[80%] font-medium text-lg text-center"
					data-aos="fade-up"
				>
					Looking for a developer to bring your project to life? I
					specialize in building modern looking web applications and
					high-converting landing pages with Next.js and Tailwind CSS.
					Whether you&apos;re a recruiter, CEO, CTO, or a business
					looking for a clean, responsive design, I&apos;m here to
					help you create something exceptional.
				</p>

				<div
					className="flex flex-col items-center justify-center p-2 w-[95%] lg:w-[50%] bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-600 rounded-2xl my-8"
					data-aos="fade-up"
				>
					<div className="w-full flex flex-row items-center justify-evenly p-3 rounded-lg">
						<a
							className="p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-zinc-400 mx-2 dark:invert"
							target="_blank"
							href={"https://x.com/coder_zi"}
						>
							<img
								src="/images/x.svg"
								width={80}
								height={80}
								alt="coder_zi X"
							/>
						</a>

						<a
							className="p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-zinc-400 mx-2 dark:invert"
							target="_blank"
							href={"https://linkedin.com/in/coder-zi"}
						>
							<img
								src="/images/linkedin.svg"
								width={80}
								height={80}
								alt="coder_zi linkedin"
							/>
						</a>

						<a
							className="p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-zinc-400 mx-2 dark:invert"
							target="_blank"
							href={"mailto:emmyraddo4@gmail.com"}
						>
							<img
								src="/images/mail.png"
								width={80}
								height={80}
								alt="coder_zi profile"
							/>
						</a>

						<a
							className="p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-zinc-400 mx-2 dark:invert"
							target="_blank"
							href={"https://instagram.com/coder_zi"}
						>
							<img
								src="/images/instagram.svg"
								width={80}
								height={80}
								alt="coder_zi instagram"
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
