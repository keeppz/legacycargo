'use client'

import { useEffect, useState } from "react"

export default function BackToTop({ target }) {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const onScroll = () => {
				setHasScrolled(window.scrollY > 100)
			}

			window.addEventListener("scroll", onScroll)
			return () => window.removeEventListener("scroll", onScroll)
		}
	}, [])

	const handleClick = () => {
		if (typeof window !== 'undefined' && document) {
			window.scrollTo({
				top: document.querySelector(target).offsetTop,
				behavior: 'smooth'
			})
		}
	}

	return (
		<>
			{hasScrolled && (
				<button id="back-top" className="back-to-top" onClick={handleClick}>
					<i className="fa-classic fa-arrow-up" />
				</button>
			)}
		</>
	)
}
