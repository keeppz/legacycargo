import React from "react"
import Link from 'next/link'
import Image from 'next/image'

export default function ServiceTemplate({ 
    title, 
    description, 
    imageUrl, 
    benefits, 
    serviceProcess
}) {
    return (
        <>
            <section className="service-details-section section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4 align-items-start">
                            {/* Columna de contenido principal (izquierda) */}
                            <div className="col-12 col-lg-8">
                                <div className="service-details-image" style={{ maxWidth: '70%', height: 'auto', marginBottom: '2rem' }}>
                                    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                                        <Image
                                            src={imageUrl || "/assets/img/service/service-details.jpg"}
                                            alt={title}
                                            fill
                                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="service-details-content">
                                    <h2 className="mb-4">{title}</h2>
                                    <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>{description}</p>

                                    {/* Beneficios del servicio */}
                                    {benefits && (
                                        <div className="details-list mb-4">
                                            <h4 className="mb-4">Beneficios</h4>
                                            <ul className="list-unstyled">
                                                {benefits.map((benefit, index) => (
                                                    <li key={index} className="d-flex align-items-center mb-3">
                                                        <i className="fa-solid fa-check me-2" style={{ color: "#ff282e" }} />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Proceso del servicio */}
                                    {serviceProcess && (
                                        <div className="service-details-box p-4 border rounded">
                                            <h4 className="mb-3">Nuestro Proceso</h4>
                                            <div className="d-flex align-items-start">
                                                <i className="fa-solid fa-gear me-3" style={{ color: "#ff282e", fontSize: "1.5rem" }} />
                                                <p className="mb-0">{serviceProcess}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar (derecha) */}
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar position-sticky" style={{ top: '30px' }}>
                                    {/* Widget de Servicios/Categorías */}
                                    <div className="single-sidebar-widget mb-4 p-4 bg-light rounded">
                                        <div className="wid-title mb-3">
                                            <h3>Nuestros Servicios</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <ul className="list-unstyled">
                                                <li className={`mb-2 p-2 rounded ${title === "Transporte Aéreo" ? "bg-danger text-white" : ""}`}>
                                                    <Link href="/service-aereo" className={`d-flex justify-content-between align-items-center text-decoration-none ${title === "Transporte Aéreo" ? "text-white" : ""}`}>
                                                        <span>Transporte Aéreo</span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: title === "Transporte Aéreo" ? "#fff" : "#ff282e" }} />
                                                    </Link>
                                                </li>
                                                <li className={`mb-2 p-2 rounded ${title === "Transporte Marítimo" ? "bg-danger text-white" : ""}`}>
                                                    <Link href="/service-maritimo" className={`d-flex justify-content-between align-items-center text-decoration-none ${title === "Transporte Marítimo" ? "text-white" : ""}`}>
                                                        <span>Transporte Marítimo</span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: title === "Transporte Marítimo" ? "#fff" : "#ff282e" }} />
                                                    </Link>
                                                </li>
                                                <li className={`mb-2 p-2 rounded ${title === "Transporte Terrestre" ? "bg-danger text-white" : ""}`}>
                                                    <Link href="/service-terrestre" className={`d-flex justify-content-between align-items-center text-decoration-none ${title === "Transporte Terrestre" ? "text-white" : ""}`}>
                                                        <span>Transporte Terrestre</span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: title === "Transporte Terrestre" ? "#fff" : "#ff282e" }} />
                                                    </Link>
                                                </li>
                                                <li className={`mb-2 p-2 rounded ${title === "Servicios Aduanales" ? "bg-danger text-white" : ""}`}>
                                                    <Link href="/service-aduanal" className={`d-flex justify-content-between align-items-center text-decoration-none ${title === "Servicios Aduanales" ? "text-white" : ""}`}>
                                                        <span>Servicios Aduanales</span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: title === "Servicios Aduanales" ? "#fff" : "#ff282e" }} />
                                                    </Link>
                                                </li>
                                                {/* <li className={`mb-2 p-2 rounded ${title === "Almacenamiento" ? "bg-danger text-white" : ""}`}>
                                                    <Link href="/service-almacenamiento" className={`d-flex justify-content-between align-items-center text-decoration-none ${title === "Almacenamiento" ? "text-white" : ""}`}>
                                                        <span>Almacenamiento</span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: title === "Almacenamiento" ? "#fff" : "#ff282e" }} />
                                                    </Link>
                                                </li> */}
                                                {/* <li className={`mb-2 p-2 rounded ${title === "Paquetería Internacional" ? "bg-danger text-white" : ""}`}>
                                                    <Link href="/service-paqueteria" className={`d-flex justify-content-between align-items-center text-decoration-none ${title === "Paquetería Internacional" ? "text-white" : ""}`}>
                                                        <span>Paquetería Internacional</span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: title === "Paquetería Internacional" ? "#fff" : "#ff282e" }} />
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Widget de Contacto */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title mb-3">
                                            <h3>¿Necesitas ayuda?</h3>
                                        </div>
                                        <div className="contact-widget p-4 border rounded bg-light">
                                            <p className="mb-3">Contáctanos para más información sobre nuestros servicios</p>
                                            <Link href="/contact" className="theme-btn d-block text-center text-decoration-none btn btn-danger">
                                                Contactar Ahora
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 