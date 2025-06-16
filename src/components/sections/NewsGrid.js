'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NewsGrid = () => {
    const newsItems = [
        {
            id: 1,
            title: "Innovación en Logística",
            description: "Descubre las últimas tendencias en logística y transporte que están revolucionando la industria.",
            date: "15 Mar 2024",
            category: "Logística",
            image: "/assets/img/news/news-1.jpg",
            author: "Juan Pérez"
        },
        {
            id: 2,
            title: "Sostenibilidad en Transporte",
            description: "Implementación de prácticas sostenibles en el sector del transporte y la logística.",
            date: "14 Mar 2024",
            category: "Sostenibilidad",
            image: "/assets/img/news/news-2.jpg",
            author: "María García"
        },
        {
            id: 3,
            title: "Tecnología en Cadena de Suministro",
            description: "Las nuevas tecnologías que están transformando la gestión de la cadena de suministro.",
            date: "13 Mar 2024",
            category: "Tecnología",
            image: "/assets/img/news/news-3.jpg",
            author: "Carlos Rodríguez"
        },
        {
            id: 4,
            title: "Optimización de Rutas",
            description: "Estrategias efectivas para la optimización de rutas y reducción de costos operativos.",
            date: "12 Mar 2024",
            category: "Operaciones",
            image: "/assets/img/news/news-4.jpg",
            author: "Ana Martínez"
        },
        {
            id: 5,
            title: "Seguridad en el Transporte",
            description: "Mejores prácticas y protocolos de seguridad en el transporte de mercancías.",
            date: "11 Mar 2024",
            category: "Seguridad",
            image: "/assets/img/news/news-5.jpg",
            author: "Pedro López"
        },
        {
            id: 6,
            title: "Tendencias del Mercado",
            description: "Análisis de las tendencias actuales del mercado en el sector logístico.",
            date: "10 Mar 2024",
            category: "Mercado",
            image: "/assets/img/news/news-6.jpg",
            author: "Laura Sánchez"
        }
    ]

    return (
        <section className="news-grid-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    {newsItems.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <div className="news-item mb-30">
                                <div className="news-img">
                                    <Link href={`/news-details/${item.id}`}>
                                        <Image 
                                            src={item.image} 
                                            alt={item.title}
                                            width={1920}
                                            height={1080}
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="news-date">
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <span><i className="far fa-folder-open"></i>{item.category}</span>
                                        <span><i className="far fa-user"></i>{item.author}</span>
                                    </div>
                                    <h3 className="news-title">
                                        <Link href={`/news-details/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p>{item.description}</p>
                                    <div className="news-button">
                                        <Link href={`/news-details/${item.id}`} className="theme-btn">
                                            Leer Más <i className="far fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsGrid 