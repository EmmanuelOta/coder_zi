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
			className="max-w-full"
		>
			{pictures.map((picture, index) => (
				<SwiperSlide key={index} className="w-[800px]">
					<div className="rounded-xl w-[800px]">
						<img
							src={`/images/wanderlust-images/${picture}`}
							alt={picture}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
