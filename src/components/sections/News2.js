import Image from 'next/image'
import Link from 'next/link'

const News2 = () => {
	return (
		<section className="news-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="news-item wow fadeInUp" data-wow-delay=".2s">
							<div className="news-image">
								<Image
									src="/assets/img/news/news-1.jpg"
									alt="news image"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="news-content">
								<h3>
									<Link href="/news-details">News Title 1</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<Link href="/news-details" className="read-more">
									Read More <i className="fas fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="news-item wow fadeInUp" data-wow-delay=".4s">
							<div className="news-image">
								<Image
									src="/assets/img/news/news-2.jpg"
									alt="news image"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="news-content">
								<h3>
									<Link href="/news-details">News Title 2</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<Link href="/news-details" className="read-more">
									Read More <i className="fas fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="news-item wow fadeInUp" data-wow-delay=".6s">
							<div className="news-image">
								<Image
									src="/assets/img/news/news-3.jpg"
									alt="news image"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="news-content">
								<h3>
									<Link href="/news-details">News Title 3</Link>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<Link href="/news-details" className="read-more">
									Read More <i className="fas fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default News2
