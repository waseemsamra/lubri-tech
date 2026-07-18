import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const PRODUCT_MATRIX = [
  {
    series: "Velocity Ultra 5W-30",
    grade: "5W-30",
    drain: "100,000",
    saps: "ULTRA LOW",
    approvals: "MB 228.51, MAN M3677",
  },
  {
    series: "Velocity Max 10W-40",
    grade: "10W-40",
    drain: "80,000",
    saps: "LOW",
    approvals: "Scania LDF-4, Volvo VDS-4.5",
  },
  {
    series: "Velocity Fleet 15W-40",
    grade: "15W-40",
    drain: "60,000",
    saps: "MID",
    approvals: "Cummins CES 20086, Mack EOS-4.5",
  },
  {
    series: "Velocity Eco-Heavy 0W-20",
    grade: "0W-20",
    drain: "75,000",
    saps: "ULTRA LOW",
    approvals: "Iveco 18-1804 CLASSE TVL-LS",
  },
];

const PROTECTION_STEPS = [
  {
    n: "01",
    title: "Viscosity Stability Control",
    desc: "Prevents oil shearing under extreme mechanical stress, ensuring the lubricant film remains intact even at peak torque.",
  },
  {
    n: "02",
    title: "Advanced Soot Dispersants",
    desc: "Keeps harmful combustion particles in suspension to prevent sludge formation and abrasive wear on camshafts.",
  },
  {
    n: "03",
    title: "TBN Retention Enhancement",
    desc: "Maintains acid-neutralizing capabilities over the full extended drain period, protecting against chemical corrosion.",
  },
];

function Hero() {
  return (
    <section className="mt-12 mb-section-gap grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
      <div className="md:col-span-6">
        <span className="font-label-bold text-label-bold uppercase tracking-widest text-industrial-green">
          Performance Advisory
        </span>
        <h1 className="mb-6 mt-4 font-display-lg text-display-lg leading-tight">
          Mastering Long-Haul Reliability
        </h1>
        <p className="mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          Engineered for the demands of modern commercial fleets. Velocity
          Heavy-Duty oils deliver 100,000km drain intervals and significant fuel
          savings while maintaining peak DPF health.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg bg-primary px-8 py-4 font-label-bold text-label-bold text-on-primary transition-all hover:bg-primary-container">
            View Technical Specs
          </button>
          <button className="rounded-lg border border-industrial-green px-8 py-4 font-label-bold text-label-bold text-industrial-green transition-all hover:bg-surface-container">
            Fleet Consultation
          </button>
        </div>
      </div>
      <div className="relative h-[500px] md:col-span-6">
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-outline-variant bg-surface-container shadow-sm">
          <img
            src={IMAGES.fleet}
            alt="Heavy-duty commercial truck on a highway during golden hour"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="mb-section-gap">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="max-w-lg font-headline-lg text-headline-lg">
          Advanced Lubrication for Fleet Continuity
        </h2>
        <div className="font-label-bold text-label-bold text-on-surface-variant">
          TECHNICAL MODULES V2.4
        </div>
      </div>
      <div className="grid grid-cols-1 gap-gutter md:h-[600px] md:grid-cols-4">
        <div className="bento-card flex flex-col justify-between border border-outline-variant bg-surface-subtle p-10 md:col-span-2 md:row-span-2">
          <div>
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Icon name="timer" className="text-safety-white" />
            </div>
            <h3 className="mb-4 font-headline-md text-headline-md">
              100,000km Drain Intervals
            </h3>
            <p className="mb-6 font-body-md text-on-surface-variant">
              Our flagship synthetic formulations resist oxidation at high
              temperatures, allowing fleet managers to safely double typical
              service windows without compromising engine protection.
            </p>
          </div>
          <div className="mt-auto h-48 overflow-hidden rounded-lg">
            <img
              src={IMAGES.catalogMotorOil}
              alt="Synthetic oil flowing through metal gears"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="bento-card flex flex-col justify-center border border-carbon-gray bg-carbon-gray p-8 text-safety-white md:col-span-2">
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <h3 className="mb-2 font-headline-md text-headline-md">
                Up to 3.5% Fuel Savings
              </h3>
              <p className="font-body-sm text-surface-variant">
                Optimized low-viscosity HTHS chemistry reduces internal friction,
                delivering measurable economy gains across mixed heavy-duty
                fleets.
              </p>
            </div>
            <div className="text-6xl font-bold text-industrial-green opacity-50">
              3.5%
            </div>
          </div>
        </div>

        <div className="bento-card flex flex-col border border-outline-variant bg-surface-container p-8">
          <Icon name="eco" className="mb-4 text-industrial-green" />
          <h3 className="mb-2 font-label-bold text-label-bold">
            Low-SAPS Technology
          </h3>
          <p className="font-body-sm text-on-surface-variant">
            Engineered for DPF protection and SCR catalyst longevity, ensuring
            Euro VI and EPA compliance.
          </p>
        </div>

        <div className="bento-card flex flex-col border border-outline-variant bg-safety-white p-8">
          <Icon name="verified" className="mb-4 text-industrial-green" />
          <h3 className="mb-2 font-label-bold text-label-bold">
            Global Standards
          </h3>
          <p className="font-body-sm text-on-surface-variant">
            Meets ACEA E6/E9 and API CK-4 specifications for modern high-load
            diesel engines.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductTable() {
  return (
    <section className="mb-section-gap">
      <div className="overflow-hidden rounded-lg border border-outline-variant bg-safety-white">
        <div className="bg-carbon-gray p-6">
          <h3 className="font-headline-md text-headline-md text-safety-white">
            Heavy-Duty Product Matrix
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left zebra-table">
            <thead className="bg-surface-container-high font-label-bold text-label-bold text-on-surface-variant">
              <tr>
                <th className="p-6">Product Series</th>
                <th className="p-6">SAE Grade</th>
                <th className="p-6">Max Drain (KM)</th>
                <th className="p-6">SAPS Level</th>
                <th className="p-6">Key Approvals</th>
                <th className="p-6">Action</th>
              </tr>
            </thead>
            <tbody className="font-table-data text-table-data">
              {PRODUCT_MATRIX.map((row, i) => (
                <tr
                  key={row.series}
                  className={i % 2 === 1 ? "bg-surface-subtle" : ""}
                >
                  <td className="p-6 font-bold">{row.series}</td>
                  <td className="p-6">{row.grade}</td>
                  <td className="p-6">{row.drain}</td>
                  <td className="p-6">
                    <span className="rounded bg-surface-variant px-2 py-1 text-[10px] font-bold">
                      {row.saps}
                    </span>
                  </td>
                  <td className="p-6">{row.approvals}</td>
                  <td className="cursor-pointer p-6 font-bold text-industrial-green">
                    TDS / SDS
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

function ProtectionSection() {
  return (
    <section className="mb-section-gap grid items-center gap-section-gap md:grid-cols-2">
      <div className="order-2 md:order-1">
        <div className="h-[450px] overflow-hidden rounded-lg border border-outline-variant">
          <img
            src={IMAGES.catalogTruck}
            alt="Cross-section of heavy-duty diesel engine piston"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="order-1 md:order-2">
        <h2 className="mb-6 font-headline-lg text-headline-lg">
          Engine-Level Protection Engineering
        </h2>
        <div className="space-y-8">
          {PROTECTION_STEPS.map((step) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-industrial-green">
                <span className="font-bold text-industrial-green">{step.n}</span>
              </div>
              <div>
                <h4 className="mb-2 font-label-bold text-label-bold">
                  {step.title}
                </h4>
                <p className="font-body-sm text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative mb-section-gap overflow-hidden rounded-lg bg-industrial-green p-12 text-safety-white">
      <div className="pointer-events-none absolute bottom-0 right-0 opacity-10">
        <Icon name="precision_manufacturing" className="text-[300px]" />
      </div>
      <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display-lg text-[40px] leading-tight">
            Optimize Your Fleet's TCO Today
          </h2>
          <p className="mb-0 text-body-lg text-on-primary-container opacity-90">
            Our technical specialists provide on-site oil analysis and tailored
            maintenance mapping for enterprise fleets.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-4 sm:flex-row">
          <button className="rounded-lg bg-safety-white px-8 py-4 font-label-bold text-label-bold text-industrial-green shadow-lg transition-all hover:bg-surface-bright">
            Request Fleet Audit
          </button>
          <button className="rounded-lg bg-on-primary-fixed px-8 py-4 font-label-bold text-label-bold text-safety-white shadow-lg transition-all hover:bg-carbon-gray">
            Contact Technical Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HeavyDutyFleet() {
  return (
    <main className="mx-auto max-w-container-max px-margin-desktop py-base pt-20">
      <Hero />
      <BentoGrid />
      <ProductTable />
      <ProtectionSection />
      <CtaSection />
    </main>
  );
}
