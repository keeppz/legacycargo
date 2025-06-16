import Link from 'next/link'

export default function CtaBanner() {
	return (
		<>
			<section className="cta-banner-section section-padding">
				<div className="container">
					<div
						className="cta-banner-wrapper fix bg-cover"
						style={{ backgroundImage: 'url("assets/img/cta-bg.jpg")' }}
					>
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
							¿Buscas Soluciones <br /> Logísticas{" "}
							<span style={{ color: '#ff282e' }}>Internacionales</span> <br /> Confiables?
						</h2>
						<div className="cta-img wow fadeInUp" data-wow-delay=".4s">
							<img src="assets/img/cta-img.png" alt="img" />
							<div className="shape-img">
								<img src="assets/img/cta-shape.png" alt="img" />
							</div>
						</div>
						<Link href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".6s" style={{ backgroundColor: '#ff282e', borderColor: '#ff282e' }}>
							Cotiza tu Envío
							<i className="fa-classic fa-arrow-right" />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
