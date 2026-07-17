import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

const CARDS = [
  {
    title: "Business Customers",
    desc: "Optimising efficiency, reliability and costs through precision-engineered lubricants for aerospace, automotive, and industrial manufacturing.",
    cta: "ENTER INDUSTRIAL PORTAL",
    icon: "open_in_new",
    image: IMAGES.business,
  },
  {
    title: "Motorists",
    desc: "High-quality oils, fluids, and technical services tailored to meet the exacting needs of every modern driver and engine type.",
    cta: "VIEW CONSUMER OILS",
    icon: "directions_car",
    image: IMAGES.motorists,
  },
];

export default function PathSelection() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
          Engineered Solutions for Every Journey
        </h2>
        <div className="mx-auto h-1.5 w-20 bg-industrial-green" />
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="group relative h-[450px] overflow-hidden border border-outline-variant bg-white"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${card.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-safety-white md:p-10">
              <h3 className="mb-4 font-headline-md text-headline-md">
                {card.title}
              </h3>
              <p className="mb-6 max-w-md font-body-md text-body-md text-surface-variant opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {card.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-primary-fixed pb-1 font-label-bold text-label-bold text-primary-fixed transition-colors hover:border-safety-white hover:text-safety-white"
              >
                {card.cta} <Icon name={card.icon} className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
