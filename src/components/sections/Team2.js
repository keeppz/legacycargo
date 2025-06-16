import Image from 'next/image';
import Link from 'next/link';

const Team2 = () => {
	return (
		<section className="team-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="team-item wow fadeInUp" data-wow-delay=".2s">
							<div className="team-image">
								<Image
									src="/assets/img/team/team-1.jpg"
									alt="team member"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="team-content">
								<h3>
									<Link href="/team-details">John Doe</Link>
								</h3>
								<p>Position</p>
								<div className="social-links">
									<Link href="#"><i className="fab fa-facebook-f"></i></Link>
									<Link href="#"><i className="fab fa-twitter"></i></Link>
									<Link href="#"><i className="fab fa-linkedin-in"></i></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="team-item wow fadeInUp" data-wow-delay=".4s">
							<div className="team-image">
								<Image
									src="/assets/img/team/team-2.jpg"
									alt="team member"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="team-content">
								<h3>
									<Link href="/team-details">Jane Smith</Link>
								</h3>
								<p>Position</p>
								<div className="social-links">
									<Link href="#"><i className="fab fa-facebook-f"></i></Link>
									<Link href="#"><i className="fab fa-twitter"></i></Link>
									<Link href="#"><i className="fab fa-linkedin-in"></i></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="team-item wow fadeInUp" data-wow-delay=".6s">
							<div className="team-image">
								<Image
									src="/assets/img/team/team-3.jpg"
									alt="team member"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="team-content">
								<h3>
									<Link href="/team-details">Mike Johnson</Link>
								</h3>
								<p>Position</p>
								<div className="social-links">
									<Link href="#"><i className="fab fa-facebook-f"></i></Link>
									<Link href="#"><i className="fab fa-twitter"></i></Link>
									<Link href="#"><i className="fab fa-linkedin-in"></i></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="team-item wow fadeInUp" data-wow-delay=".8s">
							<div className="team-image">
								<Image
									src="/assets/img/team/team-4.jpg"
									alt="team member"
									width={1920}
									height={1080}
									className="image"
								/>
							</div>
							<div className="team-content">
								<h3>
									<Link href="/team-details">Sarah Wilson</Link>
								</h3>
								<p>Position</p>
								<div className="social-links">
									<Link href="#"><i className="fab fa-facebook-f"></i></Link>
									<Link href="#"><i className="fab fa-twitter"></i></Link>
									<Link href="#"><i className="fab fa-linkedin-in"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team2;
