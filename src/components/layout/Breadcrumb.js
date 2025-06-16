'use client'

import Link from "next/link"
import Image from "next/image"

export default function Breadcrumb({ breadcrumbTitle }) {
	return (
		<>
			<div
				className="breadcrumb-wrapper bg-cover"
				style={{ backgroundImage: 'url("/assets/img/breadcrumb-bg.jpg")' }}
			>
				<div className="shape-image float-bob-y">
					<Image src="/assets/img/vector.png" alt="img" width={150} height={100} />
				</div>
				<div className="container">
					<div className="breadcrumb-wrapper-items">
						<div className="page-heading">
							<div className="breadcrumb-sub-title">
								<h1 className="wow fadeInUp" data-wow-delay=".3s">
									{breadcrumbTitle}
								</h1>
							</div>
							<ul
								className="breadcrumb-items wow fadeInUp"
								data-wow-delay=".5s"
							>
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<i className="fa-sharp fa-solid fa-slash-forward" />
								</li>
								<li>{breadcrumbTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
