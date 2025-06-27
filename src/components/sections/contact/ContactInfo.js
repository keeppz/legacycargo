import React from "react"
import Link from "next/link"

export default function ContactInfo() {
	return (
		<section className="contact-info-section fix section-padding">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">
						<i className="fa-classic fa-arrow-left-long" />
						CONTACTO
						<i className="fa-classic fa-arrow-right-long" />
					</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".4s">
						Información de Contacto
					</h2>
				</div>
				<div className="contact-info-grid">
					<div className="contact-info-item wow fadeInUp" data-wow-delay=".2s">
						<div className="contact-box-items">
							<div className="icon">
								<img src="assets/img/icon/19.svg" alt="img" />
							</div>
							<div className="content">
								<h3>Correo Electrónico</h3>
								<p>
								<Link href="mailto:customerservice@legacycargove.com">customerservice@legacycargove.com</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="contact-info-item wow fadeInUp" data-wow-delay=".4s">
						<div className="contact-box-items">
							<div className="icon">
								<i className="fa-brands fa-whatsapp"></i>
							</div>
							<div className="content">
								<h3>Whatsapp</h3>
								<p><Link href="https://wa.me/584126396424">+58 412-6396424</Link>
								</p>
							</div>
						</div> 
					</div>
					<div className="contact-info-item wow fadeInUp" data-wow-delay=".6s">
						<div className="contact-box-items">
							<div className="icon">
								<img src="assets/img/icon/20.svg" alt="img" />
							</div>
							<div className="content">
								<h3>Horario de Atención</h3>
								<p>
									Lunes a Viernes: 8:30-17:00 <br /> 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
