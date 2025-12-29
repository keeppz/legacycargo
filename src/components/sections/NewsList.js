// import "swiper/css";
import Link from 'next/link'
import Image from 'next/image'

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".array-prev",
		prevEl: ".array-next",
	},
}

export default function NewsList() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="news-standard fix section-padding">
				<div className="container">
					<div className="row g-4">
						<div className="col-12 col-lg-8">
							<div className="news-standard-wrapper">
								<div className="news-standard-items">
									<div className="news-thumb">
										<Image
											src="/assets/img/news/post-1.jpg"
											alt="img"
											width={1920}
											height={1080}
											className="image"
										/>
									</div>
									<div className="news-content">
										<ul className="date-list">
											<li>
												<i className="fa-classic fa-user" />
												By Admin
											</li>
											<li>
												<i className="fa-classic fa-calendar-days" />
												09 July 2024
											</li>
											<li>
												<i className="fa-classic fa-tag" />
												Building
											</li>
										</ul>
										<h3>
											<Link href="/news-details">
												Attentive was bern in 2015 hel p sales teams
											</Link>
										</h3>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised words which
											don't look even slightly believable. If you are going to
											use a passage of xyz Lorem Ipsum, you need to be sure
											there isn't anything embarrassing
										</p>
										<div className="news-button">
											<Link href="/news-details" className="theme-btn mt-4">
												read more <i className="fa-classic fa-arrow-right" />
											</Link>
										</div>
									</div>
								</div>
								<div className="news-standard-items">
									<div className="array-button">
										<button className="array-prev h1p">
											<i className="fa-classic fa-arrow-left-long" />
										</button>
										<button className="array-next h1n">
											<i className="fa-classic fa-arrow-right-long" />
										</button>
									</div>
									<div className="swiper news-post-slider">
										<Swiper {...swiperOptions} className="swiper-wrapper">
											<SwiperSlide className="swiper-slide">
												<div className="news-thumb">
													<Image
														src="/assets/img/news/post-1.jpg"
														alt="img"
														width={1920}
														height={1080}
														className="image"
													/>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="news-thumb">
													<Image
														src="/assets/img/news/post-2.jpg"
														alt="img"
														width={1920}
														height={1080}
														className="image"
													/>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="news-thumb">
													<Image
														src="/assets/img/news/post-3.jpg"
														alt="img"
														width={1920}
														height={1080}
														className="image"
													/>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
									<div className="news-content">
										<ul className="date-list">
											<li>
												<i className="fa-classic fa-user" />
												By Admin
											</li>
											<li>
												<i className="fa-classic fa-calendar-days" />
												09 July 2024
											</li>
											<li>
												<i className="fa-classic fa-tag" />
												Building
											</li>
										</ul>
										<h3>
											<Link href="/news-details">
												Rules for Security on Construction Sites
											</Link>
										</h3>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised words which
											don't look even slightly believable. If you are going to
											use a passage of xyz Lorem Ipsum, you need to be sure
											there isn't anything embarrassing
										</p>
										<div className="news-button">
											<Link to="/news-details" className="theme-btn mt-4">
												read more <i className="fa-classic fa-arrow-right" />
											</Link>
										</div>
									</div>
								</div>
								<div className="news-standard-items">
									<div className="news-thumb">
										<Image
											src="/assets/img/news/post-3.jpg"
											alt="img"
											width={1920}
											height={1080}
											className="image"
										/>
										<div className="video-box">
											<a
												onClick={() => setOpen(true)}
												className="video-btn video-popup"
											>
												<i className="fas fa-play" />
											</a>
										</div>
									</div>
									<div className="news-content">
										<ul className="date-list">
											<li>
												<i className="fa-classic fa-user" />
												By Admin
											</li>
											<li>
												<i className="fa-classic fa-calendar-days" />
												09 July 2024
											</li>
											<li>
												<i className="fa-classic fa-tag" />
												Building
											</li>
										</ul>
										<h3>
											<Link to="/news-details">
												Norms for Security on Construction Sites
											</Link>
										</h3>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised words which
											don't look even slightly believable. If you are going to
											use a passage of xyz Lorem Ipsum, you need to be sure
											there isn't anything embarrassing
										</p>
										<div className="news-button">
											<Link to="/news-details" className="theme-btn mt-4">
												read more <i className="fa-classic fa-arrow-right" />
											</Link>
										</div>
									</div>
								</div>
								<div
									className="page-nav-wrap wow fadeInUp"
									data-wow-delay=".3s"
								>
									<ul>
										<li>
											<Link className="page-numbers icon" to="/#">
												<i className="fa-solid fa-arrow-left" />
											</Link>
										</li>
										<li>
											<Link className="page-numbers" to="/#">
												01
											</Link>
										</li>
										<li>
											<Link className="page-numbers" to="/#">
												02
											</Link>
										</li>
										<li>
											<Link className="page-numbers" to="/#">
												03
											</Link>
										</li>
										<li>
											<Link className="page-numbers icon" to="/#">
												<i className="fa-solid fa-arrow-right" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="main-sidebar">
								<div className="single-sidebar-widget">
									<div className="wid-title">
										<h3>Search</h3>
									</div>
									<div className="search-widget">
										<form action="#">
											<input type="text" placeholder="Search here" />
											<button type="submit">
												<i className="fa-solid fa-magnifying-glass" />
											</button>
										</form>
									</div>
								</div>
								<div className="single-sidebar-widget">
									<div className="wid-title">
										<h3>Categories</h3>
									</div>
									<div className="news-widget-categories">
										<ul>
											<li>
												<Link to="/news-details">Cargo Insurance </Link>{" "}
												<span>5</span>
											</li>
											<li>
												<Link to="/news-details">Logistic Strategy</Link>{" "}
												<span>3</span>
											</li>
											<li className="active">
												<Link to="/news-details">Our Delivery </Link>
												<span>4</span>
											</li>
											<li>
												<Link to="/news-details">
													Shipment Solutions{" "}
												</Link>{" "}
												<span>2</span>
											</li>
											<li>
												<Link to="/news-details">Security System</Link>{" "}
												<span>3</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="single-sidebar-widget">
									<div className="wid-title">
										<h3>Recent Post</h3>
									</div>
									<div className="recent-post-area">
										<div className="recent-items">
											<div className="recent-thumb">
												<Image
													src="/assets/img/news/pp2.jpg"
													alt="img"
													width={1920}
													height={1080}
													className="image"
												/>
											</div>
											<div className="recent-content">
												<ul>
													<li>
														<i className="fa-solid fa-calendar-days" />
														09 July 2024
													</li>
												</ul>
												<h6>
													<Link to="/news-details">
														Investing in Freight Broker Training
													</Link>
												</h6>
											</div>
										</div>
										<div className="recent-items">
											<div className="recent-thumb">
												<Image
													src="/assets/img/news/pp3.jpg"
													alt="img"
													width={1920}
													height={1080}
													className="image"
												/>
											</div>
											<div className="recent-content">
												<ul>
													<li>
														<i className="fa-solid fa-calendar-days" />
														09 July 2024
													</li>
												</ul>
												<h6>
													<Link to="/news-details">
														Ways to Improve Your Last-Mile Strategy
													</Link>
												</h6>
											</div>
										</div>
										<div className="recent-items">
											<div className="recent-thumb">
												<Image
													src="/assets/img/news/pp4.jpg"
													alt="img"
													width={1920}
													height={1080}
													className="image"
												/>
											</div>
											<div className="recent-content">
												<ul>
													<li>
														<i className="fa-solid fa-calendar-days" />
														09 July 2024
													</li>
												</ul>
												<h6>
													<Link to="/news-details">
														How to Recruit and Retain Drivers
													</Link>
												</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="single-sidebar-widget">
									<div className="wid-title">
										<h3>Popular Tag</h3>
									</div>
									<div className="news-widget-categories">
										<div className="tagcloud">
											<Link to="/news-details">transport</Link>
											<Link to="/news-details">cargo</Link>
											<Link to="/news-details">engineering</Link>
											<Link to="/news-details">Design</Link>
											<Link to="/news-details">engineering</Link>
											<Link to="/news-details">delivery</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Lightbox
				open={isOpen}
				close={() => setOpen(false)}
				slides={[
					{
						type: "video",
						sources: [
							{
								src: "https://www.youtube.com/watch?v=Cn4G2lZ_g2I",
								type: "video/youtube",
							},
						],
					},
				]}
			/>
		</>
	)
}
