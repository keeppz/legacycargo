import React from "react";

export default function ContactInfo2() {
  const locations = [
    {
      title: "Warehouse China",
      address: "No. 3, street store,<br />No. 2, Taojin Road, Dongcheng Town, <br />Siping City (Huada Industrial Park)",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.8236391361644!2d113.47213347088446!3d22.358113206087237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f50.1!3m3!1m2!1s0x3403d5fc5fd51e9f%3A0x1ee6494b6b083e12!2sBabyluxe%20Daily%20Products%20Co.%2CLtd.!5e0!3m2!1ses!2s!4v1715308142750!5m2!1ses!2s",
      icon: "fa-solid fa-building"
    },
    {
      title: "Warehouse EE.UU.",
      address: "6608 NW 82nd Ave, Miami, FL 33166, EE. UU.",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.3634429245659!2d-80.3311651!3d25.834185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f50.1!3m3!1m2!1s0x88d9bbc85a8e2265%3A0xa7165018914c6c99!2s6608%20NW%2082nd%20Ave%2C%20Miami%2C%20FL%2033166%2C%20EE.%20UU.!5e0!3m2!1ses!2s!4v1715307142750!5m2!1ses!2s",
      icon: "fa-solid fa-warehouse"
    },
    {
      title: "Warehouse Panama",
      address: "Zona Libre de Colon, <br />Avenida San Eladio Al lado de Hang Teng, <br />Colón, Colón Province, Panamá",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.4566835292687!2d-79.89235027619695!3d9.345720291716253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f50.1!3m3!1m2!1s0x8fab6dbd75c2fdab%3A0x4ea318b6b7a4b5c2!2sMultibox%20Zona%20Libre%20%7C%20Carga%20Comercial!5e0!3m2!1ses!2s!4v1715045959275!5m2!1ses!2s",
      icon: "fa-solid fa-truck"
    }
  ];

  return (
    <div className="office-locations-section">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-classic fa-arrow-left-long" />
            UBICACIONES
            <i className="fa-classic fa-arrow-right-long" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".4s">
            Nuestras Oficinas y Almacenes
          </h2>
        </div>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-item wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
              <div className="location-card">
                <div className="location-header">
                  <div className="location-icon">
                    <i className={location.icon}></i>
                  </div>
                  <h4 className="location-title">{location.title}</h4>
                </div>
                <div className="map-container">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${location.title}`}
                  ></iframe>
                  <div className="map-overlay">
                    <span>Ver en Google Maps</span>
                  </div>
                </div>
                <div className="location-address">
                  <p dangerouslySetInnerHTML={{ __html: location.address }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
