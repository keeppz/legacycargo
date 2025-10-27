import Link from "next/link"

export default function Contact() {
	// Información de contacto
	const contactInfo = {
		address: "Av. Principal, Ciudad, Venezuela",
		phone: "+58 412 123 4567",
		email: "info@legacycargove.com",
		whatsapp: "+584121234567" // Número de WhatsApp sin espacios ni caracteres especiales
	};

	// Redes sociales
	const socialNetworks = [
		{ name: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://facebook.com" },
		{ name: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com" },
		{ name: "Twitter", icon: "fa-brands fa-twitter", url: "https://twitter.com" },
		{ name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com" }
	];

	return (
		<>
			<section
				className="contact-section fix section-padding bg-cover" id="contact"
				style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}
			>
				<div className="contact-image float-bob-x">
					<img src="assets/img/contact-img-shape.png" alt="img" />
				</div>
				<div className="container">
					<div className="contact-wrapper">
						<div className="row g-4 align-items-center">
							<div className="col-lg-6">
								<div className="contact-items">
									<h3 className="wow fadeInUp" data-wow-delay=".2s">
										¡Contáctanos!
									</h3>
									
									{/* Información de contacto */}
									<div className="contact-info mt-4">
										<div className="info-item wow fadeInUp" data-wow-delay=".2s">
											<i className="fas fa-map-marker-alt"></i>
											<p>{contactInfo.address}</p>
										</div>
										<div className="info-item wow fadeInUp" data-wow-delay=".3s">
											<i className="fas fa-phone"></i>
											<Link href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>
												{contactInfo.phone}
											</Link>
										</div>
										<div className="info-item wow fadeInUp" data-wow-delay=".4s">
											<i className="fas fa-envelope"></i>
											<Link href={`mailto:${contactInfo.email}`}>
												{contactInfo.email}
											</Link>
										</div>
									</div>
									
									{/* Botón de WhatsApp */}
									<div className="whatsapp-button mt-5 wow fadeInUp" data-wow-delay=".5s">
										<Link 
											href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, estoy interesado en sus servicios de logística.`} 
											className="theme-btn"
											target="_blank"
											style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
										>
											<i className="fab fa-whatsapp me-2"></i>
											Contactar por WhatsApp
										</Link>
									</div>
									
									{/* Redes sociales */}
									<div className="social-networks mt-5 wow fadeInUp" data-wow-delay=".6s">
										<h4 style={{ marginBottom: "20px" }}>Síguenos en nuestras redes</h4>
										<div className="social-icons d-flex">
											{socialNetworks.map((social, index) => (
												<Link 
													key={index} 
													href={social.url} 
													target="_blank" 
													style={{
														width: '45px',
														height: '45px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														borderRadius: '50%',
														backgroundColor: '#DF1119',
														color: '#fff',
														fontSize: '18px',
														marginRight: '15px',
														transition: 'all 0.3s ease'
													}}
												>
													<i className={social.icon}></i>
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="contact-content">
									<div className="section-title">
										<h6 className="text-white wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											habla con nosotros
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2
											className="text-white wow fadeInUp"
											data-wow-delay=".3s"
										>
											Soluciones logísticas para tu negocio
										</h2>
									</div>
									<p
										className="text-white mt-3 mt-md-0 wow fadeInUp"
										data-wow-delay=".5s"
									>
										En Legacy Cargo nos especializamos en ofrecer soluciones logísticas 
										integrales que se adaptan a las necesidades de tu empresa. 
										Nuestro equipo de expertos está listo para ayudarte con todas tus 
										operaciones de transporte nacional e internacional.
									</p>
									<div className="icon-items wow fadeInUp" data-wow-delay=".3s">
										<div className="icon">
											<i className="fa-solid fa-phone-volume" />
										</div>
										<div className="content">
											<span>llamada de emergencia</span>
											<h4>
												<Link href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>
													{contactInfo.phone}
												</Link>
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
