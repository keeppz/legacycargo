import Link from "next/link"
import OnePageNav from "../OnePageNav"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>

			<header className="header-section-22">
				<div className="header-top-sectionss top-style-2 fix">
					<div className="container-fluid">
						<div className="header-top-wrappers style-2">
							<ul className="contact-list">
								<li>
									<i className="far fa-envelope" />
									<Link to="/mailto:info@example.com" className="link">
										info@example.com
									</Link>
								</li>
								<li>
									<i className="fa-solid fa-phone-volume" />
									<Link to="/tel:2086660112">+208-666-0112</Link>
								</li>
							</ul>
							<div className="top-right">
								<div className="social-icon d-flex align-items-center">
									<span>Follow Us:</span>
									<Link to="/#">
										<i className="fab fa-facebook-f" />
									</Link>
									<Link to="/#">
										<i className="fab fa-twitter" />
									</Link>
									<Link to="/#">
										<i className="fa-brands fa-linkedin-in" />
									</Link>
									<Link to="/#">
										<i className="fa-brands fa-youtube" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="header-sticky" className={`header-1 ${scroll ? "sticky" : ""}`}>
					<div className="main-logo">
						<Link to="/">
							<img src="assets/img/logo/white-logo.png" alt="logo-image" />
						</Link>
					</div>
					<div className="container-fluid">
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="logo d-none">
									<Link to="/" className="header-logo">
										<img src="assets/img/logo/black-logo.png" alt="logo-img" />
									</Link>
								</div>
								<div className="header-left">
									<div className="mean__menu-wrapper">
										<div
											className="main-menu"
										>
											<OnePageNav />
										</div>
									</div>
								</div>
								<div className="header-right d-flex justify-content-end align-items-center">
									<a className="search-trigger search-icon" onClick={handleSearch}>
										<i className="fal fa-search" />
									</a>
									<div className="header-button">
										<Link to="/contact" className="theme-btn">
											Contact us
											<i className="fa-solid fa-arrow-right-long" />
										</Link>
									</div>
									<div className="header__hamburger d-xl-none my-auto">
										<div
											className="sidebar__toggle"
											type="button"
											onClick={handleOffCanvas}
										>
											<i className="fas fa-bars" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
