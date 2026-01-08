import { useState } from 'react'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { InstagramEmbed } from 'react-social-media-embed'
import Link from 'next/link'
import Image from 'next/image'

export default function About2() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="about-section fix section-padding" id="about">
				<div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/transparencias-02.png" alt="img" />
				</div>
				<div className="about-shape-5 float-bob-y">
					<img src="assets/img/about/about-shape-5.png" alt="img" />
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4 grid">
							<div className="col-md-6">
								<div className="about-image">
									<Image
										src="/assets/img/about/IMG_2359.jpg"
										alt="about image"
										width={1920}
										height={1080}
										className="image"
										style={{
											visibility: "visible",
											animationDelay: 0.3
										}}
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img 
											src="assets/img/about/04.jpg" 
											alt="img"
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												borderRadius: "5px"
											}}
										/>
									</div>
									<div className="video-items">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											VER VIDEO
										</a>
									</div>
									<div className="bar-shape">
										<img src="assets/img/about/bar.png" alt="img" />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp" style={{ color: '#ff282e' }}>
											<i className="fa-classic fa-arrow-left-long" />
											Sobre Legacy Cargo
											<i className="fa-classic fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											Expertos en<br /> Soluciones Logísticas<br /> Internacionales
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
										Legacy Cargo nace con una visión clara: conectar Venezuela con el mundo a través de servicios logísticos confiables y eficientes. Nuestra experiencia en comercio internacional nos permite ofrecer soluciones completas para tus necesidades de importación.
									</p>
									<div className="row g-4 mt-3">
										<div className="col-sm-6 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon" style={{ backgroundColor: '#ff282e' }}>
													<i className="fa-solid fa-plane"></i>
												</div>
												<h5>Transporte Internacional</h5>
											</div>
										</div>
										<div className="col-sm-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon" style={{ backgroundColor: '#ff282e' }}>
													<i className="fa-solid fa-envelopes-bulk"></i>
												</div>
												<h5>Gestión Aduanera</h5>
											</div>
										</div>
									</div>
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											<i className="fa-solid fa-circle-check" style={{ color: '#ff282e' }} />
											Envíos aéreos desde USA y Panamá hacia Venezuela
										</li>
										<li>
											<i className="fa-solid fa-circle-check" style={{ color: '#ff282e' }} />
											Carga marítima desde USA, Panamá y China
										</li>
										<li>
											<i className="fa-solid fa-circle-check" style={{ color: '#ff282e' }} />
											Distribución terrestre en todo el territorio venezolano
										</li>
									</ul>
									<div className="about-author about-btns">
										<Link href="/about" className="explore-more">
											Conocer Más <i className="fa-solid fa-arrow-right"></i>
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											{/* <img src="assets/img/about/author.png" alt="Legacy Cargo CEO" /> */}
											{/* <div className="content">
												<p>Legacy Cargo, CEO</p>
												<h4>José Rodríguez</h4>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			{/* Modal personalizado para Instagram Reels */}
			{isOpen && (
				<div 
					onClick={() => setOpen(false)}
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.95)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 9999,
						padding: '20px',
						cursor: 'pointer',
					}}
				>
					<div 
						onClick={(e) => e.stopPropagation()}
						style={{
							position: 'relative',
							maxWidth: '500px',
							width: '100%',
							cursor: 'default',
						}}
					>
						<button
							onClick={() => setOpen(false)}
							style={{
								position: 'absolute',
								top: '-50px',
								right: '0',
								background: 'transparent',
								border: 'none',
								color: 'white',
								fontSize: '32px',
								cursor: 'pointer',
								zIndex: 10000,
								padding: '10px',
							}}
							aria-label="Cerrar"
						>
							✕
						</button>
						<InstagramEmbed 
							url="https://www.instagram.com/p/DSkXJuIjgjl"
							width="100%"
						/>
					</div>
				</div>
			)}
		</>
	)
}
