import { useState } from "react"
import Link from 'next/link'

export default function NewsSection() {
	const [activeIndex, setActiveIndex] = useState(2)

	const handleIndex = (index) => {
		setActiveIndex(index)
	}
	return (
		<section className="news-section fix section-padding">
			<div className="container">
				<div className="row g-4">
					<div
						onClick={() => handleIndex(1)}
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<div
							className={
								activeIndex === 1
									? "news-box-items mt-0 active"
									: "news-box-items mt-0"
							}
						>
							<div className="news-image">
								<img src="assets/img/news/04.jpg" alt="img" />
								<img src="assets/img/news/04.jpg" alt="img" />
							</div>
							<div className="news-content">
								<ul className="post-list">
									<li>Construction</li>
									<li>07 July 2024</li>
								</ul>
								<h4>
									<Link href="/news-details">
										Latest Work Was Disapproved by the Supervisor.
									</Link>
								</h4>
								<div className="author-items">
									<div className="author-info">
										<img src="assets/img/news/author-1.png" alt="img" />
										<div className="content">
											<h6>Admin</h6>
											<p>Guy Hawkins</p>
										</div>
									</div>
									<Link href="/news-details" className="link-btn">
										Read More <i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => handleIndex(2)}
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div
							className={
								activeIndex === 2
									? "news-box-items mt-0 active"
									: "news-box-items mt-0"
							}
						>
							<div className="news-image">
								<img src="assets/img/news/05.jpg" alt="img" />
								<img src="assets/img/news/05.jpg" alt="img" />
							</div>
							<div className="news-content">
								<ul className="post-list">
									<li>Building</li>
									<li>07 July 2024</li>
								</ul>
								<h4>
									<Link href="/news-details">
										Manager Disapproved of the Most Recent Work.
									</Link>
								</h4>
								<div className="author-items">
									<div className="author-info">
										<img src="assets/img/news/author-2.png" alt="img" />
										<div className="content">
											<h6>Admin</h6>
											<p>Guy Hawkins</p>
										</div>
									</div>
									<Link href="/news-details" className="link-btn">
										Read More <i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => handleIndex(3)}
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".6s"
					>
						<div
							className={
								activeIndex === 3
									? "news-box-items mt-0 active"
									: "news-box-items mt-0"
							}
						>
							<div className="news-image">
								<img src="assets/img/news/06.jpg" alt="img" />
								<img src="assets/img/news/06.jpg" alt="img" />
							</div>
							<div className="news-content">
								<ul className="post-list">
									<li>Industry</li>
									<li>07 July 2024</li>
								</ul>
								<h4>
									<Link href="/news-details">
										Manager Found Latest Work Unsatisfactory.
									</Link>
								</h4>
								<div className="author-items">
									<div className="author-info">
										<img src="assets/img/news/author-3.png" alt="img" />
										<div className="content">
											<h6>Admin</h6>
											<p>Guy Hawkins</p>
										</div>
									</div>
									<Link href="/news-details" className="link-btn">
										Read More <i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => handleIndex(4)}
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<div
							className={
								activeIndex === 4
									? "news-box-items mt-0 active"
									: "news-box-items mt-0"
							}
						>
							<div className="news-image">
								<img src="assets/img/news/07.jpg" alt="img" />
								<img src="assets/img/news/07.jpg" alt="img" />
							</div>
							<div className="news-content">
								<ul className="post-list">
									<li>Industry</li>
									<li>07 July 2024</li>
								</ul>
								<h4>
									<Link href="/news-details">
										Manager Found Latest Work Unsatisfactory.
									</Link>
								</h4>
								<div className="author-items">
									<div className="author-info">
										<img src="assets/img/news/author-3.png" alt="img" />
										<div className="content">
											<h6>Admin</h6>
											<p>Guy Hawkins</p>
										</div>
									</div>
									<Link href="/news-details" className="link-btn">
										Read More <i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => handleIndex(5)}
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".4s"
					>
						<div
							className={
								activeIndex === 5
									? "news-box-items mt-0 active"
									: "news-box-items mt-0"
							}
						>
							<div className="news-image">
								<img src="assets/img/news/08.jpg" alt="img" />
								<img src="assets/img/news/08.jpg" alt="img" />
							</div>
							<div className="news-content">
								<ul className="post-list">
									<li>Industry</li>
									<li>07 July 2024</li>
								</ul>
								<h4>
									<Link href="/news-details">
										Manager Found Latest Work Unsatisfactory.
									</Link>
								</h4>
								<div className="author-items">
									<div className="author-info">
										<img src="assets/img/news/author-3.png" alt="img" />
										<div className="content">
											<h6>Admin</h6>
											<p>Guy Hawkins</p>
										</div>
									</div>
									<Link href="/news-details" className="link-btn">
										Read More <i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => handleIndex(6)}
						className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
						data-wow-delay=".6s"
					>
						<div
							className={
								activeIndex === 6
									? "news-box-items mt-0 active"
									: "news-box-items mt-0"
							}
						>
							<div className="news-image">
								<img src="assets/img/news/09.jpg" alt="img" />
								<img src="assets/img/news/09.jpg" alt="img" />
							</div>
							<div className="news-content">
								<ul className="post-list">
									<li>Industry</li>
									<li>07 July 2024</li>
								</ul>
								<h4>
									<Link href="/news-details">
										Manager Found Latest Work Unsatisfactory.
									</Link>
								</h4>
								<div className="author-items">
									<div className="author-info">
										<img src="assets/img/news/author-3.png" alt="img" />
										<div className="content">
											<h6>Admin</h6>
											<p>Guy Hawkins</p>
										</div>
									</div>
									<Link href="/news-details" className="link-btn">
										Read More <i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="page-nav-wrap pt-5 text-center wow fadeInUp"
					data-wow-delay=".3s"
				>
					<ul>
						<li>
							<Link className="page-numbers icon" href="/#">
								<i className="fa-solid fa-arrow-left" />
							</Link>
						</li>
						<li>
							<Link className="page-numbers" href="/#">
								01
							</Link>
						</li>
						<li>
							<Link className="page-numbers" href="/#">
								02
							</Link>
						</li>
						<li>
							<Link className="page-numbers" href="/#">
								03
							</Link>
						</li>
						<li>
							<Link className="page-numbers icon" href="/#">
								<i className="fa-solid fa-arrow-right" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
