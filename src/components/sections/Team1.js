import Image from 'next/image'
import Link from 'next/link'

export default function Team1() {
	return (
		<>
			<section
				className="team-section fix section-padding bg-cover" id="team"
				style={{ backgroundImage: 'url("assets/img/team/bg-shape.png")' }}
			>
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-classic fa-arrow-left-long" />
							our team
							<i className="fa-classic fa-arrow-right-long" />
						</h6>
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
							Our expert team <br /> members
						</h2>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUps">
							<div className="team-card-items">
								<div className="team-image">
									<Image
										src="/assets/img/team/team-1.jpg"
										alt="team member"
										width={1920}
										height={1080}
										className="image"
									/>
									<div className="social-icon d-flex align-items-center">
										<Link href="/#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="/#">
											<i className="fab fa-twitter" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-linkedin-in" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-youtube" />
										</Link>
									</div>
								</div>
								<div className="team-content">
									<span>Sr. engineer</span>
									<h3>
										<Link href="/team-details" />
										Shikhon Islam
									</h3>
								</div>
							</div>
						</div>

						<div
							className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".2s"
						>
							<div className="team-card-items">
								<div className="team-image">
									<Image
										src="/assets/img/team/team-2.jpg"
										alt="team member"
										width={1920}
										height={1080}
										className="image"
									/>
									<div className="social-icon d-flex align-items-center">
										<Link href="/#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="/#">
											<i className="fab fa-twitter" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-linkedin-in" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-youtube" />
										</Link>
									</div>
								</div>
								<div className="team-content">
									<span>Sr. engineer</span>
									<h3>
										<Link href="/team-details" />
										Kawser Ahmed
									</h3>
								</div>
							</div>
						</div>

						<div
							className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="team-card-items">
								<div className="team-image">
									<Image
										src="/assets/img/team/team-3.jpg"
										alt="team member"
										width={1920}
										height={1080}
										className="image"
									/>
									<div className="social-icon d-flex align-items-center">
										<Link href="/#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="/#">
											<i className="fab fa-twitter" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-linkedin-in" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-youtube" />
										</Link>
									</div>
								</div>
								<div className="team-content">
									<span>Sr. engineer</span>
									<h3>
										<Link href="/team-details" />
										Marvin McKinney
									</h3>
								</div>
							</div>
						</div>

						<div
							className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="team-card-items">
								<div className="team-image">
									<Image
										src="/assets/img/team/team-4.jpg"
										alt="team member"
										width={1920}
										height={1080}
										className="image"
									/>
									<div className="social-icon d-flex align-items-center">
										<Link href="/#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="/#">
											<i className="fab fa-twitter" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-linkedin-in" />
										</Link>
										<Link href="/#">
											<i className="fa-brands fa-youtube" />
										</Link>
									</div>
								</div>
								<div className="team-content">
									<span>Sr. engineer</span>
									<h3>
										<Link href="/team-details" />
										Sohel Islam
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
