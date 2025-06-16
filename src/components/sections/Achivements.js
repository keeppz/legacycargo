import Counter1 from "./Counter1"

export default function Achivements() {
	return (
		<>
			<section
				className="achivements-section fix section-bg-2 section-padding bg-cover"
				style={{
					backgroundImage: 'url("assets/img/achivements-bg-shape.png")',
				}}
			>
				<div className="container">
					<div className="achivements-wrapper">
						<div className="row achievement-flex-row">
							<div className="achievement-content-col">
								<div className="achivements-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-classic fa-arrow-left-long" />
											LOGROS
											<i className="fa-classic fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											Una red global al servicio <br /> de tus necesidades logísticas.
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp">
										Con presencia estratégica en tres continentes, ofrecemos soluciones
										logísticas integrales para empresas que necesitan transportar
										mercancías a nivel internacional. Nuestros almacenes en China, Estados
										Unidos y Panamá nos permiten garantizar una cadena de suministro eficiente.
									</p>
									<Counter1 />
								</div>
							</div>
							<div className="achievement-image-col wow fadeInUp" data-wow-delay=".2s">
								<div className="achievement-montage-image">
									<img 
										src="assets/img/achivements-image.jpg" 
										alt="Logística global" 
										className="achievement-main-image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
