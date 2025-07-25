import Image from 'next/image';
import Link from 'next/link';
//404 page

const NotFound = () => {
	return (
		<section className="not-found-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="not-found-content text-center">
							<Image
								src="/assets/img/404.png"
								alt="404 image"
								width={1920}
								height={1080}
								className="image"
							/>
							<h2>Página no encontrada</h2>
							<p>Lo sentimos, la página que buscas no existe.</p>
							<Link href="/" className="main-btn golden-btn">
								Volver al inicio
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
