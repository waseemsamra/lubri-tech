import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const PILLARS_STATS = [
  { label: "BOILING POINT", value: "+135°C" },
  { label: "FREEZE PROTECT", value: "-40°C" },
  { label: "PUMP LIFE", value: "+40%" },
];

const CHEMISTRY = [
  {
    icon: "science",
    box: "bg-primary-container",
    title: "IAT (Inorganic Additive Technology)",
    desc: "Traditional silicates and phosphates for immediate protection. Fast-acting but requires more frequent service intervals (approx. 2 years).",
  },
  {
    icon: "eco",
    box: "bg-secondary-container",
    title: "OAT (Organic Acid Technology)",
    desc: "Long-life protection using carboxylates. Provides extended service intervals (up to 5+ years) and superior compatibility with aluminum cooling systems.",
  },
  {
    icon: "layers",
    box: "bg-tertiary",
    title: "HOAT (Hybrid Organic Acid Technology)",
    desc: "The best of both worlds. Combines organic acids with a small amount of silicates for rapid passivation and long-term stability.",
  },
];

const SPEC_ROWS = [
  { prop: "Service Life", iat: "30,000 Miles", oat: "150,000 Miles", oatEmphasis: true },
  { prop: "Base Type", iat: "Ethylene Glycol", oat: "Ethylene Glycol" },
  { prop: "Inhibitors", iat: "Silicates", oat: "Carboxylates" },
  { prop: "Compatibility", iat: "Limited", oat: "Wide-spectrum" },
];

const MAINTENANCE = [
  {
    icon: "mixture_med",
    no: "01",
    title: "Optimal Mixing Ratios",
    desc: "For most temperate industrial climates, a 50/50 ratio (Coolant/Deionized Water) is standard. In extreme arctic environments, increase concentration to 60/40 for protection down to -52°C.",
    warning: "Never exceed a 70/30 ratio as it reduces heat transfer capacity.",
    list: null,
    cta: null,
  },
  {
    icon: "event_repeat",
    no: "02",
    title: "Seasonal Audits",
    desc: "Conduct refractometer tests bi-annually. Inspect hoses for \"sweating\" and check the expansion tank for sediment or discoloration which indicates additive depletion.",
    warning: null,
    list: ["Spring Flush", "Fall Concentration Test"],
    cta: null,
  },
  {
    icon: "warning",
    no: "03",
    title: "Compatibility Guard",
    desc: "Mixing OAT and IAT coolants can lead to chemical precipitation (sludge), causing catastrophic radiator failure. Always perform a full system flush before switching technology types.",
    warning: null,
    list: null,
    cta: "Compatibility Matrix PDF",
  },
];

function Hero() {
  return (
    <section className="relative flex h-[500px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.antifreezeHero}
          alt="Heavy-duty industrial engine cooling system"
          className="h-full w-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile text-safety-white md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-sm bg-industrial-green px-3 py-1 font-label-bold text-label-bold text-safety-white">
            TECHNICAL ADVISORY 402
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg">
            Thermal Management & Coolant Technology
          </h1>
          <p className="mb-8 font-body-lg text-body-lg text-surface-variant">
            Engineered for extreme performance. Master the science of heat
            dissipation, corrosion inhibition, and cooling system longevity.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-industrial-green px-8 py-3 font-label-bold text-label-bold text-safety-white">
              Download TDS Cluster
              <Icon name="download" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsBento() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="flex flex-col justify-between border border-outline-variant bg-surface-subtle p-8 md:col-span-8">
          <div>
            <Icon name="thermostat" className="mb-4 text-4xl text-industrial-green" />
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
              Precision Temperature Management
            </h2>
            <p className="mb-6 font-body-md text-on-surface-variant">
              Velocity Industrial coolants are formulated with high-purity
              ethylene glycol and advanced additives to raise boiling points and
              prevent cavitation in high-load industrial engines. Our thermal
              stabilizers maintain efficiency from -40°C to 135°C.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-outline-variant pt-6">
            {PILLARS_STATS.map((s) => (
              <div key={s.label}>
                <p className="font-label-bold text-label-bold text-industrial-green">
                  {s.label}
                </p>
                <p className="font-display-lg text-headline-md">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center bg-carbon-gray p-8 text-safety-white md:col-span-4">
          <h3 className="mb-4 font-headline-md text-headline-md">
            Active Corrosion Shield
          </h3>
          <p className="mb-6 opacity-80 font-body-md">
            Surface-active molecules form a microscopic protective layer on
            radiator fins and engine blocks, neutralizing acids and preventing
            pitting in aluminum, copper, and cast iron components.
          </p>
          <div className="mt-auto">
            <img
              src={IMAGES.antifreezeCorrosion}
              alt="Microscopic metal surface protected by a molecular layer"
              className="mb-4 h-32 w-full rounded-sm object-cover"
            />
            <a
              className="flex items-center gap-1 font-label-bold text-label-bold text-primary-fixed hover:underline"
              href="#"
            >
              LEARN ABOUT INHIBITORS <Icon name="arrow_right_alt" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChemistryDeepDive() {
  return (
    <section className="bg-on-background py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile text-safety-white md:px-margin-desktop">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-8 font-headline-lg text-headline-lg">
              Decoding Coolant Chemistry
            </h2>
            <div className="space-y-8">
              {CHEMISTRY.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className={`h-fit rounded p-3 ${c.box}`}>
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <h4 className="mb-2 font-label-bold text-label-bold uppercase tracking-widest text-primary-fixed">
                      {c.title}
                    </h4>
                    <p className="font-body-md text-surface-variant">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="overflow-hidden rounded-lg bg-surface p-base shadow-xl">
              <div className="bg-carbon-gray p-4">
                <h3 className="font-label-bold text-label-bold text-safety-white">
                  TECHNICAL SPECIFICATION COMPARISON
                </h3>
              </div>
              <table className="w-full zebra-table">
                <thead className="bg-surface-container-high text-on-surface">
                  <tr>
                    <th className="px-4 py-3 text-left font-label-bold text-table-data">
                      PROPERTY
                    </th>
                    <th className="px-4 py-3 text-left font-label-bold text-table-data">
                      IAT
                    </th>
                    <th className="px-4 py-3 text-left font-label-bold text-table-data">
                      OAT
                    </th>
                  </tr>
                </thead>
                <tbody className="font-table-data text-on-surface-variant">
                  {SPEC_ROWS.map((row) => (
                    <tr key={row.prop}>
                      <td className="border-b border-outline-variant px-4 py-3 font-bold">
                        {row.prop}
                      </td>
                      <td className="border-b border-outline-variant px-4 py-3">
                        {row.iat}
                      </td>
                      <td
                        className={`border-b border-outline-variant px-4 py-3 ${
                          row.oatEmphasis ? "font-bold text-industrial-green" : ""
                        }`}
                      >
                        {row.oat}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaintenanceProtocols() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
            Maintenance Protocols
          </h2>
          <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
            Optimizing thermal efficiency requires precise management of
            concentration and seasonal adjustment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {MAINTENANCE.map((m) => (
            <div
              key={m.no}
              className="border border-outline-variant bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex items-start justify-between">
                <Icon name={m.icon} className="text-3xl text-industrial-green" />
                <span className="font-display-lg text-headline-lg opacity-20 text-surface-variant">
                  {m.no}
                </span>
              </div>
              <h4 className="mb-3 font-headline-md text-headline-md">{m.title}</h4>
              <p className="mb-6 font-body-sm text-on-surface-variant">{m.desc}</p>
              {m.warning && (
                <div className="rounded border-l-4 border-industrial-green bg-surface-subtle p-4">
                  <p className="mb-1 text-xs font-label-bold uppercase text-on-surface-variant">
                    Warning
                  </p>
                  <p className="text-xs italic">{m.warning}</p>
                </div>
              )}
              {m.list && (
                <ul className="space-y-2">
                  {m.list.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Icon name="check_circle" className="text-[18px] text-industrial-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {m.cta && (
                <button className="w-full rounded border border-industrial-green py-2 font-label-bold text-label-bold text-industrial-green transition-colors hover:bg-industrial-green hover:text-white">
                  {m.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-carbon-gray py-24">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#009144 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile text-center text-safety-white md:px-margin-desktop">
        <h2 className="mb-4 font-headline-lg text-headline-lg">
          Request a Technical Site Audit
        </h2>
        <p className="mx-auto mb-10 max-w-2xl font-body-lg text-surface-variant">
          Our chemical engineers provide on-site analysis of your cooling systems
          to optimize performance and reduce maintenance overhead.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <button className="rounded bg-industrial-green px-10 py-4 font-label-bold text-label-bold text-lg text-safety-white transition-all hover:brightness-110">
            Schedule Consultation
          </button>
          <button className="rounded border border-safety-white px-10 py-4 font-label-bold text-label-bold text-lg text-safety-white transition-all hover:bg-safety-white hover:text-carbon-gray">
            Technical Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Antifreeze() {
  return (
    <main className="pt-20">
      <Hero />
      <PillarsBento />
      <ChemistryDeepDive />
      <MaintenanceProtocols />
      <CtaSection />
    </main>
  );
}
