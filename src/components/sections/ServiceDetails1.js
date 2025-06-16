import React from "react"
import Link from 'next/link'
import Image from 'next/image'

export default function ServiceDetails1() {
	return (
		<>
			<section className="service-details-section section-padding">
				<div className="container">
					<div className="service-details-wrapper">
						<div className="row g-4">
							<div className="col-12 col-lg-8">
								<div className="service-details-image">
									<Image
										src="/assets/img/service/service-details.jpg"
										alt="servicio de logística internacional"
										width={1920}
										height={1080}
										className="image"
									/>
								</div>
								<div className="service-details-content">
									<h2>Transporte Internacional</h2>
									<p>
										En Legacy Cargo ofrecemos soluciones logísticas internacionales completas y eficientes para conectar a Venezuela con el mundo. Nuestro amplio portafolio de servicios de transporte está diseñado para satisfacer sus necesidades específicas, ya sea para envíos comerciales, personales o empresariales.
									</p>
									<p className="mt-4 mb-4">
										Contamos con una red logística establecida en Estados Unidos, Panamá, China y Venezuela que nos permite garantizar el transporte seguro y eficiente de su mercancía, documentos y paquetes con los mejores tiempos de tránsito del mercado.
									</p>
									<div className="row g-4">
										<div className="col-lg-7">
											<div className="service-details-image">
												<img src="/assets/img/service/details-2.jpg" alt="operaciones logísticas" />
											</div>
										</div>
										<div className="col-lg-5">
											<div className="content">
												<h3>Beneficios de nuestros servicios:</h3>
												<p className="mt-2 mb-2">
													Nuestros clientes disfrutan de múltiples ventajas al elegir Legacy Cargo como su aliado logístico.
												</p>
											</div>
											<ul className="details-list">
												<li>
													<i className="fa-solid fa-circle-check" style={{ color: "#ff282e" }} />
													Seguimiento en tiempo real de sus envíos
												</li>
												<li>
													<i className="fa-solid fa-circle-check" style={{ color: "#ff282e" }} />
													Asesoría personalizada durante todo el proceso
												</li>
												<li>
													<i className="fa-solid fa-circle-check" style={{ color: "#ff282e" }} />
													Soluciones adaptadas a sus necesidades específicas
												</li>
												<li>
													<i className="fa-solid fa-circle-check" style={{ color: "#ff282e" }} />
													Tiempos de tránsito optimizados
												</li>
											</ul>
										</div>
									</div>
									<h4>Nuestro proceso en 3 simples pasos</h4>
									<p className="mt-3">
										En Legacy Cargo hemos simplificado el proceso de envío para brindarle una experiencia sin complicaciones. Nuestro enfoque estructurado garantiza que su mercancía llegue a su destino de manera segura y eficiente.
									</p>
									<div className="row g-4 mt-2">
										<div className="col-xl-4 col-lg-6 col-md-6">
											<div className="service-details-box">
												<div className="icon">
													<img src="/assets/img/icon/15.svg" alt="planificación" />
													<h5>Cotización</h5>
												</div>
												<p>
													Contáctenos para recibir una cotización personalizada según sus necesidades específicas de envío.
												</p>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-6">
											<div className="service-details-box">
												<div className="icon">
													<img src="/assets/img/icon/16.svg" alt="coordinación" />
													<h5>Coordinación</h5>
												</div>
												<p>
													Organizamos la recogida, transporte y documentación necesaria para su envío internacional.
												</p>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-6">
											<div className="service-details-box">
												<div className="icon">
													<img src="/assets/img/icon/17.svg" alt="entrega" />
													<h5>Entrega</h5>
												</div>
												<p>
													Realizamos la entrega de su mercancía en el destino final, con seguimiento en tiempo real durante todo el proceso.
												</p>
											</div>
										</div>
									</div>
									<p className="mt-1 pt-4">
										En Legacy Cargo entendemos la importancia de una logística eficiente para el éxito de su negocio. Por eso, nos comprometemos a ofrecer soluciones confiables y adaptadas a sus necesidades específicas, respaldadas por nuestra experiencia en el sector y nuestro conocimiento del mercado venezolano e internacional.
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="main-sidebar">
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Nuestros Servicios</h3>
										</div>
										<div className="news-widget-categories">
											<ul>
												<li>
													<Link href="/service-aereo">Transporte Aéreo</Link>{" "}
													<span>
														<i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
													</span>
												</li>
												<li>
													<Link href="/service-maritimo">Transporte Marítimo</Link>
													<span>
														<i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
													</span>
												</li>
												<li>
													<Link href="/service-terrestre">Transporte Terrestre</Link>
													<span>
														<i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
													</span>
												</li>
												<li>
													<Link href="/service-aduanal">Servicios Aduanales</Link>{" "}
													<span>
														<i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
													</span>
												</li>
												<li>
													<Link href="/service-almacenamiento">Almacenamiento</Link>{" "}
													<span>
														<i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
													</span>
												</li>
												<li>
													<Link href="/service-paqueteria">Paquetería Internacional</Link>{" "}
													<span>
														<i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
													</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Descargas</h3>
										</div>
										<div className="brochures-download-items">
											<div className="brochures-items">
												<div className="icon">
													<i className="fal fa-file-pdf" style={{ color: "#ff282e" }} />
												</div>
												<div className="content">
													<h5>Catálogo de Servicios</h5>
													<p>Descargar</p>
												</div>
											</div>
											<Link href="#" className="download-btn" style={{ backgroundColor: "#ff282e" }}>
												<i className="fa-light fa-download" />
											</Link>
										</div>
										<div className="brochures-download-items">
											<div className="brochures-items">
												<div className="icon">
													<i className="fal fa-file-pdf" style={{ color: "#ff282e" }} />
												</div>
												<div className="content">
													<h5>Términos y Condiciones</h5>
													<p>Descargar</p>
												</div>
											</div>
											<Link
												href="#"
												className="download-btn active"
												style={{ backgroundColor: "#ff282e" }}
											>
												<i className="fa-light fa-download" />
											</Link>
										</div>
									</div>
									<div className="service-sidebar-widget">
										<div
											className="contact-bg text-center bg-cover"
											style={{
												backgroundImage:
													'url("/assets/img/service/contact-bg.jpg")',
											}}
										>
											<p>¿Necesita ayuda con su envío? Estamos aquí para ayudarle</p>
											<Link href="/contact" className="theme-btn w-100" style={{ backgroundColor: "#ff282e", borderColor: "#ff282e" }}>
												Contáctenos ahora
												<i className="fa-classic fa-arrow-right" />
											</Link>
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
