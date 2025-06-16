import Layout from "../components/layout/Layout"
import TeamDetails1 from "../components/sections/TeamDetails1"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2500,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		1199: {
			slidesPerView: 5,
		},
		991: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 3,
		},
		575: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
}
export default function TeamDetails() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="team details">
				<TeamDetails1 />
				<div className="brand-section fix section-padding  pt-0 ">
					<div className="container">
						<div className="swiper brand-slider">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								<SwiperSlide className="swiper-slide">
									<div className="brand-image center">
										<img src="assets/img/brand/brand-logo.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-image center">
										<img src="assets/img/brand/brand-logo-2.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-image center">
										<img src="assets/img/brand/brand-logo-3.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-image center">
										<img src="assets/img/brand/brand-logo-4.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-image center">
										<img src="assets/img/brand/brand-logo-5.png" alt="img" />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
