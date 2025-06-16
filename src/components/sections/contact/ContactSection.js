import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section-22">
      <div className="container">
        <div className="contact-form-items">
          <div className="title text-center">
            <h2 className="wow fadeInUp">Contactanos</h2>
          </div>
          <form action="contact.php" id="contact-form" method="POST">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                  />
                  <div className="icon">
                    <i className="fa-classic fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    id="name12"
                    placeholder="Apellido"
                  />
                  <div className="icon">
                    <i className="fa-classic fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Teléfono"
                  />
                  <div className="icon">
                    <i className="fa-classic fa-phone" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="email"
                    id="email3"
                    placeholder="Correo electrónico"
                  />
                  <div className="icon">
                    <i className="fa-classic fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="¿Comó podemos ayudarte?"
                    defaultValue={""}
                  />
                  <div className="icon">
                    <i className="fa-sharp fa-light fa-pencil" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                <button type="submit" className="theme-btn w-100">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
