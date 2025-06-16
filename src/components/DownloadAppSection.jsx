import Image from 'next/image';
import Link from 'next/link';

const DownloadAppSection = () => {
  const features = [
    'Seguimiento en tiempo real',
    'Gestión de documentos',
    'Notificaciones push',
    'Calculadora de costos',
  ];

  return (
    <section className="w-full flex justify-center items-center py-8 px-2 md:py-16 bg-primary rounded-3xl mt-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
        {/* Texto y botones */}
        <div className="flex-1 text-white max-w-xl w-full">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 md:mb-4">
            Gestiona tus envíos de manera más eficiente
          </h1>
          <h2 className="text-lg xs:text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            La app de Legacy Cargo
          </h2>
          <p className="text-base xs:text-lg md:text-xl mb-4 md:mb-6 opacity-90">
            Consulta, rastrea y paga todo en un solo lugar. Disponible para iOS y Android.
          </p>
          <ul className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
            {features.map((f, i) => (
              <li key={i} className="bg-white/10 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs xs:text-sm md:text-base border border-white/20">
                {f}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <Link href="https://apps.apple.com">
              <Image
                src="/assets/img/app/app-store-badge.svg"
                alt="Download on App Store"
                width={140}
                height={44}
                className="hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
            <Link href="https://play.google.com">
              <Image
                src="/assets/img/app/google-play-badge.png"
                alt="Get it on Google Play"
                width={140}
                height={44}
                className="hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>
        </div>
        {/* Mockup de la app */}
        <div className="flex-1 flex justify-center items-center w-full mt-8 md:mt-0">
          <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-4 max-w-[220px] xs:max-w-[260px] sm:max-w-xs md:max-w-sm w-full">
            <Image
              src="/assets/img/app/app-preview.png"
              alt="App Preview"
              width={220}
              height={440}
              className="rounded-xl object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection; 