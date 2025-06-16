import React from "react"
import Link from "next/link"

export default function ContactInfo() {
	return (
		<section className="contact-info-section fix section-padding">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">
						<i className="fa-classic fa-arrow-left-long" />
						CONTACT US
						<i className="fa-classic fa-arrow-right-long" />
					</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".4s">
						Our Contact Information
					</h2>
				</div>
				<div className="row">
					<div
						className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".4s">
						<div className="contact-box-items">
							<div className="icon">
								<img src="assets/img/icon/19.svg" alt="img" />
							</div>
							<div className="content">
								<h3>Email Address</h3>
								<p>
									Mobile :<Link href="/tel:984756123695">9847 5612 3695</Link>{" "}
									<br />
									Email :
									<Link href="/mailto:example@gmail.com">example@gmail.com</Link>
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".2s">
						 <div className="contact-box-items">
							<div className="icon">
								<i class="fa-brands fa-whatsapp"></i>
							</div>
							<div className="content">
								<h3>Telefono</h3>
								<p>Whatsapp <br />
								<Link href="/tel:984756123695">+58 412-511-1111</Link>
								</p>
							</div>
						</div> 
					</div>
					<div
						className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".6s"
					>
						<div className="contact-box-items">
							<div className="icon">
								<img src="assets/img/icon/20.svg" alt="img" />
							</div>
							<div className="content">
								<h3>Horario de Atención</h3>
								<p>
									Lunes a Viernes: 8:00-17:00 <br /> Sábado: 8:00-13:00
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
