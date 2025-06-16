
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
	},
	breakpoints: {
		991: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 1,
		},
		575: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Testimonial2() {
	return (
		<>
			<section className="testimonial-section-2 fix section-padding">
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-classic fa-arrow-left-long" />
							testimonial
							<i className="fa-classic fa-arrow-right-long" />
						</h6>
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
							What our client say
						</h2>
					</div>
					<div className="array-button">
						<button className="array-prev">
							<i className="fa-solid fa-arrow-left-long" />
						</button>
						<button className="array-next">
							<i className="fa-solid fa-arrow-right-long" />
						</button>
					</div>
					<div className="swiper testimonial-slider-2">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="testimonial-card-items">
									<div className="shape-img">
										<img
											src="assets/img/testimonial/shape-left.png"
											alt="img"
										/>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer nunc viverra laoreet est, a pretium metus aliquam
										eget. Maecenas porta is nunc ut viverra. Aenean pulvinar
										maximus leo, non pharetra quam feugiat et. Suspendisse vitae
										nunc sed ligula.
									</p>
									<div className="client-info-items">
										<div className="client-info">
											<img
												src="assets/img/testimonial/client-4.png"
												alt="img"
											/>
											<div className="content">
												<h4>Shikhon Islam</h4>
												<span>Web Developer</span>
												<div className="star">
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
												</div>
											</div>
										</div>
										<img src="assets/img/testimonial/amazon.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="swiper-slide">
								<div className="testimonial-card-items style-2">
									<div className="shape-img">
										<img
											src="assets/img/testimonial/shape-right.png"
											alt="img"
										/>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer nunc viverra laoreet est, a pretium metus aliquam
										eget. Maecenas porta is nunc ut viverra. Aenean pulvinar
										maximus leo, non pharetra quam feugiat et. Suspendisse vitae
										nunc sed ligula.
									</p>
									<div className="client-info-items">
										<div className="client-info">
											<img
												src="assets/img/testimonial/client-5.png"
												alt="img"
											/>
											<div className="content">
												<h4>Rony Ahmed</h4>
												<span>Web Development</span>
												<div className="star">
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
												</div>
											</div>
										</div>
										<img src="assets/img/testimonial/envato.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="swiper-slide">
								<div className="testimonial-card-items style-2">
									<div className="shape-img">
										<img
											src="assets/img/testimonial/shape-right.png"
											alt="img"
										/>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer nunc viverra laoreet est, a pretium metus aliquam
										eget. Maecenas porta is nunc ut viverra. Aenean pulvinar
										maximus leo, non pharetra quam feugiat et. Suspendisse vitae
										nunc sed ligula.
									</p>
									<div className="client-info-items">
										<div className="client-info">
											<img
												src="assets/img/testimonial/client-5.png"
												alt="img"
											/>
											<div className="content">
												<h4>Rony Ahmed</h4>
												<span>Web Development</span>
												<div className="star">
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
													<i className="fa-solid fa-star" />
												</div>
											</div>
										</div>
										<img src="assets/img/testimonial/envato.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
