import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css"
export default function About1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="about-section fix section-padding" id="about">
				<div className="about-shape-1 float-bob-x">
					<img src="assets/img/about/about-shape-1.png" alt="img" />
				</div>
				<div className="about-shape-2 float-bob-x">
					<img src="assets/img/about/about-shape-2.png" alt="img" />
				</div>
				<div className="container">
					<div className="about-wrapper">
						<div className="row achievement-flex-row">
							<div className="achievement-image-col wow fadeInUp" data-wow-delay=".2s">
								<div className="achievement-montage-image">
									<img
										src="assets/img/about/01.jpg"
										alt="img"
										className="achievement-main-image"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<img src="assets/img/about/02.jpg" alt="img" />
										<div className="video-box">
											<a
												onClick={() => setOpen(true)}
												className="video-btn video-popup"
											>
												<i className="fas fa-play" />
											</a>
										</div>
									</div>
									<div className="about-line-shape">
										<img src="assets/img/about/about-shape-3.png" alt="img" />
									</div>
								</div>
							</div>
							<div className="achievement-content-col">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-classic fa-arrow-left-long" />
											sobre nosotros
											<i className="fa-classic fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											Soluciones Logísticas Globales con Presencia Internacional
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
										Con almacenes estratégicamente ubicados en China, Estados Unidos y Panamá, 
										ofrecemos soluciones integrales de logística y transporte internacional para 
										empresas de todos los tamaños. Nuestra red global nos permite coordinar 
										envíos eficientes y seguros en todo el mundo.
									</p>
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Garantizamos la seguridad y trazabilidad de cada envío
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Más de 10 años de experiencia en logística internacional
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Soluciones personalizadas adaptadas a las necesidades de cada cliente
										</li>
									</ul>
									<div className="about-author">
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".2s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Legacy Cargo, CEO</p>
												<h4>Carlos Ramírez</h4>
											</div>
										</div>
										<img
											src="assets/img/about/signature.png"
											alt="img"
											className="wow fadeInUp"
											data-wow-delay=".4s"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
