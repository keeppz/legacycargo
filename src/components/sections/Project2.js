import Link from 'next/link'
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".project-dot",
	},
	breakpoints: {
		1199: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2,
		},
		575: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Project2() {
	return (
		<>
			<section className="project-section section-padding pt-0 fix" id="projects">
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							<h6 className="wow fadeInUp" style={{ color: '#ff282e' }}>
								<i className="fa-classic fa-arrow-left-long" />
								Operaciones Destacadas
								<i className="fa-classic fa-arrow-right-long" />
							</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".2s">
								Nuestros Servicios en Acción
							</h2>
						</div>
						<Link
							href="/project-details"
							className="theme-btn wow fadeInUp"
							data-wow-delay=".4s"
							style={{ backgroundColor: '#ff282e', borderColor: '#ff282e' }}
						>
							Ver Todos <i className="fa-classic fa-arrow-right" />
						</Link>
					</div>
				</div>
				<div className="project-wrapper-2">
					<div className="swiper project-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img src="assets/img/project/06.jpg" alt="Carga Aérea" />
									<div className="project-content">
										<div className="content">
											<h3>
												<Link href="/project-details">Carga Aérea Comercial</Link>
											</h3>
											<span>
												<i className="fa-sharp fa-solid fa-location-dot" style={{ color: '#ff282e' }} /> Miami - Caracas
											</span>
										</div>
										<h2 className="number">01</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img src="assets/img/project/07.jpg" alt="Logística E-commerce" />
									<div className="project-content">
										<div className="content">
											<h3>
												<Link href="/project-details">Logística para E-commerce</Link>
											</h3>
											<span>
												<i className="fa-sharp fa-solid fa-location-dot" style={{ color: '#ff282e' }} /> Panamá - Venezuela
											</span>
										</div>
										<h2 className="number">02</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img src="assets/img/project/08.jpg" alt="Carga Marítima" />
									<div className="project-content">
										<div className="content">
											<h3>
												<Link href="/project-details">Importación Marítima</Link>
											</h3>
											<span>
												<i className="fa-sharp fa-solid fa-location-dot" style={{ color: '#ff282e' }} /> China - Venezuela
											</span>
										</div>
										<h2 className="number">03</h2>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb">
									<img src="assets/img/project/07.jpg" alt="Distribución Nacional" />
									<div className="project-content">
										<div className="content">
											<h3>
												<Link href="/project-details">Distribución Nacional</Link>
											</h3>
											<span>
												<i className="fa-sharp fa-solid fa-location-dot" style={{ color: '#ff282e' }} /> Todo Venezuela
											</span>
										</div>
										<h2 className="number">04</h2>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
						<div className="project-dot" />
					</div>
				</div>
			</section>
		</>
	)
}
