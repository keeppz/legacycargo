import React from 'react'
import Breadcrumb from '../layout/Breadcrumb'

export default function AccountDeletion() {
    return (
        <>
            <Breadcrumb />
            
            <div className="account-deletion-section section-padding">
                <div className="container">
                                    <div className="row justify-content-center">
                    <div className="col-12">
                            <div className="deletion-content">
                                <div className="section-title text-center">
                                    <span className="sub-content wow fadeInUp">
                                        <i className="fa-solid fa-user-minus"></i>
                                        Solicitud de Eliminación de Datos
                                    </span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Eliminación de Cuenta y Datos Personales
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">
                                        En <strong>Legacy Cargo</strong>, respetamos tu derecho a la privacidad y te proporcionamos 
                                        información clara sobre cómo solicitar la eliminación de tu cuenta y datos personales.
                                    </p>
                                </div>

                                <div className="deletion-wrapper wow fadeInUp" data-wow-delay=".5s">
                                    
                                    {/* Información de la Aplicación */}
                                    <div className="deletion-item">
                                        <h3>
                                            <i className="fa-solid fa-info-circle"></i>
                                            Información de la Aplicación
                                        </h3>
                                        <div className="app-info">
                                            <p><strong>Nombre de la Aplicación:</strong> Legacy Cargo</p>
                                            <p><strong>Desarrollador:</strong> Legacy Cargo</p>
                                            <p><strong>Versión:</strong> 1.0.0</p>
                                            <p><strong>Plataforma:</strong> Google Play Store</p>
                                        </div>
                                    </div>

                                    {/* Proceso de Eliminación */}
                                    <div className="deletion-item">
                                        <h3>
                                            <i className="fa-solid fa-list-check"></i>
                                            Pasos para Solicitar la Eliminación de Datos
                                        </h3>
                                        <div className="steps-container">
                                            <div className="step-item">
                                                <div className="step-number">1</div>
                                                <div className="step-content">
                                                    <h4>Contactar Soporte</h4>
                                                    <p>Envía un correo electrónico a <strong>datos@legacycargo.com</strong> con el asunto "Solicitud de Eliminación de Datos"</p>
                                                </div>
                                            </div>
                                            
                                            <div className="step-item">
                                                <div className="step-number">2</div>
                                                <div className="step-content">
                                                    <h4>Proporcionar Información</h4>
                                                    <p>Incluye en tu correo:</p>
                                                    <ul>
                                                        <li>Tu nombre completo</li>
                                                        <li>Correo electrónico registrado</li>
                                                        <li>Número de teléfono (si aplica)</li>
                                                        <li>Motivo de la solicitud</li>
                                                        <li>Confirmación de que deseas eliminar todos tus datos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="step-item">
                                                <div className="step-number">3</div>
                                                <div className="step-content">
                                                    <h4>Verificación de Identidad</h4>
                                                    <p>Te contactaremos para verificar tu identidad y confirmar la solicitud</p>
                                                </div>
                                            </div>
                                            
                                            <div className="step-item">
                                                <div className="step-number">4</div>
                                                <div className="step-content">
                                                    <h4>Procesamiento</h4>
                                                    <p>Procesaremos tu solicitud dentro de los siguientes 30 días hábiles</p>
                                                </div>
                                            </div>
                                            
                                            <div className="step-item">
                                                <div className="step-number">5</div>
                                                <div className="step-content">
                                                    <h4>Confirmación</h4>
                                                    <p>Recibirás una confirmación por correo electrónico una vez completada la eliminación</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tipos de Datos */}
                                    <div className="deletion-item">
                                        <h3>
                                            <i className="fa-solid fa-database"></i>
                                            Tipos de Datos que se Eliminan
                                        </h3>
                                        <div className="data-types">
                                            <div className="data-category">
                                                <h4>Datos Personales</h4>
                                                <ul>
                                                    <li>Nombre completo</li>
                                                    <li>Dirección de correo electrónico</li>
                                                    <li>Número de teléfono</li>
                                                    <li>Dirección física</li>
                                                    <li>Información de identificación</li>
                                                </ul>
                                            </div>
                                            
                                            {/* <div className="data-category">
                                                <h4>Datos de Envíos</h4>
                                                <ul>
                                                    <li>Historial de envíos</li>
                                                    <li>Direcciones de origen y destino</li>
                                                    <li>Información de contenido de paquetes</li>
                                                    <li>Números de seguimiento</li>
                                                    <li>Comentarios y notas de envío</li>
                                                </ul>
                                            </div> */}
                                            
                                            <div className="data-category">
                                                <h4>Datos de Cuenta</h4>
                                                <ul>
                                                    <li>Credenciales de acceso</li>
                                                    <li>Preferencias de usuario</li>
                                                    <li>Configuraciones de notificaciones</li>
                                                    <li>Historial de actividad</li>
                                                    <li>Datos de sesión</li>
                                                </ul>
                                            </div>
                                            
                                            {/* <div className="data-category">
                                                <h4>Datos de Pago</h4>
                                                <ul>
                                                    <li>Información de facturación</li>
                                                    <li>Métodos de pago guardados</li>
                                                    <li>Historial de transacciones</li>
                                                    <li>Datos de tarjetas (encriptados)</li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* Datos que se Conservan */}
                                    <div className="deletion-item">
                                        <h3>
                                            <i className="fa-solid fa-shield-alt"></i>
                                            Datos que se Conservan
                                        </h3>
                                        <div className="retained-data">
                                            <p>Por razones legales y de cumplimiento, algunos datos pueden conservarse por períodos específicos:</p>
                                            
                                            <div className="retention-category">
                                                <h4>Registros Financieros (7 años)</h4>
                                                <ul>
                                                    <li>Facturas emitidas</li>
                                                    <li>Registros de pago</li>
                                                    <li>Información fiscal</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="retention-category">
                                                <h4>Registros Legales (5 años)</h4>
                                                <ul>
                                                    <li>Documentos aduaneros</li>
                                                    <li>Certificados de origen</li>
                                                    <li>Registros de cumplimiento</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="retention-category">
                                                <h4>Datos Anonimizados (Indefinido)</h4>
                                                <ul>
                                                    <li>Estadísticas de uso (sin identificación personal)</li>
                                                    <li>Datos de rendimiento del sistema</li>
                                                    <li>Información de seguridad</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Períodos de Retención */}
                                    <div className="deletion-item">
                                        <h3>
                                            <i className="fa-solid fa-clock"></i>
                                            Períodos de Retención Adicionales
                                        </h3>
                                        <div className="retention-periods">
                                            <div className="period-item">
                                                <h4>Datos de Seguridad</h4>
                                                <p><strong>Período:</strong> 2 años</p>
                                                <p><strong>Propósito:</strong> Prevención de fraude y auditorías de seguridad</p>
                                            </div>
                                            
                                            <div className="period-item">
                                                <h4>Registros de Auditoría</h4>
                                                <p><strong>Período:</strong> 3 años</p>
                                                <p><strong>Propósito:</strong> Cumplimiento regulatorio y auditorías internas</p>
                                            </div>
                                            
                                            <div className="period-item">
                                                <h4>Backups del Sistema</h4>
                                                <p><strong>Período:</strong> 90 días</p>
                                                <p><strong>Propósito:</strong> Recuperación de datos en caso de fallos del sistema</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Información de Contacto */}
                                    <div className="deletion-item">
                                        <h3>
                                            <i className="fa-solid fa-envelope"></i>
                                            Información de Contacto
                                        </h3>
                                        <div className="contact-info">
                                            <div className="contact-method">
                                                <h4>Correo Electrónico Principal</h4>
                                                <p><a href="mailto:soporte@legacycargo.com">soporte@legacycargo.com</a></p>
                                                <p><strong>Tiempo de respuesta:</strong> 24-48 horas</p>
                                            </div>
                                            
                                            <div className="contact-method">
                                                <h4>Correo Electrónico Alternativo</h4>
                                                <p><a href="mailto:privacidad@legacycargo.com">@legacycargo.com</a></p>
                                                <p><strong>Tiempo de respuesta:</strong> 48-72 horas</p>
                                            </div>
                                            
                                            <div className="contact-method">
                                                <h4>Teléfono de Soporte</h4>
                                                <p><a href="tel:+584142909883">+58 414-2909883</a></p>
                                                <p><strong>Horario:</strong> Lunes a Viernes, 8:30 AM - 5:00 PM (GMT-4)</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Nota Importante */}
                                    <div className="deletion-item important-notice">
                                        <h3>
                                            <i className="fa-solid fa-exclamation-triangle"></i>
                                            Nota Importante
                                        </h3>
                                        <div className="notice-content">
                                            <p>
                                                <strong>Legacy Cargo</strong> se compromete a procesar todas las solicitudes de eliminación 
                                                de datos de manera oportuna y transparente. Una vez eliminados, los datos no pueden ser 
                                                recuperados. Te recomendamos hacer una copia de seguridad de cualquier información importante 
                                                antes de solicitar la eliminación.
                                            </p>
                                            <p>
                                                Esta política cumple con los requisitos de Google Play Store y las regulaciones de protección 
                                                de datos aplicables.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Fecha de Actualización */}
                                    <div className="deletion-item">
                                        <div className="update-info">
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
            </div>
        </>
    )
} 