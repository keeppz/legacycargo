'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
	const [isActive, setIsActive] = useState({
		status: false,
		key: "",
	})

	const handleToggle = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			})
		} else {
			setIsActive({
				status: true,
				key,
			})
		}
	}
	return (
		<>
			<div className="fix-area">
				<div className={`offcanvas__info dark-bg ${isOffCanvas ? "info-open" : ""}`}>
					<div className="offcanvas__wrapper">
						<div className="offcanvas__content">
							<div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
								<div className="offcanvas__logo">
									<Link href="/" className="d-block text-center">
										<Image src="/assets/img/logo/white-logo.png" alt="Legacy Cargo Logo" width={150} height={45} />
									</Link>
								</div>
								<div className="offcanvas__close">
									<button onClick={handleOffCanvas}>
										<i className="fas fa-times" />
									</button>
								</div>
							</div>

							<div className="offcanvas__menu mb-4">
								<ul className="menu-overflow">
									<li className="menu-item mb-3">
										<Link href="/" onClick={handleOffCanvas} className="main-nav-link">Inicio</Link>
									</li>
									<li className="menu-item mb-3">
										<Link href="/about" onClick={handleOffCanvas} className="main-nav-link">Nosotros</Link>
									</li>
									<li className="menu-item-has-children mb-3">
										<a onClick={() => handleToggle(1)} className="has-dropdown main-nav-link">
											Servicios
											<i className={`fa-solid ${isActive.key === 1 ? "fa-minus" : "fa-plus"} ms-2`}></i>
										</a>
										<ul className={`sub-menu ${isActive.key === 1 ? "active" : ""}`}>
											<li className="mb-2"><Link href="/service-aereo" onClick={handleOffCanvas} className="sub-nav-link">Servicio Aéreo</Link></li>
											<li className="mb-2"><Link href="/service-maritimo" onClick={handleOffCanvas} className="sub-nav-link">Servicio Marítimo</Link></li>
											<li className="mb-2"><Link href="/service-terrestre" onClick={handleOffCanvas} className="sub-nav-link">Servicio Terrestre</Link></li>
											<li className="mb-2"><Link href="/service-aduanal" onClick={handleOffCanvas} className="sub-nav-link">Servicio Aduanal</Link></li>
											{/* <li className="mb-2"><Link href="/service-paqueteria" onClick={handleOffCanvas} className="sub-nav-link">Servicio de Paquetería</Link></li> */}
										</ul>
									</li>
									<li className="menu-item mb-3">
										<Link href="/calculator" onClick={handleOffCanvas} className="main-nav-link">Calculadora de envíos</Link>
									</li>
									<li className="menu-item mb-3">
										<Link href="/tracking" onClick={handleOffCanvas} className="main-nav-link">Seguimiento de envíos</Link>
									</li>
									<li className="menu-item mb-3">
										<Link href="/contact" onClick={handleOffCanvas} className="main-nav-link">Contáctanos</Link>
									</li>
								</ul>
							</div>

							<p className="text d-none d-xl-block">
								Legacy Cargo, expertos en soluciones logísticas internacionales. Conectamos a Venezuela con el mundo a través de servicios confiables y eficientes.
							</p>

							<div className="offcanvas__contact">
								<h4>Información de Contacto</h4>
								<ul>
									<li className="d-flex align-items-center mb-3 justify-content-center">
										<div className="offcanvas__contact-icon me-3">
											<i className="far fa-envelope" />
										</div>
										<div className="offcanvas__contact-text">
											<Link href="mailto:info@legacycargove.com">
												<span>info@legacycargove.com</span>
											</Link>
										</div>
									</li>
									<li className="d-flex align-items-center mb-3 justify-content-center">
										<div className="offcanvas__contact-icon me-3">
											<i className="fab fa-whatsapp" />
										</div>
										<div className="offcanvas__contact-text">
											<Link href="https://wa.me/+584126396424" target="_blank">+58 412-6396424</Link>
										</div>
									</li>
								</ul>
								<div className="header-button mt-10 d-flex justify-content-center align-items-center ">
									<Link href="/download" className="theme-btn text-center legacy-btn">
										<span>
											Descarga nuestra app
											<i className="fa-solid fa-arrow-right-long ms-2" />
										</span>
									</Link>
								</div>
								<div className="social-icon d-flex align-items-center mt-4 legacy-social">
									<Link href="/#">
										<i className="fab fa-facebook-f" />
									</Link>
									<Link href="/#">
										<i className="fab fa-instagram" />
									</Link>
									<Link href="/#">
										<i className="fab fa-linkedin-in" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
		</>
	)
}
