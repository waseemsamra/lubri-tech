import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const HYDRAULIC_IMAGES = {
  hero: IMAGES.hydraulicHero,
  oxidation: IMAGES.hydraulicOxidation,
};

const APPLICATIONS = [
  { icon: "factory", label: "Manufacturing" },
  { icon: "construction", label: "Construction" },
  { icon: "dining", label: "Mining" },
  { icon: "agriculture", label: "Agriculture" },
];

const COMPARISON_ROWS = [
  {
    attribute: "Viscosity Index (VI)",
    hlp: "95 - 105",
    hvlp: "> 140",
    standard: "ISO 2909",
    hvlpEmphasis: true,
  },
  {
    attribute: "Oxidation Stability",
    hlp: "High (R&O Enhanced)",
    hvlp: "Ultra-High (Thermal Stress)",
    standard: "ASTM D943",
  },
  {
    attribute: "Demulsibility",
    hlp: "< 30 mins",
    hvlp: "< 20 mins",
    standard: "ASTM D1401",
  },
  {
    attribute: "Filterability",
    hlp: "Excellent (Wet/Dry)",
    hvlp: "Critical for Micro-valves",
    standard: "ISO 13357-2",
  },
  {
    attribute: "Shear Stability",
    hlp: "N/A",
    hvlp: "Requirement Met",
    standard: "DIN 51350-6",
    hvlpEmphasis: true,
  },
];

function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full"
          style={{ backgroundImage: `url('${HYDRAULIC_IMAGES.hero}')`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-container-max flex-col justify-center px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block bg-industrial-green px-3 py-1 font-label-bold text-label-bold text-white">
            TECHNICAL ADVISORY 402
          </span>
          <h1 className="mb-6 font-display-lg text-display-lg text-safety-white">
            Optimizing Power Density: The Science of Hydraulic Fluid Selection
          </h1>
          <p className="mb-8 font-body-lg text-body-lg text-surface-variant">
            Comprehensive analysis of HLP and HVLP classifications for industrial
            and mobile hydraulic systems operating under extreme thermal and
            mechanical stress.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded bg-industrial-green px-8 py-4 font-label-bold text-label-bold text-white transition-all hover:shadow-lg">
              Download Technical Specs
            </button>
            <button className="rounded border border-white px-8 py-4 font-label-bold text-label-bold text-white transition-all hover:bg-white/10">
              Consult an Engineer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs() {
  return (
    <div className="border-b border-outline-variant bg-surface-subtle py-4">
      <div className="mx-auto flex items-center gap-2 px-margin-mobile font-label-bold text-label-bold uppercase text-on-surface-variant md:px-margin-desktop">
        <a href="#">Knowledge Base</a>
        <Icon name="chevron_right" className="text-[18px]" />
        <a href="#">Lube Oils</a>
        <Icon name="chevron_right" className="text-[18px]" />
        <span className="text-primary">Hydraulic Systems</span>
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Critical Performance Matrices
        </h2>
        <div className="mt-2 h-1 w-20 bg-industrial-green" />
      </div>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col gap-8 border border-border-muted bg-white p-8 transition-shadow hover:shadow-md md:col-span-2 lg:col-span-8 md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-4 flex items-center gap-3">
              <Icon name="thermometer_gain" className="text-4xl text-industrial-green" />
              <h3 className="font-headline-md text-headline-md">Oxidation & Thermal Stability</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Preventing sludge formation in high-cycle environments. Velocity
              lubricants use advanced R&O (Rust and Oxidation) packages that
              extend drain intervals by up to 300% compared to standard mineral
              oils.
            </p>
          </div>
          <div className="h-64 w-full overflow-hidden rounded bg-surface-subtle md:w-1/2">
            <div
              className="h-full w-full"
              style={{ backgroundImage: `url('${HYDRAULIC_IMAGES.oxidation}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between bg-carbon-gray p-8 text-white md:col-span-2 lg:col-span-4">
          <div>
            <Icon name="speed" className="mb-4 text-4xl text-industrial-green" />
            <h3 className="mb-4 font-headline-md text-headline-md">
              Temperature-Viscosity Behavior
            </h3>
            <p className="font-body-sm text-surface-variant opacity-80">
              HVLP fluids maintain shear stability across extreme temperature
              gradients, ensuring immediate power delivery on cold starts and
              full film strength at peak operating heat.
            </p>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="mb-2 flex justify-between font-label-bold text-label-bold">
              <span>VI Index</span>
              <span className="text-industrial-green">160+ High Shear</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[85%] bg-industrial-green" />
            </div>
          </div>
        </div>

        <div className="border border-border-muted bg-surface-subtle p-8 md:col-span-1 lg:col-span-4">
          <Icon name="shield" className="mb-4 text-4xl text-industrial-green" />
          <h3 className="mb-4 font-headline-md text-headline-md">
            Extreme Pressure Anti-Wear
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Zinc-based (ZDDP) and Zinc-free formulations tailored for
            high-pressure vane and piston pumps to prevent metal-to-metal contact
            during surge loads.
          </p>
        </div>

        <div className="relative overflow-hidden border border-border-muted bg-white p-8 md:col-span-1 lg:col-span-8">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <h3 className="mb-2 font-headline-md text-headline-md">
                Industrial Domain Applications
              </h3>
              <p className="mb-6 max-w-lg font-body-md text-body-md text-on-surface-variant">
                From precision injection molding to massive earth-moving
                construction equipment, hydraulic performance is the pulse of
                productivity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {APPLICATIONS.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center rounded bg-surface p-4 text-center"
                >
                  <Icon name={a.icon} className="mb-2" />
                  <span className="font-label-bold text-label-bold">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="bg-surface-container py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg">
            Classification Comparison: DIN 51524
          </h2>
          <p className="mt-2 text-on-surface-variant">
            Standardized performance data for HLP and HVLP systems.
          </p>
        </div>
        <div className="overflow-x-auto rounded border border-outline-variant bg-white shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-carbon-gray text-white">
                <th className="p-4 font-label-bold text-label-bold uppercase">
                  Attribute
                </th>
                <th className="border-l border-white/10 p-4 font-label-bold text-label-bold uppercase">
                  Type HLP (Industrial)
                </th>
                <th className="border-l border-white/10 p-4 font-label-bold text-label-bold uppercase">
                  Type HVLP (Mobile)
                </th>
                <th className="border-l border-white/10 p-4 font-label-bold text-label-bold uppercase">
                  Test Standard
                </th>
              </tr>
            </thead>
            <tbody className="font-table-data text-table-data text-on-surface-variant">
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.attribute} className={i % 2 === 1 ? "bg-surface-subtle" : ""}>
                  <td className="p-4 font-bold text-on-surface">{row.attribute}</td>
                  <td className="border-l border-outline-variant p-4">{row.hlp}</td>
                  <td
                    className={`border-l border-outline-variant p-4 ${
                      row.hvlpEmphasis ? "font-bold text-primary" : ""
                    }`}
                  >
                    {row.hvlp}
                  </td>
                  <td className="border-l border-outline-variant p-4 italic">
                    {row.standard}
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

function VisualSection() {
  return (
    <section className="relative flex h-[400px] items-center justify-center overflow-hidden bg-on-background">
      <div className="relative z-10 px-6 text-center">
        <h2 className="mb-4 font-display-lg text-display-lg text-white">
          Precision Engineering at Scale
        </h2>
        <p className="mx-auto max-w-2xl font-body-lg text-surface-variant">
          Every drop of Velocity Industrial oil is designed to minimize frictional
          torque and maximize system efficiency.
        </p>
        <button className="mt-8 rounded bg-performance-red px-10 py-4 font-label-bold text-label-bold uppercase tracking-widest text-white shadow-xl transition-colors hover:bg-red-700">
          Request Site Audit
        </button>
      </div>
    </section>
  );
}

function ResourceCards() {
  return (
    <section className="mx-auto grid grid-cols-1 gap-gutter px-margin-mobile py-section-gap md:grid-cols-2 md:px-margin-desktop">
      <div className="flex flex-col justify-between border-l-4 border-industrial-green bg-white p-10 shadow-sm">
        <div>
          <h3 className="mb-4 font-headline-md text-headline-md">
            Mobile Equipment Solutions
          </h3>
          <p className="mb-6 text-on-surface-variant">
            HVLP fluids for excavators, cranes, and forestry equipment. Optimized
            for rapid pressure changes and outdoor temperature extremes.
          </p>
        </div>
        <a
          className="inline-flex items-center font-label-bold text-label-bold text-primary transition-all hover:gap-2"
          href="#"
        >
          VIEW PRODUCT RANGE <Icon name="arrow_forward" className="ml-2" />
        </a>
      </div>
      <div className="flex flex-col justify-between border-l-4 border-performance-red bg-white p-10 shadow-sm">
        <div>
          <h3 className="mb-4 font-headline-md text-headline-md">
            Stationary Industrial Systems
          </h3>
          <p className="mb-6 text-on-surface-variant">
            HLP fluids for indoor plant machinery. Focus on long-life durability,
            air release properties, and superior protection for vane pumps.
          </p>
        </div>
        <a
          className="inline-flex items-center font-label-bold text-label-bold text-primary transition-all hover:gap-2"
          href="#"
        >
          TECHNICAL DATA SHEETS <Icon name="arrow_forward" className="ml-2" />
        </a>
      </div>
    </section>
  );
}

export default function HydraulicOil() {
  return (
    <main>
      <Hero />
      <Breadcrumbs />
      <BentoGrid />
      <ComparisonTable />
      <VisualSection />
      <ResourceCards />
    </main>
  );
}
