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
					data-aos="zoom-in-down"
				>
					Projects I&apos;ve worked on
				</h3>

				<div className="flex flex-col lg:flex-row items-center justify-center max-w-full p-4">
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
							explore
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
