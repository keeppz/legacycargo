import Link from 'next/link'

export default function News1() {
	return (
		<>
			<section className="news-section fix section-padding fix section-bg-2">
				<div className="shape-1 float-bob-y">
					<img src="assets/img/news/shape-1.png" alt="img" />
				</div>
				<div className="shape-2 float-bob-x">
					<img src="assets/img/news/shape-2.png" alt="img" />
				</div>
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-classic fa-arrow-left-long" />
							Blog &amp; News
							<i className="fa-classic fa-arrow-right-long" />
						</h6>
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
							Latest News &amp; Blog
						</h2>
					</div>
					<div className="row">
						<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
							<div
								className="news-image-items bg-cover"
								style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
							>
								<div className="news-content">
									<ul>
										<li>
											<i className="fa-classic fa-user" />
											By Admin
										</li>
										<li>
											<i className="fa-solid fa-tag" />
											Maintenance
										</li>
									</ul>
									<h3>
										<Link href="/news-details">
											Helping Companies in Their <br /> Green Transition
										</Link>
									</h3>
									<p className="text-white">
										Pellentesque vitae consectetur ante Integer non eros id quam
										dapibus tincidunt non sed dolor Praesent maximus ...
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="news-right-items">
								<div
									className="news-card-items wow fadeInUp"
									data-wow-delay=".2s"
								>
									<div className="news-content">
										<ul>
											<li>
												<i className="fa-classic fa-user" />
												By Admin
											</li>
											<li>
												<i className="fa-solid fa-tag" />
												Maintenance
											</li>
										</ul>
										<h4>
											<Link href="/news-details">
												Supervisor Disapproved of Latest Work.
											</Link>
										</h4>
										<p>
											Pellentesque vitae consectetur ante <br /> Integer non
											eros...
										</p>
										<Link href="/news-details" className="link-btn">
											Read More <i className="fa-classic fa-arrow-right-long" />
										</Link>
									</div>
									<div className="news-image">
										<img src="assets/img/news/02.jpg" alt="img" />
									</div>
								</div>
								<div
									className="news-card-items wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="news-content">
										<ul>
											<li>
												<i className="fa-classic fa-user" />
												By Admin
											</li>
											<li>
												<i className="fa-solid fa-tag" />
												Maintenance
											</li>
										</ul>
										<h4>
											<Link href="/news-details">
												Supervisor Disapproved of Latest Work.
											</Link>
										</h4>
										<p>
											Pellentesque vitae consectetur ante <br /> Integer non
											eros...
										</p>
										<Link href="/news-details" className="link-btn">
											Read More <i className="fa-classic fa-arrow-right-long" />
										</Link>
									</div>
									<div className="news-image">
										<img src="assets/img/news/03.jpg" alt="img" />
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
