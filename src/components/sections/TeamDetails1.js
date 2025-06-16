import React from "react"
import Link from 'next/link'
import Image from 'next/image'

export default function TeamDetails1() {
	return (
		<section className="team-details-section">
				<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="team-details-image">
							<Image
								src="/assets/img/team/team-details.jpg"
								alt="team member"
								width={1920}
								height={1080}
								className="image"
							/>
							</div>
						<div className="team-info">
							<h3>Contact Info</h3>
							<ul>
								<li>
									<i className="fas fa-envelope"></i>
									<Link href="mailto:info@example.com">info@example.com</Link>
								</li>
								<li>
									<i className="fas fa-phone"></i>
									<Link href="tel:+88012365499">+88 0123 654 99</Link>
								</li>
								<li>
									<i className="fas fa-map-marker-alt"></i>
									<span>123 Street Name, City, Country</span>
								</li>
							</ul>
							<div className="social-links">
								<Link href="#"><i className="fab fa-facebook-f"></i></Link>
								<Link href="#"><i className="fab fa-twitter"></i></Link>
								<Link href="#"><i className="fab fa-linkedin-in"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="team-details-content">
							<h2>John Doe</h2>
							<p className="position">Position</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<p>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur.
							</p>
							</div>
						</div>
					</div>
				</div>
			</section>
	)
}
