'use client'
// import "swiper/css";
import Link from 'next/link'

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
	pagination: {
		el: ".dot",
		clickable: true,
	},
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
	},
	breakpoints: {
		1399: {
			slidesPerView: 4,
		},
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

export default function Service1() {
	return (
		<>
			<section
				className="service-section fix section-padding bg-cover"
				style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
			>
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp" style={{color: '#ff282e'}}>
							<i className="fa-classic fa-arrow-left-long" />
							 NUESTROS SERVICIOS
							<i className="fa-classic fa-arrow-right-long" />
						</h6>
						<h2 
							className="wow fadeInUp text-white" 
							data-wow-delay=".2s"
						>
							Soluciones Logísticas 
							<br />
							Integrales
						</h2>
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
				<div className="container-fluid">
					<div className="swiper service-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/service/01.jpg" alt="Transporte Aéreo" />
										<div className="icon" style={{ backgroundColor: '#ff282e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<i className="fa-solid fa-plane" style={{ color: 'white' }} />
										</div>
									</div>
									<div className="service-content">
										<h2 className="number">01</h2>
										<h3>
											<Link href="/service-aereo">Transporte Aéreo</Link>
										</h3>
										<p>
											Envíos aéreos desde USA y Panamá hacia Venezuela con seguridad y tiempos de tránsito optimizados.
										</p>
										<Link href="/service-aereo" className="theme-btn" style={{ backgroundColor: '#ff282e', color: 'white', borderColor: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/service/02.jpg" alt="Transporte Marítimo" />
										<div className="icon" style={{ backgroundColor: '#ff282e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<i className="fa-solid fa-ship" style={{ color: 'white' }} />
										</div>
									</div>
									<div className="service-content">
										<h2 className="number">02</h2>
										<h3>
											<Link href="/service-maritimo">Transporte Marítimo</Link>
										</h3>
										<p>
											Servicios de carga marítima desde USA, Panamá y China con soluciones eficientes para todo tipo de mercancía.
										</p>
										<Link href="/service-maritimo" className="theme-btn" style={{ backgroundColor: '#ff282e', color: 'white', borderColor: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/service/03.jpg" alt="Transporte Terrestre" />
										<div className="icon" style={{ backgroundColor: '#ff282e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<i className="fa-solid fa-truck-fast" style={{ color: 'white' }} />
										</div>
									</div>
									<div className="service-content">
										<h2 className="number">03</h2>
										<h3>
											<Link href="/service-terrestre">Transporte Terrestre</Link>
										</h3>
										<p>
											Distribución nacional en todo el territorio venezolano con entregas en las puertas de tu negocio.
										</p>
										<Link href="/service-terrestre" className="theme-btn" style={{ backgroundColor: '#ff282e', color: 'white', borderColor: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/service/04.jpg" alt="Servicios Aduanales" />
										<div className="icon" style={{ backgroundColor: '#ff282e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<i className="fa-solid fa-stamp" style={{ color: 'white' }} />
										</div>
									</div>
									<div className="service-content">
										<h2 className="number">04</h2>
										<h3>
											<Link href="/service-aduanal">Servicios Aduanales</Link>
										</h3>
										<p>
											Gestión de trámites de importación y nacionalización de mercancías con expertos en normativas aduaneras.
										</p>
										<Link href="/service-aduanal" className="theme-btn" style={{ backgroundColor: '#ff282e', color: 'white', borderColor: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/service/03.jpg" alt="Almacenamiento" />
										<div className="icon" style={{ backgroundColor: '#ff282e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<i className="fa-solid fa-warehouse" style={{ color: 'white' }} />
										</div>
									</div>
									<div className="service-content">
										<h2 className="number">05</h2>
										<h3>
											<Link href="/service-almacenamiento">Almacenamiento</Link>
										</h3>
										<p>
											Instalaciones seguras para el almacenamiento temporal de tu mercancía en Venezuela.
										</p>
										<Link href="/service-almacenamiento" className="theme-btn" style={{ backgroundColor: '#ff282e', color: 'white', borderColor: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-box-items">
									<div className="service-thumb">
										<img src="assets/img/service/06.jpg" alt="Paquetería Internacional" />
										<div className="icon" style={{ backgroundColor: '#ff282e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<i className="fa-solid fa-box" style={{ color: 'white' }} />
										</div>
									</div>
									<div className="service-content">
										<h2 className="number">06</h2>
										<h3>
											<Link href="/service-paqueteria">Paquetería Internacional</Link>
										</h3>
										<p>
											Servicios de courier para el envío de documentos, paquetes pequeños y compras online con entrega rápida.
										</p>
										<Link href="/service-paqueteria" className="theme-btn" style={{ backgroundColor: '#ff282e', color: 'white', borderColor: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right" />
										</Link>
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
