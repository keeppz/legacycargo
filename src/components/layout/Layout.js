'use client'

import { useEffect, useState } from "react"
// import AddClassBody from "../elements/AddClassBody"
import BackToTop from "../elements/BackToTop"
import Breadcrumb from "./Breadcrumb"
import Footer1 from "./footer/Footer1"
import Footer2 from "./footer/Footer2"
import Header1 from "./header/Header1"
import Header2 from "./header/Header2"
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Offcanvas from "./Offcanvas"
import Search from "./Search"


export default function Layout({
	headerStyle,
	footerStyle,
	breadcrumbTitle,
	children,
}) {
	const [scroll, setScroll] = useState(0)
	// MobileMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

	// OffCanvas
	const [isOffCanvas, setOffCanvas] = useState(false)
	const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => setSearch(!isSearch)

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const initWow = async () => {
			try {
				// Importamos directamente el módulo WOW
				const WOW = (await import('wow.js')).default;
				
				// Creamos la instancia
				const wow = new WOW({
					boxClass: 'wow',
					animateClass: 'animated',
					offset: 100,
					mobile: true,
					live: true
				});
				
				wow.init();
			} catch (error) {
				console.error('Error específico al inicializar WOW.js:', error);
			}
		};

		initWow();

		const onScroll = () => {
			setScroll(window.scrollY > 100);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<>
			<div id="top" />
			{/* <LinkddClassBody /> */}
			<div className="mouse-cursor cursor-outer" />
			<div className="mouse-cursor cursor-inner" />

			<Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

			{!headerStyle && (
				<Header2
					scroll={scroll}
					isMobileMenu={isMobileMenu}
					handleMobileMenu={handleMobileMenu}
					isOffCanvas={isOffCanvas}
					handleOffCanvas={handleOffCanvas}
					isSearch={isSearch}
					handleSearch={handleSearch}
				/>
			)}
			{headerStyle === 1 && (
				<Header2
					scroll={scroll}
					isMobileMenu={isMobileMenu}
					handleMobileMenu={handleMobileMenu}
					isOffCanvas={isOffCanvas}
					handleOffCanvas={handleOffCanvas}
					isSearch={isSearch}
					handleSearch={handleSearch}
				/>
			)}
			{headerStyle === 2 && (
				<Header2
					scroll={scroll}
					isMobileMenu={isMobileMenu}
					handleMobileMenu={handleMobileMenu}
					isOffCanvas={isOffCanvas}
					handleOffCanvas={handleOffCanvas}
					isSearch={isSearch}
					handleSearch={handleSearch}
				/>
			)}
			{headerStyle === 3 && (
				<Header3
					scroll={scroll}
					isMobileMenu={isMobileMenu}
					handleMobileMenu={handleMobileMenu}
					isOffCanvas={isOffCanvas}
					handleOffCanvas={handleOffCanvas}
					isSearch={isSearch}
					handleSearch={handleSearch}
				/>
			)}
			{headerStyle === 4 && (
				<Header4
					scroll={scroll}
					isMobileMenu={isMobileMenu}
					handleMobileMenu={handleMobileMenu}
					isOffCanvas={isOffCanvas}
					handleOffCanvas={handleOffCanvas}
					isSearch={isSearch}
					handleSearch={handleSearch}
				/>
			)}
			<Search
				isSearch={isSearch}
				handleSearch={handleSearch} />

			<main className="main">
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

				{children}
			</main>

			{!footerStyle && <Footer2 />}
			{footerStyle === 1 && <Footer1 />}
			{footerStyle === 2 && <Footer2 />}

			<BackToTop target="#top" />
		</>
	)
}
