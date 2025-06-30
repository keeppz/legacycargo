import  Link  from "next/link"
import Gallery from "../../elements/Gallery"

export default function Footer1() {
	return (
		<>
			<footer
				className="footer-section bg-cover bg-cover"
				style={{ backgroundImage: 'url("/assets/img/footer/bg.jpg")' }}
			>
				<div className="container">
					<div className="contact-info-area">
						<Link
							href="/"
							className="logo-img wow fadeInUp"
							data-wow-delay=".2s"
							style={{ 
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center', 
								height: '100%', 
								padding: '15px 0'
							}}
						>
							<img 
								src="assets/img/logo/white-logo.png" 
								alt="Legacy Cargo" 
								style={{ maxWidth: '150px', height: 'auto' }}
							/>
						</Link>
						{/* <div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-location-dot" />
							</div>
							<div className="content">
								<p>Nuestras Oficinas</p>
								<h3>Miami, FL - Caracas, VE</h3>
							</div>
						</div> */}
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="icon">
								<i className="fa-solid fa-envelope" />
							</div>
							<div className="content">
								<p>Correo Electrónico</p>
								<h3>
									<Link href="mailto:info@legacycargo.com">info@legacycargo.com</Link>
								</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<i className="fab fa-whatsapp" style={{ marginRight: '0px', color: '#25D366', fontSize: '24px' }}></i>
							</div>
							<div className="content">
								<p>Contáctanos</p>
								<h3>
									<Link 
										href="https://api.whatsapp.com/send?phone=584142909883&text=Hola%2C%20quiero%20enviar%20un%20paquete."
										target="_blank" 
										rel="noopener noreferrer"
									>
										+58 414-2909883
									</Link>
								</h3>
							</div>
						</div>
					</div>
					<div className="footer-widgets-wrapper">
						<div className="row justify-content-center">
							<div
								className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Sobre Legacy Cargo</h5>
									</div>
									<div className="footer-content">
										<p>
											Conectamos mundos, entregamos confianza. <br /> Soluciones logísticas integrales para tus envíos <br /> internacionales y nacionales con la mayor seguridad.
										</p>
										<div className="social-icon d-flex align-items-center">
											<Link href="/#">
												<i className="fab fa-facebook-f" />
											</Link>
											<Link href="/#">
												<i className="fab fa-twitter" />
											</Link>
											<Link href="/#">
												<i className="fab fa-youtube" />
											</Link>
											<Link href="/#">
												<i className="fab fa-linkedin-in" />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".4s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Enlaces Rápidos</h5>
									</div>
									<ul className="list-area">
										{/* <li>
											<Link href="/about">
												<i className="fa-solid fa-chevrons-right" />
												Conócenos
											</Link>
										</li> */}
										<li>
											<Link href="/contact">
												<i className="fa-solid fa-chevrons-right" />
												Contáctanos
											</Link>
										</li>
										{/* <li>
											<Link href="/news">
												<i className="fa-solid fa-chevrons-right" />
												Noticias
											</Link>
										</li> */}
										<li>
											<Link href="/faq">
												<i className="fa-solid fa-chevrons-right" />
												Preguntas Frecuentes
											</Link>
										</li>
										<li>
											<Link href="/privacy">
												<i className="fa-solid fa-chevrons-right" />
												Política de Privacidad
											</Link>
										</li>
										<li>
											<Link href="/terms">
												<i className="fa-solid fa-chevrons-right" />
												Términos y Condiciones
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".6s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Nuestros Servicios</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Carga Aérea Internacional
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Carga Marítima Internacional
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Transporte Terrestre Nacional
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Servicios Aduanales
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Logística Integral
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".8s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Galería</h5>
									</div>
									<div className="footer-gallery">
										<div className="gallery-wrap">
											<Gallery />
											{/* <div className="gallery-item">
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-4.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-4.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-5.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-5.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-6.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-6.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>
							© Todos los derechos reservados {new Date().getFullYear()} por{" "}
							<Link href="/">Legacy Cargo</Link>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
