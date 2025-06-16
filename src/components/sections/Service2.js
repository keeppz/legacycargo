import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

const serviceData = [
	{
		number: "01",
		icon: "fa-solid fa-truck-plane",
		image: "/assets/img/service/01.jpg",
		title: "Transporte Aéreo",
		description: "Soluciones rápidas y eficientes para envíos aéreos internacionales con cobertura global"
	},
	{
		number: "02",
		icon: "fa-solid fa-ship",
		image: "/assets/img/service/02.jpg",
		title: "Transporte Marítimo",
		description: "Servicios especializados de transporte marítimo internacional con amplia red de puertos"
	},
	{
		number: "03",
		icon: "fa-solid fa-truck",
		image: "/assets/img/service/03.jpg",
		title: "Transporte Terrestre",
		description: "Distribución nacional e internacional por carretera con seguimiento en tiempo real"
	},
	{
		number: "04",
		icon: "fa-solid fa-stamp",
		image: "/assets/img/service/04.jpg",
		title: "Servicios Aduanales",
		description: "Gestión completa de trámites de importación y nacionalización de mercancías con expertos en normativas aduaneras"
	},
	{
		number: "05",
		icon: "fa-solid fa-warehouse",
		image: "/assets/img/service/05.jpg",
		title: "Almacenamiento",
		description: "Instalaciones seguras para el almacenamiento temporal de tu mercancía en USA, Panamá y Venezuela"
	},
	{
		number: "06",
		icon: "fa-solid fa-box",
		image: "/assets/img/service/06.jpg",
		title: "Paquetería Internacional",
		description: "Servicios de courier para el envío de documentos, paquetes pequeños y compras online con entrega rápida"
	}
];

export default function Service2() {
	return (
		<section className="service-section" id="services">
				<div className="container">
					<div className="section-title text-center">
					<h6 style={{ color: '#ff282e' }}>
						<i className="fa-solid fa-arrow-left"></i>
						SERVICIOS LOGÍSTICOS
						<i className="fa-solid fa-arrow-right"></i>
						</h6>
					<h2>Soluciones de Transporte Internacional</h2>
				</div>

				<div className="service-details-wrapper">
					<Swiper
						modules={[Autoplay, Navigation]}
						spaceBetween={30}
						slidesPerView={4}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						navigation={{
							nextEl: '.slider-next',
							prevEl: '.slider-prev',
						}}
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							576: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
					>
						{serviceData.map((service, index) => (
							<SwiperSlide key={index}>
								<div className="service-card">
									<div className="service-image" style={{ height: "220px", overflow: "hidden" }}>
										<img 
											src={service.image} 
											alt={service.title}
											style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
										/>
									</div>
									<div className="service-content">
										<div className="service-number">{service.number}</div>
										<div className="service-icon">
											<i className={service.icon}></i>
									</div>
										<h3>{service.title}</h3>
										<p>{service.description}</p>
										<Link href="/service-details" className="read-more" style={{ color: '#ff282e' }}>
											Ver Más <i className="fa-solid fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</SwiperSlide>
						))}
						</Swiper>

					<div className="slider-controls">
						<button className="slider-prev">
							<i className="fa-solid fa-arrow-left"></i>
							</button>
						<button className="slider-next">
							<i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</div>
				</div>
			</section>
	);
}
