import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const GL4_POINTS = [
  "Safe for copper, bronze, and brass synchros",
  "Optimized friction coefficient for shifting",
];

const GL5_BOXES = [
  { label: "Max Load", desc: "High sliding velocity resistance" },
  { label: "Additive Vol.", desc: "2x EP agents vs GL-4 specs" },
];

const SPEC_ROWS = [
  {
    characteristic: "Typical Spec",
    mtf: "API GL-4 / OEM Specific",
    diff: "API GL-5 / GL-6",
    transfer: "Dexron VI / Multi-Vehicle ATF",
  },
  {
    characteristic: "Primary Goal",
    mtf: "Shift Quality & Synchro Timing",
    diff: "Gear Tooth Pitting Protection",
    transfer: "Viscometric Stability",
  },
  {
    characteristic: "Sulfur Content",
    mtf: "Controlled (Low-Moderate)",
    diff: "High (Reactive)",
    diffEmphasis: true,
    transfer: "Ultra-Low",
  },
  {
    characteristic: "Viscosity Index",
    mtf: "High (Stability over temp)",
    diff: "Very High (Shear stable)",
    transfer: "Moderate",
  },
];

const ARCHITECTURES = [
  {
    image: IMAGES.gearManual,
    title: "Manual Transmissions",
    desc: "Focus on friction modification. Our lubricants provide the exact coefficient of friction required for synchronizer engagement without compromising gear tooth longevity.",
    tags: ["MTF-100", "Synthetic Blend"],
  },
  {
    image: IMAGES.gearAuto,
    title: "Automatic & CVT",
    desc: "Multi-purpose protection for torque converters and planetary gears. Velocity fluids exceed OEM requirements for oxidation resistance and foam prevention.",
    tags: ["ATF-ULTRA", "Full Synthetic"],
  },
  {
    image: IMAGES.gearAxle,
    title: "Heavy Duty Axles",
    desc: "Specifically formulated for hypoid protection. Resistant to shock-loading and extreme pressure common in vocational and off-road applications.",
    tags: ["AXLE-HP", "LS Ready"],
  },
];

function Hero() {
  return (
    <section className="relative mb-section-gap flex h-[500px] items-center overflow-hidden rounded-xl bg-carbon-gray">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${IMAGES.gearHero}')` }}
        />
      </div>
      <div className="relative z-10 max-w-2xl px-12">
        <span className="mb-4 inline-block rounded bg-industrial-green px-3 py-1 font-label-bold text-[10px] uppercase tracking-widest text-white">
          Technical Advisory
        </span>
        <h1 className="mb-6 font-display-lg text-display-lg text-white">
          Mastering Gear & Drivetrain Lubrication
        </h1>
        <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-surface-variant">
          Unlocking shift quality, hypoid protection, and longevity through
          precise chemical engineering and rigorous specification adherence.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded bg-industrial-green px-8 py-3 font-label-bold text-white">
            View Product Catalog <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SpecsBento() {
  return (
    <section className="mb-section-gap">
      <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <h2 className="mb-2 font-headline-lg text-headline-lg text-on-surface">
            The Specification Divide
          </h2>
          <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">
            Understanding the critical chemical differences between API GL-4 and
            GL-5 standards to prevent component failure.
          </p>
        </div>
        <div className="flex items-center gap-4 font-label-bold text-industrial-green">
          <span>Scroll for Detailed Analysis</span>
          <Icon name="expand_more" className="animate-bounce" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-component-gap md:grid-cols-12">
        <div className="flex flex-col justify-between rounded-lg border border-outline-variant bg-white p-8 transition-shadow hover:shadow-sm md:col-span-5">
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container">
              <Icon name="settings_input_component" className="text-industrial-green" />
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md">API GL-4: Syncromesh Guard</h3>
            <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
              Designed primarily for manual transmissions with synchronizers.
              Features moderate levels of Extreme Pressure (EP) additives to
              protect without corroding yellow metal components.
            </p>
            <ul className="mb-8 space-y-3">
              {GL4_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Icon name="check_circle" className="mt-1 text-sm text-industrial-green" />
                  <span className="text-body-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded bg-surface-subtle p-4 text-body-sm italic">
            "Using GL-5 in a GL-4 application can lead to synchronizer slippage
            and chemical etching."
          </div>
        </div>

        <div className="flex flex-col gap-8 rounded-lg bg-industrial-green p-8 text-white md:col-span-7 md:flex-row">
          <div className="flex-1">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <Icon name="precision_manufacturing" className="text-white" />
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md">API GL-5: Hypoid Power</h3>
            <p className="mb-6 font-body-md text-body-md opacity-90">
              Engineered for high-offset hypoid gears in differentials and
              heavy-duty axles. Contains significant sulfur-phosphorus EP
              packages for boundary lubrication under extreme sliding loads.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {GL5_BOXES.map((b) => (
                <div key={b.label} className="rounded bg-white/5 p-4">
                  <span className="mb-1 block font-label-bold">{b.label}</span>
                  <span className="text-body-sm">{b.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded md:w-1/3">
            <img
              src={IMAGES.gearHypoid}
              alt="Hypoid gear set cross-section"
              className="h-full w-full object-cover brightness-125 grayscale"
            />
          </div>
        </div>

        <div className="overflow-x-auto md:col-span-12">
          <table className="w-full border-collapse border border-outline-variant text-left">
            <thead>
              <tr className="bg-carbon-gray text-white">
                <th className="border-r border-white/10 p-4 font-label-bold text-label-bold">
                  Characteristic
                </th>
                <th className="border-r border-white/10 p-4 font-label-bold text-label-bold">
                  Manual Transmission (MTF)
                </th>
                <th className="border-r border-white/10 p-4 font-label-bold text-label-bold">
                  Hypoid Differentials
                </th>
                <th className="p-4 font-label-bold text-label-bold">
                  Transfer Cases
                </th>
              </tr>
            </thead>
            <tbody className="bg-white font-table-data text-table-data">
              {SPEC_ROWS.map((row, i) => (
                <tr
                  key={row.characteristic}
                  className={`border-b border-outline-variant hover:bg-surface-subtle ${
                    i % 2 === 1 ? "bg-surface-subtle" : ""
                  }`}
                >
                  <td className="p-4 font-semibold">{row.characteristic}</td>
                  <td className="p-4">{row.mtf}</td>
                  <td className={`p-4 ${row.diffEmphasis ? "text-primary" : ""}`}>
                    {row.diff}
                  </td>
                  <td className="p-4">{row.transfer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Architectures() {
  return (
    <section className="mb-section-gap">
      <h2 className="mb-12 text-center font-headline-lg text-headline-lg">
        Engineered for Specific Architectures
      </h2>
      <div className="grid grid-cols-1 gap-component-gap lg:grid-cols-3">
        {ARCHITECTURES.map((a) => (
          <div
            key={a.title}
            className="group relative overflow-hidden rounded-lg border border-outline-variant bg-white"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h4 className="mb-3 font-headline-md text-headline-md">{a.title}</h4>
              <p className="mb-6 text-body-sm text-on-surface-variant">
                {a.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-surface-container px-2 py-1 text-[10px] font-bold uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mb-section-gap flex flex-col items-center justify-between gap-10 rounded-xl bg-surface-subtle p-margin-desktop md:flex-row">
      <div className="flex-1">
        <h3 className="mb-4 font-headline-lg text-headline-lg">
          Precision Selection Tool
        </h3>
        <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
          Not sure which fluid your fleet needs? Access our Technical Portal to
          cross-reference OEM specifications and environmental operating
          conditions for a tailored recommendation.
        </p>
        <div className="flex gap-4">
          <button className="rounded bg-industrial-green px-8 py-3 font-label-bold text-white">
            Access Portal
          </button>
          <button className="rounded border border-industrial-green px-8 py-3 font-label-bold text-industrial-green">
            Download Spec Sheet
          </button>
        </div>
      </div>
      <div className="w-full rounded-lg border border-outline-variant bg-white p-8 shadow-sm md:w-1/3 aspect-square">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <Icon name="analytics" className="mb-4 text-6xl text-industrial-green" />
          <h5 className="mb-2 font-headline-md text-headline-md">Shift-Quality Index</h5>
          <p className="text-body-sm text-on-surface-variant">
            Our proprietary testing reveals a 22% improvement in gear engagement
            speed with Velocity GL-4 series.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function GearOil() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop pt-20">
      <Hero />
      <SpecsBento />
      <Architectures />
      <CtaSection />
    </main>
  );
}
