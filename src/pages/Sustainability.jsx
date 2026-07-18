import {
  IMAGES,
  SUSTAIN_PILLARS,
  SUSTAIN_ECO_PRODUCTS,
  SUSTAIN_IMPACT,
} from "../data";

function Icon({ name, className = "", filled = false }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      data-icon={name}
    >
      {name}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative flex h-[819px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url('${IMAGES.sustainabilityHero}')` }}
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl border-l-8 border-industrial-green bg-surface/90 p-10 shadow-2xl backdrop-blur-md">
          <span className="mb-4 block font-label-bold text-label-bold uppercase tracking-widest text-industrial-green">
            Velocity Industrial Initiative
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg leading-tight text-on-surface">
            PATH360: Engineering a Greener Future
          </h1>
          <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
            Redefining lubrication through technical mastery and environmental
            responsibility. Our commitment to circular performance and carbon
            reduction.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-on-primary shadow-lg transition-all hover:opacity-90">
              Download Impact Report <Icon name="download" />
            </button>
            <button className="rounded border-2 border-industrial-green px-8 py-4 font-label-bold text-label-bold text-industrial-green transition-all hover:bg-industrial-green hover:text-on-primary">
              Our Method
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const { carbon, bio } = SUSTAIN_PILLARS;
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
          Core Sustainability Pillars
        </h2>
        <div className="mx-auto h-1 w-24 bg-industrial-green" />
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 flex flex-col justify-between rounded-lg border border-outline-variant p-8 transition-all hover:border-industrial-green md:col-span-8">
          <div>
            <div className="mb-6 flex items-start justify-between">
              <Icon name="co2" className="text-4xl text-industrial-green" />
              <span className="rounded-full bg-primary-container px-3 py-1 font-label-bold text-on-primary-container">
                Primary Goal
              </span>
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md">
              Decarbonizing Industrial Operations
            </h3>
            <p className="mb-8 max-w-xl font-body-md text-on-surface-variant">
              Achieving Net Zero across Scope 1 and 2 by 2035 through
              high-efficiency synthetic formulations that reduce mechanical
              friction and energy consumption by up to 15%.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-outline-variant pt-8">
            {carbon.stats.map((s) => (
              <div key={s.label}>
                <div className="font-bold font-headline-md text-industrial-green">
                  {s.value}
                </div>
                <div className="font-label-bold text-body-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative col-span-12 flex flex-col justify-between overflow-hidden rounded-lg bg-industrial-green p-8 text-on-primary md:col-span-4">
          <Icon
            name="recycling"
            className="absolute -bottom-4 -right-4 text-8xl opacity-10"
          />
          <div>
            <Icon name="delete_sweep" className="mb-6 text-4xl" />
            <h3 className="mb-4 font-headline-md text-headline-md">
              Circular Lubrication
            </h3>
            <p className="font-body-sm opacity-90">
              Eliminating waste through advanced re-refining processes and 100%
              recyclable packaging solutions.
            </p>
          </div>
          <ul className="mt-8 space-y-3">
            {["Zero-Waste-to-Landfill", "PCR Packaging", "Lifecycle Management"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-sm" /> {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="col-span-12 rounded-lg border border-outline-variant bg-surface-container-low p-8 transition-all hover:shadow-md md:col-span-4">
          <Icon name="eco" className="mb-6 text-4xl text-industrial-green" />
          <h3 className="mb-4 font-headline-md text-headline-md">Bio-Based Mastery</h3>
          <p className="mb-6 font-body-sm text-on-surface-variant">
            Substituting petroleum bases with high-performance renewable esters
            without compromising technical specs.
          </p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-outline-variant">
            <div className="h-full w-3/4 bg-industrial-green" />
          </div>
          <p className="mt-2 text-right font-label-bold text-industrial-green">
            {bio.percent} Portfolio Integration
          </p>
        </div>

        <div className="col-span-12 flex flex-col overflow-hidden rounded-lg border border-outline-variant bg-white md:col-span-8 md:flex-row">
          <div className="w-full overflow-hidden md:w-1/2">
            <div
              className="h-64 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105 md:h-full"
              style={{ backgroundImage: `url('${IMAGES.sustainWater}')` }}
            />
          </div>
          <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
            <h3 className="mb-4 font-headline-md text-headline-md">Water Security</h3>
            <p className="mb-6 font-body-sm text-on-surface-variant">
              Our biodegradable hydraulic fluids are designed for sensitive
              environments, preventing aquatic toxicity in offshore and forestry
              applications.
            </p>
            <a
              className="flex items-center gap-1 font-label-bold text-industrial-green hover:underline"
              href="#"
            >
              Read Case Study <Icon name="arrow_forward" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoProducts() {
  return (
    <section className="bg-surface-subtle py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
              The Eco-Solutions Range
            </h2>
            <p className="text-on-surface-variant">
              Precision-engineered lubricants that prove sustainability and
              extreme performance aren't mutually exclusive.
            </p>
          </div>
          <button className="border-b-2 border-industrial-green pb-1 font-label-bold text-industrial-green">
            View Full Technical Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {SUSTAIN_ECO_PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden border border-outline-variant bg-white transition-all hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${IMAGES[p.image]}')` }}
                />
                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-sm bg-white/90 px-3 py-1 font-label-bold text-industrial-green backdrop-blur">
                  <Icon name={p.badgeIcon} className="text-sm" filled />
                  {p.badgeText}
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-2 font-headline-md text-headline-md">{p.title}</h4>
                <p className="mb-6 text-body-sm text-on-surface-variant">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-label-bold text-industrial-green">{p.grade}</span>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-industrial-green text-industrial-green transition-colors hover:bg-industrial-green hover:text-white">
                    <Icon name="add" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactTable() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="overflow-hidden rounded-lg border border-outline-variant bg-white">
        <div className="flex items-center justify-between bg-carbon-gray p-6 text-white">
          <h3 className="font-headline-md text-headline-md">Impact Goals Tracking</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-industrial-green" />
              <span className="text-xs">On Track</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-performance-red" />
              <span className="text-xs">Needs Focus</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left font-table-data text-table-data">
            <thead className="border-b border-outline-variant bg-surface-container">
              <tr>
                {["Indicator", "Baseline (2020)", "Current State", "2030 Goal", "Status"].map((h) => (
                  <th
                    key={h}
                    className="p-4 font-label-bold uppercase tracking-wider text-on-surface"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {SUSTAIN_IMPACT.map((row, i) => (
                <tr
                  key={row.indicator}
                  className={`transition-colors hover:bg-surface-subtle ${
                    i % 2 === 1 ? "bg-surface-subtle/30" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-bold text-on-surface">{row.indicator}</td>
                  <td className="p-4">{row.baseline}</td>
                  <td className="p-4">{row.current}</td>
                  <td className="p-4">{row.goal}</td>
                  <td className="p-4">
                    <span
                      className={`flex items-center gap-1 font-bold ${row.statusClass}`}
                    >
                      <Icon name={row.statusIcon} className="text-sm" />
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col items-center gap-10 rounded-lg bg-inverse-surface p-10 md:flex-row">
        <div className="w-full md:w-1/3">
          <div
            className="aspect-square w-full rounded-lg bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url('${IMAGES.sustainReport}')` }}
          />
        </div>
        <div className="w-full text-surface md:w-2/3">
          <h2 className="mb-6 font-headline-lg text-headline-lg">
            Transparency Matters.
          </h2>
          <p className="mb-8 font-body-lg text-surface-variant">
            Access our full MSDS/PDS documentation and our comprehensive PATH360
            Sustainability Disclosure. We believe that real change starts with
            technical honesty and verified data.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="flex items-center gap-2 rounded bg-primary-fixed px-8 py-3 font-label-bold text-label-bold text-on-primary-fixed hover:opacity-90"
              href="#"
            >
              Download 2023 Report (PDF) <Icon name="picture_as_pdf" />
            </a>
            <a
              className="rounded border border-surface-variant px-8 py-3 font-label-bold text-label-bold text-surface transition-colors hover:bg-surface hover:text-on-surface"
              href="#"
            >
              Technical Training
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Sustainability() {
  return (
    <main>
      <Hero />
      <Pillars />
      <EcoProducts />
      <ImpactTable />
      <CTA />
    </main>
  );
}
