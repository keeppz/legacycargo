import Link from "next/link"

export default function Footer2() {
	return (
		<>
			<footer id="footer" style={{ backgroundImage: 'url("/assets/img/footer/bg.jpg")' }}>
				<div className="container">
				<div className="footer-main">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget">
								<div className="f-logo">
									<Link href="/">
										<img 
											src="assets/img/logo/black-logo.png" 
											alt="Legacy Cargo" 
											style={{ maxWidth: '150px', height: 'auto' }} 
										/>
						</Link>
									</div>
										<p>
									Conectamos mundos, entregamos confianza. Especialistas en soluciones logísticas internacionales entre USA, Panamá, China y Venezuela.
										</p>
								<div className="footer-social footer-social-2 mt-20">
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
										<i className="fab fa-instagram" />
											</Link>
								</div>
							</div>
									</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget">
								<h4>Información de Contacto</h4>
								<ul className="contact-info-list">
										<li>
										<i className="fa-solid fa-phone" />
										<div className="address-info">
											<p>
												<Link href="tel:+1305XXXXXXX">+1 (305) XXX-XXXX</Link>
											</p>
											<p>
												<Link href="tel:+58212XXXXXXX">+58 (212) XXX-XXXX</Link>
											</p>
										</div>
										</li>
										<li>
										<i className="fa-solid fa-envelope" />
										<div className="address-info">
											<p>
												<Link href="mailto:info@legacycargo.com">
													info@legacycargo.com
											</Link>
											</p>
											<p>
												<Link href="mailto:ventas@legacycargo.com">
													ventas@legacycargo.com
											</Link>
											</p>
										</div>
										</li>
										<li>
										<i className="fa-solid fa-map-location-dot" />
										<div className="address-info">
											<p>
												Miami, FL - USA <br />
												Caracas, Venezuela
											</p>
										</div>
										</li>
									</ul>
								</div>
							</div>
						<div className="col-xl-2 col-lg-2 col-md-3 col-sm-6">
							<div className="footer-widget">
								<h4>Enlaces Útiles</h4>
								<ul className="footer-links">
										<li>
										<Link href="/about">Sobre Nosotros</Link>
										</li>
										<li>
										<Link href="/service">Servicios</Link>
										</li>
										<li>
										<Link href="/project">Clientes</Link>
										</li>
										<li>
										<Link href="/tracking">Seguimiento</Link>
										</li>
										<li>
										<Link href="/contact">Contáctanos</Link>
										</li>
									</ul>
								</div>
							</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget">
								<h4>Cotizar Envío</h4>
								<p>
									Subscríbete a nuestro boletín para recibir promociones y noticias sobre nuestros servicios.
								</p>
								<form className="f-newsletter">
									<input
										type="text"
										className="form-control"
										placeholder="Ingresa tu correo"
									/>
									<button className="theme-btn " type="submit" style={{ backgroundColor: '#ff282e' }}>
										<span>
											Cotizar Ahora
											<i className="fa-solid fa-arrow-right-long" />
										</span>
									</button>
								</form>
								<div className="payment-icons">
									<span>Métodos de Pago:</span>
									<Link href="/#">
										<img src="/assets/img/payments/visa-card.png" alt="visa" width={50} height={35} />
													</Link>
									<Link href="/#">
										<img src="/assets/img/payments/paypal.png" alt="paypal" width={50} height={35} />
													</Link>
									<Link href="/#">
										<img src="/assets/img/payments/master-card.png" alt="mastercard" width={50} height={35} />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
				<div className="footer-bottom">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6">
							<div className="copyright-txt">
								<p>
									© Copyright {new Date().getFullYear()} <Link href="/">LEGACY CARGO</Link> - Todos los derechos reservados.
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6">
							<ul className="bottom-links">
								<li>
									<Link href="/privacy">Política de Privacidad</Link>
								</li>
								<li>
									<Link href="/terms">Términos y Condiciones</Link>
								</li>
							</ul>
						</div>
					</div>
					</div>
				</div>
			</footer>
		</>
	)
}
