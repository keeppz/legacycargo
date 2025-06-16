import Link from 'next/link'

export default function CtaBanner2() {
	return (
		<>
			<section
				className="cta-section-2 bg-cover fix"
				style={{ backgroundImage: 'url("assets/img/cta-bg-2.jpg")' }}
			>
				<div className="container">
					<div className="cta-banner-wrapper-2">
						<div className="cta-content">
							<h2 className="wow fadeInUp" data-wow-delay=".2s">
								Do You Have Any Questions <br /> About the Project Plan?
							</h2>
							<Link href="/contact">
								<a className="theme-btn wow fadeInUp" data-wow-delay=".4s">
									GET IN TOUCH
									<i className="fa-classic fa-arrow-right" />
								</a>
							</Link>
						</div>
						<div className="cta-image wow fadeInUp" data-wow-delay=".3s">
							<img src="assets/img/engineer-holding.png" alt="img" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
