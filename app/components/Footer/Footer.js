import { Libre_Baskerville } from "next/font/google";

const libre_baskerville = Libre_Baskerville({
	weight: "400",
	style: "italic",
	subsets: ["latin"],
});

export default function Footer() {
	return (
		<nav className="flex items-center z-50 border-t border-t-zinc-300 p-4 bg-gradient-to-r from-slate-100 via-white to-slate-200 dark:bg-zinc-900 dark:text-white p-5">
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
						<p
							className={`${libre_baskerville.className} text-2xl mx-2`}
						>
							Coder_zi
						</p>
					</div>

					<p className="mt-4">
						&copy; Coder_zi: The one that seeks ⚜.
					</p>
				</div>
				<div className="flex flex-row items-center lg:justify-center mt-4 lg:mt-auto">
					<a
						href="https://x.com/coder_zi"
						target="_blank"
						className="mx-2"
					>
						<svg
							width="1200"
							height="1227"
							viewBox="0 0 1200 1227"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[14px] h-[14px] dark:invert"
						>
							<path
								d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
								fill="currentColor"
							></path>
						</svg>
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
