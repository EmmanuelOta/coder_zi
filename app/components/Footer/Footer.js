import { Fugaz_One } from "next/font/google";

const fugaz_one = Fugaz_One({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export default function Footer() {
	return (
		<nav className="flex items-center z-50 border-t border-t-zinc-300 dark:border-t dark:border-t-zinc-700 p-4 bg-gradient-to-r from-slate-100 via-white to-slate-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 dark:text-white p-5">
			<div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
				<div>
					<div className="flex flex-row items-end">
						<img
							src="/images/coder_zi.png"
							width={40}
							height={20}
							alt="revia"
							className="rounded-full"
						/>
						<p className={`${fugaz_one.className} text-2xl mx-2`}>
							coder_zi
						</p>
					</div>

					<p className="mt-4 font-medium text-lg">
						@coder_zi: The one that seeks ⚜.
					</p>
				</div>
				<div className="flex flex-row items-center lg:justify-center mt-4 lg:mt-auto">
					<a
						href="https://x.com/coder_zi"
						target="_blank"
						className="mx-2"
					>
						<img
							src="/images/x.svg"
							width={20}
							height={20}
							alt="X profile"
							className="dark:invert"
						/>
					</a>

					<a
						href="https://linkedin.com/in/coder-zi"
						target="_blank"
						className="mx-2"
					>
						<img
							src="/images/linkedin.svg"
							width={20}
							height={20}
							alt="linkedin"
							className="dark:invert"
						/>
					</a>

					<a href="mailto:emmyraddo4@gmail.com" className="mx-2">
						<img
							src="/images/mail.png"
							width={20}
							height={20}
							alt="mail support"
							className="dark:invert"
						/>
					</a>

					<a
						href="https://instagram.com/coder_zi"
						target="_blank"
						className="mx-2"
					>
						<img
							src="/images/instagram.svg"
							width={20}
							height={20}
							alt="coder_zi instagram"
							className="dark:invert"
						/>
					</a>
				</div>
			</div>
		</nav>
	);
}
