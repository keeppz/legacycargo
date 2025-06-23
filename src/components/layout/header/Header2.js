import Link from "next/link"
import Menu from "../Menu"
import Image from "next/image"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>
			<header className="header-section-2">
				<div className="container-fluid">
					<div className="header-top-wrapper-2">
						{/* <ul className="contact-list">
							<li>
								<i className="far fa-envelope" />
								<Link href="/mailto:info@example.com">info@legacycargove.com</Link>
							</li>
							<li>
								<i className="fa-sharp fa-solid fa-location-dot" />
								C.C Lido, Caracas
							</li>
							<li>
							<i className="fab fa-whatsapp"></i>
								<Link target="_blank" href="https://wa.me/+584142909883">+58 412-6396424</Link>
							</li>
						</ul> */}
						{/* <div className="top-right">
							<ul className="text-list">
								<li>
									<Link href="/contact">Politicas de Privacidad</Link>
								</li>
								<li>
									<Link href="/contact">Terminos y Condiciones</Link>
								</li>
							</ul>
							<div className="social-icon d-flex align-items-center">
								<Link href="/">
									<i className="fab fa-facebook-f" />
								</Link>
								<Link href="/#">
									<i className="fab fa-x-twitter" />
								</Link>
								<Link href="/#">
									<i className="fab fa-instagram" />
								</Link>
								<Link href="/#">
									<i className="fab fa-linkedin-in" />
								</Link>
							</div>
						</div> */}
					</div>
					<div id="header-sticky" className={`header-2 ${scroll ? "sticky" : ""}`}>
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="header-left">
									<div className="logo">
										<Link href="/" className="header-logo">
											<Image
												src="/assets/img/logo/white-logo.png"
												alt="logo-img"
												width={170}
												height={50}
											/>
										</Link>
									</div>
								</div>
								<div className="header-right d-flex justify-content-start align-items-center">
									<div className="mean__menu-wrapper">
										<div className="main-menu">
											<Menu />
										</div>
									</div>
									<div className="header-button">
										<Link href="/download" className="theme-btn">
											Descarga La App<i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="search-item">
										<a className="search-trigger search-icon" onClick={handleSearch}>
											<i className="fa-solid fa-magnifying-glass"></i>
										</a>
										<div className="header__hamburger d-block d-lg-none my-auto">
											<div className="sidebar__toggle" onClick={handleOffCanvas}>
												<i className="fas fa-bars" />
											</div>
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
