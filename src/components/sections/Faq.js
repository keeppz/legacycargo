
import { useState } from "react"
export default function Faq() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion((prevState) => (prevState === key ? null : key))
	}

	return (
		<>
			<section
				className="faq-section fix section-padding section-bg-2 bg-cover"
				style={{ backgroundImage: 'url("assets/img/faq/bg-shape.png")' }}
			>
				<div className="track-shape float-bob-x">
					<img src="assets/img/track.png" alt="img" />
				</div>
				<div className="container">
					<div className="faq-wrapper">
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="faq-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-classic fa-arrow-left-long" />
											faq
											<i className="fa-classic fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											your frequently ask &amp; <br /> questions
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
										It is a long established fact that a reader will be
										distracted the readable content of a page when looking at
										layout the point of using lorem the is Ipsum less normal
										distribution of letters.
									</p>
									<div className="icon-items wow fadeInUp" data-wow-delay=".2s">
										<div className="icon">
											<i className="fa-classic fa-check" />
										</div>
										<div className="content">
											<h5>UNIQUE PROJECTS</h5>
											<span>
												It is a long established fact that a reader will be
												distracted the readable content of a page when
											</span>
										</div>
									</div>
									<div className="icon-items wow fadeInUp" data-wow-delay=".4s">
										<div className="icon">
											<i className="fa-classic fa-check" />
										</div>
										<div className="content">
											<h5>UNIQUE PROJECTS</h5>
											<span>
												It is a long established fact that a reader will be
												distracted the readable content of a page when
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="faq-accordion">
									<div className="accordion" id="accordion">
										<div
											className="accordion-item mb-3 wow fadeInUp"
											data-wow-delay=".1s"
										>
											<h5 className="accordion-header">
												<button
													onClick={() => handleAccordion(1)}
													className={
														isAccordion == 1
															? "accordion-button"
															: "accordion-button collapsed"
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#faq1"
													aria-expanded="true"
													aria-controls="faq1"
												>
													How long should a business plan be?
												</button>
											</h5>
											<div
												id="faq1"
												className={
													isAccordion == 1
														? "accordion-collapse collapse show"
														: "accordion-collapse collapse"
												}
												data-bs-parent="#accordion"
											>
												<div className="accordion-body">
													It is a long established fact that a reader will be
													distracted the readable content of a page when looking
													at layout the point of using lorem the is Ipsum less
													normal distribution of letters.
												</div>
											</div>
										</div>

										<div
											className="accordion-item mb-3 wow fadeInUp"
											data-wow-delay=".3s"
										>
											<h5 className="accordion-header">
												<button
													onClick={() => handleAccordion(2)}
													className={
														isAccordion == 2
															? "accordion-button"
															: "accordion-button collapsed"
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#faq2"
													aria-expanded="false"
													aria-controls="faq2"
												>
													What are the different stages of a construction
													project?
												</button>
											</h5>
											<div
												id="faq2"
												className={
													isAccordion == 2
														? "accordion-collapse collapse show"
														: "accordion-collapse collapse"
												}
												data-bs-parent="#accordion"
											>
												<div className="accordion-body">
													It is a long established fact that a reader will be
													distracted the readable content of a page when looking
													at layout the point of using lorem the is Ipsum less
													normal distribution of letters.
												</div>
											</div>
										</div>

										<div
											className="accordion-item mb-3 wow fadeInUp"
											data-wow-delay=".5s"
										>
											<h5 className="accordion-header">
												<button
													onClick={() => handleAccordion(3)}
													className={
														isAccordion == 3
															? "accordion-button"
															: "accordion-button collapsed"
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#faq3"
													aria-expanded="false"
													aria-controls="faq3"
												>
													What are the different stages of a construction
													project?
												</button>
											</h5>
											<div
												id="faq3"
												className={
													isAccordion == 3
														? "accordion-collapse collapse show"
														: "accordion-collapse collapse"
												}
												data-bs-parent="#accordion"
											>
												<div className="accordion-body">
													It is a long established fact that a reader will be
													distracted the readable content of a page when looking
													at layout the point of using lorem the is Ipsum less
													normal distribution of letters.
												</div>
											</div>
										</div>

										<div
											className="accordion-item mb-3 wow fadeInUp"
											data-wow-delay=".6s"
										>
											<h5 className="accordion-header">
												<button
													onClick={() => handleAccordion(4)}
													className={
														isAccordion == 4
															? "accordion-button"
															: "accordion-button collapsed"
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#faq4"
													aria-expanded="false"
													aria-controls="faq4"
												>
													What are the different stages of a construction
													project?
												</button>
											</h5>
											<div
												id="faq4"
												className={
													isAccordion == 4
														? "accordion-collapse collapse show"
														: "accordion-collapse collapse"
												}
												data-bs-parent="#accordion"
											>
												<div className="accordion-body">
													It is a long established fact that a reader will be
													distracted the readable content of a page when looking
													at layout the point of using lorem the is Ipsum less
													normal distribution of letters.
												</div>
											</div>
										</div>

										<div
											className="accordion-item mb-3 wow fadeInUp"
											data-wow-delay=".7s"
										>
											<h5 className="accordion-header">
												<button
													onClick={() => handleAccordion(5)}
													className={
														isAccordion == 5
															? "accordion-button"
															: "accordion-button collapsed"
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#faq5"
													aria-expanded="false"
													aria-controls="faq5"
												>
													What are the different stages of a construction
													project?
												</button>
											</h5>
											<div
												id="faq5"
												className={
													isAccordion == 5
														? "accordion-collapse collapse show"
														: "accordion-collapse collapse"
												}
												data-bs-parent="#accordion"
											>
												<div className="accordion-body">
													It is a long established fact that a reader will be
													distracted the readable content of a page when looking
													at layout the point of using lorem the is Ipsum less
													normal distribution of letters.
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
