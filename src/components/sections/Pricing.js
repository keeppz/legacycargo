import React from "react"
import Link from 'next/link'

export default function Pricing() {
	return (
		<section className="pricing-section fix section-padding">
			<div className="container">
				<div className="section-title text-center">
					<h6 className="wow fadeInUp">
						<i className="fa-classic fa-arrow-left-long" />
						pricing Plans
						<i className="fa-classic fa-arrow-right-long" />
					</h6>
					<h2 className="wow fadeInUp" data-wow-delay=".2s">
						Our Affordable Price
					</h2>
				</div>
				<div className="row">
					<div
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<div className="pricing-card-items box-shadow">
							<div className="pricing-shape">
								<img src="assets/img/pricing-shape.png" alt="img" />
							</div>
							<div className="pricing-header">
								<h3>Basic Plan</h3>
								<h2>
									$2250/<span>Month</span>
								</h2>
							</div>
							<ul className="pricing-list">
								<li>
									<i className="fa-solid fa-check" />
									Creative Business Consulting
								</li>
								<li>
									<i className="fa-solid fa-check" />
									Make a Perfect Corporate
								</li>
								<li className="style-2">
									<i className="fa-sharp fa-classic fa-xmark" />
									Powerful Management
								</li>
								<li className="style-2">
									<i className="fa-sharp fa-classic fa-xmark" />
									Consulting Service Provider
								</li>
							</ul>
							<div className="header-button">
								<Link href="/pricing" className="theme-btn style-2">
									<span />
									choose plan <i className="fa-classic fa-arrow-right" />
								</Link>
							</div>
						</div>
					</div>
					<div
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div className="pricing-card-items box-shadow active">
							<div className="tag-img">
								<img src="assets/img/tag.png" alt="img" />
							</div>
							<div className="pricing-shape">
								<img src="assets/img/pricing-shape.png" alt="img" />
							</div>
							<div className="pricing-header">
								<h3>Standard Plan</h3>
								<h2>
									$3250/<span>Month</span>
								</h2>
							</div>
							<ul className="pricing-list">
								<li>
									<i className="fa-solid fa-check" />
									Creative Business Consulting
								</li>
								<li>
									<i className="fa-solid fa-check" />
									Make a Perfect Corporate
								</li>
								<li>
									<i className="fa-solid fa-check" />
									Powerful Management
								</li>
								<li className="style-2">
									<i className="fa-sharp fa-classic fa-xmark" />
									Consulting Service Provider
								</li>
							</ul>
							<div className="header-button">
								<Link href="/pricing" className="theme-btn">
									<span />
									choose plan <i className="fa-classic fa-arrow-right" />
								</Link>
							</div>
						</div>
					</div>
					<div
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".6s"
					>
						<div className="pricing-card-items box-shadow">
							<div className="pricing-shape">
								<img src="assets/img/pricing-shape.png" alt="img" />
							</div>
							<div className="pricing-header">
								<h3>Premium Plan</h3>
								<h2>
									$5250/<span>Month</span>
								</h2>
							</div>
							<ul className="pricing-list">
								<li>
									<i className="fa-solid fa-check" />
									Creative Business Consulting
								</li>
								<li>
									<i className="fa-solid fa-check" />
									Make a Perfect Corporate
								</li>
								<li>
									<i className="fa-solid fa-check" />
									Powerful Management
								</li>
								<li>
									<i className="fa-solid fa-check" />
									Consulting Service Provider
								</li>
							</ul>
							<div className="header-button">
								<Link href="/pricing" className="theme-btn style-2">
									<span />
									choose plan <i className="fa-classic fa-arrow-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
