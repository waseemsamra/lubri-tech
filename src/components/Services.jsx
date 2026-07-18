import { SERVICES } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: "'FILL' 1" }}
    >
      {name}
    </span>
  );
}

export default function Services() {
  return (
    <section className="bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
              How can we help you?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              MaxDrive’s range of products and technical support is designed to
              ensure your operations run smoothly, sustainably and efficiently.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 font-label-bold text-label-bold text-primary transition-all hover:gap-4"
          >
            EXPLORE ALL SERVICES <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group border border-outline-variant bg-safety-white p-8 transition-colors hover:border-industrial-green"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-surface-container text-primary transition-colors group-hover:bg-industrial-green group-hover:text-safety-white">
                <Icon name={service.icon} />
              </div>
              <h4 className="mb-3 font-headline-md text-headline-md text-on-surface">
                {service.title}
              </h4>
              <p className="mb-6 font-body-sm text-body-sm text-on-surface-variant">
                {service.desc}
              </p>
              <a
                href="#"
                className="font-label-bold text-label-bold text-primary"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
