import { Fugaz_One } from "next/font/google";

const fugaz_one = Fugaz_One({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export default function Footer() {
	return (
		<nav className="flex items-center z-50 border-t border-t-zinc-300 p-4 bg-gradient-to-r from-slate-100 via-white to-slate-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 dark:text-white p-5">
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
							alt="visit my x account"
							className="dark:invert"
						/>
					</a>

					<a
						href="https://www.facebook.com/emmanuel.ota.92"
						target="_blank"
						className="mx-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="20"
							height="20"
							viewBox="0 0 50 50"
							className="dark:invert"
						>
							<path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
						</svg>
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
				</div>
			</div>
		</nav>
	);
}
