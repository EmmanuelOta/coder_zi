export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center p-5">
				<div
					className="flex flex-row items-center jusify-center relative bg-slate-200 dark:bg-zinc-700 border-4 border-white dark:border dark:border-slate-200 p-3 px-4 text-green-500 dark:text-green-300 rounded-2xl"
					data-aos="fade-left"
				>
					<span class="relative flex h-3 w-3 mx-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-green-300"></span>
					</span>
					Open To Work
				</div>
				<img
					data-aos="zoom-in"
					src="/images/coder_zi.png"
					width={150}
					height={150}
					className="rounded-full my-8"
					alt="coder_zi"
				/>
				<div className="w-[90%] lg:w-[60%] my-4" data-aos="fade-right">
					<p className="text-3xl lg:text-4xl font-semibold text-center dark:text-slate-100">
						Hello!! I&apos;m Emmanuel, a Front End Developer with a
						constantly evolving philosophical mind ⚜.
					</p>
				</div>
			</section>
		</>
	);
}
