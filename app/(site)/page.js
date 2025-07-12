import Slider from "../components/picture-slider/Slider";
import Link from "next/link";

export const metadata = {
	title: "coder_zi - Clipifai Founder | Writer | Fitness Influencer",
	description:
		"coder_zi Instagram: https://instagram.com/coder_zi, coder_zi X: https://x.com/coder_zi, coder_zi LinkedIn: https://linkedin.com/in/coder-zi",
};

export default function Home() {
	//slider images for synopsi
	const synopsi = [
		"synopsi-hero-light.png",
		"synopsi-hero-dark.png",
		"synopsi-benefits-light.png",
		"synopsi-benefits-dark.png",
		"synopsi-steps-light.png",
		"synopsi-steps-dark.png",
		"synopsi-faq-light.png",
		"synopsi-faq-dark.png",
		"synopsi-dashboard.png",
		"synopsi-history.png",
		"synopsi-summarize.png",
		"synopsi-account.png",
		"synopsi-setting.png",
	];

	//slider images for clipifai
	const clipifai = [
		"clipifai-hero.png",
		"clipifai-login.png",
		"clipifai-convert.png",
		"clipifai-tools.png",
		"clipifai-upload.png",
		"clipifai-image-convert.png",
		"clipifai-image-converted.png",
	];

	//slider images for wordify
	const wordify = [
		"wordify-upload-section.png",
		"wordify-author-section.png",
		"wordify-files-section.png",
		"wordify-download-file-section.png",
	];

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

	//slider images for revia
	const revia = [
		"revia-hero.png",
		"revia-benefits.png",
		"revia-how-it-works.png",
		"revia-steps.png",
		"revia-faq.png",
	];

	//slider images for anaco
	const anaco = [
		"anaco-hero.png",
		"anaco-benefits.png",
		"anaco-steps.png",
		"anaco-faq.png",
		"anaco-contact.png",
	];

	//skills
	const skills = [
		"Next.js",
		"React.js",
		"Typescript",
		"TailwindCSS",
		"Firebase",
		"Cloud firestore",
		"HTML5",
		"CSS3",
		"Javascript",
		"Python",
		"Front End Development",
		"Landing Page Optimization",
		"Artificial Intelligence (AI)",
		"User Experience (UX)",
		"Web Development",
		"Analytical Skills",
		"Problem Solving",
	];

	return (
		<>
			{/* HERO SECTION */}
			<section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 py-12 bg-gradient-to-br from-white via-green-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200 dark:bg-green-900 rounded-full opacity-20 blur-3xl" />
					<div className="absolute bottom-0 right-0 w-40 h-40 bg-green-400 dark:bg-green-700 rounded-full opacity-10 blur-2xl" />
				</div>
				<div className="relative flex flex-col items-center justify-center md:w-[50%] p-4">
					<img
						src="/images/coder_zi.png"
						width={400}
						height={400}
						className="rounded-full shadow-xl border-4 border-green-400 dark:border-green-600 mb-6 md:mb-0"
						alt="coder_zi"
					/>
					<div className="flex flex-row items-center mt-2">
						<span className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-full font-semibold shadow-md border border-green-300 dark:border-green-700 text-sm">
							<span className="relative flex size-4 mx-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 dark:bg-green-300"></span>
						</span>
							Open To Work
						</span>
					</div>
				</div>
				<div className="relative md:w-[50%] flex flex-col items-center md:items-start space-y-6">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-slate-100 text-center md:text-left">
						Hello!! I&apos;m Emmanuel, a Tech Founder, Writer and
						Software Developer ⚜.
					</h1>
					<p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 text-center md:text-left max-w-xl">
						I help businesses and brands consolidate their online reputation by building websites that don&apos;t just look and feel aesthetically pleasing, but also speak to their customers/clients in a way that makes them feel heard.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
            <Link className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-full border font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-inherit hover:text-zinc-800 hover:border-zinc-600 dark:hover:bg-inherit hover:dark:text-white transition-all duration-300" href={"#projects"}>
              View My Work
            </Link>
            <a className="px-8 py-4 bg-transparent border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-full font-semibold text-lg hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300" href={"https://instagram.com/coder_zi"} target="_blank">
              Get In Touch
            </a>
          </div>
				</div>
				
			</section>

			{/* ABOUT SECTION */}
      <section className="flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-zinc-900" id="about">
        <h3
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-50"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Who are you?
        </h3>
        <div className="grid gap-8 w-full max-w-4xl">
          <div
            className="bg-slate-50 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-lg font-medium text-slate-700 hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            I&apos;m a naturally curious person, and I enjoy learning about nature and the universe. I&apos;m fascinated by the nature of existence, and I often think about the deeper meaning of life and how to make the most out of it.
          </div>
          <div
            className="bg-slate-50 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-lg font-medium text-slate-700 hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            I enjoy solving riddles and puzzles because they engage my mind, which is one of the reasons I love coding. It&apos;s a fun way to challenge my mind.
          </div>
          <div
            className="bg-slate-50 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-lg font-medium text-slate-700 hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            In my free time, I am most likely seeing a fantasy/sci-fi movie, or playing football. Other times I&apos;d probably be at the piano or drumming.
          </div>
        </div>

        <div className="flex items-center my-16" data-aos="fade-in" data-aos-duration="800" data-aos-delay="400">
          <span className="h-1 w-12 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-3" />
          <span className="text-zinc-500 dark:text-zinc-400 font-bold text-2xl">✦</span>
          <span className="h-1 w-12 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-3" />
        </div>

        <h3
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-50"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          What do you do professionally?
        </h3>
        <div
          className="bg-slate-50 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-lg font-medium text-slate-700 max-w-4xl hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          I&apos;m an entrepreneur, currently working on two SaaS projects,
          <a
            href="https://clipifai.vercel.app"
            target="_blank"
            className="inline-flex items-center font-semibold mx-1 hover:underline text-slate-900 underline"
            rel="noreferrer"
          >
            Clipifai
          </a>
          and
          <a
            href="https://synopsi.vercel.app"
            target="_blank"
            className="inline-flex items-center font-semibold mx-1 hover:underline text-slate-900 underline"
            rel="noreferrer"
          >
            Synopsi
          </a>
          . Not only do I love creating beautiful user interfaces that feel sleek to the users for web
          applications, I also design eye-catching landing pages that speaks to the customers from their perspective which boost conversion rates, and
          works consistently in turning leads to loyal users and customers.
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        className="flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-800 dark:to-zinc-900"
        id="projects"
      >
        <h3
          className="text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-slate-50"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          My Popular Projects
        </h3>
        <div className="grid gap-16 w-full max-w-7xl">
          {/* Synopsi */}
          <div
            className="flex flex-col lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-100 dark:bg-zinc-900">
              <Slider pictures={synopsi} />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                Synopsi (SaaS)
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Synopsi is an AI-powered tool designed to save you time by summarizing YouTube videos with precision and
                speed. Simply provide a YouTube video URL, and Synopsi will generate a detailed summary of the content,
                no matter how long the video is. This allows you to grasp the key insights without watching the entire
                video. For added convenience, you can download these summaries as PDF files for later reference.
                Experience fast, accurate insights with Synopsi.
              </p>
              <a
                target="_blank"
                href="https://synopsi.vercel.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Synopsi
              </a>
            </div>
          </div>

          {/* Clipifai */}
          <div
            className="flex flex-col-reverse lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                Clipifai (SaaS)
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Clipifai is an AI-powered SaaS platform that transforms documents (.doc, .docx, .pdf, .txt) into
                human-sounding audiobooks, making content more accessible and convenient. Alongside this, Clipifai
                offers free tools for document manipulation, such as converting images to PDFs, extracting text from
                PDFs, and more. Built with Next.js, Tailwind CSS, Firebase, and Express.js, this project showcases my
                ability to build powerful, user-friendly platforms with seamless functionality and a clean interface.
              </p>
              <a
                target="_blank"
                href="https://clipifai.vercel.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Clipifai
              </a>
            </div>
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={clipifai} />
            </div>
          </div>

          {/* Wordify */}
          <div
            className="flex flex-col lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={wordify} />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                Wordify (MVP)
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Inspired by my fellow Computer Science undergrad coursemates who are fond of taking pictures of notes
                from fellow coursemates or the board, I built an image extraction tool which extracts the text from the
                images using OCR and converts them to downloadable PDF files.
              </p>
              <a
                target="_blank"
                href="https://wordifyimage.vercel.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Wordify
              </a>
            </div>
          </div>

          {/* Wanderlust */}
          <div
            className="flex flex-col-reverse lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                Wanderlust
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Wanderlust is a vacation destination site, with over 200 vacation destinations ready for tourist to
                explore. Wanderlust is a sleek travel inspiration app, designed to spark adventure. Built with React, it
                offers a fast, responsive user experience, while Firebase powers real-time data and secure user
                authentication. This project shows my ability to craft dynamic, user-friendly interfaces and seamlessly
                integrate backend services.
              </p>
              <a
                target="_blank"
                href="https://earthscapes.netlify.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Wanderlust
              </a>
            </div>
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={wanderlust} />
            </div>
          </div>

          {/* DC Wears */}
          <div
            className="flex flex-col lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={dcwears} />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                E-commerce Store (DC Wears)
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                DC Wears is a stylish e-commerce platform built for seamless shopping. Developed using React for a fast
                and responsive UI, and Firebase for real-time data management, secure transactions, and user
                authentication. This project showcases my ability to create scalable online stores with smooth,
                intuitive user experiences.
              </p>
              <a
                target="_blank"
                href="https://dcwears.netlify.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit DC Wears
              </a>
            </div>
          </div>

          {/* Emporion */}
          <div
            className="flex flex-col-reverse lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                Trading Exchange Platform
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Emporion is a mock trading platform designed to simulate real-world trading. Featuring a sleek landing
                page, a dynamic dashboard for executing trades, and real-time user data updates. It also features a
                beautiful coin marquee at the top of the page that showcases live crypto prices. Built with Next.js and
                tailwind for the front end and Python Flask for the backend, it includes a secure authentication system
                and showcases my ability to develop both user-focused interfaces and robust backend services.
              </p>
              <a
                target="_blank"
                href="https://emporionexchange.xyz"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Emporion
              </a>
            </div>
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={emporion} />
            </div>
          </div>

          {/* Revia */}
          <div
            className="flex flex-col lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={revia} />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                AI Voice Call Assistant (Revia) - Landing Page
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Revia is a sleek landing page for an AI voice call assistant, built with Next.js and Tailwind CSS. The
                design is clean, intuitive, and optimized for conversions, showcasing my ability to apply design
                principles that engage users. With compelling copy and smooth animations, I crafted an interface that
                not only looks great but effectively drives user interaction and conversions.
              </p>
              <a
                target="_blank"
                href="https://revia.vercel.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Revia
              </a>
            </div>
          </div>

          {/* Anaco Paints */}
          <div
            className="flex flex-col-reverse lg:flex-row items-stretch bg-white dark:bg-zinc-800 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] gap-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center lg:text-left">
                Anaco Paints - Landing Page
              </h4>
              <p className="mb-6 text-slate-700 dark:text-slate-300 text-center lg:text-left text-lg leading-relaxed">
                Anaco Paints is a bright, attention-grabbing landing page for a painting company, built with Next.js and
                Tailwind CSS. I used strong visuals and a clean design to make the services stand out, with clear,
                persuasive copy to attract customers. This project shows my ability to create designs that not only look
                great but also help drive business results.
              </p>
              <a
                target="_blank"
                href="https://anacopaints.vercel.app"
                className="inline-block w-fit px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
                rel="noreferrer"
              >
                Visit Anaco Paints
              </a>
            </div>
            <div className="lg:w-1/2 p-8 flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
              <Slider pictures={anaco} />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-zinc-800" id="skills">
        <h3
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-zinc-200"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          My Skills
        </h3>
        <div
          className="flex flex-wrap gap-6 items-center justify-center w-full max-w-5xl bg-zinc-50 dark:bg-zinc-900 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 p-10"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full px-6 py-3 text-base font-semibold bg-white text-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={index * 50}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-t from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-800"
        id="contact"
      >
        <h3
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-50"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Contact Me
        </h3>
        <div
          className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-600 p-10 w-full max-w-2xl flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <p className="mb-8 text-xl text-slate-700 dark:text-slate-300 text-center leading-relaxed">
            Looking for a developer to bring your project to life? I specialize in building modern looking web
            applications and high-converting landing pages with Next.js and Tailwind CSS. Whether you&apos;re a
            recruiter, CEO, CTO, or a business looking for a clean, responsive design, I&apos;m here to help you create
            something exceptional.
          </p>
          <div className="flex flex-row items-center justify-center gap-8 mt-4">
            <a
              className="rounded-full bg-zinc-100 dark:bg-zinc-700 shadow-lg p-4 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-600"
              target="_blank"
              href="https://x.com/coder_zi"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
              rel="noreferrer"
            >
              <img src="/images/x.svg" width={32} height={32} alt="coder_zi X" className="dark:invert" />
            </a>
            <a
              className="rounded-full bg-zinc-100 dark:bg-zinc-700 shadow-lg p-4 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-600"
              target="_blank"
              href="https://linkedin.com/in/coder-zi"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
              rel="noreferrer"
            >
              <img src="/images/linkedin.svg" width={32} height={32} alt="coder_zi linkedin" className="dark:invert" />
            </a>
            <a
              className="rounded-full bg-zinc-100 dark:bg-zinc-700 shadow-lg p-4 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-600"
              target="_blank"
              href="mailto:emmyraddo4@gmail.com"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="500"
              rel="noreferrer"
            >
              <img src="/images/mail.png" width={32} height={32} alt="coder_zi profile" className="dark:invert" />
            </a>
            <a
              className="rounded-full bg-zinc-100 dark:bg-zinc-700 shadow-lg p-4 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-zinc-200 dark:border-zinc-600"
              target="_blank"
              href="https://instagram.com/coder_zi"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
              rel="noreferrer"
            >
              <img
                src="/images/instagram.svg"
                width={32}
                height={32}
                alt="coder_zi instagram"
                className="dark:invert"
              />
            </a>
          </div>
        </div>
      </section>
		</>
	);
}
