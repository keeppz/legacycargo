import React from "react"
import Link from 'next/link'

export default function NewsDetailsSection() {
	return (
		<section className="news-standard fix section-padding">
			<div className="container">
				<div className="row g-4">
					<div className="col-12 col-lg-8">
						<div className="blog-post-details">
							<div className="single-blog-post">
								<div
									className="post-featured-thumb bg-cover"
									style={{
										backgroundImage: 'url("assets/img/news/post-4.jpg")',
									}}
								/>
								<div className="post-content">
									<ul className="post-list d-flex align-items-center">
										<li>
											<i className="fa-classic fa-user" />
											By Admin
										</li>
										<li>
											<i className="fa-solid fa-calendar-days" />
											18 Dec, 2024
										</li>
										<li>
											<i className="fa-solid fa-tag" />
											Technology
										</li>
									</ul>
									<h3>Guidelines for Construction Site Security</h3>
									<p className="mb-3">
										Consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore of magna aliqua. Ut enim ad
										minim veniam, made of owl the quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea dolor commodo
										consequat. Duis aute irure and dolor in reprehenderit.
									</p>
									<p className="mb-3">
										The is ipsum dolor sit amet consectetur adipiscing elit.
										Fusce eleifend porta arcu In hac habitasse the is platea
										augue thelorem turpoi dictumst. In lacus libero faucibus at
										malesuada sagittis placerat eros sed istincidunt augue ac
										ante rutrum sed the is sodales augue consequat.
									</p>
									<p>
										Nulla facilisi. Vestibulum tristique sem in eros eleifend
										imperdiet. Donec quis convallis neque. In id lacus pulvinar
										lacus, eget vulputate lectus. Ut viverra bibendum lorem, at
										tempus nibh mattis in. Sed a massa eget lacus consequat
										auctor.
									</p>
									<div className="hilight-text mt-4 mb-4">
										<p>
											Pellentesque sollicitudin congue dolor non aliquam. Morbi
											volutpat, nisi vel ultricies urnacondimentum, sapien neque
											lobortis tortor, quis efficitur mi ipsum eu metus.
											Praesent eleifend orci sit amet est vehicula.
										</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={36}
											height={36}
											viewBox="0 0 36 36"
											fill="none"
										>
											<path
												d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
												stroke="#F55B1F"
											/>
											<path
												d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
												stroke="#F55B1F"
											/>
										</svg>
									</div>
									<p className="mt-4 mb-5">
										Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
										massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
										sapien fringilla, mattis ligula consectetur, ultrices
										mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
										augue. Vestibulum auctor ornare leo, non suscipit magna
										interdum eu. Curabitur pellentesque nibh nibh, at maximus
										ante fermentum sit amet. Pellentesque commodo lacus at
										sodales sodales. Quisque sagittis orci ut diam condimentum,
										vel euismod erat placerat. In iaculis arcu eros.
									</p>
									<div className="row g-4">
										<div className="col-lg-6">
											<div className="details-image">
												<img src="assets/img/news/post-5.jpg" alt="img" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="details-image">
												<img src="assets/img/news/post-6.jpg" alt="img" />
											</div>
										</div>
									</div>
									<p className="pt-5">
										Consectetur adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore of magna aliqua. Ut enim ad
										minim veniam, made of owl the quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea dolor commodo
										consequat. Duis aute irure and dolor in
										reprehenderit.Consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore of magna aliqua. Ut
										enim ad minim veniam, made of owl the quis nostrud
										exercitation ullamco laboris nisi ut aliquip ex ea dolor
										commodo consequat. Duis aute irure and dolor in
										reprehenderit.
									</p>
								</div>
							</div>
							<div className="row tag-share-wrap mt-4 mb-5">
								<div className="col-lg-8 col-12">
									<div className="tagcloud">
										<span>Tags:</span>
										<Link href="/news-details">Travel</Link>
										<Link href="/news-details">Services</Link>
										<Link href="/news-details">Agency</Link>
									</div>
								</div>
								<div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
									<div className="social-share">
										<span className="me-3">Share:</span>
										<Link href="/#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="/#">
											<i className="fab fa-twitter" />
										</Link>
										<Link href="/#">
											<i className="fab fa-linkedin-in" />
										</Link>
										<Link href="/#">
											<i className="fab fa-youtube" />
										</Link>
									</div>
								</div>
							</div>
							<div className="comments-area">
								<div className="comments-heading">
									<h3>02 Comments</h3>
								</div>
								<div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
									<div className="image">
										<img src="assets/img/news/comment-1.png" alt="image" />
									</div>
									<div className="content">
										<div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
											<div className="con">
												<h5>
													<Link href="/news-details">Albert Flores</Link>
												</h5>
												<span>February 10, 2024 at 2:37 pm</span>
											</div>
											<div className="star">
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
											</div>
										</div>
										<p className="mt-30 mb-4">
											Neque porro est qui dolorem ipsum quia quaed inventor
											veritatis et quasi architecto var sed efficitur turpis
											gilla sed sit amet finibus eros. Lorem Ipsum is simply
											dummy
										</p>
										<Link href="/news-details" className="reply">
											Reply
										</Link>
									</div>
								</div>
								<div className="blog-single-comment d-flex gap-4 pt-5 pb-5">
									<div className="image">
										<img src="assets/img/news/comment-2.png" alt="image" />
									</div>
									<div className="content">
										<div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
											<div className="con">
												<h5>
													<Link href="/news-details">Alex Flores</Link>
												</h5>
												<span>February 10, 2024 at 2:37 pm</span>
											</div>
											<div className="star">
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
												<i className="fa-solid fa-star" />
											</div>
										</div>
										<p className="mt-30 mb-4">
											Neque porro est qui dolorem ipsum quia quaed inventor
											veritatis et quasi architecto var sed efficitur turpis
											gilla sed sit amet finibus eros. Lorem Ipsum is simply
											dummy
										</p>
										<Link href="/news-details" className="reply color-2">
											Reply
										</Link>
									</div>
								</div>
							</div>
							<div className="comment-form-wrap pt-5">
								<h3>Leave a comments</h3>
								<form action="#" id="contact-form" method="POST">
									<div className="row g-4">
										<div className="col-lg-6">
											<div className="form-clt">
												<span>Your Name*</span>
												<input
													type="text"
													name="name"
													id="name"
													placeholder="Your Name"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-clt">
												<span>Your Email*</span>
												<input
													type="text"
													name="email"
													id="email2"
													placeholder="Your Email"
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-clt">
												<span>Message*</span>
												<textarea
													name="message"
													id="message"
													placeholder="Write Message"
													defaultValue={""}
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<button type="submit" className="theme-btn ">
												post comment
												<i className="fa-solid fa-arrow-right-long" />
											</button>
										</div>
									</div>
								</form>
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
											<Link href="/news-details">Cargo Insurance </Link>{" "}
											<span>5</span>
										</li>
										<li>
											<Link href="/news-details">Logistic Strategy</Link>{" "}
											<span>3</span>
										</li>
										<li className="active">
											<Link href="/news-details">Our Delivery </Link>
											<span>4</span>
										</li>
										<li>
											<Link href="/news-details">Shipment Solutions </Link>{" "}
											<span>2</span>
										</li>
										<li>
											<Link href="/news-details">Security System</Link>{" "}
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
											<img src="assets/img/news/pp2.jpg" alt="img" />
										</div>
										<div className="recent-content">
											<ul>
												<li>
													<i className="fa-solid fa-calendar-days" />
													09 July 2024
												</li>
											</ul>
											<h6>
												<Link href="/news-details">
													Investing in Freight Broker Training
												</Link>
											</h6>
										</div>
									</div>
									<div className="recent-items">
										<div className="recent-thumb">
											<img src="assets/img/news/pp3.jpg" alt="img" />
										</div>
										<div className="recent-content">
											<ul>
												<li>
													<i className="fa-solid fa-calendar-days" />
													09 July 2024
												</li>
											</ul>
											<h6>
												<Link href="/news-details">
													Ways to Improve Your Last-Mile Strategy
												</Link>
											</h6>
										</div>
									</div>
									<div className="recent-items">
										<div className="recent-thumb">
											<img src="assets/img/news/pp4.jpg" alt="img" />
										</div>
										<div className="recent-content">
											<ul>
												<li>
													<i className="fa-solid fa-calendar-days" />
													09 July 2024
												</li>
											</ul>
											<h6>
												<Link href="/news-details">
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
										<Link href="/news-details">transport</Link>
										<Link href="/news-details">cargo</Link>
										<Link href="/news-details">engineering</Link>
										<Link href="/news-details">Design</Link>
										<Link href="/news-details">engineering</Link>
										<Link href="/news-details">delivery</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
