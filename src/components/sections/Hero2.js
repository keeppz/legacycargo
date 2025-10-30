'use client';

import { useState } from 'react';
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
		image: "/assets/img/hero/legacy cargo-02.jpg",
		subtitle: "El aliado que impulsa",
		title: "Tus envíos",
		titleSecond: "Conectamos Mundos,",
		titleThird: "Entregamos Confianza",
		titleFourth: "y Tranquilidad",
		description: "Especialistas en envíos desde China, USA y Panamá hacia Venezuela. Tu carga llegará rápido, segura y sin complicaciones. Dejamos la logística en manos expertas.",
		colors: {
			subtitle: "#1d2428",
			title: "#ffffff",
			titleSecond: "#ffffff",
			titleThird: "#1d2428",
			titleFourth: "#1d2428",
			description: "#ffffff",
			button1Bg: "#1d2428",
			button1Text: "#ffffff",
			button1HoverBg: "#b50e14",
			button1HoverText: "#ffffff",
			button2Bg: "#ffffff",
			button2Text: "#1d2428",
			button2HoverBg: "#1d2428",
			button2HoverText: "#ffffff"
		}
	},
	{
		image: "/assets/img/hero/legacy cargo-05.jpg",
		subtitle: "Transporte Marítimo Internacional",
		title: "Soluciones",
		titleSecond: "Marítimas",
		titleThird: "Globales",
		description: "Trasladamos tu mercancía vía marítima desde USA, Panamá y China con máxima seguridad. Nos encargamos de todo el proceso logístico para tu tranquilidad.",
		colors: {
			subtitle: "#ff282e",
			title: "#1D2428",
			titleSecond: "#ff282e",
			titleThird: "#000000",
			description: "#1D2428",
			button1Bg: "#DF1119",
			button1Text: "#ffffff",
			button1HoverBg: "#b50e14",
			button1HoverText: "#000000",
			button2Bg: "#ffffff",
			button2Text: "#DF1119",
			button2HoverBg: "#DF1119",
			button2HoverText: "#000000"
		}
	},
	{
		image: "/assets/img/hero/legacy cargo-03.jpg",
		subtitle: "Transporte Aéreo Internacional",
		title: "Conectamos",
		titleSecond: "Mundos,",
		titleThird: "Entregamos Confianza",
		description: "Especialistas en envíos desde USA y Panamá hacia Venezuela. Tu carga llega rápido, segura y sin complicaciones. Dejamos la logística en manos expertas.",
		colors: {
			subtitle: "#DF1119",  
			title: "#ffffff",
			titleSecond: "#ffffff",
			titleThird: "#ff282e",
			description: "#f0f0f0",
			button1Bg: "#DF1119",
			button1Text: "#ffffff",
			button1HoverBg: "#b50e14",
			button1HoverText: "#000000",
			button2Bg: "#ffffff",
			button2Text: "#DF1119",
			button2HoverBg: "#DF1119",
			button2HoverText: "#000000"
		}
	},
	{
		image: "/assets/img/hero/legacy cargo-04.jpg",
		subtitle: "Servicios Aduanales Completos",
		title: "Trámites",
		titleSecond: "Aduaneros",
		titleThird: "Sin Complicaciones",
		description: "Nuestros expertos en gestión aduanera manejan toda la documentación legal para que tu carga fluya sin obstáculos. Importa con total tranquilidad.",
		colors: {
			subtitle: "#DF1119",
			title: "#ffffff",
			titleSecond: "#ffffff",
			titleThird: "#DF1119",
			description: "#1D2428",
			button1Bg: "#DF1119",
			button1Text: "#ffffff",
			button1HoverBg: "#b50e14",
			button1HoverText: "#000000",
			button2Bg: "#ffffff",
			button2Text: "#DF1119",
			button2HoverBg: "#DF1119",
			button2HoverText: "#000000"
		}
	}

];

// Componente de botón con hover
function HeroButton({ href, colors, children }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={href}
			className="theme-btn"
			style={{ 
				backgroundColor: isHovered ? colors.hoverBg : colors.bg,
				color: isHovered ? colors.hoverText : colors.text,
				borderColor: isHovered ? colors.hoverBg : colors.bg,
				transition: 'all 0.3s ease'
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
		</Link>
	);
}

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
								quality={100}
								className="bg-cover"
							/>
							<div className="overlay"></div>
						</div>
						<div className="container">
							<div className="row align-items-center justify-content-start">
								<div className="col-12 col-lg-8 col-xl-7">
									<div className="hero-content">
										<h5 className="hero-subtitle" style={{ color: slide.colors.subtitle }}>
											{slide.subtitle}
										</h5>
										<h1 className="hero-title">
											<span style={{ color: slide.colors.title }}>{slide.title}</span>
											{slide.titleSecond && (
												<>
													{' '}
													<span style={{ color: slide.colors.titleSecond }}>{slide.titleSecond}</span>
												</>
											)}
											{slide.titleThird && (
												<>
													<br />
													<span style={{ color: slide.colors.titleThird }}>{slide.titleThird}</span>
												</>
											)}
											{slide.titleFourth && (
												<>
													<br />
													<span style={{ color: slide.colors.titleFourth }}>{slide.titleFourth}</span>
												</>
											)}
										</h1>
										<p className="hero-description" style={{ color: slide.colors.description }}>
											{slide.description}
										</p>
										<div className="hero-button">
											<HeroButton 
												href="/about"
												colors={{
													bg: slide.colors.button1Bg,
													text: slide.colors.button1Text,
													hoverBg: slide.colors.button1HoverBg,
													hoverText: slide.colors.button1HoverText
												}}
											>
												Saber Más
												<i className="fa-solid fa-arrow-right-long" />
											</HeroButton>
											<HeroButton 
												href="/calculator"
												colors={{
													bg: slide.colors.button2Bg,
													text: slide.colors.button2Text,
													hoverBg: slide.colors.button2HoverBg,
													hoverText: slide.colors.button2HoverText
												}}
											>
												Cotiza tu Envío
												<i className="fa-solid fa-arrow-right-long" />
											</HeroButton>
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

			{/* Barra de búsqueda de tracking */}
			<TrackingSearchBar variant="hero" />
			
		</section>
	);
}
