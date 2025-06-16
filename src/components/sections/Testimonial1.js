
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: ".h1n",
		prevEl: ".h1p",
	},

	// Pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
	},
}

export default function Testimonial1() {
	return (
		<>
			<section className="testimonial-section fix section-padding section-bg">
				<div className="arrow-shape float-bob-y">
					<img src="assets/img/testimonial/arrow-shape.png" alt="img" />
				</div>
				<div className="building-shape float-bob-x">
					<img src="assets/img/testimonial/building-shape.png" alt="img" />
				</div>
				<div className="testimonial-image">
					<img src="assets/img/testimonial/testimonial-image.jpg" alt="img" />
				</div>
				<div className="container">
					<div className="testimonial-wrapper">
						<div className="row g-4">
							<div className="col-lg-7">
								<div className="testimonial-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-classic fa-arrow-left-long" />
											testimonials
											<i className="fa-classic fa-arrow-right-long" />
										</h6>
										<h2
											className="text-white wow fadeInUp"
											data-wow-delay=".2s"
										>
											what client’s say <br /> about us!
										</h2>
									</div>
									<div className="swiper testimonial-slider mt-3 mt-md-0">
										<Swiper {...swiperOptions} className="swiper-wrapper">
											<SwiperSlide className="swiper-slide">
												<div className="testi-content">
													<div className="icon">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={32}
															height={32}
															viewBox="0 0 32 32"
															fill="none"
														>
															<path d="M0 4V28L12 16V4H0Z" fill="#DF1119" />
															<path d="M20 4V28L32 16V4H20Z" fill="#DF1119" />
														</svg>
														<h4>
															Contrary to popular belief, Lorem Ipsum is not
															simply random text. It has roots in a piece of
															classical Latin literature from 45 BC, making it
															over 2000 years old. Richard McClintock !
														</h4>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="testi-content">
													<div className="icon">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={32}
															height={32}
															viewBox="0 0 32 32"
															fill="none"
														>
															<path d="M0 4V28L12 16V4H0Z" fill="#DF1119" />
															<path d="M20 4V28L32 16V4H20Z" fill="#DF1119" />
														</svg>
														<h4>
															Contrary to popular belief, Lorem Ipsum is not
															simply random text. It has roots in a piece of
															classical Latin literature from 45 BC, making it
															over 2000 years old. Richard McClintock !
														</h4>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="testi-content">
													<div className="icon">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={32}
															height={32}
															viewBox="0 0 32 32"
															fill="none"
														>
															<path d="M0 4V28L12 16V4H0Z" fill="#DF1119" />
															<path d="M20 4V28L32 16V4H20Z" fill="#DF1119" />
														</svg>
														<h4>
															Contrary to popular belief, Lorem Ipsum is not
															simply random text. It has roots in a piece of
															classical Latin literature from 45 BC, making it
															over 2000 years old. Richard McClintock !
														</h4>
													</div>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
									<div className="client-img-items">
										<div className="client-image-area">
											<div className="client-img">
												<img
													src="assets/img/testimonial/client-1.png"
													alt="img"
												/>
											</div>
											<div className="client-img">
												<img
													src="assets/img/testimonial/client-2.png"
													alt="img"
												/>
											</div>
											<div className="client-img">
												<img
													src="assets/img/testimonial/client-3.png"
													alt="img"
												/>
											</div>
										</div>
										<div className="array-button">
											<button className="array-prev h1p">
												<i className="fa-solid fa-arrow-left-long" />
											</button>
											<button className="array-next h1n">
												<i className="fa-solid fa-arrow-right-long" />
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
