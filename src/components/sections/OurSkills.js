
export default function OurSkills({ alt }) {
	return (
		<>
			<section className={`skills-section fix section-padding ${alt ? "section-bg-2" : " pt-0"}`}>
				<div className="shape-1 float-bob-x">
					<img src="assets/img/skills/shape-1.png" alt="img" />
				</div>
				<div className="shape-2 float-bob-y">
					<img src="assets/img/skills/shape-2.png" alt="img" />
				</div>
				<div className="container">
					<div className="skills-wrapper">
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="row g-4">
									<div className="col-lg-7 wow fadeInUp" data-wow-delay=".2s">
										<div className="skills-image">
											<img src="assets/img/skills/01.jpg" alt="img" />
										</div>
									</div>
									<div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
										<div className="skills-image">
											<img src="assets/img/skills/02.jpg" alt="img" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="skill-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-classic fa-arrow-left-long" />
											our skills
											<i className="fa-classic fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											We Know That Every Decision Has An Impact
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
										It is a long established fact that a reader will be
										distracted the readable content of a page when looking at
										layout the point of using lorem the is Ipsum less normal
										distribution of letters.
									</p>
									<div className="skill-feature-items">
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".2s"
										>
											<h3 className="box-title">Shipping</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "85%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">85</span>%
													</div>
												</div>
											</div>
										</div>
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".4s"
										>
											<h3 className="box-title">Managment</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "90%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">90</span>%
													</div>
												</div>
											</div>
										</div>
										<div
											className="skill-feature wow fadeInUp"
											data-wow-delay=".2s"
										>
											<h3 className="box-title">Transport Management</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "75%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: 1,
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">75</span>%
													</div>
												</div>
											</div>
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
