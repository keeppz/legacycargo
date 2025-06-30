import React from 'react'
import Breadcrumb from '../layout/Breadcrumb'

export default function PoliticasPrivacidad() {
    return (
        <>
            <Breadcrumb />
            
            <div className="privacy-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="privacy-content">
                                <div className="section-title text-center">
                                    <span className="sub-content wow fadeInUp">
                                        {/* <img src="/assets/img/bale.png" alt="img" /> */}
                                        Protegemos tu Información
                                    </span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Políticas de Privacidad
                                    </h2>
                                </div>

                                <div className="privacy-wrapper wow fadeInUp" data-wow-delay=".5s">
                                    <div className="privacy-item">
                                        <h3>1. Información que Recopilamos</h3>
                                        <p>
                                            En Legacy Cargo, recopilamos información personal necesaria para brindar nuestros servicios de logística y transporte. Esta información incluye:
                                        </p>
                                        <ul>
                                            <li>Datos personales (nombre, dirección, teléfono, correo electrónico)</li>
                                            <li>Información de envíos (direcciones de origen y destino, contenido de paquetes)</li>
                                            <li>Datos de facturación y pago</li>
                                            <li>Información de seguimiento y entrega</li>
                                            <li>Comunicaciones con nuestro servicio al cliente</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>2. Cómo Utilizamos tu Información</h3>
                                        <p>
                                            Utilizamos la información recopilada para los siguientes propósitos:
                                        </p>
                                        <ul>
                                            <li>Procesar y gestionar tus envíos</li>
                                            <li>Proporcionar seguimiento en tiempo real</li>
                                            <li>Comunicarnos contigo sobre el estado de tus envíos</li>
                                            <li>Procesar pagos y facturación</li>
                                            <li>Mejorar nuestros servicios y experiencia del cliente</li>
                                            <li>Cumplir con requisitos legales y aduaneros</li>
                                            <li>Prevenir fraude y garantizar la seguridad</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>3. Compartir Información</h3>
                                        <p>
                                            Legacy Cargo no vende, renta o comparte tu información personal con terceros, excepto en las siguientes circunstancias:
                                        </p>
                                        <ul>
                                            <li>Con socios logísticos necesarios para completar las entregas</li>
                                            <li>Con autoridades aduaneras y gubernamentales cuando sea requerido por ley</li>
                                            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                                            <li>Cuando tengas tu consentimiento explícito</li>
                                            <li>Para proteger nuestros derechos legales o prevenir actividades ilegales</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>4. Seguridad de Datos</h3>
                                        <p>
                                            Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal:
                                        </p>
                                        <ul>
                                            <li>Encriptación SSL para transmisión de datos</li>
                                            <li>Acceso restringido a información personal</li>
                                            <li>Capacitación regular del personal en seguridad de datos</li>
                                            <li>Monitoreo continuo de sistemas de seguridad</li>
                                            <li>Respaldo seguro de datos</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>5. Retención de Datos</h3>
                                        <p>
                                            Conservamos tu información personal durante el tiempo necesario para:
                                        </p>
                                        <ul>
                                            <li>Completar los servicios solicitados</li>
                                            <li>Cumplir con obligaciones legales y fiscales</li>
                                            <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
                                            <li>Mantener registros de seguridad y prevención de fraude</li>
                                        </ul>
                                        <p>
                                            Generalmente, mantenemos los datos de envío por un período de 7 años para cumplir con regulaciones fiscales y aduaneras.
                                        </p>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>6. Tus Derechos</h3>
                                        <p>
                                            Tienes los siguientes derechos respecto a tu información personal:
                                        </p>
                                        <ul>
                                            <li>Acceder a la información que tenemos sobre ti</li>
                                            <li>Solicitar correcciones de información incorrecta</li>
                                            <li>Solicitar la eliminación de tu información personal</li>
                                            <li>Objetar el procesamiento de tu información</li>
                                            <li>Solicitar la portabilidad de datos</li>
                                            <li>Retirar el consentimiento cuando aplique</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>7. Cookies y Tecnologías de Seguimiento</h3>
                                        <p>
                                            Nuestro sitio web utiliza cookies y tecnologías similares para:
                                        </p>
                                        <ul>
                                            <li>Mejorar la funcionalidad del sitio web</li>
                                            <li>Analizar el uso del sitio web</li>
                                            <li>Personalizar tu experiencia</li>
                                            <li>Proporcionar seguimiento de envíos</li>
                                        </ul>
                                        <p>
                                            Puedes controlar las cookies a través de la configuración de tu navegador.
                                        </p>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>8. Contacto</h3>
                                        <p>
                                            Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, contáctanos:
                                        </p>
                                        <ul>
                                            <li>Email: <a href="mailto:info@legacycargo.com">privacidad@legacycargo.com</a></li>
                                            <li>Teléfono: +58 414-2909883</li>
                                            <li>Dirección: Oficinas en Miami, FL y Caracas, VE</li>
                                        </ul>
                                    </div>

                                    <div className="privacy-item">
                                        <h3>9. Cambios a esta Política</h3>
                                        <p>
                                            Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última modificación".
                                        </p>
                                        <p className="text-muted">
                                            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 