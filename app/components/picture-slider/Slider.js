"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

export default function Slider({ pictures }) {
	return (
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
			className="w-full h-max"
		>
			{pictures.map((picture, index) => (
				<SwiperSlide key={index} className="w-full h-full">
					<div className="flex items-center justify-center bg-slate-300 dark:bg-zinc-700 w-full h-full rounded-xl">
						<img
							src={`images/wanderlust-images/${picture}`}
							alt={picture}
							width={1200}
							height={650}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
