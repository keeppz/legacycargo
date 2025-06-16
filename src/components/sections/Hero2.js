import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 0,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: true,
	navigation: {
		nextEl: ".h1n",
		prevEl: ".h1p",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
};

const slides = [
	{
		image: "/assets/img/hero/03.jpg",
		subtitle: "Transporte Aéreo Internacional",
		title: "Conectamos",
		titleSecond: "Mundos,",
		titleThird: "Entregamos Confianza",
		description: "Especialistas en envíos desde USA y Panamá hacia Venezuela. Tu carga llega rápido, segura y sin complicaciones. Dejamos la logística en manos expertas."
},
	{
		image: "/assets/img/hero/04.jpg",
		subtitle: "Transporte Marítimo Internacional",
		title: "Soluciones",
		titleSecond: "Marítimas",
		titleThird: "Globales",
		description: "Trasladamos tu mercancía vía marítima desde USA, Panamá y China con máxima seguridad. Nos encargamos de todo el proceso logístico para tu tranquilidad."
		},
	{
		image: "/assets/img/hero/05.jpg",
		subtitle: "Servicios Aduanales Completos",
		title: "Trámites",
		titleSecond: "Aduaneros",
		titleThird: "Sin Complicaciones",
		description: "Nuestros expertos en gestión aduanera manejan toda la documentación legal para que tu carga fluya sin obstáculos. Importa con total tranquilidad."
		}

];

export default function Hero2() {
	return (
		<section className="hero-section fix hero-2">
			<Swiper {...swiperOptions} className="hero-slider-2">
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="slider-image">
							<Image
								src={slide.image}
								alt={slide.title}
								width={1920}
								height={1080}
								priority={index === 0}
								quality={90}
								className="bg-cover"
							/>
							<div className="overlay"></div>
						</div>
						<div className="container">
							<div className="row align-items-center min-vh-100">
								<div className="col-lg-7">
									<div className="hero-content">
										<h5 >
											{slide.subtitle}
										</h5>
										<h1>
											{slide.title} <br />
											{slide.titleSecond} <br />
											<span style={{ color: '#ff282e' }}>{slide.titleThird}</span>
										</h1>
										<p>
											{slide.description}
										</p>
										<div className="hero-button">
											<Link
												href="/about"
												className="theme-btn hover-white"
											>
												Saber Mas
												<i className="fa-solid fa-arrow-right-long" />
											</Link>
											<Link
												href="/calculator"
												className="theme-btn bg-white"
												// style={{ color: '#1D2428' }}
											>
												Cotiza tu Envío
												<i className="fa-solid fa-arrow-right-long" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="array-button">
				<button className="array-prev h1p">
					<i className="fas fa-arrow-left" />
				</button>
				<button className="array-next h1n">
					<i className="fas fa-arrow-right" />
				</button>
			</div>
		</section>
	);
}
