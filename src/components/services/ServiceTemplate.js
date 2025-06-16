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
    // Estilos para el sidebar sticky usando clases existentes
    const stickyStyles = {
        position: 'sticky',
        top: '30px',
        height: 'fit-content'
    };

    return (
        <>
            <section className="service-details-section section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            {/* Columna de contenido principal (izquierda) */}
                            <div className="col-12 col-lg-8">
                                <div className="service-details-image">
                                    <Image
                                        src={imageUrl || "/assets/img/service/service-details.jpg"}
                                        alt={title}
                                        width={1920}
                                        height={1080}
                                        className="image"
                                    />
                                </div>
                                <div className="service-details-content">
                                    <h2>{title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                                    <div className="row g-4 mt-4">
                                        <div className="col-lg-7">
                                            <div className="service-details-image">
                                                <img src="/assets/img/service/details-2.jpg" alt={title} />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="content">
                                                <h3>Beneficios del servicio:</h3>
                                            </div>
                                            <ul className="details-list">
                                                {benefits && benefits.map((benefit, index) => (
                                                    <li key={index}>
                                                        <i className="fa-solid fa-circle-check" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <h4>¿Cómo funciona nuestro servicio?</h4>
                                    <p className="mt-3">
                                        En Legacy Cargo contamos con procesos optimizados para garantizar la eficiencia y seguridad de su carga en todo momento.
                                    </p>
                                    <div className="row g-4 mt-2">
                                        {serviceProcess && serviceProcess.map((process, index) => (
                                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                                <div className="service-details-box">
                                                    <div className="icon">
                                                        <img src={`/assets/img/icon/${15 + index}.svg`} alt={process.title} />
                                                        <h5>{process.title}</h5>
                                                    </div>
                                                    <p>
                                                        {process.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Columna de sidebar (derecha) */}
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar" style={stickyStyles}>
                                    {/* Widget de Servicios/Categorías */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Nuestros Servicios</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <ul>
                                                <li className={title === "Transporte Aéreo" ? "active" : ""}>
                                                    <Link href="/service-aereo">Transporte Aéreo</Link>{" "}
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right-long" style={{ color: "#ff282e" }} />
                                                    </span>
                                                </li>
                                                <li className={title === "Transporte Marítimo" ? "active" : ""}>
                                                    <Link href="/service-maritimo">Transporte Marítimo</Link>
                                                    <span>
                                                        <i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
                                                    </span>
                                                </li>
                                                <li className={title === "Transporte Terrestre" ? "active" : ""}>
                                                    <Link href="/service-terrestre">Transporte Terrestre</Link>
                                                    <span>
                                                        <i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
                                                    </span>
                                                </li>
                                                <li className={title === "Servicios Aduanales" ? "active" : ""}>
                                                    <Link href="/service-aduanal">Servicios Aduanales</Link>{" "}
                                                    <span>
                                                        <i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
                                                    </span>
                                                </li>
                                                <li className={title === "Almacenamiento" ? "active" : ""}>
                                                    <Link href="/service-almacenamiento">Almacenamiento</Link>{" "}
                                                    <span>
                                                        <i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
                                                    </span>
                                                </li>
                                                <li className={title === "Paquetería Internacional" ? "active" : ""}>
                                                    <Link href="/service-paqueteria">Paquetería Internacional</Link>{" "}
                                                    <span>
                                                        <i className="fa-classic fa-arrow-right-long" style={{ color: "#ff282e" }} />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Widget de Contacto */}
                                    <div className="service-sidebar-widget">
                                        <div
                                            className="contact-bg text-center bg-cover"
                                            style={{
                                                backgroundImage:
                                                    'url("/assets/img/service/contact-bg.jpg")',
                                            }}
                                        >
                                            <p>¿Necesita una cotización para su envío?</p>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <Link href="/contact" className="theme-btn" style={{ width: '90%' }}>
                                                    Solicitar cotización
                                                    <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
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