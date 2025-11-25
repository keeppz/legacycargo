import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TrackingSearchBar from './TrackingSearchBar';

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
 		image: "/assets/img/hero/todas-02.png",
 		subtitle: "El aliado que impulsa",
 		title: "Tus envíos",
 		titleSecond: "Conectamos Mundos, Entregamos",
 		titleThird: " Confianza y Tranquilidad",
 		description: "Especialistas en envíos desde China, USA y Panamá hacia Venezuela. Tu carga llega rápido, segura y sin complicaciones. Dejan la logística en manos expertas.",
		subtitlecolor: "#fff",
		titlecolor: "#fff",
		titleSecondcolor: "#fff",
		titleThirdcolor: "#fff",
		descriptioncolor: "#fff",
 },
		  {
		 image: "/assets/img/hero/todas-05.png",
		 subtitle: "Soluciones Marítimas Globales",
		 title: "La opción ",
		 titleSecond: "mas eficiente para cargas",
		 titleThird: "de gran volumen",
		 description: "Consolidamos tu carga en contenedores desde China y Panamá hacia Venezuela con máxima seguridad y costos optimizados.",
		 subtitlecolor: "#fff",
		 titlecolor: "#fff",
		 titleSecondcolor: "text-white",
		 titleThirdcolor: "text-white",
		 descriptioncolor: "#fff",
	  },
	 	{
	 	image: "/assets/img/hero/legacy cargo-04.png",
	 	subtitle: "Servicios Aduanales Completos",
	 	title: "Trámites",
	 	titleSecond: "Aduaneros",
	 	titleThird: "Sin Complicaciones",
	 	description: "Nuestros expertos en gestión aduanera manejan toda la documentación legal para que tu carga fluya sin obstáculos. Importa con total tranquilidad."
	 },
	 {
	 	image: "/assets/img/hero/legacy cargo-03.png",
	 	subtitle: "Servicios Aereos Completos",
	 	title: "Trámites",
	 	titleSecond: "Aereos",
	 	titleThird: "Sin Complicaciones",
	 	description: "Nuestros expertos en gestión aerea manejan toda la documentación legal para que tu carga fluya sin obstáculos. Importa con total tranquilidad."
	 }
];

export default function Hero2() {
	// Función helper para determinar si es un color hexadecimal o una clase
	const getColorStyle = (colorValue) => {
		if (!colorValue) return {};
		
		// Si empieza con #, es un color hexadecimal
		if (colorValue.startsWith('#')) {
			return { color: colorValue };
		}
		
		// Si empieza con "text-", es una clase de Tailwind, retornar objeto vacío
		// para que se aplique la clase directamente
		return {};
	};

	// Función helper para obtener la clase de color
	const getColorClass = (colorValue) => {
		if (!colorValue) return '';
		
		// Si empieza con "text-", es una clase de Tailwind
		if (colorValue.startsWith('text-')) {
			return colorValue;
		}
		
		// Si es hexadecimal, retornar string vacío (se usará style)
		return '';
	};

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
								quality={100}
								className="bg-cover"
							/>
							<div className="overlay"></div>
						</div>
						<div className="container">
							<div className="row align-items-center min-vh-100">
								<div className="col-lg-7">
									<div className="hero-content">
										<h5 
											style={getColorStyle(slide.subtitlecolor)}
											className={getColorClass(slide.subtitlecolor)}
										>
											{slide.subtitle}
										</h5>
										<h1 
											style={getColorStyle(slide.titlecolor)}
											className={getColorClass(slide.titlecolor)}
										>
											{slide.title} <br />
										</h1>
										<h2>
											<span 
												style={getColorStyle(slide.titleSecondcolor)}
												className={getColorClass(slide.titleSecondcolor)}
											>
												{slide.titleSecond}
											</span> <br />
											<span 
												style={getColorStyle(slide.titleThirdcolor)}
												className={getColorClass(slide.titleThirdcolor)}
											>
												{slide.titleThird}
											</span>
										</h2>	
										<p 
											style={getColorStyle(slide.descriptioncolor)}
											className={getColorClass(slide.descriptioncolor)}
										>
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
			<TrackingSearchBar />
		</section>
	);
}
