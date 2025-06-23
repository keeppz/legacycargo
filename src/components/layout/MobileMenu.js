'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
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
		<div className="fix">
			<div className={`side-info ${isMobileMenu ? "info-open" : ""}`}>
				<div className="side-info-content">
					<div className="offset-widget mb-40">
						<div className="row text-center">
							<div className="col-12">
								<Link href="/">
									<Image
										src="/assets/img/logo/white-logo.png"
										alt="Legacy Cargo Logo"
										width={170}
										height={50}
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="mobile-menu fix">
						<nav id="mobile-menu-active">
							<ul className="menu-overflow">
								<li className="menu-item-has-children">
									<Link href="/">Inicio</Link>
								</li>
								<li className="menu-item-has-children">
									<Link href="/about">Nosotros</Link>
								</li>
								<li className="menu-item-has-children">
									<a onClick={() => handleToggle(1)}>
										Servicios 
										<i className={`fa-solid ${isActive.key === 1 ? "fa-minus" : "fa-plus"} ms-1`}></i>
									</a>
									<ul className={`sub-menu ${isActive.key === 1 ? "active" : ""}`} style={{display: isActive.key === 1 ? "block" : "none"}}>
										<li><Link href="/service-aereo">Servicio Aéreo</Link></li>
										<li><Link href="/service-maritimo">Servicio Marítimo</Link></li>
										<li><Link href="/service-terrestre">Servicio Terrestre</Link></li>
										<li><Link href="/service-aduanal">Servicio Aduanal</Link></li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<Link href="/calculator">Calculadora de envíos</Link>
								</li>
								<li>
									<Link href="/contact">Contáctanos</Link>
								</li>
							</ul>
						</nav>
					</div>
					
					<div className="contact-infos mt-5 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
						<div className="contact-list mb-30">
							<h4>Info de Contacto</h4>
							<ul>
								<li>
									<i className="fab fa-whatsapp"></i>
									<Link target="_blank" href="https://wa.me/+584126396424">+58 412-6396424</Link>
								</li>
								<li>
									<i className="far fa-envelope"></i>
									<Link href="mailto:info@legacycargove.com">info@legacycargove.com</Link>
								</li>
								<li>
									<i className="fa-sharp fa-solid fa-location-dot"></i>
									C.C Lido, Caracas
								</li>
							</ul>
							
							<div className="sidebar__menu--social mt-30">
								<Link href="#" target="_blank"><i className="fab fa-facebook-f"></i></Link>
								<Link href="#" target="_blank"><i className="fab fa-instagram"></i></Link>
								<Link href="#" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				onClick={handleMobileMenu}
				className={`overlay-bg ${isMobileMenu ? "active" : ""}`}
			/>
		</div>
	)
}
