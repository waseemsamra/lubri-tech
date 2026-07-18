import { IMAGES, SERVICE_STATS, SERVICE_CARDS, SERVICE_PROTOCOLS } from "../data";
function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} data-icon={name}>
      {name}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative flex h-[600px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.srvHero}')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded-sm bg-primary px-3 py-1 font-label-bold text-label-bold uppercase tracking-widest text-white">
            Industrial Mastery
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg text-white">
            Optimizing Operational{" "}
            <span className="text-primary-fixed">Reliability</span> Through Technical Precision
          </h1>
          <p className="mb-8 max-w-xl font-body-lg text-body-lg text-surface-variant">
            Our comprehensive technical services go beyond the bottle. We provide
            the data, training, and strategic plant audits required to ensure your
            high-stakes machinery operates at peak efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-white shadow-lg transition-colors hover:bg-primary">
              Request Consultation <Icon name="arrow_forward" />
            </button>
            <button className="rounded border border-white px-8 py-4 font-label-bold text-label-bold text-white transition-colors hover:bg-white/10">
              Our Service Standards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {SERVICE_STATS.map((s) => (
          <div key={s.value} className={`flex flex-col justify-between p-8 ${s.class}`}>
            <Icon
              name={s.icon}
              className={`mb-4 text-4xl ${s.class.includes("industrial-green") ? "" : "text-primary"}`}
            />
            <div>
              <h3 className="mb-2 font-headline-md text-headline-md">{s.value}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCards() {
  return (
    <section className="border-y border-outline-variant bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <h2 className="mb-4 font-headline-lg text-headline-lg">
            Precision Services &amp; Solutions
          </h2>
          <div className="mb-6 h-1 w-20 bg-primary" />
          <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            Our engineering team delivers hands-on support and data-driven
            insights to minimize friction and maximize throughput across your
            entire facility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.title}
              className="group border border-border-muted bg-white transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={IMAGES[card.image]}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Icon name={card.icon} className="text-primary" />
                  <span className="font-label-bold text-label-bold uppercase tracking-wider text-tertiary">
                    {card.tag}
                  </span>
                </div>
                <h3 className="mb-3 font-headline-md text-headline-md">{card.title}</h3>
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary transition-all hover:gap-3"
                >
                  LEARN MORE <Icon name="chevron_right" className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProtocolsTable() {
  return (
    <section className="mx-auto max-w-container-max overflow-x-auto px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-12">
        <h2 className="mb-4 font-headline-lg text-headline-lg">
          Service Response Protocols
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Our service commitment timelines and technical thresholds for
          industrial engagement.
        </p>
      </div>

      <table className="w-full border-collapse border border-outline-variant text-left">
        <thead>
          <tr className="bg-carbon-gray text-white">
            {["Service Type", "Response Threshold", "Deliverable", "Typical Cadence"].map((h) => (
              <th key={h} className="border-r border-outline p-4 font-label-bold text-label-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-table-data text-table-data">
          {SERVICE_PROTOCOLS.map((row) => (
            <tr
              key={row.type}
              className={`border-b border-outline-variant ${
                row.alt ? "bg-safety-white" : "bg-surface-subtle"
              }`}
            >
              <td className="border-r border-outline-variant p-4 font-semibold">
                {row.type}
              </td>
              <td className={`border-r border-outline-variant p-4 ${row.thresholdClass || ""}`}>
                {row.threshold}
              </td>
              <td className="border-r border-outline-variant p-4">{row.deliverable}</td>
              <td className="p-4">{row.cadence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col items-center justify-between gap-8 rounded-sm bg-inverse-surface p-12 text-surface lg:flex-row lg:p-16">
        <div className="max-w-xl">
          <h2 className="mb-4 font-headline-lg text-headline-lg">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant">
            Speak with an application engineer today to schedule a preliminary
            plant walk-through.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
          <button className="rounded bg-primary px-8 py-4 font-label-bold text-label-bold text-white shadow-lg transition-opacity hover:opacity-90">
            Book a Plant Audit
          </button>
          <button className="rounded bg-white/10 px-8 py-4 font-label-bold text-label-bold text-white transition-colors hover:bg-white/20">
            Download Capabilities PDF
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Hero />
      <Stats />
      <ServiceCards />
      <ProtocolsTable />
      <CTA />
    </main>
  );
}
