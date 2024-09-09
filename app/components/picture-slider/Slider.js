"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

export default function Slider({ pictures }) {
	return (
		<>
			<Swiper
				modules={[Pagination, Navigation, Autoplay, EffectFade]}
				effect={"fade"}
				navigation={true}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				loop={true}
				spaceBetween={0}
				slidesPerView={1}
				className="w-full h-max rounded-lg green-swiper"
			>
				{pictures.map((picture, index) => (
					<SwiperSlide key={index} className="w-full h-full">
						<div className="flex items-center justify-center bg-slate-300 dark:bg-zinc-700 w-full h-full">
							<img
								src={`images/${
									picture.split("-")[0]
								}-images/${picture}`}
								alt={picture}
								width={1200}
								height={650}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<style jsx global>{`
				.green-swiper .swiper-button-next,
				.green-swiper .swiper-button-prev {
					color: black;
				}

				.green-swiper .swiper-pagination-bullet {
					background: black;
					opacity: 0.5;
				}

				.green-swiper .swiper-pagination-bullet-active {
					opacity: 1;
				}

				.green-swiper .swiper-button-next:after,
				.green-swiper .swiper-button-prev:after {
					font-size: 36px;
				}

				.green-swiper .swiper-button-next:hover,
				.green-swiper .swiper-button-prev:hover {
					color: #15803d;
				}
			`}</style>
		</>
	);
}
