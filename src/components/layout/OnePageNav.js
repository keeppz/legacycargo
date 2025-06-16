import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function OnePageNav({home2}) {
	const router = useRouter()
	
	const scrollToSection = (sectionId) => {
		if (typeof window !== 'undefined') {
			const element = document.getElementById(sectionId)
			if (element) {
				window.scrollTo({
					top: element.offsetTop - 70,
					behavior: 'smooth'
				})
			}
		}
	}
	
	return (
		<>
			<nav id="mobile-menu" className="d-none d-xl-block">
				<ul>
					<li className="has-dropdown active menu-thumb">
						<Link href="/">
							Home
							<i className="fa-classic fa-plus" />
						</Link>
						{/* Submenu implementation */}
					</li>
					<li>
						<a 
							href="#about" 
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('about')
							}}
						>
							About Us
						</a>
					</li>
					<li>
						<a 
							href="#services" 
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('services')
							}}
						>
							Services
						</a>
					</li>
					<li>
						<a 
							href="#projects" 
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('projects')
							}}
						>
							Projects
						</a>
					</li>
					<li>
						<a 
							href="#team" 
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('team')
							}}
						>
							Team
						</a>
					</li>
					<li>
						<a 
							href="#blog" 
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('blog')
							}}
						>
							Blog
						</a>
					</li>
					{!home2 && (
						<li>
							<a 
								href="#contact" 
								onClick={(e) => {
									e.preventDefault()
									scrollToSection('contact')
								}}
							>
								Contact
							</a>
						</li>
					)}
				</ul>
			</nav>
		</>
	)
}
