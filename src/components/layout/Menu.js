import Link from 'next/link'

export default function Menu() {
	return (
		<>
			<nav id="mobile-menu" className="d-none d-xl-block">
				<ul>
					<li className="menu-thumb">
						<Link href="/">
							Inicio
						</Link>
					</li>
					<li>
						<Link href="/about">Nosotros</Link>
					</li>
					<li className="has-dropdown">
						<Link href="/service">
							Servicios
							<i className="fa-classic fa-plus" />
						</Link>
						<ul className="submenu">
							<li>
								<Link href="/service-aereo">Servicio Aéreo</Link>
							</li>
							<li>
								<Link href="/service-maritimo">Servicio Marítimo</Link>
							</li>
							<li>
								<Link href="/service-terrestre">Servicio Terrestre</Link>
							</li>
							<li>
								<Link href="/service-aduanal">Servicio Aduanal</Link>
							</li>
							<li>
								<Link href="/service-paqueteria">Servicio de Paquetería</Link>
							</li>
							{/* <li>
								<Link href="/service-almacenamiento">Servicio de Almacenamiento</Link>
							</li> */}
						</ul>
					</li>
					<li> 
						<Link href="/calculator">Calculadora de envíos</Link>
					</li>
					<li>
						<Link href="/contact">Contáctanos</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}


