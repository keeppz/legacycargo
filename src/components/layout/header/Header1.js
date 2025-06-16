'use client'

import Link from "next/link"
import Image from "next/image"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>
			<header className="header-section-22">
				<div className="header-top-sectionss top-style-2 fix">
					<div className="container-fluid">
						<div className="header-top-wrappers style-2">
							
							<div className="top-right">
								<div className="social-icon d-flex align-items-center">
									<span>Follow Us:</span>
									<Link href="#">
										<i className="fab fa-facebook-f" />
									</Link>
									<Link href="#">
										<i className="fab fa-twitter" />
									</Link>
									<Link href="#">
										<i className="fa-brands fa-linkedin-in" />
									</Link>
									<Link href="#">
										<i className="fa-brands fa-youtube" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="header-sticky" className={`header-1 ${scroll ? "sticky" : ""}`}>
					<div className="main-logo">
						<Link href="/">
							<Image src="/assets/img/logo/white-logo.png" alt="logo-image" width={150} height={50} />
						</Link>
					</div>
					<div className="container-fluid">
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="logo d-none">
									<Link href="/" className="header-logo">
										<Image src="/assets/img/logo/black-logo.png" alt="logo-img" width={150} height={50} />
									</Link>
								</div>
								<div className="header-left">
									<div className="mean__menu-wrapper">
										<div className="main-menu">
											<Menu />
										</div>
									</div>
								</div>
								<div className="header-right d-flex justify-content-end align-items-center">
									<a className="search-trigger search-icon" onClick={handleSearch}>
										<i className="fal fa-search" />
									</a>
									<div className="header-button">
										<Link href="/contact" className="theme-btn">
											Contact us
											<i className="fa-solid fa-arrow-right-long" />
										</Link>
									</div>
									<div className="header__hamburger d-xl-none my-auto">
										<div
											className="sidebar__toggle"
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
