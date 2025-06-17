import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

const DownloadAppSection = () => {
  const features = [
    'Seguimiento en tiempo real',
    'Gestión de documentos',
    'Notificaciones push',
    'Calculadora de costos',
  ];

  return (
    <section id="download-app" className="download-app-section">
      <div className="download-app-section__background"></div>
      
      <div className="download-app-section__container">
        <div className="download-app-section__content">
          
          {/* Columna izquierda - Texto y botones */}
          <div className="download-app-section__text-column">
            <h2 className="download-app-section__title">
              Gestiona tus envíos <br className="line-break" />
              de manera más <br className="line-break" />
              eficiente
            </h2>
            <h3 className="download-app-section__subtitle">
              La app de Legacy Cargo
            </h3>
            <p className="download-app-section__description">
              Consulta, rastrea y paga todo en un solo lugar. Disponible para iOS y Android.
            </p>
            
            {/* Features */}
            <ul className="download-app-section__features">
              {features.map((f, i) => (
                <li key={i} className="download-app-section__features-item">
                  {f}
                </li>
              ))}
            </ul>
            
            {/* Botones */}
            <div className="download-app-section__buttons">
              <AppStoreButton dark />
              <PlayStoreButton dark />
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="download-app-section__image-column">
            <div className="download-app-section__image-container">
              <Image
                src="/assets/img/app/app-preview.png"
                width={384}
                height={500}
                quality={100}
                sizes="(max-width: 768px) 90vw, 50vw"
                priority={true}
                alt="App Preview"
                className="download-app-section__image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection; 