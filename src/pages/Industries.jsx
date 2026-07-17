import {
  IMAGES,
  INDUSTRIES,
  FLEET_BENEFITS,
  CASE_STUDIES,
  SPEC_ROWS,
  CONTACT_INFO,
} from "../data";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function Hero() {
  return (
    <section className="relative flex h-[70vh] items-center overflow-hidden bg-carbon-gray">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${IMAGES.industriesHero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-gray via-carbon-gray/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block bg-industrial-green px-3 py-1 font-label-bold text-label-bold tracking-widest text-white">
            ENGINEERED FOR PERFORMANCE
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg leading-tight text-white">
            Driving onwards, upwards, forwards.
          </h1>
          <p className="mb-8 font-body-lg text-body-lg text-surface-variant">
            Breaking boundaries and moving forwards on a pathway of change.
            Embracing the new to accelerate progress in every industrial sector.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded bg-performance-red px-6 py-4 font-label-bold text-label-bold text-white transition-all hover:brightness-110 sm:px-8">
              EXPLORE SOLUTIONS <Icon name="arrow_forward" />
            </button>
            <button className="rounded border border-white/30 px-6 py-4 font-label-bold text-label-bold text-white transition-all hover:bg-white/10 sm:px-8">
              TECHNICAL TRAINING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorGrid() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <h2 className="mb-2 font-headline-lg text-headline-lg">Industry Solutions</h2>
          <p className="max-w-xl font-body-md text-on-surface-variant">
            Precision-engineered lubricants and fluids designed to meet the
            rigorous demands of global industries.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 font-label-bold text-industrial-green hover:underline"
        >
          VIEW ALL INDUSTRIES <Icon name="open_in_new" />
        </a>
      </div>

      <div className="grid h-[600px] grid-cols-1 gap-gutter md:h-[700px] md:grid-cols-4 md:grid-rows-2">
        {INDUSTRIES.map((item) => (
          <div
            key={item.title}
            className={`group relative overflow-hidden rounded border border-outline-variant sector-card ${item.span}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${IMAGES[item.image]}')` }}
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div
              className={`absolute bottom-0 left-0 ${
                item.size === "lg" || item.size === "md" ? "p-8" : "p-6"
              }`}
            >
              <h3 className="mb-1 font-headline-md text-headline-md text-white">
                {item.title}
              </h3>
              {item.desc && (
                <p className="mb-4 max-w-sm font-body-sm text-surface-variant">
                  {item.desc}
                </p>
              )}
              <button
                className={`flex items-center gap-1 font-label-bold text-white transition-transform group-hover:translate-x-2 ${
                  item.size === "sm" ? "text-[12px]" : ""
                }`}
              >
                {item.cta}{" "}
                <Icon
                  name="chevron_right"
                  className={item.size === "sm" ? "text-[16px]" : ""}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FleetHub() {
  return (
    <section className="overflow-hidden bg-surface-subtle">
      <div className="mx-auto grid max-w-container-max items-center gap-16 px-margin-mobile py-section-gap md:grid-cols-2 md:px-margin-desktop">
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-industrial-green/10 blur-3xl" />
          <img
            src={IMAGES.fleet}
            alt="Fleet management"
            className="relative z-10 w-full rounded-lg border border-outline-variant shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 z-20 hidden rounded bg-white p-6 shadow-xl border border-outline-variant lg:block">
            <div className="mb-2 flex items-center gap-4">
              <Icon
                name="analytics"
                className="rounded bg-primary-container/20 p-2 text-industrial-green"
              />
              <div>
                <p className="text-[12px] font-label-bold text-on-surface-variant">
                  EFFICIENCY GAIN
                </p>
                <p className="font-headline-md text-headline-md text-industrial-green">
                  +24.8%
                </p>
              </div>
            </div>
            <p className="text-[10px] text-outline">
              Real-time fleet monitoring metrics
            </p>
          </div>
        </div>

        <div>
          <span className="mb-4 block font-label-bold tracking-widest text-industrial-green">
            FLEETMASTERS PLATFORM
          </span>
          <h2 className="mb-6 font-headline-lg text-headline-lg">
            Master your fleet’s performance.
          </h2>
          <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
            Castrol’s dedicated content hub designed to accelerate Commercial
            Vehicle Fleet Managers personal and fleet performance. Real-time
            data, predictive maintenance, and optimized fuel efficiency.
          </p>
          <ul className="mb-10 space-y-4">
            {FLEET_BENEFITS.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <Icon name="check_circle" className="mt-1 text-industrial-green" />
                <div>
                  <h4 className="font-label-bold">{b.title}</h4>
                  <p className="text-body-sm text-on-surface-variant">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="rounded bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-white transition-all hover:shadow-lg">
            ENTER THE HUB
          </button>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <h2 className="mb-12 text-center font-headline-lg text-headline-lg">
        Technical Case Studies
      </h2>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {CASE_STUDIES.map((c) => (
          <div
            key={c.title}
            className="flex flex-col rounded border border-outline-variant bg-white p-8 transition-all duration-300 hover:shadow-lg"
          >
            <span className="mb-4 text-[12px] font-label-bold uppercase tracking-widest text-performance-red">
              {c.tag}
            </span>
            <h3 className="mb-4 font-headline-md text-headline-md">{c.title}</h3>
            <p className="mb-8 flex-grow font-body-md text-on-surface-variant">
              {c.desc}
            </p>
            <div className="flex items-center justify-between border-t border-outline-variant pt-6">
              <div className="flex items-center gap-2">
                <Icon name={c.icon} className="text-outline" />
                <span className="font-label-bold text-body-sm">{c.linkLabel}</span>
              </div>
              <a href="#" className="text-industrial-green material-symbols-outlined">
                {c.action}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpecsTable() {
  return (
    <section className="bg-inverse-surface py-section-gap text-white">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="font-headline-lg text-headline-lg">
            Product Specifications Overview
          </h2>
          <div className="flex gap-4">
            <button className="rounded border border-white/20 bg-white/10 px-4 py-2 text-body-sm transition-all hover:bg-white/20">
              Filter: Synthetic
            </button>
            <button className="rounded border border-white/20 bg-white/10 px-4 py-2 text-body-sm transition-all hover:bg-white/20">
              Export CSV
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded border border-white/10">
          <table className="w-full border-collapse font-table-data text-table-data text-left">
            <thead>
              <tr className="border-b border-white/10 bg-carbon-gray">
                {["Product Name", "Viscosity @ 40°C", "Flash Point", "Standard Compliance", "Application"].map(
                  (h) => (
                    <th
                      key={h}
                      className="p-4 font-bold uppercase tracking-wider text-white/60"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {SPEC_ROWS.map((row, i) => (
                <tr
                  key={row.name}
                  className={`transition-colors hover:bg-white/10 ${
                    i % 2 === 1 ? "bg-white/5" : "hover:bg-white/5"
                  }`}
                >
                  <td className="p-4 font-bold">{row.name}</td>
                  <td className="p-4">{row.viscosity}</td>
                  <td className="p-4">{row.flash}</td>
                  <td className="p-4">
                    <span className="rounded bg-industrial-green/20 px-2 py-1 text-industrial-green">
                      {row.standard}
                    </span>
                  </td>
                  <td className="p-4">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid gap-20 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-headline-lg text-headline-lg">
            Technical Consultation
          </h2>
          <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">
            Our global team of technical engineers is ready to help you optimize
            your operations. Reach out for product selection assistance or site
            analysis requests.
          </p>
          <div className="space-y-8">
            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-surface-container">
                  <Icon name={c.icon} className="text-industrial-green" />
                </div>
                <div>
                  <p className="font-label-bold">{c.label}</p>
                  <p className="font-body-md text-on-surface-variant">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-outline-variant bg-white p-8 shadow-sm md:p-12">
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-on-surface-variant">
                  First Name
                </label>
                <input
                  className="rounded border border-border-muted px-4 py-3 focus:border-industrial-green focus:ring-industrial-green"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-on-surface-variant">
                  Last Name
                </label>
                <input
                  className="rounded border border-border-muted px-4 py-3 focus:border-industrial-green focus:ring-industrial-green"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">
                Business Email
              </label>
              <input
                type="email"
                className="rounded border border-border-muted px-4 py-3 focus:border-industrial-green focus:ring-industrial-green"
                placeholder="john.doe@enterprise.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">
                Primary Industry
              </label>
              <select className="rounded border border-border-muted px-4 py-3 focus:border-industrial-green focus:ring-industrial-green">
                <option>Automotive</option>
                <option>Marine</option>
                <option>Industrial Manufacturing</option>
                <option>Aerospace</option>
                <option>Renewables</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-on-surface-variant">
                Technical Inquiry
              </label>
              <textarea
                rows="4"
                className="rounded border border-border-muted px-4 py-3 focus:border-industrial-green focus:ring-industrial-green"
                placeholder="How can we assist your technical operations?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-industrial-green py-4 font-label-bold text-label-bold text-white shadow-md transition-all hover:bg-primary"
            >
              SEND INQUIRY
            </button>
            <p className="text-center text-[12px] text-outline">
              By submitting, you agree to our Privacy Statement and Cookie Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Industries() {
  return (
    <main className="pt-20">
      <Hero />
      <SectorGrid />
      <FleetHub />
      <CaseStudies />
      <SpecsTable />
      <ContactSection />
    </main>
  );
}
